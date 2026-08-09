import { NextResponse, type NextRequest } from 'next/server'
import { createHmac } from 'crypto'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')

  const clientId = process.env.MAILRU_CLIENT_ID
  const clientSecret = process.env.MAILRU_CLIENT_SECRET

  const fail = (msg: string, log?: string) => {
    if (log) console.error('[mailru]', log)
    return NextResponse.redirect(
      `${request.nextUrl.origin}/auth?error=${encodeURIComponent(msg)}`
    )
  }

  if (!clientId || !clientSecret) {
    return fail('MAILRU_CLIENT_ID/SECRET not configured')
  }
  if (error) {
    return fail('Mail.ru авторизация отклонена', `Mail.ru error: ${error}`)
  }
  if (!code || !state) {
    return fail('Mail.ru не вернул код авторизации', `missing code/state`)
  }

  const stateHash = createHmac('sha256', clientSecret).update(state).digest('hex')
  const storedState = request.cookies.get('mailru_oauth_state')?.value
  if (!storedState || storedState !== stateHash) {
    return fail('Неверный state (защита от CSRF)')
  }

  const origin = request.nextUrl.origin
  const redirectUri = `${origin}/api/auth/mailru/callback`

  const tokenRes = await fetch('https://oauth.mail.ru/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  })
  if (!tokenRes.ok) {
    return fail('Не удалось получить токен Mail.ru', `token ${tokenRes.status}: ${(await tokenRes.text()).slice(0, 300)}`)
  }
  const tokenData = await tokenRes.json()
  const accessToken = tokenData.access_token
  if (!accessToken) {
    return fail('Mail.ru не вернул access_token')
  }

  const userRes = await fetch(`https://oauth.mail.ru/userinfo?access_token=${accessToken}`, {
    headers: { Accept: 'application/json' },
  })
  if (!userRes.ok) {
    return fail('Не удалось получить профиль Mail.ru', `userinfo ${userRes.status}: ${(await userRes.text()).slice(0, 300)}`)
  }
  const profile = await userRes.json()
  const email = profile.email
  if (!email) {
    return fail('В профиле Mail.ru нет email')
  }
  const displayName = profile.first_name && profile.last_name
    ? `${profile.first_name} ${profile.last_name}`
    : profile.nickname || email.split('@')[0]

  const admin = createAdminClient()
  if (!admin) {
    return fail('SUPABASE_SERVICE_ROLE_KEY не настроен')
  }

  let supabaseUser
  const { data: list } = await admin.auth.admin.listUsers({ perPage: 1000 })
  supabaseUser = list.users.find(u => u.email?.toLowerCase() === email.toLowerCase())

  const metadata = {
    display_name: displayName,
    language: request.cookies.get('preferred_language')?.value || 'en',
    provider: 'mailru',
  }

  if (!supabaseUser) {
    const { data: created, error: createError } = await admin.auth.admin.createUser({
      email,
      password: createHmac('sha256', clientSecret + ':' + email).digest('hex').slice(0, 24),
      email_confirm: true,
      user_metadata: metadata,
    })
    if (createError) {
      return fail('Не удалось создать аккаунт', `createUser: ${createError.message}`)
    }
    supabaseUser = created.user
  } else {
    await admin.auth.admin.updateUserById(supabaseUser.id, { user_metadata: metadata })
  }

  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
    type: 'magiclink',
    email,
    options: { redirectTo: `${origin}/auth/callback` },
  })
  if (linkError || !linkData?.properties?.action_link) {
    return fail('Не удалось создать ссылку входа', `generateLink: ${linkError?.message}`)
  }

  return NextResponse.redirect(linkData.properties.action_link)
}
