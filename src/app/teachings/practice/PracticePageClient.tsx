'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const practices = [
  {
    id: 'meditation',
    emoji: '🧘',
    titleKey: 'meditationTitle' as const,
    descKey: 'meditationDesc' as const,
  },
  {
    id: 'anger',
    emoji: '🔥',
    titleKey: 'angerTitle' as const,
    descKey: 'angerDesc' as const,
  },
  {
    id: 'compassion',
    emoji: '💛',
    titleKey: 'compassionTitle' as const,
    descKey: 'compassionDesc' as const,
  },
]

export default function PracticePageClient() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/teachings"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors mb-8"
      >
        ← {t.common.back}
      </Link>

      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-4">
        {t.practice.title}
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        {t.practice.intro}
      </p>

      <div className="grid md:grid-cols-3 gap-6 stagger-children">
        {practices.map((practice) => (
          <div
            key={practice.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
          >
            <span className="text-4xl mb-4">{practice.emoji}</span>
            <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {t.practice[practice.titleKey]}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {t.practice[practice.descKey]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
