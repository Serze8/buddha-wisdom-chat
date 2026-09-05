'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { l } from '@/lib/lang'
import Link from 'next/link'

const turns = [
  {
    id: 'vision',
    emoji: '🌅',
    num: { ru: 'Первый поворот', en: 'The first turning' },
    title: { ru: 'Видение', en: 'Vision' },
    subtitle: { ru: 'Увидеть мир таким, какой он есть', en: 'See the world as it is' },
    desc: {
      ru: 'Четыре Благородные Истины. Почему Сиддхартха отказался от трона. Почему власть не спасает.',
      en: 'The Four Noble Truths. Why Siddhartha refused the throne. Why power cannot save.',
    },
    gradient: 'from-amber-500 to-amber-700',
    href: '/teachings/vision',
  },
  {
    id: 'path',
    emoji: '🧭',
    num: { ru: 'Второй поворот', en: 'The second turning' },
    title: { ru: 'Путь', en: 'The Path' },
    subtitle: { ru: 'Идти, а не ждать', en: 'Walk, do not wait' },
    desc: {
      ru: 'Срединный путь. Как Ашока прошёл его, не отрекаясь от мира. Практика для тех, кто остаётся.',
      en: 'The Middle Way. How Ashoka walked it without renouncing the world. Practice for those who stay.',
    },
    gradient: 'from-teal-500 to-teal-700',
    href: '/teachings/path',
  },
  {
    id: 'wheel',
    emoji: '☸️',
    num: { ru: 'Третий поворот', en: 'The third turning' },
    title: { ru: 'Вращение', en: 'The Wheel' },
    subtitle: { ru: 'Вращать, а не владеть', en: 'Turn, do not own' },
    desc: {
      ru: 'Дхармачакра как символ и как действие. Сангха — те, кто вращает колесо сейчас. Словарь терминов.',
      en: 'The Dharmachakra as symbol and act. The Sangha — those who turn the wheel now. A glossary of terms.',
    },
    gradient: 'from-rose-500 to-rose-800',
    href: '/teachings/wheel',
  },
]

export default function TeachingsPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">☸️</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-bold text-golden-gradient mb-6 leading-tight">
          {ru ? 'Три поворота колеса Дхармы' : 'Three turnings of the Wheel of Dharma'}
        </h1>
        <p className="text-amber-600/60 text-xl md:text-2xl font-[var(--font-cormorant)] italic max-w-3xl mx-auto leading-relaxed">
          {ru
            ? '«В оленьем парке Будда сказал: "Я нашёл путь, который был забыт". И повернул колесо. Трижды. Не потому что Дхарма меняется — потому что мы смотрим с разных берегов реки.»'
            : '"In the deer park the Buddha said: "I have found a path that was forgotten." And he turned the wheel. Three times. Not because the Dharma changes — because we watch from different banks of the river."'}
        </p>
        <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden mt-10" style={{ boxShadow: '0 8px 40px rgba(69, 26, 3, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)', paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/P6Binwp6t0k"
            title={ru ? 'Чакравартин — Император Ашока' : 'Chakravartin — Emperor Ashoka'}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">☸</span>
          <div className="golden-divider flex-1" />
        </div>
      </div>

      {/* Three turnings */}
      <div className="grid md:grid-cols-3 gap-6 stagger-children">
        {turns.map((turn) => (
          <Link
            key={turn.id}
            href={turn.href}
            className="group golden-card rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className={`h-1.5 bg-gradient-to-r ${turn.gradient}`} />
            <div className="p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl">{turn.emoji}</span>
                <span className={`text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${turn.gradient} text-white/95`}>
                  {l(turn.num, lang)}
                </span>
              </div>
              <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-700 group-hover:text-golden-gradient transition-colors">
                {l(turn.title, lang)}
              </h2>
              <p className="text-amber-400/80 text-sm font-[var(--font-cormorant)] italic mt-1 mb-3">
                {l(turn.subtitle, lang)}
              </p>
              <p className="text-amber-700/40 text-sm leading-relaxed">
                {l(turn.desc, lang)}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all mt-5">
                {ru ? 'Читать' : 'Read'} →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="mt-16 grid md:grid-cols-3 gap-4">
        <Link
          href="/teachings/practice"
          className="golden-card rounded-2xl p-6 text-center group hover:shadow-lg transition-all"
        >
          <span className="text-3xl block mb-3">🧘</span>
          <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700 mb-1">
            {ru ? 'Практика' : 'Practice'}
          </h3>
          <p className="text-amber-700/40 text-sm">
            {ru ? 'Практика — не подготовка. Она и есть путь.' : 'Practice is not a preparation. It is the path itself.'}
          </p>
        </Link>
        <Link
          href="/dharma-chats/sangha"
          className="golden-card rounded-2xl p-6 text-center group hover:shadow-lg transition-all"
        >
          <span className="text-3xl block mb-3">💬</span>
          <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700 mb-1">
            {ru ? 'Сангха' : 'The Sangha'}
          </h3>
          <p className="text-amber-700/40 text-sm">
            {ru ? 'Колесо не вращается одно. Присоединиться.' : 'The wheel does not turn alone. Join.'}
          </p>
        </Link>
        <Link
          href="/chakravartin"
          className="golden-card rounded-2xl p-6 text-center group hover:shadow-lg transition-all"
        >
          <span className="text-3xl block mb-3">👑</span>
          <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700 mb-1">
            {ru ? 'Чакравартин' : 'The Chakravartin'}
          </h3>
          <p className="text-amber-700/40 text-sm">
            {ru ? 'Он покорил мечом. Он удержал Дхармой.' : 'He conquered with the sword. He ruled with the Dharma.'}
          </p>
        </Link>
      </div>
    </div>
  )
}
