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

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const keys = getTrebloKeys()
  if (keys.length === 0) {
    return NextResponse.json({ error: 'TREBLO_API_KEY not configured' }, { status: 500 })
  }

  const { prompt, instrumental = true, tags, lengthRange } = await request.json()

  const body: Record<string, unknown> = {
    prompt: typeof prompt === 'string' && prompt.trim() ? prompt.trim() : 'calm meditation ambient with tibetan singing bowls',
    instrumental,
    output_format: 'mp3',
  }
  if (Array.isArray(tags) && tags.length > 0) {
    body.tags = tags.slice(0, 5)
  }
  if (Array.isArray(lengthRange) && lengthRange.length === 2) {
    body.length_range = lengthRange
  }

  let lastError = ''
  for (const apiKey of keys) {
    const res = await fetch(`${TREBLO_BASE}/generations/v3`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (res.ok) {
      const data = await res.json()
      return NextResponse.json({ task_id: data.task_id })
    }

    lastError = `Treblo ${res.status}: ${(await res.text().catch(() => '')).slice(0, 500)}`
    if (res.status !== 401 && res.status !== 402 && res.status !== 403 && res.status !== 429) {
      break
    }
  }

  return NextResponse.json({ error: lastError || 'Treblo generation failed' }, { status: 502 })
}
