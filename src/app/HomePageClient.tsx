'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Users, Tv, BookOpen, Image as ImageIcon, HelpCircle, BookOpenCheck, Film } from 'lucide-react'

const features = [
  { key: 'chat', icon: MessageCircle, href: '/chat', color: 'bg-amber-100 text-amber-700' },
  { key: 'characters', icon: Users, href: '/characters', color: 'bg-orange-100 text-orange-700' },
  { key: 'episodes', icon: Tv, href: '/episodes', color: 'bg-red-100 text-red-700' },
  { key: 'teachings', icon: BookOpen, href: '/teachings', color: 'bg-yellow-100 text-yellow-700' },
  { key: 'gallery', icon: ImageIcon, href: '/gallery', color: 'bg-amber-100 text-amber-600' },
  { key: 'quiz', icon: HelpCircle, href: '/quiz', color: 'bg-orange-100 text-orange-600' },
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
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 text-white overflow-hidden min-h-[420px]">
        <Image
          src="/images/hero.jpg"
          alt="Buddhist temple"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-800/40 to-amber-950/80" />
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 text-center relative z-10">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
            <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          <h1 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-bold mb-4">
            {t.home.heroTitle}
          </h1>
          <p className="text-amber-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t.home.heroSubtitle}
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-medium text-lg transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {t.home.startChat}
          </Link>
        </div>
      </section>

      {/* Quote Strip */}
      <div className="bg-amber-100 dark:bg-amber-900/30 py-4 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-800 dark:text-amber-200 italic font-[var(--font-cormorant)] text-lg">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="text-amber-600 dark:text-amber-400 text-sm mt-1">— {quote.author}</p>
        </div>
      </div>

      {/* Thesis of the Day */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-amber-200 dark:border-amber-800/30 p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📖</span>
            <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-900 dark:text-amber-100">
              {t.home.thesisOfDay}
            </h2>
          </div>
          <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-amber-800 dark:text-amber-200 mb-2">
            {thesis.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{thesis.text}</p>
          <Link
            href={thesis.link}
            className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-medium hover:underline text-sm"
          >
            {t.home.readMore} →
          </Link>
        </div>
      </section>

      {/* Three Main Blocks */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {/* Block 1: Chat */}
          <Link
            href="/chat"
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
            <div className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {t.home.blockChatTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                {t.home.blockChatDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-medium text-sm group-hover:gap-2 transition-all">
                {t.home.startChat} →
              </span>
            </div>
          </Link>

          {/* Block 2: Teachings */}
          <Link
            href="/teachings"
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-orange-400 to-amber-500" />
            <div className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BookOpenCheck className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {t.home.blockLearnTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                {t.home.blockLearnDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-medium text-sm group-hover:gap-2 transition-all">
                {t.home.readMore} →
              </span>
            </div>
          </Link>

          {/* Block 3: Film */}
          <Link
            href="/episodes"
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-red-400 to-orange-500" />
            <div className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Film className="w-7 h-7 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {t.home.blockFilmTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                {t.home.blockFilmDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-medium text-sm group-hover:gap-2 transition-all">
                {t.home.readMore} →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
          {features.map(({ key, icon: Icon, href, color }) => (
            <Link
              key={key}
              href={href}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-700 transition-all"
            >
              <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {(t.nav as any)[key] || key}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
