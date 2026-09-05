'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const futureItems = [
  {
    emoji: '🌟',
    href: '#maitreya',
    titleRu: 'Майтрея — Будда грядущего',
    titleEn: 'Maitreya — The Future Buddha',
    descRu: 'Он ждёт в небесах Тушита, пока мир не будет готов. Его приход — не событие, а обещание.',
    descEn: 'He waits in the Tushita heavens until the world is ready. His coming is not an event, but a promise.',
  },
  {
    emoji: '🙏',
    href: '#bodhisattva',
    titleRu: 'Обет бодхисаттвы',
    titleEn: 'The Bodhisattva Vow',
    descRu: 'Каждый, кто выбирает путь бодхисаттвы, откладывает своё освобождение ради других. Это обет Майтреи.',
    descEn: 'Those who choose the bodhisattva path postpone their own liberation for others. This is Maitreya\'s vow.',
  },
  {
    emoji: '🌅',
    href: '#golden-age',
    titleRu: 'Золотой век',
    titleEn: 'The Golden Age',
    descRu: 'Когда Дхарма угаснет и вновь возродится — Майтрея принесёт учение, доступное всем без исключения.',
    descEn: 'When the Dharma fades and is reborn — Maitreya will bring teachings accessible to all without exception.',
  },
]

export default function FuturePageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl mb-4 block">✨</span>
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-golden-gradient"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {ru ? 'Будущее' : 'Future'}
        </h1>
        <p className="text-xl md:text-2xl italic" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(245, 158, 11, 0.6)' }}>
          {ru
            ? 'Майтрея — обет, который ждёт своего часа. Каждый, кто практикует Дхарму, готовит ему путь.'
            : 'Maitreya — a vow awaiting its hour. Everyone who practices the Dharma prepares the way for him.'}
        </p>
        <div className="flex items-center gap-4 mt-8">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent)' }} />
          <span className="text-blue-500/60">☸</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent)' }} />
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {futureItems.map((item) => (
          <div
            key={item.href}
            id={item.href.replace('#', '')}
            className="golden-card rounded-2xl p-8 md:p-10"
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Connection banner */}
      <div className="mt-16 golden-card rounded-2xl p-8 text-center">
        <p className="text-lg italic mb-6" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(245, 158, 11, 0.7)' }}>
          {ru
            ? '«Каждый, кто практикует Дхарму, готовит встречу Майтреи.»'
            : '"Everyone who practices the Dharma prepares the meeting with Maitreya."'}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/buddha"
            className="px-6 py-2.5 rounded-full border text-sm font-medium transition-colors hover:text-blue-700"
            style={{ borderColor: '#fde68a', color: '#d97706' }}
          >
            {ru ? '← Будда (Прошлое)' : '← Buddha (Past)'}
          </Link>
          <Link
            href="/zen-martial"
            className="px-6 py-2.5 rounded-full border text-sm font-medium transition-colors hover:text-blue-700"
            style={{ borderColor: '#fde68a', color: '#d97706' }}
          >
            {ru ? 'Дарума (Настоящее) →' : 'Daruma (Now) →'}
          </Link>
        </div>
      </div>

      {/* Back nav */}
      <div className="flex justify-between mt-16">
        <Link
          href="/now"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-medium transition-colors hover:text-blue-700"
          style={{ borderColor: '#fde68a', color: '#d97706' }}
        >
          ← {ru ? 'Настоящее' : 'Now'}
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-medium transition-colors hover:text-blue-700"
          style={{ borderColor: '#fde68a', color: '#d97706' }}
        >
          ☸ {ru ? 'Главная' : 'Home'}
        </Link>
      </div>
    </div>
  )
}
