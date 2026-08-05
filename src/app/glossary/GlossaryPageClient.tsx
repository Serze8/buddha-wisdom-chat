'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getGlossaryEntries, type GlossaryCategory } from '@/lib/glossary'
import { cn } from '@/lib/utils'

export default function GlossaryPageClient() {
  const { locale, t } = useLanguage()
  const [category, setCategory] = useState<GlossaryCategory | 'all'>('all')

  const entries = useMemo(() => {
    const all = getGlossaryEntries()
    return category === 'all' ? all : all.filter((e) => e.category === category)
  }, [category])

  const categoryLabel = (cat: GlossaryCategory) => {
    if (cat === 'core') return t.glossary.categoryCore
    if (cat === 'practice') return t.glossary.categoryPractice
    return t.glossary.categoryPhilosophy
  }

  const isRu = locale === 'ru'
  const filters: (GlossaryCategory | 'all')[] = ['all', 'core', 'practice', 'philosophy']

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-10 scroll-reveal">
        <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-golden-gradient mb-3">
          {t.glossary.title}
        </h1>
        <p className="text-amber-200/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {t.glossary.subtitle}
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 scroll-reveal">
        {filters.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              category === cat
                ? 'border-amber-500/60 text-amber-400 bg-amber-500/10'
                : 'border-amber-800/30 text-amber-200/50 hover:text-amber-200/80 hover:border-amber-700/50'
            )}
          >
            {cat === 'all' ? t.journey.title : categoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Terms */}
      <div className="space-y-3 stagger-children">
        {entries.map((entry) => {
          const local = isRu ? entry.ru : entry.en
          return (
            <div key={entry.id} className="golden-card rounded-2xl p-5 md:p-6 scroll-reveal">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-[var(--font-cormorant)] text-xl text-amber-100">
                      {entry.term}
                    </span>
                    {entry.script && (
                      <span className="text-lg text-amber-400/60" lang="sa">
                        {entry.script}
                      </span>
                    )}
                  </div>
                  <p className="text-amber-400/80 font-medium text-sm mt-1">
                    {local.name}
                  </p>
                  <p className="text-amber-200/50 text-sm leading-relaxed mt-2">
                    {local.definition}
                  </p>
                </div>
                <span
                  className="shrink-0 rounded-full border border-amber-800/30 px-3 py-1 text-[10px] uppercase tracking-wider text-amber-200/50"
                >
                  {categoryLabel(entry.category)}
                </span>
              </div>
              {entry.href && (
                <Link
                  href={entry.href}
                  className="inline-flex items-center gap-1 mt-3 text-amber-400/70 hover:text-amber-400 text-sm font-medium transition-colors"
                >
                  {t.home.readMore} →
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
