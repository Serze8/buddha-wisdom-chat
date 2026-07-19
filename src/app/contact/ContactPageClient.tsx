'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { Send } from 'lucide-react'
import PromoBanner from '@/components/ui/PromoBanner'

export default function ContactPageClient() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-6">
        {t.contact.title}
      </h1>
      {sent ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
          <p className="text-green-700 dark:text-green-300 text-lg">{t.contact.sent}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.contact.name}
            </label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-gray-100 outline-none focus:border-amber-400 dark:focus:border-amber-600 transition-colors"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.contact.email}
            </label>
            <input
              type="email"
              required
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-gray-100 outline-none focus:border-amber-400 dark:focus:border-amber-600 transition-colors"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.contact.message}
            </label>
            <textarea
              rows={5}
              required
              className="w-full resize-none rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-gray-100 outline-none focus:border-amber-400 dark:focus:border-amber-600 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 font-medium text-white transition-colors hover:bg-amber-500"
          >
            <Send className="w-4 h-4" />
            {t.contact.send}
          </button>
        </form>
      )}

      <div className="mt-10">
        <PromoBanner page="contact" />
      </div>
    </div>
  )
}
