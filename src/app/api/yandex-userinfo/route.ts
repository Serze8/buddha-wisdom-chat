export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const auth = req.headers.get('authorization') ?? ''
  const token = auth.replace(/^Bearer\s+/i, '').trim()
  if (!token) {
    return Response.json({ error: 'unauthorized' }, { status: 401 })
  }

  const res = await fetch('https://login.yandex.ru/info?format=json', {
    headers: { 'Authorization': `OAuth ${token}` },
  })
  const text = await res.text()
  if (!res.ok) {
    return new Response(text, { status: res.status })
  }

  let data: Record<string, any>
  try {
    data = JSON.parse(text)
  } catch {
    return new Response(text, { status: 502 })
  }

  return Response.json({
    ...data,
    sub: data.id,
    email: data.default_email ?? data.emails?.[0] ?? null,
    email_verified: true,
    name: data.display_name ?? data.real_name ?? data.first_name ?? null,
    given_name: data.first_name ?? null,
    family_name: data.last_name ?? null,
    preferred_username: data.login ?? null,
  })
}
