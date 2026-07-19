'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'

const arcs = [
  { title: { en: 'Prince Siddhartha', ru: 'Принц Сиддхартха' }, episodes: '1-10', description: { en: 'The early life of Prince Siddhartha in the palace of Kapilavastu', ru: 'Ранняя жизнь принца Сиддхартхи в дворце Капилавасту' } },
  { title: { en: 'The Renunciation', ru: 'Отречение' }, episodes: '11-20', description: { en: 'Siddhartha leaves the palace in search of truth', ru: 'Сиддхартха покидает дворец в поисках истины' } },
  { title: { en: 'The Path to Enlightenment', ru: 'Путь к просветлению' }, episodes: '21-30', description: { en: 'Austerities, teachers, and the Middle Way', ru: 'Аскеза, учителя и Средний путь' } },
  { title: { en: 'Enlightenment', ru: 'Просветление' }, episodes: '31-35', description: { en: 'Siddhartha becomes the Buddha under the Bodhi tree', ru: 'Сиддхартха становится Буддой под деревом Бодхи' } },
  { title: { en: 'The Teacher', ru: 'Учитель' }, episodes: '36-45', description: { en: 'Forty-five years of teaching the Dharma', ru: 'Сорок пять лет учения Дхарме' } },
  { title: { en: 'Parinirvana', ru: 'Паринирвана' }, episodes: '46-55', description: { en: 'The final days and passing of the Buddha', ru: 'Последние дни и уход Будды' } },
]

export default function EpisodesPageClient() {
  const { t, locale } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {t.nav.episodes} <span className="text-lg font-normal text-amber-600">(55)</span>
      </h1>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-300 dark:bg-amber-700" />
        <div className="space-y-8">
          {arcs.map((arc, i) => (
            <div key={i} className="relative pl-16">
              <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-amber-500 border-4 border-amber-100 dark:border-amber-900 z-10" />
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full">
                    EP {arc.episodes}
                  </span>
                </div>
                <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-gray-900 dark:text-gray-100">
                  {(arc.title as any)[locale] || arc.title.en}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {(arc.description as any)[locale] || arc.description.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <PromoBanner page="episodes" />
      </div>
    </div>
  )
}
