'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import translations, { TranslationKeys } from '@/lib/i18n'
import { Locale } from '@/types'
import { createClient } from '@/lib/supabase/client'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || 'en')

  useEffect(() => {
    const saved = localStorage.getItem('preferred_language') as Locale | null
    if (saved && translations[saved]) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('preferred_language', newLocale)
    document.documentElement.lang = newLocale

    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        supabase.from('profiles').update({ preferred_language: newLocale }).eq('id', data.user.id)
      }
    })
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
