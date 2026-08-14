'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { characters, defaultCharacter } from '@/lib/characters'
import { speak, stopSpeaking } from '@/lib/speech'
import { useState, useRef, useEffect } from 'react'
import { Send, Mic, MicOff, Volume2, VolumeX, Loader2, ArrowLeft } from 'lucide-react'

interface ChatPanelProps {
  initialCharacterId?: string | null
}

export default function ChatPanel({ initialCharacterId = null }: ChatPanelProps) {
  const { t, locale } = useLanguage()
  const [selectedChar, setSelectedChar] = useState<string | null>(() => {
    if (initialCharacterId && characters.some(c => c.id === initialCharacterId)) return initialCharacterId
    if (initialCharacterId) return defaultCharacter.id
    return null
  })
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [autoVoice, setAutoVoice] = useState(false)
  const [speaking, setSpeaking] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const char = characters.find(c => c.id === selectedChar)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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
          characterName: (char.name as any)[locale] || char.name.en,
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
      let assistantMsg = ''

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
              assistantMsg += parsed.text || ''
              setMessages(prev => {
                const updated = [...prev]
                const last = updated[updated.length - 1]
                if (last?.role === 'assistant') {
                  last.content = assistantMsg
                } else {
                  updated.push({ role: 'assistant', content: assistantMsg })
                }
                return updated
              })
            } catch {}
          }
        }
      }

      if (autoVoice && assistantMsg) {
        speakVoice(assistantMsg, char.id)
      }
    } catch (err: any) {
      const errorMsg = err.message || '...'
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }])
    } finally {
      setLoading(false)
    }
  }

  const speakVoice = (text: string, charId: string) => {
    speak(text, locale, {
      onStart: () => setSpeaking(charId),
      onEnd: () => setSpeaking(null),
      onError: () => setSpeaking(null),
    })
  }

  const stopVoice = () => {
    stopSpeaking()
    setSpeaking(null)
  }

  const resetChat = () => {
    setSelectedChar(null)
    setMessages([])
    stopVoice()
  }

  if (!selectedChar) {
    return (
      <div>
        <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 text-center mb-8">
          {t.chat.chooseCharacter}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {characters.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedChar(c.id)}
              className="group bg-white/5 dark:bg-gray-900 rounded-2xl shadow border border-amber-200/10 dark:border-gray-700 p-6 hover:shadow-lg hover:border-amber-300 transition-all text-center"
            >
              {c.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.avatar} alt={c.name.en} className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-amber-400/30 group-hover:scale-105 transition-transform" />
              ) : (
                <span className="text-4xl block mb-3">{c.emoji}</span>
              )}
              <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-100 dark:text-amber-200">
                {(c.name as any)[locale] || c.name.en}
              </h3>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (!char) return null

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <button onClick={resetChat} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <ArrowLeft className="w-5 h-5" />
        </button>
        {char.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={char.avatar} alt={char.name.en} className="w-10 h-10 rounded-full object-cover border border-amber-400/30" />
        ) : (
          <span className="text-3xl">{char.emoji}</span>
        )}
        <div>
          <h2 className="font-bold text-amber-800 dark:text-amber-200">
            {(char.name as any)[locale] || char.name.en}
          </h2>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setAutoVoice(!autoVoice)}
            className={`p-2 rounded-lg transition-colors ${autoVoice ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            title={t.chat.autoVoice}
          >
            {autoVoice ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 min-h-[300px] max-h-[60vh]">
        {messages.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl block mb-4">{char.emoji}</span>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {locale === 'ru' ? 'Задайте вопрос этому персонажу:' : 'Ask this character:'}
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
              {((char.suggestedQuestions as any)[locale] || char.suggestedQuestions?.en || []).map((q: string) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm hover:bg-amber-200 dark:hover:bg-amber-800/40 transition-colors"
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
                : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-amber-800 dark:text-amber-200 rounded-bl-md'
            }`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {msg.role === 'assistant' && (
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  {loading && i === messages.length - 1 ? (
                    <span className="text-xs text-amber-500 animate-pulse">• • •</span>
                  ) : (
                    <button
                      onClick={() => speakVoice(msg.content, char.id)}
                      className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <Volume2 className="w-3 h-3" /> {t.chat.listen}
                    </button>
                  )}
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
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-amber-800 dark:text-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
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
