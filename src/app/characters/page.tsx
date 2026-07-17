'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'

const characters = [
  {
    id: 'buddha',
    name: { en: 'Buddha (Siddhartha)', ru: 'Будда (Сиддхартха)' },
    actor: 'Himanshu Soni',
    role: { en: 'The Enlightened One', ru: 'Просветлённый' },
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'yashodhara',
    name: { en: 'Yashodhara', ru: 'Ясодхара' },
    actor: 'Kajal Jain',
    role: { en: 'Princess, wife of Siddhartha', ru: 'Принцесса, жена Сиддхартхи' },
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 'ananda',
    name: { en: 'Ananda', ru: 'Ананда' },
    actor: 'Girish Kumar',
    role: { en: 'Devoted disciple', ru: 'Преданный ученик' },
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'devadatta',
    name: { en: 'Devadatta', ru: 'Девадатта' },
    actor: 'Khalid Siddiqui',
    role: { en: 'Cousin, antagonist', ru: 'Кузен, антагонист' },
    color: 'from-red-500 to-red-700',
  },
  {
    id: 'maya',
    name: { en: 'Queen Maya', ru: 'Царица Майя' },
    actor: 'Surendra Pal',
    role: { en: 'Mother of Buddha', ru: 'Мать Будды' },
    color: 'from-purple-400 to-violet-500',
  },
  {
    id: 'bimbisara',
    name: { en: 'King Bimbisara', ru: 'Царь Бимбисара' },
    actor: 'Kishore Bhatt',
    role: { en: 'King of Magadha, patron', ru: 'Царь Магадхи, покровитель' },
    color: 'from-emerald-400 to-teal-500',
  },
]

export default function CharactersPage() {
  const { t, locale } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {t.nav.characters}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((c) => (
          <Link
            key={c.id}
            href={`/chat?character=${c.id}`}
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all"
          >
            <div className={`h-32 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
              <span className="text-5xl opacity-80">🧘</span>
            </div>
            <div className="p-5">
              <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-gray-900 dark:text-gray-100">
                {(c.name as any)[locale] || c.name.en}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{c.actor}</p>
              <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                {(c.role as any)[locale] || c.role.en}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <PromoBanner page="characters" />
      </div>
    </div>
  )
}
