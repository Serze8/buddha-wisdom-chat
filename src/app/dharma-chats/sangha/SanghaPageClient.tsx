'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import CommunityPanel from './CommunityPanel'

export default function SanghaPageClient() {
  const { locale } = useLanguage()

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-12">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-700 text-center mb-8">
          {locale === 'ru' ? 'Сангха' : 'The Sangha'}
        </h1>
        <CommunityPanel />
      </div>
    </div>
  )
}
