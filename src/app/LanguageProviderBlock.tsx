'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollButtons from '@/components/ui/ScrollButtons'

export default function LanguageProviderBlock({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollButtons />
    </LanguageProvider>
  )
}
