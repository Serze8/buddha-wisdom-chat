'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Locale } from '@/types'

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
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium transition-colors shadow-sm"
        aria-label="Select language"
      >
        <span className="text-base">{localeFlags[locale]}</span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[180px]">
          {(Object.keys(localeFlags) as Locale[]).map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc)
                setOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                loc === locale
                  ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-lg">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
              {loc === locale && <span className="ml-auto text-amber-600">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
