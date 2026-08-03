'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, BookOpenCheck, Film, Users, Tv, Image as ImageIcon, BookOpen, Swords, Flower2, ArrowRight } from 'lucide-react'
import HeroSilkAtlas from '@/components/HeroSilkAtlas'
import TeacherQuotes from '@/components/ui/TeacherQuotes'

const features = [
  { key: 'chat', icon: MessageCircle, href: '/chat' },
  { key: 'practice', icon: Flower2, href: '/teachings/practice' },
  { key: 'characters', icon: Users, href: '/characters' },
  { key: 'episodes', icon: Tv, href: '/episodes' },
  { key: 'teachings', icon: BookOpen, href: '/teachings' },
  { key: 'gallery', icon: ImageIcon, href: '/gallery' },
]

const featureLabel = (t: any, key: string) => {
  if (key === 'chat') return t.nav.blockChat || 'Chat'
  if (key === 'practice') return t.teachings?.sectionPractices || 'Practice'
  return (t.nav as any)[key] || key
}

const thesisToday = {
  en: {
    title: 'Anattā — Non-Self',
    text: 'One of the Three Marks of Existence. There is no permanent, unchanging self in anything — neither in humans nor in the world.',
    link: '/theses#anatman',
  },
  ru: {
    title: 'Анатман — Не-Я',
    text: 'Одна из трёх фундаментальных характеристик бытия. Ни в человеке, ни во всём мире нет никакой постоянной, вечной и неизменной субстанции.',
    link: '/theses#anatman',
  },
}

const quotes: Record<string, { text: string; author: string }[]> = {
  en: [
    { text: 'The mind is everything. What you think you become.', author: 'Buddha' },
    { text: 'Peace comes from within. Do not seek it without.', author: 'Buddha' },
    { text: 'In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go.', author: 'Buddha' },
    { text: 'Hatred does not cease by hatred, but only by love.', author: 'Dhammapada 1:5' },
    { text: 'All that we are is the result of what we have thought.', author: 'Dhammapada 1:1' },
    { text: 'Better than a thousand hollow words is one word that brings peace.', author: 'Dhammapada 1:100' },
    { text: 'The fool who knows he is a fool is wise, but the fool who thinks he is wise is a real fool.', author: 'Dhammapada 6:63' },
    { text: 'Health is the greatest gift, contentment the greatest wealth.', author: 'Dhammapada 4:204' },
  ],
  ru: [
    { text: 'Ум — это всё. То, что ты думаешь, тем ты и становишься.', author: 'Будда' },
    { text: 'Мир исходит изнутри. Не ищи его снаружи.', author: 'Будда' },
    { text: 'В конце концов, важны только три вещи: как сильно ты любил, как мягко ты жил и как благородно ты отпустил.', author: 'Будда' },
    { text: 'Ненависть не прекращается ненавистью, а лишь любовью.', author: 'Дхаммапада 1:5' },
    { text: 'Всё, чем мы являемся, — это результат того, о чём мы думали.', author: 'Дхаммапада 1:1' },
    { text: 'Лучше одно слово, приносящее покой, чем тысяча пустых слов.', author: 'Дхаммапада 1:100' },
    { text: 'Глупец, знающий, что он глупец, мудр. А глупец, считающий себя мудрым — настоящий глупец.', author: 'Дхаммапада 6:63' },
    { text: 'Здоровье — величайший дар, довольство — величайшее богатство.', author: 'Дхаммапада 4:204' },
  ],
}

export default function HomePageClient() {
  const { locale, t } = useLanguage()
  const thesis = thesisToday[locale as keyof typeof thesisToday] || thesisToday.en
  const dayQuotes = quotes[locale] || quotes.en
  const quote = dayQuotes[new Date().getDate() % dayQuotes.length]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSilkAtlas />

      {/* Quick Actions — app-style */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-14 relative z-10">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <Link
            href="/chat"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-medium py-4 md:py-5 text-sm md:text-base transition-all shadow-lg shadow-amber-900/40 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            {t.nav.blockChat || 'Chat'}
          </Link>
          <Link
            href="/teachings/practice"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-white/5 hover:bg-white/10 text-amber-200 font-medium py-4 md:py-5 text-sm md:text-base border border-amber-800/40 transition-all active:scale-[0.98]"
          >
            <Flower2 className="w-5 h-5 text-amber-400" />
            {t.teachings?.sectionPractices || 'Practice'}
          </Link>
        </div>
      </section>

      {/* Quote Strip */}
      <div className="relative overflow-hidden py-8 md:py-10 scroll-reveal" style={{ background: 'linear-gradient(90deg, rgba(120, 53, 15, 0.15), rgba(120, 53, 15, 0.05), rgba(120, 53, 15, 0.15))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="quote-mark" style={{ left: '10%' }}>&ldquo;</span>
          <p className="font-[var(--font-cormorant)] text-xl md:text-2xl italic text-golden-gradient leading-relaxed relative z-10 pl-6">
            {quote.text}
          </p>
          <p className="text-amber-600/60 text-sm mt-3" style={{ fontFamily: 'var(--font-cormorant)' }}>— {quote.author}</p>
        </div>
      </div>

      {/* Thesis of the Day */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="golden-card rounded-2xl p-8 md:p-10 relative noise-overlay scroll-reveal" style={{ boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)' }}>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📖</span>
              <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-golden-gradient">
                {t.home.thesisOfDay}
              </h2>
            </div>
            <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-amber-200/80 mb-3">
              {thesis.title}
            </h3>
            <p className="text-amber-100/50 mb-5 leading-relaxed">{thesis.text}</p>
            <Link
              href={thesis.link}
              className="inline-flex items-center gap-1 text-amber-400 font-medium hover:text-amber-300 transition-colors text-sm"
            >
              {t.home.readMore} →
            </Link>
          </div>
        </div>
      </section>

      {/* Three Main Blocks — Three Paths */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 stagger-children scroll-reveal">
          {/* Block 1: Путь Будды */}
          <Link
            href="/episodes"
            className="group golden-card rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-40 md:h-48 overflow-hidden">
              <Image
                src="/images/characters/buddha.webp"
                alt={t.home.blockPathTitle}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(245,158,11,0.15), rgba(15,14,10,0.4))' }} />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 mb-3">
                {t.home.blockPathTitle}
              </h3>
              <p className="text-amber-200/40 text-sm leading-relaxed mb-6">
                {t.home.blockPathDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all mt-auto">
                {t.home.readMore} →
              </span>
            </div>
          </Link>

          {/* Block 2: Учение о Дхарме */}
          <Link
            href="/teachings"
            className="group golden-card rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-40 md:h-48 overflow-hidden">
              <Image
                src="/images/bodhidharma-yoshitoshi-1887.jpg"
                alt={t.home.blockDharmaTitle}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(245,158,11,0.15), rgba(15,14,10,0.4))' }} />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 mb-3">
                {t.home.blockDharmaTitle}
              </h3>
              <p className="text-amber-200/40 text-sm leading-relaxed mb-6">
                {t.home.blockDharmaDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all mt-auto">
                {t.home.readMore} →
              </span>
            </div>
          </Link>

          {/* Block 3: Возникновение Дзен */}
          <Link
            href="/zen-martial"
            className="group golden-card rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-40 md:h-48 overflow-hidden">
              <Image
                src="/images/zen-bg.gif"
                alt={t.home.blockZenTitle}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(245,158,11,0.15), rgba(15,14,10,0.4))' }} />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 mb-3">
                {t.home.blockZenTitle}
              </h3>
              <p className="text-amber-200/40 text-sm leading-relaxed mb-6">
                {t.home.blockZenDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all mt-auto">
                {t.home.readMore} →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 md:pb-28">
        <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient text-center mb-8">
          {t.home.featuresTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 stagger-children scroll-reveal">
          {features.map(({ key, icon: Icon, href }) => (
            <Link
              key={key}
              href={href}
              className="group golden-card rounded-2xl flex flex-col items-center gap-3 p-6 md:p-8 active:scale-[0.98] transition-transform"
            >
              <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                <Icon className="w-7 h-7 md:w-6 md:h-6 text-amber-400/70 group-hover:text-amber-400 transition-colors" />
              </div>
              <span className="font-medium text-amber-200/60 group-hover:text-amber-200 transition-colors text-sm text-center">
                {featureLabel(t, key)}
              </span>
              <ArrowRight className="w-4 h-4 text-amber-400/40 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* Teacher Quotes */}
      <TeacherQuotes />
    </div>
  )
}
