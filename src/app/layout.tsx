import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import LanguageProviderBlock from './LanguageProviderBlock'

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
    alternateLocale: ['ru_RU', 'hi_IN', 'es_ES', 'fr_FR', 'de_DE', 'zh_CN', 'ja_JP'],
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
    <html lang={lang} className={`${cormorant.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-amber-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-[var(--font-inter)]">
        <LanguageProviderBlock initialLocale={lang}>{children}</LanguageProviderBlock>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
