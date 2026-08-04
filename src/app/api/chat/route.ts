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

  const callGemini = async (): Promise<string> => {
    const generalKeys = [
      process.env.GEMINI_API_KEY,
      ...Array.from({ length: 20 }, (_, i) => (process.env as Record<string, string | undefined>)[`GEMINI_API_KEY_${i + 1}`]),
    ].filter(Boolean) as string[]

    const pool = characterId === 'buddha' && process.env.GEMINI_API_KEY_BUDDHA
      ? [process.env.GEMINI_API_KEY_BUDDHA, ...generalKeys]
      : generalKeys

    if (pool.length === 0) {
      throw new Error('GEMINI_API_KEY not configured')
    }

    const model = process.env.GEMINI_MODEL || 'gemini-3-flash-preview'
    const system = aiMessages.find(m => m.role === 'system')?.content
    const chatMessages = mergeConsecutive(
      aiMessages.filter(m => m.role !== 'system').map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        content: m.content,
      }))
    )

    let lastError = ''
    for (const geminiKey of pool) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: system }] },
              contents: chatMessages.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
              generationConfig: { temperature: 0.8, maxOutputTokens: 2048 },
            }),
          }
        )
        if (!res.ok) {
          lastError = `Gemini ${res.status} ${res.statusText}: ${(await res.text().catch(() => '')).slice(0, 300)}`
          console.log(`[chat] ⚠️ Gemini key failed (${res.status}), rotating to next key...`)
          continue
        }
        const data = await res.json()
        return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
      } catch (err) {
        lastError = err instanceof Error ? err.message : String(err)
        console.log('[chat] ⚠️ Gemini key error, rotating to next key...')
      }
    }
    throw new Error(lastError || 'All Gemini keys failed')
  }

  const callOpenRouter = async (): Promise<string> => {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://buddha-wisdom-teal.vercel.app',
        'X-Title': "Buddha's Wisdom Chat",
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
    console.log('[chat] 🚀 Trying Anthropic...')
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
    console.log(`[chat] ✅ Anthropic responded (${process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5'})`)
    return out
  }

  let text: string | undefined
  let lastError = ''
  let provider = ''

  const useGemini =
    process.env.GEMINI_API_KEY || (characterId === 'buddha' && process.env.GEMINI_API_KEY_BUDDHA)

  const providers: { name: string; call: () => Promise<string> }[] = []
  if (useGemini) {
    providers.push({
      name: characterId === 'buddha' ? 'Gemini (Buddha key)' : 'Gemini',
      call: callGemini,
    })
  }
  providers.push(
    { name: 'OpenRouter', call: callOpenRouter },
    { name: 'Anthropic', call: callAnthropic }
  )

  for (const p of providers) {
    try {
      console.log(`[chat] 🚀 Trying ${p.name}...`)
      text = await p.call()
      provider = p.name
      console.log(`[chat] ✅ ${p.name} responded`)
      break
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      lastError = lastError ? `${lastError} | ${msg}` : msg
      console.log(`[chat] ❌ ${p.name} failed:`, msg.slice(0, 200))
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
