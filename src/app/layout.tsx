import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
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
  title: "Buddha's Wisdom Chat — AI-Powered Buddhist Wisdom",
  description: 'Explore the teachings of the Buddha through AI-powered conversations. Chat with Buddha, learn about the Four Noble Truths, and discover the path to enlightenment.',
  keywords: ['buddha', 'buddhism', 'meditation', 'dhamma', 'vipassana', 'wisdom', 'AI chat'],
  openGraph: {
    title: "Buddha's Wisdom Chat",
    description: 'Explore the teachings of the Buddha through AI-powered conversations',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'hi_IN', 'es_ES', 'fr_FR', 'de_DE', 'zh_CN', 'ja_JP'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-amber-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-[var(--font-inter)]">
        <LanguageProviderBlock>{children}</LanguageProviderBlock>
      </body>
    </html>
  )
}
