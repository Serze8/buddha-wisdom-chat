'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { characters } from '@/lib/characters'
import PromoBanner from '@/components/ui/PromoBanner'
import HeroSilkAtlas from '@/components/HeroSilkAtlas'

const actors: Record<string, { actor: string; role: { en: string; ru: string }; color: string }> = {
  buddha: { actor: 'Himanshu Soni', role: { en: 'The Enlightened One', ru: 'Просветлённый' }, color: 'from-amber-400 to-orange-500' },
  yashodhara: { actor: 'Kajal Jain', role: { en: 'Princess, wife of Siddhartha', ru: 'Принцесса, жена Сиддхартхи' }, color: 'from-pink-400 to-rose-500' },
  ananda: { actor: 'Girish Kumar', role: { en: 'Devoted disciple', ru: 'Преданный ученик' }, color: 'from-blue-400 to-indigo-500' },
  devadatta: { actor: 'Khalid Siddiqui', role: { en: 'Cousin, antagonist', ru: 'Кузен, антагонист' }, color: 'from-red-500 to-red-700' },
  maya: { actor: 'Surendra Pal', role: { en: 'Mother of Buddha', ru: 'Мать Будды' }, color: 'from-purple-400 to-violet-500' },
  bimbisara: { actor: 'Kishore Bhatt', role: { en: 'King of Magadha, patron', ru: 'Царь Магадхи, покровитель' }, color: 'from-emerald-400 to-teal-500' },
  'devadatta-mother': { actor: '—', role: { en: 'Mother of Devadatta', ru: 'Мать Девадатты' }, color: 'from-orange-400 to-amber-600' },
  channa: { actor: '—', role: { en: 'Loyal charioteer', ru: 'Верный колесничий' }, color: 'from-stone-400 to-stone-600' },
  angulimala: { actor: '—', role: { en: 'Reformed bandit', ru: 'Раскаявшийся разбойник' }, color: 'from-lime-500 to-green-700' },
  prajapati: { actor: '—', role: { en: 'Stepmother of the Buddha, first nun', ru: 'Приёмная мать Будды, первая монахиня' }, color: 'from-rose-400 to-pink-600' },
}

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
          {characters.map((c) => {
            const meta = actors[c.id] || { actor: '—', role: { en: '', ru: '' }, color: 'from-amber-400 to-orange-500' }
            const bio = (c.bio as any)?.[locale] || c.bio?.en
            return (
              <Link
                key={c.id}
                href={`/chat?character=${c.id}`}
                className="group golden-card rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`h-32 bg-gradient-to-br ${meta.color} flex items-center justify-center`}>
                  {c.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.avatar} alt={c.name.en} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-5xl opacity-80">{c.emoji}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100">
                    {(c.name as any)[locale] || c.name.en}
                  </h3>
                  <p className="text-sm text-amber-500/50">{meta.actor}</p>
                  <p className="text-sm text-amber-400/70 mt-1">
                    {(meta.role as any)[locale] || meta.role.en}
                  </p>
                  {bio && (
                    <p className="text-sm text-amber-200/50 mt-3 leading-relaxed line-clamp-3">
                      {bio}
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10">
          <PromoBanner page="characters" />
        </div>
      </div>
    </div>
  )
}
