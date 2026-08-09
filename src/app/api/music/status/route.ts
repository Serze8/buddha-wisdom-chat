import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const TREBLO_BASE = 'https://api.treblo.com/v1'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.TREBLO_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'TREBLO_API_KEY not configured' }, { status: 500 })
  }

  const taskId = request.nextUrl.searchParams.get('taskId')
  if (!taskId) {
    return NextResponse.json({ error: 'taskId required' }, { status: 400 })
  }

  const statusRes = await fetch(`${TREBLO_BASE}/generations/status/${taskId}`, {
    headers: { 'Authorization': `Bearer ${apiKey}` },
  })
  if (!statusRes.ok) {
    const errorText = await statusRes.text().catch(() => '')
    return NextResponse.json({ error: `Treblo ${statusRes.status}: ${errorText.slice(0, 500)}` }, { status: statusRes.status })
  }

  const status = (await statusRes.json()) as string

  if (status === 'SUCCESS') {
    const genRes = await fetch(`${TREBLO_BASE}/generations/${taskId}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` },
    })
    if (genRes.ok) {
      const gen = await genRes.json()
      const audioUrl = Array.isArray(gen.song_paths) ? gen.song_paths[0] : null
      return NextResponse.json({ status, audio_url: audioUrl, model_version: gen.model_version ?? null })
    }
  }

  return NextResponse.json({ status })
}
