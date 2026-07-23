import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import LanguageProviderBlock from './LanguageProviderBlock'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://buddha-wisdom-two.vercel.app'),
  title: {
    default: "Buddha's Wisdom Chat — AI Buddhist Wisdom",
    template: "%s | Buddha's Wisdom Chat",
  },
  description: 'Explore Buddhist teachings through AI-powered conversations. Chat with Buddha, learn the Four Noble Truths, and discover the path to enlightenment.',
  keywords: ['buddha', 'buddhism', 'meditation', 'dhamma', 'vipassana', 'wisdom', 'AI chat', 'buddhist teachings', 'four noble truths'],
  openGraph: {
    title: "Buddha's Wisdom Chat — AI Buddhist Wisdom",
    description: 'Explore Buddhist teachings through AI-powered conversations',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'hi_IN', 'es_ES', 'fr_FR', 'de_DE', 'zh_CN', 'ja_JP', 'pt_PT', 'th_TH', 'vi_VN', 'ko_KR', 'id_ID', 'ms_MY', 'si_LK', 'my_MM', 'ne_NP', 'bo_CN'],
    siteName: "Buddha's Wisdom Chat",
    images: [
      {
        url: '/og?title=Buddha%27s+Wisdom+Chat&subtitle=AI+Buddhist+Wisdom',
        width: 1200,
        height: 630,
        alt: "Buddha's Wisdom Chat",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Buddha's Wisdom Chat — AI Buddhist Wisdom",
    description: 'Explore Buddhist teachings through AI-powered conversations',
    images: ['/og?title=Buddha%27s+Wisdom+Chat&subtitle=AI+Buddhist+Wisdom'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const lang = cookieStore.get('preferred_language')?.value || 'en'

  return (
    <html lang={lang} className={`dark ${cormorant.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]" style={{ background: '#0F0E0A', color: '#e8dcc8' }}>
        <LanguageProviderBlock initialLocale={lang}>{children}</LanguageProviderBlock>
        <Footer />
        <ScrollReveal />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
