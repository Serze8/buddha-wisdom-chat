'use client'

import { useState } from 'react'

const MOCK_ARTICLES = [
  { id: '1', slug: 'four-noble-truths', section: 'theses', title: 'The Four Noble Truths' },
  { id: '2', slug: 'eightfold-path', section: 'theses', title: 'The Eightfold Path' },
  { id: '3', slug: 'dhammapada', section: 'teachings', title: 'The Dhammapada' },
  { id: '4', slug: 'heart-sutra', section: 'teachings', title: 'The Heart Sutra' },
  { id: '5', slug: 'anatta', section: 'theses', title: 'Anattā — Non-Self' },
  { id: '6', slug: 'karma', section: 'teachings', title: 'Karma' },
]

const LOCALES = ['en', 'ru', 'hi', 'es', 'fr', 'de', 'zh', 'ja'] as const

export default function AdminTranslationsPage() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})
  const [saved, setSaved] = useState(false)

  const updateTranslation = (articleId: string, locale: string, value: string) => {
    setTranslations((prev) => ({
      ...prev,
      [articleId]: { ...prev[articleId], [locale]: value },
    }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-amber-200 dark:border-amber-800/30 bg-white dark:bg-gray-900 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-xl font-bold text-amber-900 dark:text-amber-100">
            Admin: Translation Management
          </h1>
          <span className="rounded-lg bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
            Admin Panel
          </span>
        </div>
      </header>

      <main className="flex-1 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[300px_1fr]">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
              <h2 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">Articles</h2>
              <div className="space-y-1">
                {MOCK_ARTICLES.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => setSelectedArticle(article.id)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      selectedArticle === article.id
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-xs text-gray-400">[{article.section}]</span>{' '}
                    {article.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
              {selectedArticle ? (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Translations for{' '}
                      {MOCK_ARTICLES.find((a) => a.id === selectedArticle)?.title}
                    </h2>
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="rounded-lg bg-amber-100 dark:bg-amber-900/30 px-3 py-1.5 text-sm text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800/30 transition-colors"
                      >
                        {saved ? 'Saved!' : 'Save all'}
                      </button>
                      <button className="rounded-lg bg-amber-600 px-3 py-1.5 text-sm text-white hover:bg-amber-500 transition-colors">
                        Retranslate all via AI
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {LOCALES.map((locale) => (
                      <div key={locale}>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {locale.toUpperCase()}
                        </label>
                        <textarea
                          rows={3}
                          value={translations[selectedArticle]?.[locale] || ''}
                          onChange={(e) =>
                            updateTranslation(selectedArticle, locale, e.target.value)
                          }
                          placeholder={`Translation in ${locale}...`}
                          className="w-full resize-none rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 outline-none focus:border-amber-400 dark:focus:border-amber-600 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex h-64 items-center justify-center text-gray-400">
                  Select an article to edit translations
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
