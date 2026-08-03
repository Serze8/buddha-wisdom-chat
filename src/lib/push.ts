import webpush from 'web-push'

export type PushSubscriptionLike = {
  endpoint: string
  keys: { p256dh: string; auth: string }
}

export function getWebPush() {
  const subject = process.env.VAPID_SUBJECT
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const privateKey = process.env.VAPID_PRIVATE_KEY
  if (!subject || !publicKey || !privateKey) return null
  webpush.setVapidDetails(subject, publicKey, privateKey)
  return webpush
}

export async function sendPush(subscription: PushSubscriptionLike, payload: object) {
  const wp = getWebPush()
  if (!wp) return { ok: false as const, error: 'VAPID not configured' }
  try {
    await wp.sendNotification(subscription as any, JSON.stringify(payload))
    return { ok: true as const }
  } catch (err: any) {
    if (err?.statusCode === 404 || err?.statusCode === 410) {
      return { ok: false as const, gone: true }
    }
    return { ok: false as const, error: err?.message || 'send failed' }
  }
}
