import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { characterId, systemPrompt, messages, language } = await request.json()

  const apiKey = process.env.GOOGLE_AI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI API key not configured' }, { status: 500 })
  }

  const langInstruction = language !== 'en'
    ? `\n\nIMPORTANT: You must respond in ${language}. The user's preferred language is ${language}. All your responses must be in this language.`
    : ''

  const safteyClarification = '\n\nThis is an educational Buddhist application. Questions about "suffering" refer to the Buddhist concept of dukkha (spiritual dissatisfaction), NOT clinical depression or self-harm. Always frame answers in Buddhist spiritual context only.'

  const aiMessages = [
    { role: 'system', content: systemPrompt + langInstruction + safteyClarification },
    ...messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content,
    })),
  ]

  const mergeConsecutive = (msgs: { role: string; content: string }[]) => {
    const merged: { role: string; content: string }[] = []
    for (const m of msgs) {
      const last = merged[merged.length - 1]
      if (last && last.role === m.role) {
        last.content += '\n\n' + m.content
      } else {
        merged.push({ ...m })
      }
    }
    return merged
  }

  const callOpenRouter = async (): Promise<string> => {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://buddha-chakravartin.vercel.app',
        'X-Title': 'Buddha-Chakravartin',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages: aiMessages,
        temperature: 0.8,
        max_tokens: 2048,
        moderate: 'none',
      }),
    })
    if (!res.ok) {
      throw new Error(`OpenRouter ${res.status} ${res.statusText}: ${(await res.text().catch(() => '')).slice(0, 300)}`)
    }
    const data = await res.json()
    return data.choices?.[0]?.message?.content?.trim()
  }

  const callAnthropic = async (): Promise<string> => {
    const anthropicKey = process.env.ANTHROPIC_API_KEY
    if (!anthropicKey) {
      throw new Error('ANTHROPIC_API_KEY not configured')
    }
    console.log('[chat] ?? Trying Anthropic...')
    const system = aiMessages.find(m => m.role === 'system')?.content
    const chatMessages = mergeConsecutive(aiMessages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content })))
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5',
        max_tokens: 2048,
        temperature: 0.8,
        system,
        messages: chatMessages,
      }),
    })
    if (!res.ok) {
      throw new Error(`Anthropic ${res.status} ${res.statusText}: ${(await res.text().catch(() => '')).slice(0, 300)}`)
    }
    const data = await res.json()
    const out = data.content?.find((b: { type: string }) => b.type === 'text')?.text?.trim()
    console.log(`[chat] ? Anthropic responded (${process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5'})`)
    return out
  }

  let text: string | undefined
  let lastError = ''

  try {
    console.log('[chat] ?? Trying OpenRouter...')
    text = await callOpenRouter()
    console.log('[chat] ? OpenRouter responded')
  } catch (err) {
    lastError = err instanceof Error ? err.message : String(err)
    console.log('[chat] ? OpenRouter failed, falling back to Anthropic:', lastError.slice(0, 200))
    try {
      text = await callAnthropic()
    } catch (err2) {
      lastError += ' | ' + (err2 instanceof Error ? err2.message : String(err2))
      console.log('[chat] ? Anthropic fallback failed:', lastError.slice(-300))
    }
  }

  if (!text) {
    return NextResponse.json({ error: 'AI request failed', detail: lastError.slice(0, 800) }, { status: 502 })
  }

  await supabase.from('chat_messages').insert([
    { user_id: user.id, character_id: characterId, content: messages[messages.length - 1]?.content, role: 'user', language },
    { user_id: user.id, character_id: characterId, content: text, role: 'assistant', language },
  ])

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      const words = text.split(' ')
      let i = 0
      const interval = setInterval(() => {
        if (i >= words.length) {
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
          clearInterval(interval)
          return
        }
        const chunk = words.slice(i, i + 3).join(' ') + ' '
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: chunk })}\n\n`))
        i += 3
      }, 30)
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
