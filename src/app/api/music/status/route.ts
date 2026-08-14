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

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const keys = getTrebloKeys()
  if (keys.length === 0) {
    return NextResponse.json({ error: 'TREBLO_API_KEY not configured' }, { status: 500 })
  }

  const taskId = request.nextUrl.searchParams.get('taskId')
  if (!taskId) {
    return NextResponse.json({ error: 'taskId required' }, { status: 400 })
  }

  let statusText = ''
  for (const apiKey of keys) {
    const statusRes = await fetch(`${TREBLO_BASE}/generations/status/${taskId}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` },
    })
    if (statusRes.ok) {
      statusText = (await statusRes.json()) as string
      break
    }
    if (statusRes.status !== 401 && statusRes.status !== 403 && statusRes.status !== 429) {
      const errorText = await statusRes.text().catch(() => '')
      return NextResponse.json({ error: `Treblo ${statusRes.status}: ${errorText.slice(0, 500)}` }, { status: statusRes.status })
    }
  }

  if (!statusText) {
    return NextResponse.json({ error: 'Treblo status fetch failed' }, { status: 502 })
  }

  if (statusText === 'SUCCESS') {
    for (const apiKey of keys) {
      const genRes = await fetch(`${TREBLO_BASE}/generations/${taskId}`, {
        headers: { 'Authorization': `Bearer ${apiKey}` },
      })
      if (genRes.ok) {
        const gen = await genRes.json()
        const audioUrl = Array.isArray(gen.song_paths) ? gen.song_paths[0] : null
        return NextResponse.json({ status: statusText, audio_url: audioUrl, model_version: gen.model_version ?? null })
      }
      if (genRes.status !== 401 && genRes.status !== 403 && genRes.status !== 429) {
        break
      }
    }
  }

  return NextResponse.json({ status: statusText })
}
