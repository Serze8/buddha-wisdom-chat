'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function ChakravartinPageClient() {
  const { t, locale } = useLanguage()

  const seasons = [
    { season: 1, episodes: 50, desc: { ru: 'Детство и юность Ашоки', en: 'Childhood and youth of Ashoka' } },
    { season: 2, episodes: 50, desc: { ru: 'Восхождение к власти', en: 'Rise to power' } },
    { season: 3, episodes: 50, desc: { ru: 'Объединение Индии', en: 'Unification of India' } },
    { season: 4, episodes: 50, desc: { ru: 'Принятие Дхармы', en: 'Embracing the Dharma' } },
    { season: 5, episodes: 50, desc: { ru: 'Распространение буддизма', en: 'Spreading Buddhism' } },
    { season: 6, episodes: 50, desc: { ru: 'Закат империи', en: 'Twilight of the empire' } },
    { season: 7, episodes: 52, desc: { ru: 'Наследие Дхармы', en: 'Legacy of the Dharma' } },
  ]

  const keyPoints = [
    { emoji: '🏛️', title: locale === 'ru' ? 'Империя Маурьев' : 'Maurya Empire', desc: locale === 'ru' ? 'Ашока объединил почти всю Индию под одним знаменем' : 'Ashoka united almost all of India under one banner' },
    { emoji: '☸️', title: locale === 'ru' ? 'Принятие Дхармы' : 'Embracing the Dharma', desc: locale === 'ru' ? 'После кровавой битвы при Калинге Ашока отказался от насилия' : 'After the bloody Battle of Kalinga, Ashoka renounced violence' },
    { emoji: '🪨', title: locale === 'ru' ? 'Колонны Ашоки' : 'Ashoka Pillars', desc: locale === 'ru' ? 'Каменные колонны с указами, разбросанные по всей Индии' : 'Stone pillars with edicts scattered across India' },
    { emoji: '🌏', title: locale === 'ru' ? 'Распространение буддизма' : 'Spreading Buddhism', desc: locale === 'ru' ? 'Ашока отправлял миссионеров в Шри-Ланку, Цейлон, Центральную Азию' : 'Ashoka sent missionaries to Sri Lanka, Ceylon, Central Asia' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="text-5xl block mb-4">👑</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-golden-gradient mb-4">
          {t.chakravartin.title}
        </h1>
        <p className="text-amber-500/60 text-sm mb-4">{t.chakravartin.episodes}</p>
        <p className="text-amber-200/50 text-lg max-w-2xl mx-auto leading-relaxed">
          {t.chakravartin.intro}
        </p>
      </div>

      {/* Video embed */}
      <section className="rounded-3xl p-8 md:p-12 mb-4" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.9) 0%, rgba(15,14,10,0.95) 100%)', border: '1px solid rgba(245, 158, 11, 0.08)' }}>
        <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ boxShadow: '0 0 60px rgba(245, 158, 11, 0.08)', border: '2px solid rgba(245, 158, 11, 0.15)', paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/P6Binwp6t0k"
            title="Chakravartin — Emperor Ashoka"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Golden divider */}
      <div className="flex items-center justify-center my-8">
        <div className="golden-divider flex-1" />
        <span className="px-4 text-2xl">☸</span>
        <div className="golden-divider flex-1" />
      </div>

      {/* Key Points */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          {keyPoints.map((point, i) => (
            <div key={i} className="golden-card rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{point.emoji}</span>
                <div>
                  <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-100/80 mb-1">{point.title}</h3>
                  <p className="text-amber-200/40 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Golden divider */}
      <div className="flex items-center justify-center my-8">
        <div className="golden-divider flex-1" />
        <span className="px-4 text-2xl">📖</span>
        <div className="golden-divider flex-1" />
      </div>

      {/* Seasons */}
      <section className="mb-8">
        <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-8 text-golden-gradient">
          {locale === 'ru' ? 'Сезоны сериала' : 'Series Seasons'}
        </h2>
        <div className="space-y-3">
          {seasons.map((s) => (
            <div
              key={s.season}
              className="flex items-center gap-4 px-6 py-4 rounded-xl transition-colors"
              style={{ background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.08)' }}
            >
              <span className="text-amber-500/60 font-mono text-sm w-16 shrink-0">
                {locale === 'ru' ? 'Сезон' : 'Season'} {s.season}
              </span>
              <span className="text-amber-100/60 text-sm flex-1">
                {(s.desc as any)[locale] || s.desc.en}
              </span>
              <span className="text-amber-500/40 text-xs">{s.episodes} {locale === 'ru' ? 'серий' : 'episodes'}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Link to teachings */}
      <div className="text-center mt-10 space-y-4">
        <Link
          href="/teachings"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #b45309, #92400e)',
            color: '#fde68a',
            boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          ☸️ {locale === 'ru' ? 'Изучить Дхарму' : 'Study the Dharma'} →
        </Link>
        <div>
          <Link
            href="/community"
            className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm hover:text-amber-400 transition-colors"
          >
            💬 {locale === 'ru' ? 'Обсудить в сообществе' : 'Discuss in Community'} →
          </Link>
        </div>
      </div>
    </div>
  )
}
