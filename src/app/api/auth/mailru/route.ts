import { NextResponse, type NextRequest } from 'next/server'
import { createHmac, randomUUID } from 'crypto'

export async function GET(request: NextRequest) {
  const clientId = process.env.MAILRU_CLIENT_ID
  if (!clientId) {
    return NextResponse.json({ error: 'MAILRU_CLIENT_ID not configured' }, { status: 500 })
  }

  const origin = request.nextUrl.origin
  const redirectUri = `${origin}/api/auth/mailru/callback`
  const state = randomUUID()

  const response = NextResponse.redirect(
    `https://oauth.mail.ru/login?${new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'userinfo',
      state,
    })}`
  )

  const stateHash = createHmac('sha256', process.env.MAILRU_CLIENT_SECRET || 'secret')
    .update(state)
    .digest('hex')
  response.cookies.set('mailru_oauth_state', stateHash, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 600,
    path: '/',
    secure: origin.startsWith('https://'),
  })

  return response
}
