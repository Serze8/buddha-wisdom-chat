'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import translations, { TranslationKeys } from '@/lib/i18n'
import { Locale } from '@/types'
import { createClient } from '@/lib/supabase/client'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (initialLocale && translations[initialLocale]) return initialLocale
    return 'en'
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('preferred_language', newLocale)
    document.cookie = `preferred_language=${newLocale};path=/;max-age=31536000;SameSite=Lax`
    document.documentElement.lang = newLocale
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale], mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
