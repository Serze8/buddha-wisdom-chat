import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getWebPush, sendPush } from '@/lib/push'
import { getDailyQuote } from '@/lib/quotes'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && auth !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createAdminClient()
  const wp = getWebPush()
  if (!supabase || !wp) {
    return NextResponse.json({ error: 'Push not configured' }, { status: 503 })
  }

  const { data: subs, error } = await supabase
    .from('push_subscriptions')
    .select('endpoint, keys, locale')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!subs?.length) {
    return NextResponse.json({ sent: 0, removed: 0 })
  }

  const now = new Date()
  let sent = 0
  const removed: string[] = []

  for (const sub of subs) {
    const quote = getDailyQuote(now, sub.locale)
    const result = await sendPush(
      { endpoint: sub.endpoint, keys: sub.keys },
      {
        title: quote.source,
        body: quote.quote,
        url: '/',
        tag: 'daily-quote',
      }
    )
    if (result.ok) {
      sent++
    } else if (result.gone) {
      removed.push(sub.endpoint)
    }
  }

  if (removed.length) {
    await supabase.from('push_subscriptions').delete().in('endpoint', removed)
  }

  return NextResponse.json({ sent, removed: removed.length })
}
