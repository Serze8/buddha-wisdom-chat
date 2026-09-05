import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { cookies } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import LanguageProviderBlock from './LanguageProviderBlock'
import ScrollReveal from '@/components/ScrollReveal'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin', 'cyrillic-ext'],
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrains = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://buddha-chakravartin.vercel.app'),
  title: {
    default: 'Buddha-Chakravartin Chat — Three Times of Dharma',
    template: '%s | Buddha-Chakravartin Chat',
  },
  description: 'Buddha • Chakravartin • Dharma • Maitreya — three times of one Dharmachakra. Explore Buddhist teachings through AI-powered conversations.',
  keywords: ['buddha', 'chakravartin', 'dharma', 'maitreya', 'buddhism', 'meditation', 'dhamma', 'vipassana', 'wisdom', 'AI chat', 'buddhist teachings', 'four noble truths'],
  openGraph: {
    title: 'Buddha-Chakravartin Chat — Three Times of Dharma',
    description: 'Buddha • Chakravartin • Dharma • Maitreya — three times of one Dharmachakra',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'hi_IN', 'es_ES', 'fr_FR', 'de_DE', 'zh_CN', 'ja_JP', 'pt_PT', 'th_TH', 'vi_VN', 'ko_KR', 'id_ID', 'ms_MY', 'si_LK', 'my_MM', 'ne_NP', 'bo_CN'],
    siteName: 'Buddha-Chakravartin Chat',
    images: [
      {
        url: '/og?title=Buddha-Chakravartin+Chat&subtitle=Three+Times+of+Dharma',
        width: 1200,
        height: 630,
        alt: 'Buddha-Chakravartin Chat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buddha-Chakravartin Chat — Three Times of Dharma',
    description: 'Buddha • Chakravartin • Dharma • Maitreya — three times of one Dharmachakra',
    images: ['/og?title=Buddha-Chakravartin+Chat&subtitle=Three+Times+of+Dharma'],
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
    <html lang={lang} translate="no" className={`${jakarta.variable} ${jetbrains.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('halcyon-theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-jakarta)]" style={{ background: '#fafaf9', color: '#292524' }}>
        <LanguageProviderBlock initialLocale={lang}>{children}</LanguageProviderBlock>
        <ScrollReveal />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
