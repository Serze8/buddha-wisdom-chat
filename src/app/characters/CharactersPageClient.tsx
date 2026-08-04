'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'
import HeroSilkAtlas from '@/components/HeroSilkAtlas'

const characters = [
  { id: 'buddha', name: { en: 'Buddha (Siddhartha)', ru: 'Будда (Сиддхартха)' }, actor: 'Himanshu Soni', role: { en: 'The Enlightened One', ru: 'Просветлённый' }, color: 'from-amber-400 to-orange-500' },
  { id: 'yashodhara', name: { en: 'Yashodhara', ru: 'Ясодхара' }, actor: 'Kajal Jain', role: { en: 'Princess, wife of Siddhartha', ru: 'Принцесса, жена Сиддхартхи' }, color: 'from-pink-400 to-rose-500' },
  { id: 'ananda', name: { en: 'Ananda', ru: 'Ананда' }, actor: 'Mayank Arora', role: { en: 'Devoted disciple, cousin of the Buddha', ru: 'Преданный ученик, двоюродный брат Будды' }, color: 'from-blue-400 to-indigo-500' },
  { id: 'devadatta', name: { en: 'Devadatta', ru: 'Девадатта' }, actor: 'Jagat Singh', role: { en: 'Cousin, antagonist', ru: 'Кузен, антагонист' }, color: 'from-red-500 to-red-700' },
  { id: 'maya', name: { en: 'Queen Maya', ru: 'Царица Майя' }, actor: 'Deepika Upadhyay', role: { en: 'Mother of Buddha', ru: 'Мать Будды' }, color: 'from-purple-400 to-violet-500' },
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
              className="group golden-card rounded-2xl overflow-hidden hover:shadow-xl transition-all active:scale-[0.99]"
            >
              <div className={`relative h-28 bg-gradient-to-br ${c.color} opacity-80`}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,14,10,0.1), rgba(15,14,10,0.7))' }} />
              </div>
              <div className="px-5 pb-5 -mt-10 relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#0F0E0A] border border-amber-700/50 shadow-lg shadow-amber-900/30 bg-[#0F0E0A]">
                  <Image
                    src={`/images/characters/${c.id}.svg`}
                    alt={(c.name as any)[locale] || c.name.en}
                    width={80}
                    height={80}
                    unoptimized
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100 mt-3">
                  {(c.name as any)[locale] || c.name.en}
                </h3>
                <p className="text-sm text-amber-500/60">{c.actor}</p>
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
