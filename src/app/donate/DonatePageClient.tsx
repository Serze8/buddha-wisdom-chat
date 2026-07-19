'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { Heart, Coffee, Sparkles, Gift, Users, BookOpen } from 'lucide-react'

const BOOSTY_URL = 'https://boosty.to/serze8'

const tiers = {
  en: [
    { icon: Coffee, name: 'Supporter', amount: '$3', desc: 'Buy us a coffee. Every contribution matters.', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
    { icon: Heart, name: 'Dhamma Friend', amount: '$10', desc: 'Help us maintain servers and create new content.', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
    { icon: Sparkles, name: 'Enlightened Patron', amount: '$25', desc: 'Support development of AI character chats and translations.', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
  ],
  ru: [
    { icon: Coffee, name: 'Поддержка', amount: '300 ₽', desc: 'Купите нам кофе. Каждый вклад важен.', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
    { icon: Heart, name: 'Друг Дхармы', amount: '500 ₽', desc: 'Помогите нам содержать серверы и создавать новый контент.', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
    { icon: Sparkles, name: 'Просвещённый меценат', amount: '1500 ₽', desc: 'Поддержите разработку ИИ-чатов с персонажами и переводы.', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
  ],
}

const reasons = {
  en: [
    { icon: Users, title: 'Growing Community', text: 'Join thousands of seekers exploring Buddhist wisdom through AI technology.' },
    { icon: BookOpen, title: 'Free Education', text: 'All teachings, character chats, and content are completely free for everyone.' },
    { icon: Gift, title: 'Open Source', text: 'The project is built transparently. Your support keeps it independent.' },
  ],
  ru: [
    { icon: Users, title: 'Растущее сообщество', text: 'Присоединяйтесь к тысячам искателей, изучающих мудрость Будды через ИИ.' },
    { icon: BookOpen, title: 'Бесплатное образование', text: 'Все учения, чаты с персонажами и контент полностью бесплатны для всех.' },
    { icon: Gift, title: 'Открытый код', text: 'Проект создаётся прозрачно. Ваша поддержка сохраняет его независимость.' },
  ],
}

export default function DonatePageClient() {
  const { t, locale } = useLanguage()
  const tierList = tiers[locale as keyof typeof tiers] || tiers.en
  const reasonList = reasons[locale as keyof typeof reasons] || reasons.en

  const text = {
    en: {
      hero_title: 'Support Our Mission',
      hero_subtitle: 'Help us keep Buddhist wisdom accessible to everyone through AI-powered conversations.',
      hero_cta: 'Support on Boosty',
      why_title: 'Why Your Support Matters',
      tiers_title: 'Choose Your Support Level',
      tiers_subtitle: 'Every contribution helps us grow',
      footer_text: 'Made with love for all seekers. Thank you for your generosity.',
    },
    ru: {
      hero_title: 'Поддержите нашу миссию',
      hero_subtitle: 'Помогите сделать мудрость Будды доступной для всех через диалоги с ИИ.',
      hero_cta: 'Поддержать на Boosty',
      why_title: 'Почему ваша поддержка важна',
      tiers_title: 'Выберите уровень поддержки',
      tiers_subtitle: 'Каждый вклад помогает нам расти',
      footer_text: 'Создано с любовью для всех искателей. Спасибо за вашу щедрость.',
    },
  }

  const lang = (text as any)[locale] || text.en

  return (
    <div>
      <section className="relative bg-gradient-to-b from-amber-800 via-amber-900 to-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDMwYzAtMTYuNTY5IDEzLjQzMS0zMCAzMCAzMHMzMCAxMy40MzEgMzAgMzAtMTMuNDMxIDMwLTMwIDMwUzMwIDQ2LjU2OSAzMCAzMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-28 text-center relative z-10">
          <span className="text-6xl block mb-6">🙏</span>
          <h1 className="font-[var(--font-cormorant)] text-3xl md:text-5xl font-bold mb-4">
            {lang.hero_title}
          </h1>
          <p className="text-amber-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {lang.hero_subtitle}
          </p>
          <a
            href={BOOSTY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-medium text-lg transition-colors shadow-lg"
          >
            <Heart className="w-5 h-5" />
            {lang.hero_cta}
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center text-amber-900 dark:text-amber-100 mb-10">
          {lang.why_title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reasonList.map((reason, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center text-amber-900 dark:text-amber-100 mb-2">
          {lang.tiers_title}
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">{lang.tiers_subtitle}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {tierList.map((tier, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-2xl ${tier.color} flex items-center justify-center mb-4`}>
                <tier.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-3">{tier.amount}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1">{tier.desc}</p>
              <a
                href={BOOSTY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-medium text-sm transition-colors"
              >
                {lang.hero_cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-amber-100 dark:bg-amber-900/30 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-amber-800 dark:text-amber-200 italic font-[var(--font-cormorant)] text-xl">
            {locale === 'ru'
              ? '«Щедрость — это качество, которое делает человека дорогим другим.» — Будда'
              : '"Generosity is the quality that makes one dear to all." — Buddha'}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {lang.footer_text}
        </p>
      </div>
    </div>
  )
}
