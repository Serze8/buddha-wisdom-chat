'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const promos: Record<string, { icon: string; en: { title: string; text: string; cta: string }; ru: { title: string; text: string; cta: string } }> = {
  teachings: {
    icon: '📖',
    en: { title: 'Deepen Your Understanding', text: 'Sign up to save your favorite teachings and track your learning journey.', cta: 'Start Learning' },
    ru: { title: 'Углубите свои знания', text: 'Зарегистрируйтесь, чтобы сохранять любимые учения и отслеживать свой путь.', cta: 'Начать учиться' },
  },
  theses: {
    icon: '🧠',
    en: { title: 'Explore Buddhist Philosophy', text: 'Create an account to discuss theses with fellow seekers and save your notes.', cta: 'Join Discussion' },
    ru: { title: 'Исследуйте философию', text: 'Создайте аккаунт, чтобы обсуждать тезисы с единомышленниками и сохранять заметки.', cta: 'Присоединиться' },
  },
  characters: {
    icon: '🎭',
    en: { title: 'Chat with These Characters', text: 'Register to start personal AI conversations with any character from the series.', cta: 'Start Chatting' },
    ru: { title: 'Общайтесь с персонажами', text: 'Зарегистрируйтесь, чтобы начать личный ИИ-диалог с любым героем сериала.', cta: 'Начать диалог' },
  },
  episodes: {
    icon: '🎬',
    en: { title: 'Remember Every Episode', text: 'Sign up to bookmark episodes, leave reviews, and discuss moments with fans.', cta: 'Join Fans' },
    ru: { title: 'Запоминайте каждый эпизод', text: 'Зарегистрируйтесь, чтобы закладывать эпизоды, оставлять отзывы и обсуждать.', cta: 'В сообщество' },
  },
  gallery: {
    icon: '🖼️',
    en: { title: 'Share Your Art', text: 'Register to upload your own Buddha-inspired artwork and photos to the gallery.', cta: 'Upload Art' },
    ru: { title: 'Делитесь искусством', text: 'Зарегистрируйтесь, чтобы загружать собственные фото и арт в галерею.', cta: 'Загрузить' },
  },
  quiz: {
    icon: '🎯',
    en: { title: 'Track Your Results', text: 'Create an account to save quiz results and see how your wisdom grows over time.', cta: 'Sign Up Free' },
    ru: { title: 'Отслеживайте результаты', text: 'Создайте аккаунт, чтобы сохранять результаты викторины и следить за прогрессом.', cta: 'Зарегистрироваться' },
  },
  community: {
    icon: '💬',
    en: { title: 'Join the Conversation', text: 'Be the first to share your thoughts, ask questions, and connect with seekers worldwide.', cta: 'Sign Up to Post' },
    ru: { title: 'Присоединяйтесь к обсуждению', text: 'Будьте первым — делитесь мыслями, задавайте вопросы и общайтесь с единомышленниками.', cta: 'Зарегистрироваться' },
  },
  videos: {
    icon: '🎥',
    en: { title: 'Share Inspiring Videos', text: 'Register to submit your favorite Buddha-related videos and build a community playlist.', cta: 'Upload Video' },
    ru: { title: 'Делитесь видео', text: 'Зарегистрируйтесь, чтобы добавлять любимые видео и создавать плейлист сообщества.', cta: 'Добавить видео' },
  },
  retreats: {
    icon: '🧘',
    en: { title: 'Share Your Retreat Story', text: 'Sign up to write reviews of meditation centers and help others find their path.', cta: 'Write a Review' },
    ru: { title: 'Поделитесь опытом ретрита', text: 'Зарегистрируйтесь, чтобы писать отзывы о центрах медитации и помогать другим.', cta: 'Написать отзыв' },
  },
  about: {
    icon: '🪷',
    en: { title: 'Become Part of the Community', text: 'Join thousands of seekers exploring the wisdom of the Buddha together.', cta: 'Join Us' },
    ru: { title: 'Станьте частью сообщества', text: 'Присоединяйтесь к тысячам искателей, вместе исследующих мудрость Будды.', cta: 'Присоединиться' },
  },
  contact: {
    icon: '✉️',
    en: { title: 'Prefer to Chat?', text: 'Sign up to join our community and discuss ideas with fellow seekers directly.', cta: 'Join Community' },
    ru: { title: 'Предпочитаете общаться?', text: 'Зарегистрируйтесь, чтобы вступить в сообщество и общаться с единомышленниками.', cta: 'В сообщество' },
  },
}

export default function PromoBanner({ page }: { page: string }) {
  const { locale } = useLanguage()
  const promo = promos[page]
  if (!promo) return null

  const lang = (promo as any)[locale] || promo.en

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-6 text-center">
      <span className="text-3xl block mb-2">{promo.icon}</span>
      <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-900 dark:text-amber-100 mb-1">
        {lang.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 max-w-md mx-auto">
        {lang.text}
      </p>
      <Link
        href="/auth"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-700 hover:bg-amber-600 text-white font-medium text-sm transition-colors"
      >
        {lang.cta} →
      </Link>
    </div>
  )
}
