'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Locale } from '@/types'
import { Globe } from 'lucide-react'

const localeFlags: Record<Locale, string> = {
  en: '🇬🇧', ru: '🇷🇺', hi: '🇮🇳', es: '🇪🇸',
  fr: '🇫🇷', de: '🇩🇪', zh: '🇨🇳', ja: '🇯🇵',
}

const localeNames: Record<Locale, string> = {
  en: 'English', ru: 'Русский', hi: 'हिन्दी', es: 'Español',
  fr: 'Français', de: 'Deutsch', zh: '中文', ja: '日本語',
}

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span>{localeFlags[locale]}</span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[180px]">
            {(Object.keys(localeFlags) as Locale[]).map((loc) => (
              <button
                key={loc}
                onClick={() => { setLocale(loc); setOpen(false) }}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  loc === locale ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 font-medium' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{localeFlags[loc]}</span>
                <span>{localeNames[loc]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
