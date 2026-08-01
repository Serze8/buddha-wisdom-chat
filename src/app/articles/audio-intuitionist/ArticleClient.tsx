'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import {
  titles, subtitles, sectionHeadings, sectionContents,
  conclusions, invitations
} from './articleContent'

const defaultLocale = 'ru'

export default function ArticleClient() {
  const { locale } = useLanguage()
  const lang = locale || defaultLocale

  const title = titles[lang] || titles[defaultLocale]
  const subtitle = subtitles[lang] || subtitles[defaultLocale]
  const headings = sectionHeadings[lang] || sectionHeadings[defaultLocale]
  const contents = sectionContents[lang] || sectionContents[defaultLocale]
  const conclusion = conclusions[lang] || conclusions[defaultLocale]
  const invitation = invitations[lang] || invitations[defaultLocale]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-3">
          🧘 {subtitle}
        </p>
        <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 leading-tight">
          {title}
        </h1>
      </div>

      <div className="space-y-10">
        {headings.map((heading, i) => (
          <section key={i}>
            {heading && (
              <h2 className="font-[var(--font-cormorant)] text-xl md:text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                {heading}
              </h2>
            )}
            {contents[i] && (
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {contents[i]}
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-6 md:p-8">
        <div className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
          {conclusion}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-amber-700 dark:text-amber-300 italic">
          {invitation}
        </p>
        <a
          href="/community-chat"
          className="inline-block mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl transition-colors"
        >
          {lang === 'ru' ? 'Перейти в сообщество' : 'Go to Community'}
        </a>
      </div>
    </div>
  )
}
