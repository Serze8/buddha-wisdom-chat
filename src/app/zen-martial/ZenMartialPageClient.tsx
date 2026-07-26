'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const riverEpisodes = [
  { ep: 1, title: { ru: 'Золотая пуля', en: 'The Golden Bullet' } },
  { ep: 2, title: { ru: 'Восстание на горе Лян', en: 'Uprising at Mount Liang' } },
  { ep: 3, title: { ru: 'Судьба воина', en: 'Fate of a Warrior' } },
  { ep: 4, title: { ru: 'Дорога в Ляншань', en: 'The Road to Liangshan' } },
  { ep: 5, title: { ru: 'Клятва братства', en: 'Oath of Brotherhood' } },
  { ep: 6, title: { ru: 'Битва при Чаоцзяе', en: 'Battle at Chaojia' } },
  { ep: 7, title: { ru: 'Тайный план', en: 'The Secret Plan' } },
  { ep: 8, title: { ru: 'Встреча с судьбой', en: 'Meeting with Destiny' } },
  { ep: 9, title: { ru: 'Путь воина', en: 'Path of the Warrior' } },
  { ep: 10, title: { ru: 'Предательство и честь', en: 'Betrayal and Honor' } },
  { ep: 11, title: { ru: 'Врата Ляншаня', en: 'Gates of Liangshan' } },
  { ep: 12, title: { ru: 'Буддийский монах', en: 'The Buddhist Monk' } },
  { ep: 13, title: { ru: 'Колесо кармы', en: 'The Wheel of Karma' } },
  { ep: 14, title: { ru: 'Последний рубеж', en: 'The Final Stand' } },
  { ep: 15, title: { ru: 'Пробуждение', en: 'Awakening' } },
  { ep: 16, title: { ru: 'Тигр и дракон', en: 'Tiger and Dragon' } },
  { ep: 17, title: { ru: 'Мудрость старца', en: 'Wisdom of the Elder' } },
  { ep: 18, title: { ru: 'Ветер перемен', en: 'Wind of Change' } },
  { ep: 19, title: { ru: 'Тихая вода', en: 'Still Waters' } },
  { ep: 20, title: { ru: 'Возвращение героя', en: 'Return of the Hero' } },
  { ep: 21, title: { ru: 'Багровый закат', en: 'Crimson Sunset' } },
  { ep: 22, title: { ru: 'Последний бой', en: 'The Last Battle' } },
  { ep: 23, title: { ru: 'Путь Дхармы', en: 'Path of Dharma' } },
  { ep: 24, title: { ru: 'Освобождение', en: 'Liberation' } },
  { ep: 25, title: { ru: 'Дзен-мудрость', en: 'Zen Wisdom' } },
]

const shaolinFilms = [
  {
    id: 'shaolin-temple',
    year: 1982,
    title: { ru: 'Храм Шаолинь', en: 'Shaolin Temple' },
    desc: {
      ru: 'Легендарный фильм с Дзет Ли, который возродил интерес к шаолиньскому кунг-фу. Молодой монах борется за справедливость, используя боевые искусства как путь к просветлению.',
      en: 'The legendary Jet Li film that revived interest in Shaolin Kung Fu. A young monk fights for justice, using martial arts as a path to enlightenment.',
    },
  },
  {
    id: 'shaolin-temple-2011',
    year: 2011,
    title: { ru: 'Храм Шаолинь (2011)', en: 'Shaolin (2011)' },
    desc: {
      ru: 'Современная интерпретация истории о воинах-монахах. Генерал, потерявший всё, находит путь к искуплению в стенах Шаолиньского монастыря.',
      en: 'A modern take on the warrior monks. A general who lost everything finds redemption within the walls of the Shaolin Monastery.',
    },
  },
  {
    id: 'shaolin-3d',
    year: 2014,
    title: { ru: 'Шаолинь 3D', en: 'The Guillotines 3D' },
    desc: {
      ru: 'Историческая драма о тайном ордене воинов-монахов, защищающих императора. Боевые искусства переплетаются с духовными практиками.',
      en: 'A historical drama about a secret order of warrior monks protecting the emperor. Martial arts intertwine with spiritual practice.',
    },
  },
  {
    id: 'kung-fu-panda',
    year: 2008,
    title: { ru: 'Кунг-фу панда', en: 'Kung Fu Panda' },
    desc: {
      ru: 'Анимационный шедевр с буддийскими темами. Панда-обжора находит путь к мастерству через принятие себя и внутренний покой.',
      en: 'An animated masterpiece with Buddhist themes. An overweight panda finds the path to mastery through self-acceptance and inner peace.',
    },
  },
]

export default function ZenMartialPageClient() {
  const { t, locale } = useLanguage()
  const [showAllEpisodes, setShowAllEpisodes] = useState(false)

  const visibleEpisodes = showAllEpisodes ? riverEpisodes : riverEpisodes.slice(0, 12)

  return (
    <div className="relative min-h-screen">
      {/* zen-bg.gif background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/zen-bg.gif"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.12, filter: 'blur(1px)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,14,10,0.7) 0%, rgba(15,14,10,0.95) 40%, rgba(15,14,10,0.98) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="text-5xl block mb-4">🥋</span>
          <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-golden-gradient mb-6">
            {t.zen.title}
          </h1>
          <p className="text-amber-200/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.zen.intro}
          </p>
        </div>

        {/* Block 1: Bodhidharma Section */}
        <section className="rounded-3xl p-8 md:p-12 mb-4" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.9) 0%, rgba(15,14,10,0.95) 100%)', border: '1px solid rgba(245, 158, 11, 0.08)' }}>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-6 text-golden-gradient">
            {t.zen.sectionBodhidharma}
          </h2>
          <p className="text-amber-100/50 text-center text-lg leading-relaxed max-w-3xl mx-auto">
            {t.zen.bodhidharmaDesc}
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🧘', title: locale === 'ru' ? 'Медитация лицом к стене' : 'Wall Meditation', desc: locale === 'ru' ? '9 лет неподвижной медитации в монастыре Шаолинь' : '9 years of still meditation at the Shaolin Monastery' },
              { emoji: '👊', title: locale === 'ru' ? 'Шаолиньское кунг-фу' : 'Shaolin Kung Fu', desc: locale === 'ru' ? 'Физические упражнения, ставшие основой боевых искусств' : 'Physical exercises that became the foundation of martial arts' },
              { emoji: '☯️', title: locale === 'ru' ? 'Чань (Дзен)' : 'Chan (Zen)', desc: locale === 'ru' ? 'Прямое указание на ум, минуя тексты и ритуалы' : 'Direct pointing to the mind, beyond texts and rituals' },
            ].map((item, i) => (
              <div key={i} className="golden-card rounded-2xl p-6 text-center">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-100/80 mb-2">{item.title}</h3>
                <p className="text-amber-200/40 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Golden divider */}
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">☸</span>
          <div className="golden-divider flex-1" />
        </div>

        {/* Block 2: Dharmachakra Shorts */}
        <section className="rounded-3xl p-8 md:p-12 mb-4" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.9) 0%, rgba(15,14,10,0.95) 100%)', border: '1px solid rgba(245, 158, 11, 0.08)' }}>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-3 text-golden-gradient">
            {t.zen.sectionDharmachakra}
          </h2>
          <h3 className="font-[var(--font-cormorant)] text-xl text-center text-amber-200/60 mb-6">
            {t.zen.dharmachakraTitle}
          </h3>
          <p className="text-amber-100/50 text-center text-base leading-relaxed max-w-3xl mx-auto mb-8">
            {t.zen.dharmachakraDesc}
          </p>

          {/* Dharmachakra Shorts Video */}
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(245, 158, 11, 0.08)', border: '2px solid rgba(245, 158, 11, 0.15)', paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/P04rX4-1TNo"
              title="Dharmachakra — The Wheel of Dharma"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Golden divider */}
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">🎬</span>
          <div className="golden-divider flex-1" />
        </div>

        {/* Block 3: Bodhidharma Film */}
        <section className="rounded-3xl p-8 md:p-12 mb-4" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.9) 0%, rgba(15,14,10,0.95) 100%)', border: '1px solid rgba(245, 158, 11, 0.08)' }}>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-3 text-golden-gradient">
            {t.zen.sectionBodhidharmaFilm}
          </h2>
          <h3 className="font-[var(--font-cormorant)] text-xl text-center text-amber-200/60 mb-6">
            {t.zen.bodhidharmaFilmTitle}
          </h3>
          <p className="text-amber-100/50 text-center text-base leading-relaxed max-w-3xl mx-auto mb-8">
            {t.zen.bodhidharmaFilmDesc}
          </p>

          {/* Bodhidharma Film Video */}
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(245, 158, 11, 0.08)', border: '2px solid rgba(245, 158, 11, 0.15)', paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/Bpqg7cSppgU"
              title="Мастер дзен Бодхидхарма — художественный фильм"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Golden divider */}
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">🏯</span>
          <div className="golden-divider flex-1" />
        </div>

        {/* Block 4: Shaolin Films */}
        <section className="mb-4">
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-6 text-golden-gradient">
            {t.zen.sectionShaolin}
          </h2>
          <h3 className="font-[var(--font-cormorant)] text-xl text-center text-amber-200/60 mb-6">
            {t.zen.shaolinTitle}
          </h3>
          <p className="text-amber-100/50 text-center text-base leading-relaxed max-w-3xl mx-auto mb-8">
            {t.zen.shaolinDesc}
          </p>

          <div className="space-y-4">
            {shaolinFilms.map((film) => (
              <div key={film.id} className="golden-card rounded-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎬</span>
                    <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100/80">
                      {(film.title as any)[locale] || film.title.en}
                    </h3>
                    <span className="text-amber-500/50 text-sm ml-auto">{film.year}</span>
                  </div>
                  <p className="text-amber-100/40 text-sm leading-relaxed">
                    {(film.desc as any)[locale] || film.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Golden divider */}
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">⚔</span>
          <div className="golden-divider flex-1" />
        </div>

        {/* Link to Martial Arts Films */}
        <div className="text-center mb-8">
          <Link
            href="/martial-arts-films"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 golden-card"
            style={{
              color: '#fbbf24',
              border: '1px solid rgba(245, 158, 11, 0.2)',
            }}
          >
            🎬 {locale === 'ru' ? 'Фильмы о боевых искусствах' : 'Martial Arts Films'} →
          </Link>
        </div>

        {/* Block 5: Other Films — Water Margin (bottom) */}
        <section className="rounded-3xl p-8 md:p-12 mb-4" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.9) 0%, rgba(15,14,10,0.95) 100%)', border: '1px solid rgba(245, 158, 11, 0.08)' }}>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-3 text-golden-gradient">
            {t.zen.sectionOtherFilms}
          </h2>
          <h3 className="font-[var(--font-cormorant)] text-xl text-center text-amber-200/60 mb-6">
            {t.zen.otherFilmsTitle}
          </h3>
          <p className="text-amber-100/50 text-center text-base leading-relaxed max-w-3xl mx-auto mb-8">
            {t.zen.otherFilmsDesc}
          </p>

          {/* Episode list */}
          <div className="space-y-2">
            {visibleEpisodes.map((ep) => (
              <div
                key={ep.ep}
                className="flex items-center gap-4 px-5 py-3 rounded-xl transition-colors"
                style={{ background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.08)' }}
              >
                <span className="text-amber-500/60 font-mono text-sm w-8 shrink-0">{ep.ep}</span>
                <span className="text-amber-100/60 text-sm">
                  {(ep.title as any)[locale] || ep.title.en}
                </span>
              </div>
            ))}
          </div>

          {!showAllEpisodes && riverEpisodes.length > 12 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllEpisodes(true)}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.2)' }}
              >
                {locale === 'ru' ? 'Показать все эпизоды' : 'Show all episodes'} ↓
              </button>
            </div>
          )}
        </section>

        {/* Community Link */}
        <div className="text-center mt-10">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #b45309, #92400e)',
              color: '#fde68a',
              boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}
          >
            💬 {t.zen.discussCommunity} →
          </Link>
        </div>
      </div>
    </div>
  )
}
