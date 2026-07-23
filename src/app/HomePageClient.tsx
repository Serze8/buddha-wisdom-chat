'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, BookOpenCheck, Film, Users, Tv, Image as ImageIcon, HelpCircle, BookOpen } from 'lucide-react'
import TeacherQuotes from '@/components/ui/TeacherQuotes'

const features = [
  { key: 'chat', icon: MessageCircle, href: '/chat' },
  { key: 'characters', icon: Users, href: '/characters' },
  { key: 'episodes', icon: Tv, href: '/episodes' },
  { key: 'teachings', icon: BookOpen, href: '/teachings' },
  { key: 'gallery', icon: ImageIcon, href: '/gallery' },
  { key: 'quiz', icon: HelpCircle, href: '/quiz' },
]

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
      <section className="relative overflow-hidden" style={{ minHeight: '520px' }}>
        <Image
          src="/images/hero.jpg"
          alt="Buddhist temple"
          fill
          className="object-cover"
          priority
          style={{ filter: 'brightness(0.3) saturate(0.7)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,14,10,0.4) 0%, rgba(15,14,10,0.7) 50%, #0F0E0A 100%)' }} />

        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-36 text-center relative z-10">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-8 border-2 border-amber-500/30" style={{ boxShadow: '0 0 40px rgba(245, 158, 11, 0.15)' }}>
            <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
          </div>

          <h1 className="font-[var(--font-cormorant)] text-5xl md:text-7xl font-bold mb-6 text-golden-gradient" style={{ textShadow: '0 2px 40px rgba(245, 158, 11, 0.2)' }}>
            {t.home.heroTitle}
          </h1>

          <p className="text-amber-200/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
            {t.home.heroSubtitle}
          </p>

          <Link
            href="/chat"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 btn-glow"
            style={{
              background: 'linear-gradient(135deg, #b45309, #92400e)',
              color: '#fde68a',
              boxShadow: '0 4px 30px rgba(245, 158, 11, 0.25), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            {t.home.startChat}
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

      {/* Three Main Blocks */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 stagger-children scroll-reveal">
          {/* Block 1: Chat */}
          <Link
            href="/chat"
            className="group golden-card rounded-2xl overflow-hidden"
          >
            <div className="h-1" style={{ background: 'linear-gradient(90deg, #b45309, #f59e0b, #b45309)' }} />
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <MessageCircle className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 mb-3">
                {t.home.blockChatTitle}
              </h3>
              <p className="text-amber-200/40 text-sm leading-relaxed mb-6">
                {t.home.blockChatDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all">
                {t.home.startChat} →
              </span>
            </div>
          </Link>

          {/* Block 2: Teachings */}
          <Link
            href="/teachings"
            className="group golden-card rounded-2xl overflow-hidden"
          >
            <div className="h-1" style={{ background: 'linear-gradient(90deg, #92400e, #d97706, #92400e)' }} />
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <BookOpenCheck className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 mb-3">
                {t.home.blockLearnTitle}
              </h3>
              <p className="text-amber-200/40 text-sm leading-relaxed mb-6">
                {t.home.blockLearnDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all">
                {t.home.readMore} →
              </span>
            </div>
          </Link>

          {/* Block 3: Film */}
          <Link
            href="/episodes"
            className="group golden-card rounded-2xl overflow-hidden"
          >
            <div className="h-1" style={{ background: 'linear-gradient(90deg, #78350f, #b45309, #78350f)' }} />
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <Film className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 mb-3">
                {t.home.blockFilmTitle}
              </h3>
              <p className="text-amber-200/40 text-sm leading-relaxed mb-6">
                {t.home.blockFilmDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm group-hover:text-amber-400 group-hover:gap-2 transition-all">
                {t.home.readMore} →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 stagger-children scroll-reveal">
          {features.map(({ key, icon: Icon, href }) => (
            <Link
              key={key}
              href={href}
              className="group golden-card rounded-2xl flex flex-col items-center gap-3 p-6"
            >
              <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                <Icon className="w-6 h-6 text-amber-400/70 group-hover:text-amber-400 transition-colors" />
              </div>
              <span className="font-medium text-amber-200/60 group-hover:text-amber-200 transition-colors text-sm">
                {(t.nav as any)[key] || key}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Teacher Quotes */}
      <TeacherQuotes />
    </div>
  )
}
