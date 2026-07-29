import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { characterId, characterName, systemPrompt, messages, language } = await request.json()

  const apiKey = process.env.GOOGLE_AI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI API key not configured' }, { status: 500 })
  }

  const langInstruction = language !== 'en'
    ? `\n\nIMPORTANT: You must respond in ${language}. The user's preferred language is ${language}. All your responses must be in this language.`
    : ''

  const contents = messages.map((m: { role: string; content: string }) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }))

  // Try primary model, fallback to older model
  let response
  let lastModel = 'none'
  let lastError = ''
  for (const model of ['gemini-2.0-flash', 'gemini-1.5-flash']) {
    lastModel = model
    response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt + langInstruction }],
          },
          contents,
          generationConfig: {
            temperature: 0.8,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
        }),
      }
    )
    if (!response.ok) {
      lastError = await response.text().catch(() => '') ?? ''
    }
    if (response.ok) break
  }

  if (!response || !response.ok) {
    const status = response?.status ?? 502
    const statusText = response?.statusText ?? 'Unknown'
    return NextResponse.json({
      error: `AI request failed: ${status} ${statusText}`,
      model: lastModel,
      detail: lastError.slice(0, 500),
    }, { status: 502 })
  }

  const data = await response.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

  if (!text) {
    return NextResponse.json({ error: 'Empty response from AI', detail: JSON.stringify(data).slice(0, 500) }, { status: 502 })
  }

  // Stream response word by word
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
