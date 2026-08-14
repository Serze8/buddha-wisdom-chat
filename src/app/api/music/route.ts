import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const TREBLO_BASE = 'https://api.treblo.com/v1'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.TREBLO_API_KEY
  if (!apiKey) {
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

  const res = await fetch(`${TREBLO_BASE}/generations/v3`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errorText = await res.text().catch(() => '')
    return NextResponse.json({ error: `Treblo ${res.status}: ${errorText.slice(0, 500)}` }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json({ task_id: data.task_id })
}
