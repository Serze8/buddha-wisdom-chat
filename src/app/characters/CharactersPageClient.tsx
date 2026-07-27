'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'
import HeroSilkAtlas from '@/components/HeroSilkAtlas'

const characters = [
  { id: 'buddha', name: { en: 'Buddha (Siddhartha)', ru: 'Будда (Сиддхартха)' }, actor: 'Himanshu Soni', role: { en: 'The Enlightened One', ru: 'Просветлённый' }, color: 'from-amber-400 to-orange-500' },
  { id: 'yashodhara', name: { en: 'Yashodhara', ru: 'Ясодхара' }, actor: 'Kajal Jain', role: { en: 'Princess, wife of Siddhartha', ru: 'Принцесса, жена Сиддхартхи' }, color: 'from-pink-400 to-rose-500' },
  { id: 'ananda', name: { en: 'Ananda', ru: 'Ананда' }, actor: 'Girish Kumar', role: { en: 'Devoted disciple', ru: 'Преданный ученик' }, color: 'from-blue-400 to-indigo-500' },
  { id: 'devadatta', name: { en: 'Devadatta', ru: 'Девадатта' }, actor: 'Khalid Siddiqui', role: { en: 'Cousin, antagonist', ru: 'Кузен, антагонист' }, color: 'from-red-500 to-red-700' },
  { id: 'maya', name: { en: 'Queen Maya', ru: 'Царица Майя' }, actor: 'Surendra Pal', role: { en: 'Mother of Buddha', ru: 'Мать Будды' }, color: 'from-purple-400 to-violet-500' },
  { id: 'bimbisara', name: { en: 'King Bimbisara', ru: 'Царь Бимбисара' }, actor: 'Kishore Bhatt', role: { en: 'King of Magadha, patron', ru: 'Царь Магадхи, покровитель' }, color: 'from-emerald-400 to-teal-500' },
]

export default function CharactersPageClient() {
  const { t, locale } = useLanguage()

  return (
    <div>
      {/* Hero from homepage */}
      <HeroSilkAtlas />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-golden-gradient text-center mb-4">
          {locale === 'ru' ? 'Герои из сериала Будда 2013' : 'Heroes from the TV Series Buddha 2013'}
        </h1>
        <p className="text-amber-200/50 text-center text-lg mb-10 max-w-2xl mx-auto">
          {locale === 'ru'
            ? 'Познакомьтесь с персонажами легендарного сериала и начните диалог с каждым из них через ИИ.'
            : 'Meet the characters of the legendary series and start a dialogue with each of them through AI.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {characters.map((c) => (
            <Link
              key={c.id}
              href={`/chat?character=${c.id}`}
              className="group golden-card rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className={`h-32 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                <span className="text-5xl opacity-80">🧘</span>
              </div>
              <div className="p-5">
                <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100">
                  {(c.name as any)[locale] || c.name.en}
                </h3>
                <p className="text-sm text-amber-500/50">{c.actor}</p>
                <p className="text-sm text-amber-400/70 mt-1">
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
    </div>
  )
}
