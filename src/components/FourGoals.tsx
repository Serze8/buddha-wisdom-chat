'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const GOALS = [
  {
    id: 'dharma',
    name: 'Дхарма',
    nameEn: 'Dharma',
    icon: '🕉️',
    href: '/teachings',
    descRu: 'Праведность и моральный закон. Учение Будды как путь истины.',
    descEn: 'Righteousness and moral law. The Buddha\'s teachings as the path of truth.',
  },
  {
    id: 'artha',
    name: 'Артха',
    nameEn: 'Artha',
    icon: '🌿',
    href: '/teachings/practice',
    descRu: 'Практическая мудрость. Процветание через осознанность и равновесие.',
    descEn: 'Practical wisdom. Prosperity through mindfulness and balance.',
  },
  {
    id: 'kama',
    name: 'Кама',
    nameEn: 'Kama',
    icon: '❣️',
    href: '/past',
    descRu: 'Красота, любовь и искусство. История и культура как выражение духа.',
    descEn: 'Beauty, love, and art. History and culture as expressions of the spirit.',
  },
  {
    id: 'moksha',
    name: 'Мокша',
    nameEn: 'Moksha',
    icon: '🪷',
    href: '/future',
    descRu: 'Освобождение. Обет Майтреи и путь к конечной свободе.',
    descEn: 'Liberation. The vow of Maitreya and the path to final freedom.',
  },
]

export default function FourGoals() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-4 scroll-reveal">
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold text-golden-gradient"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {ru ? 'Четыре цели жизни' : 'Four Goals of Life'}
        </h2>
        <p className="text-sm mt-2 italic" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(245, 158, 11, 0.5)' }}>
          {ru
            ? 'Пурушартхи — четыре стремления человеческого сердца'
            : 'Purusharthas — four aspirations of the human heart'}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {GOALS.map((goal) => (
          <Link
            key={goal.id}
            href={goal.href}
            className="group golden-card rounded-2xl p-4 md:p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <span className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {goal.icon}
            </span>
            <h3
              className="text-lg md:text-xl font-bold text-golden-gradient mb-1"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {ru ? goal.name : goal.nameEn}
            </h3>
            <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(69, 26, 3, 0.5)' }}>
              {ru ? goal.descRu : goal.descEn}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}