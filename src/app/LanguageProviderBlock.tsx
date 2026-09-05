'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import { HeaderWrapper } from '@/components/HeaderWrapper'
import Footer from '@/components/layout/Footer'
import ScrollButtons from '@/components/ui/ScrollButtons'
import { Locale } from '@/types'

export default function LanguageProviderBlock({ children, initialLocale }: { children: React.ReactNode; initialLocale?: string }) {
  return (
    <LanguageProvider initialLocale={initialLocale as Locale | undefined}>
      <HeaderWrapper />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollButtons />
    </LanguageProvider>
  )
}
