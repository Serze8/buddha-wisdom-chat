import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const TREBLO_BASE = 'https://api.treblo.com/v1'

export async function GET(_request: NextRequest) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.TREBLO_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'TREBLO_API_KEY not configured' }, { status: 500 })
  }

  const res = await fetch(`${TREBLO_BASE}/credits/balance`, {
    headers: { 'Authorization': `Bearer ${apiKey}` },
  })
  if (!res.ok) {
    const errorText = await res.text().catch(() => '')
    return NextResponse.json({ error: `Treblo ${res.status}: ${errorText.slice(0, 500)}` }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json({ num_credits: data.num_credits ?? 0, num_credits_payg: data.num_credits_payg ?? 0 })
}
