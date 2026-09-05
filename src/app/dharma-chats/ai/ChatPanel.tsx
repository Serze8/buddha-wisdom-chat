'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { characters, type ChatCharacter } from '@/lib/characters'
import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, ArrowLeft } from 'lucide-react'

interface ChatPanelProps {
  initialCharacterId?: string
  onBack?: () => void
  fullPage?: boolean
}

export default function ChatPanel({ initialCharacterId, onBack, fullPage }: ChatPanelProps) {
  const { t, locale } = useLanguage()
  const [selectedChar, setSelectedChar] = useState<string | null>(initialCharacterId ?? null)
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const char: ChatCharacter | undefined = characters.find(c => c.id === selectedChar)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      setSelectedChar(null)
      setMessages([])
    }
  }

  const sendMessage = async (text?: string) => {
    const msg = text || input.trim()
    if (!msg || !char || loading) return

    const userMsg = { role: 'user', content: msg }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const lang = locale as keyof typeof char.systemPrompt
      const systemPrompt = char.systemPrompt[lang] || char.systemPrompt.en

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          characterId: char.id,
          characterName: (char.name as Record<string, string>)[locale] || char.name.en,
          systemPrompt,
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          language: locale,
        }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.detail || errData.error || 'Chat failed')
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      const assistantBuf: string[] = []

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value)
          const lines = chunk.split('\n').filter(l => l.startsWith('data: '))
          for (const line of lines) {
            const data = line.slice(6)
            if (data === '[DONE]') break
            try {
              const parsed = JSON.parse(data)
              assistantBuf.push(parsed.text || '')
              const content = assistantBuf.join('')
              setMessages(prev => {
                const updated = [...prev]
                const last = updated[updated.length - 1]
                if (last?.role === 'assistant') {
                  last.content = content
                } else {
                  updated.push({ role: 'assistant', content })
                }
                return updated
              })
            } catch {}
          }
        }
      }

      } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : '...'
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }])
    } finally {
      setLoading(false)
    }
  }

  if (!selectedChar || !char) {
    return null
  }

  const containerClass = fullPage
    ? 'flex flex-col h-[calc(100vh-4rem)]'
    : 'flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'

  return (
    <div className={containerClass}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <button onClick={handleBack} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-3xl">{char.emoji}</span>
        <div className="min-w-0">
          <h2 className="font-bold text-amber-800 dark:text-amber-600 truncate">
            {(char.name as Record<string, string>)[locale] || char.name.en}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {locale === 'ru'
              ? 'Только текст — без озвучки, из уважения к традиции'
              : 'Text only — no voice, out of respect for the tradition'}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2" />
      </div>

      <div className={`flex-1 overflow-y-auto px-4 py-6 space-y-4 ${fullPage ? '' : 'min-h-[300px] max-h-[60vh]'}`}>
        {messages.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl block mb-4">{char.emoji}</span>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {locale === 'ru' ? 'Задайте вопрос этому персонажу:' : 'Ask this character:'}
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
              {(char.suggestedQuestions[locale] || char.suggestedQuestions.en).map((q: string) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-600 text-sm hover:bg-amber-200 dark:hover:bg-amber-800/40 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              msg.role === 'user'
                ? 'bg-amber-700 text-white rounded-br-md'
                : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-amber-800 dark:text-amber-600 rounded-bl-md'
            }`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {msg.role === 'assistant' && loading && i === messages.length - 1 && (
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-amber-500 animate-pulse">• • •</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && messages[messages.length - 1]?.role !== 'assistant' && (
          <div className="flex justify-start">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage() }} className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chat.placeholder}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-amber-800 dark:text-amber-600 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-amber-800 text-white transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  )
}
