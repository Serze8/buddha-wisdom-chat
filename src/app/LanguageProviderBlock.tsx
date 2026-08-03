'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/layout/Header'
import MobileNav from '@/components/layout/MobileNav'
import Footer from '@/components/layout/Footer'
import ScrollButtons from '@/components/ui/ScrollButtons'
import Onboarding from '@/components/Onboarding'

export default function LanguageProviderBlock({ children, initialLocale }: { children: React.ReactNode; initialLocale?: string }) {
  return (
    <LanguageProvider initialLocale={initialLocale as any}>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <ScrollButtons />
      <MobileNav />
      <Onboarding />
    </LanguageProvider>
  )
}
