'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-6">
        {t.about.title}
      </h1>
      <div className="prose prose-amber max-w-none dark:prose-invert">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {t.about.description}
        </p>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>{t.about.series}</p>
          <p>{t.about.mission}</p>
          <p>{t.about.community}</p>
        </div>
      </div>

      <div className="mt-10">
        <PromoBanner page="about" />
      </div>
    </div>
  )
}
