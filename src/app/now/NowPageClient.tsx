'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const nowItems = [
  {
    emoji: '🧘',
    href: '/zen-martial',
    titleRu: 'Бодхидхарма (Дарума)',
    titleEn: 'Bodhidharma (Daruma)',
    descRu: 'Патриарх Дзен. Девять лет сидения перед стеной. Передача Дхармы без слов.',
    descEn: 'The patriarch of Zen. Nine years sitting before a wall. The transmission of Dharma without words.',
  },
  {
    emoji: '🫁',
    href: '/teachings/practice',
    titleRu: 'Практика',
    titleEn: 'Practice',
    descRu: 'Дыхание, осознанность, медитация. Дхарма живёт не в текстах, а в каждом вдохе.',
    descEn: 'Breathing, awareness, meditation. The Dharma lives not in texts, but in every breath.',
  },
  {
    emoji: '💬',
    href: '/dharma-chats',
    titleRu: 'Сангха (Чат)',
    titleEn: 'Sangha (Chat)',
    descRu: 'AI-диалоги с Буддой, Ашокой, Чанакьей. Общение с мудростью прошлого — здесь и сейчас.',
    descEn: 'AI dialogues with Buddha, Ashoka, Chanakya. Communication with the wisdom of the past — here and now.',
  },
]

export default function NowPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl mb-4 block">🔥</span>
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-golden-gradient"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {ru ? 'Настоящее' : 'Now'}
        </h1>
        <p className="text-xl md:text-2xl italic" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(245, 158, 11, 0.6)' }}>
          {ru
            ? 'Дхарма не ждёт. Она здесь — в дыхании, в практике, в каждом разговоре.'
            : 'The Dharma does not wait. It is here — in the breath, in practice, in every conversation.'}
        </p>
        <div className="flex items-center gap-4 mt-8">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent)' }} />
          <span className="text-blue-500/60">☸</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent)' }} />
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {nowItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block golden-card rounded-2xl p-8 md:p-10 group hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex items-start gap-5">
              <span className="text-4xl shrink-0 mt-1">{item.emoji}</span>
              <div>
                <h2
                  className="text-2xl font-bold text-golden-gradient mb-2"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {ru ? item.titleRu : item.titleEn}
                </h2>
                <p className="leading-relaxed" style={{ color: 'rgba(69, 26, 3, 0.6)' }}>
                  {ru ? item.descRu : item.descEn}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-blue-500 group-hover:text-blue-700 transition-colors">
                  {ru ? 'Читать →' : 'Read more →'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-16">
        <Link
          href="/past"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-medium transition-colors hover:text-blue-700"
          style={{ borderColor: '#fde68a', color: '#d97706' }}
        >
          ← {ru ? 'Прошлое' : 'Past'}
        </Link>
        <Link
          href="/future"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-medium transition-colors hover:text-blue-700"
          style={{ borderColor: '#fde68a', color: '#d97706' }}
        >
          {ru ? 'Будущее' : 'Future'} →
        </Link>
      </div>
    </div>
  )
}
