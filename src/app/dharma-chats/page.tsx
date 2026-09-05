'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const entries = [
  {
    id: 'ai',
    emoji: '🎭',
    num: { ru: 'ИИ-персонажи', en: 'AI Characters' },
    title: { ru: 'Беседуй с Буддой', en: 'Chat with Buddha' },
    subtitle: { ru: 'Беседуй с Буддой, Ашокой, Чанакьей', en: 'Chat with Buddha, Ashoka, Chanakya' },
    gradient: 'from-amber-500 to-amber-700',
    href: '/dharma-chats/ai',
  },
  {
    id: 'sangha',
    emoji: '💬',
    num: { ru: 'Сангха', en: 'Sangha' },
    title: { ru: 'Общий чат', en: 'Community Chat' },
    subtitle: { ru: 'Общий чат практикующих', en: 'Community of practitioners' },
    gradient: 'from-teal-500 to-teal-700',
    href: '/dharma-chats/sangha',
  },
  {
    id: 'talks',
    emoji: '📹',
    num: { ru: 'Архив бесед', en: 'Talk Archive' },
    title: { ru: 'Dharma Chats', en: 'Dharma Chats' },
    subtitle: { ru: 'Dharma Chats, лекции, интервью', en: 'Dharma Chats, lectures, interviews' },
    gradient: 'from-rose-500 to-rose-800',
    href: '/dharma-chats/talks',
  },
]

export default function DharmaChatsPage() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">💬</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-bold text-golden-gradient mb-6 leading-tight">
          {ru ? 'Wisdom Dharma Chats — Беседы о Мудрости и Дхарме' : 'Wisdom Dharma Chats — Conversations on Wisdom and Dharma'}
        </h1>
        <p className="text-amber-600/60 text-xl md:text-2xl font-[var(--font-cormorant)] italic max-w-3xl mx-auto leading-relaxed">
          {ru
            ? '«Дхарма не знает молчания. Она живёт в диалоге — между учителем и учеником, между прошлым и настоящим, между тобой и Буддой.»'
            : '"The Dharma does not know silence. It lives in dialogue — between teacher and student, past and present, you and the Buddha."'}
        </p>
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">☸</span>
          <div className="golden-divider flex-1" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 stagger-children">
        {entries.map((entry) => (
          <Link
            key={entry.id}
            href={entry.href}
            className="group golden-card rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className={`h-1.5 bg-gradient-to-r ${entry.gradient}`} />
            <div className="p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl">{entry.emoji}</span>
                <span className={`text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${entry.gradient} text-white/95`}>
                  {ru ? entry.num.ru : entry.num.en}
                </span>
              </div>
              <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-700 group-hover:text-golden-gradient transition-colors">
                {ru ? entry.title.ru : entry.title.en}
              </h2>
              <p className="text-amber-400/80 text-sm font-[var(--font-cormorant)] italic mt-1 mb-3">
                {ru ? entry.subtitle.ru : entry.subtitle.en}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all mt-5">
                {ru ? 'Войти' : 'Enter'} →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-4">
        <Link
          href="/dharma-chats/ai"
          className="golden-card rounded-2xl p-6 text-center group hover:shadow-lg transition-all"
        >
          <span className="text-3xl block mb-3">🧘</span>
          <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700 mb-1">
            {ru ? 'Поговорить с Буддой' : 'Chat with Buddha'}
          </h3>
          <p className="text-amber-700/40 text-sm">
            {ru ? 'Задай вопрос — получи ответ от Будды, Ашоки или Чанакьи.' : 'Ask a question — get an answer from Buddha, Ashoka, or Chanakya.'}
          </p>
        </Link>
        <Link
          href="/dharma-chats/sangha"
          className="golden-card rounded-2xl p-6 text-center group hover:shadow-lg transition-all"
        >
          <span className="text-3xl block mb-3">💬</span>
          <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700 mb-1">
            {ru ? 'Войти в чат' : 'Join the Chat'}
          </h3>
          <p className="text-amber-700/40 text-sm">
            {ru ? 'Делись мыслями с другими практикующими.' : 'Share your thoughts with fellow practitioners.'}
          </p>
        </Link>
      </div>

      <div className="mt-16 golden-card rounded-2xl p-6 text-center">
        <p className="text-amber-600/60 text-sm font-[var(--font-cormorant)]">
          {ru ? 'Также смотрите:' : 'Also see:'}{' '}
          <Link href="/teachings" className="text-amber-400 hover:text-amber-500 underline">
            {ru ? 'Три поворота колеса Дхармы' : 'Three Turnings of the Wheel of Dharma'}
          </Link>
        </p>
      </div>
    </div>
  )
}
