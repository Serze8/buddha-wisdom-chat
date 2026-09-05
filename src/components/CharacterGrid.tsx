'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { characters } from '@/lib/characters'

interface CharacterGridProps {
  onSelect: (charId: string) => void
}

export default function CharacterGrid({ onSelect }: CharacterGridProps) {
  const { t, locale } = useLanguage()
  const lang = locale === 'ru' ? 'ru' : 'en'

  return (
    <div>
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-700 text-center mb-10">
        {t.chat.chooseCharacter}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {characters.map(c => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-amber-300 transition-all text-center"
          >
            <span className="text-4xl block mb-3">{c.emoji}</span>
            <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-800 dark:text-amber-600">
              {(c.name as Record<string, string>)[lang] || c.name.en}
            </h3>
          </button>
        ))}
      </div>
    </div>
  )
}
