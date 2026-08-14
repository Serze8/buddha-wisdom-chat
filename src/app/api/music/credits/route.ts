import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const TREBLO_BASE = 'https://api.treblo.com/v1'

function getTrebloKeys(): string[] {
  const keys: string[] = []
  for (let i = 1; i <= 20; i++) {
    const k = process.env[`TREBLO_API_KEY${i === 1 ? '' : i}`]
    if (k && k.trim()) keys.push(k.trim())
  }
  return keys
}

export async function GET(_request: NextRequest) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const keys = getTrebloKeys()
  if (keys.length === 0) {
    return NextResponse.json({ error: 'TREBLO_API_KEY not configured' }, { status: 500 })
  }

  let lastError = ''
  for (const apiKey of keys) {
    const res = await fetch(`${TREBLO_BASE}/credits/balance`, {
      headers: { 'Authorization': `Bearer ${apiKey}` },
    })
    if (res.ok) {
      const data = await res.json()
      return NextResponse.json({ num_credits: data.num_credits ?? 0, num_credits_payg: data.num_credits_payg ?? 0 })
    }
    lastError = `Treblo ${res.status}: ${(await res.text().catch(() => '')).slice(0, 500)}`
    if (res.status !== 401 && res.status !== 403 && res.status !== 429) {
      break
    }
  }

  return NextResponse.json({ error: lastError || 'Treblo balance fetch failed' }, { status: 502 })
}
