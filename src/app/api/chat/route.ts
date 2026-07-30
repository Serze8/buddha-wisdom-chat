import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { characterId, characterName, systemPrompt, messages, language } = await request.json()

  const apiKey = process.env.GOOGLE_AI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI API key not configured' }, { status: 500 })
  }

  const langInstruction = language !== 'en'
    ? `\n\nIMPORTANT: You must respond in ${language}. The user's preferred language is ${language}. All your responses must be in this language.`
    : ''

  const openRouterMessages = [
    { role: 'system', content: systemPrompt + langInstruction },
    ...messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content,
    })),
  ]

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://buddha-wisdom-teal.vercel.app',
      'X-Title': "Buddha's Wisdom Chat",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-chat:free',
      messages: openRouterMessages,
      temperature: 0.8,
      max_tokens: 2048,
    }),
  })

  if (!response.ok) {
    const errBody = await response.text().catch(() => '')
    return NextResponse.json({ error: `AI request failed: ${response.status} ${response.statusText}`, detail: errBody.slice(0, 500) }, { status: 502 })
  }

  const data = await response.json()
  const text = data.choices?.[0]?.message?.content?.trim()

  if (!text) {
    return NextResponse.json({ error: 'Empty response from AI', detail: JSON.stringify(data).slice(0, 500) }, { status: 502 })
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
