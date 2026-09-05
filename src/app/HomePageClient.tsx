'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { MessageCircle, Users, Tv, Image as ImageIcon, HelpCircle, BookOpen } from 'lucide-react'
import StupaDome from '@/components/StupaDome'
import FourGoals from '@/components/FourGoals'
import TeacherQuotes from '@/components/ui/TeacherQuotes'
import DharmaWheel from '@/components/DharmaWheel'

const features = [
  { key: 'chat', icon: MessageCircle, href: '/dharma-chats/ai' },
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
    link: '/teachings/vision#anatman',
  },
  ru: {
    title: 'Анатман — Не-Я',
    text: 'Одна из трёх фундаментальных характеристик бытия. Ни в человеке, ни во всём мире нет никакой постоянной, вечной и неизменной субстанции.',
    link: '/teachings/vision#anatman',
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
  const ru = locale === 'ru'
  const thesis = thesisToday[locale as keyof typeof thesisToday] || thesisToday.en
  const dayQuotes = quotes[locale] || quotes.en
  const quote = dayQuotes[new Date().getDate() % dayQuotes.length]

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#fbfaf9', color: '#292524' }}>
      <main className="flex-1">
        {/* Ступа-дхармачакра — главный навигационный элемент */}
        <section className="w-full overflow-hidden pt-10 pb-6 md:pt-16 md:pb-8">
          <div className="flex justify-center mb-6">
            <DharmaWheel size={800} className="max-w-[88vw]" />
          </div>
          <div className="mx-auto max-w-4xl px-4 text-center mb-8 scroll-reveal">
            <p
              className="text-sm md:text-base tracking-[0.3em] uppercase mb-5 flex items-center justify-center gap-3"
              style={{ fontFamily: 'var(--font-jakarta)', color: 'rgba(217, 119, 6, 0.75)' }}
            >
              <span>{ru ? 'Дхарма · Путь' : 'Dharma · Path'}</span>
            </p>
            <h1
              className="text-5xl md:text-7xl font-semibold mb-5 text-golden-gradient leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.01em' }}
            >
              {ru ? 'Будда-Чакравартин' : 'Buddha-Chakravartin'}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(69, 26, 3, 0.62)' }}>
              {ru
                ? 'Два пути одной Дхармы. Три времени. Четыре стороны света.'
                : 'Two paths of one Dharma. Three times. Four directions.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="/teachings/practice"
                data-testid="cta-start-practice"
                className="btn-glow inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #b45309 0%, #d97706 55%, #f59e0b 100%)', color: '#fffaf0', boxShadow: '0 8px 24px rgba(217, 119, 6, 0.28)' }}
              >
                {ru ? 'Начать практику' : 'Start Practice'}
              </Link>
              <Link
                href="/dharma-chats/ai"
                data-testid="cta-talk-ai"
                className="btn-glow golden-card inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-sm transition-transform duration-300 hover:-translate-y-0.5"
                style={{ color: 'rgba(69, 26, 3, 0.8)' }}
              >
                {ru ? 'Поговорить с героем' : 'Talk to a character'}
              </Link>
            </div>
          </div>
          <FourGoals />
          <StupaDome />
        </section>

        {/* Quote Strip */}
        <div className="relative overflow-hidden py-8 md:py-10 scroll-reveal" style={{ background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.15), rgba(217, 119, 6, 0.05), rgba(217, 119, 6, 0.15))' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
            <span className="quote-mark" style={{ left: '10%' }}>&ldquo;</span>
            <p className="text-xl md:text-2xl italic text-golden-gradient leading-relaxed relative z-10 pl-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {quote.text}
            </p>
            <p className="text-sm mt-3" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(245, 158, 11, 0.5)' }}>— {quote.author}</p>
          </div>
        </div>

        {/* Thesis of the Day */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <div className="golden-card rounded-2xl p-8 md:p-10 relative noise-overlay scroll-reveal" style={{ boxShadow: '0 8px 40px rgba(69, 26, 3, 0.08)' }}>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📖</span>
                <h2 className="text-2xl font-bold text-golden-gradient" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {t.home.thesisOfDay}
                </h2>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(245, 158, 11, 0.8)' }}>
                {thesis.title}
              </h3>
              <p className="mb-5 leading-relaxed" style={{ color: 'rgba(69, 26, 3, 0.65)' }}>{thesis.text}</p>
              <Link
                href={thesis.link}
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700 transition-colors text-sm"
              >
                {t.home.readMore} →
              </Link>
            </div>
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
                  <Icon className="w-6 h-6 text-blue-400/70 group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="font-medium text-slate-500 group-hover:text-blue-600 transition-colors text-sm">
                  {(t.nav as Record<string, string>)[key] || key}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Teacher Quotes */}
        <TeacherQuotes />
      </main>
    </div>
  )
}
