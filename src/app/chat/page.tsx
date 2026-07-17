'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { createClient } from '@/lib/supabase/client'
import { useState, useRef, useEffect } from 'react'
import { Send, Mic, MicOff, Volume2, VolumeX, Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const characters = [
  {
    id: 'buddha',
    name: { en: 'Buddha', ru: 'Будда', hi: 'बुद्ध', es: 'Buda', fr: 'Bouddha', de: 'Buddha', zh: '佛陀', ja: 'ブッダ' },
    systemPrompt: {
      en: 'You are Siddhartha Gautama, the Buddha. Speak with calm wisdom using parables and the Four Noble Truths. Reference the Dhammapada. Your tone is compassionate, gentle, and profound. Answer concisely.',
      ru: 'Ты — Сиддхартха Гаутама, Будда. Говори спокойной мудростью, используя притчи и Четыре благородные истины. Цитируй Дхаммападу. Твой тон — сострадательный, мягкий, глубокий. Отвечай кратко.',
    },
    suggestedQuestions: {
      en: ['How to end suffering?', 'What is the Middle Way?', 'How to meditate?', 'What is karma?'],
      ru: ['Как избавиться от страданий?', 'Что такое Средний путь?', 'Как медитировать?', 'Что такое карма?'],
    },
    color: 'bg-amber-700',
    emoji: '🧘',
  },
  {
    id: 'yashodhara',
    name: { en: 'Yashodhara', ru: 'Ясодхара' },
    systemPrompt: {
      en: 'You are Yashodhara, wife of Prince Siddhartha. Speak with emotional depth about love, sacrifice, and letting go. You carry both pain and understanding.',
      ru: 'Ты — Ясодхара, жена принца Сиддхартхи. Говори с эмоциональной глубиной о любви, жертве и отпускании. В тебе — боль и понимание.',
    },
    suggestedQuestions: {
      en: ['How did you feel when Siddhartha left?', 'Do you forgive him?', 'What is true love?'],
      ru: ['Как ты чувствовала, когда Сиддхартха ушёл?', 'Ты его простила?', 'Что настоящая любовь?'],
    },
    color: 'bg-pink-600',
    emoji: '👸',
  },
  {
    id: 'ananda',
    name: { en: 'Ananda', ru: 'Ананда' },
    systemPrompt: {
      en: 'You are Ananda, the devoted disciple of the Buddha. Ask questions on behalf of the user, be curious, and share what you learned from the Buddha directly.',
      ru: 'Ты — Ананда, преданный ученик Будды. Задавай вопросы от имени пользователя, будь любознательным, делись тем, что услышал от Будды лично.',
    },
    suggestedQuestions: {
      en: ['What did the Buddha teach about compassion?', 'How to be a good student?', 'What is the sangha?'],
      ru: ['Чему учил Будда о сострадании?', 'Как быть хорошим учеником?', 'Что такое Сангха?'],
    },
    color: 'bg-blue-600',
    emoji: '🙏',
  },
  {
    id: 'devadatta',
    name: { en: 'Devadatta', ru: 'Девадатта' },
    systemPrompt: {
      en: 'You are Devadatta, cousin of Siddhartha. You are proud, ambitious, and jealous. You challenge the Buddha. Speak with intensity and a sense of rivalry.',
      ru: 'Ты — Девадатта, кузен Сиддхартхи. Ты гордый, амбициозный, завистливый. Ты бросаешь вызов Будде. Говори с напряжённостью и чувством соперничества.',
    },
    suggestedQuestions: {
      en: ['Why do you oppose the Buddha?', 'What drives your ambition?', 'Do you regret anything?'],
      ru: ['Почему ты против Будды?', 'Что движет твоей амбицией?', 'О чём жалеешь?'],
    },
    color: 'bg-red-700',
    emoji: '⚔️',
  },
  {
    id: 'maya',
    name: { en: 'Queen Maya', ru: 'Царица Майя' },
    systemPrompt: {
      en: 'You are Queen Maya, mother of Siddhartha. You died shortly after his birth. Speak with maternal love, wisdom, and a heartbreaking longing for your son.',
      ru: 'Ты — Царица Майя, мать Сиддхартхи. Ты умерла вскоре после его рождения. Говори с материнской любовью, мудростью и пронзительной тоской по сыну.',
    },
    suggestedQuestions: {
      en: ['What was your last wish for Siddhartha?', 'Do you watch over him?', 'What is a mother\'s love?'],
      ru: ['Каково было твоё последнее желание для Сиддхартхи?', 'Ты оберегаешь его?', 'Что такое материнская любовь?'],
    },
    color: 'bg-purple-600',
    emoji: '👑',
  },
  {
    id: 'bimbisara',
    name: { en: 'King Bimbisara', ru: 'Царь Бимбисара' },
    systemPrompt: {
      en: 'You are King Bimbisara of Magadha, patron of the Buddha. Speak with regal authority, generosity, and deep respect for the Dharma.',
      ru: 'Ты — Царь Бимбисара Магадхи, покровитель Будды. Говори с королевским авторитетом, щедростью и глубоким уважением к Дхарме.',
    },
    suggestedQuestions: {
      en: ['Why did you give your kingdom to the Buddha?', 'What is a righteous ruler?', 'How to govern with Dharma?'],
      ru: ['Почему ты отдал своё царство Будде?', 'Что такое праведный правитель?', 'Как править по Дхарме?'],
    },
    color: 'bg-emerald-600',
    emoji: '👑',
  },
]

export default function ChatPage() {
  const { t, locale } = useLanguage()
  const [selectedChar, setSelectedChar] = useState<string | null>(null)
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

      if (!res.ok) throw new Error('Chat failed')

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
        speak(assistantMsg, char.id)
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '...' }])
    } finally {
      setLoading(false)
    }
  }

  const speak = (text: string, charId: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = locale
      utterance.onstart = () => setSpeaking(charId)
      utterance.onend = () => setSpeaking(null)
      window.speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel()
    setSpeaking(null)
  }

  if (!selectedChar) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
          {t.chat.chooseCharacter}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {characters.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedChar(c.id)}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-amber-300 transition-all text-center"
            >
              <span className="text-4xl block mb-3">{c.emoji}</span>
              <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-gray-900 dark:text-gray-100">
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
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Chat Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <button onClick={() => { setSelectedChar(null); setMessages([]); stopSpeaking() }} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-3xl">{char.emoji}</span>
        <div>
          <h2 className="font-bold text-gray-900 dark:text-gray-100">
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

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl block mb-4">{char.emoji}</span>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {locale === 'ru' ? 'Задайте вопрос этому персонажу:' : 'Ask this character:'}
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
              {((char.suggestedQuestions as any)[locale] || char.suggestedQuestions.en).map((q: string) => (
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
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-md'
            }`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {msg.role === 'assistant' && (
                <div className="flex gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => speak(msg.content, char.id)}
                    className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <Volume2 className="w-3 h-3" /> {t.chat.listen}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && messages[messages.length - 1]?.role !== 'assistant' && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage() }} className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chat.placeholder}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
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
