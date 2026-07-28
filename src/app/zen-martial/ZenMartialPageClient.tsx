'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import ZenOrigins from '@/components/ZenOrigins'

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
    id: 'temple-of-shaolin-1976',
    emoji: '🎬',
    year: 1976,
    title: { ru: 'Храм Шаолинь (1976)', en: 'The Temple of Shaolin (1976)' },
    directors: { ru: 'Чжан Чэ, У Ма', en: 'Chang Cheh, Wu Ma' },
    actors: { ru: 'Дэвид Цзян, Ти Лун, Александр Фу, Джонни Ван', en: 'David Chiang, Ti Lung, Alexander Fu Sheng, Johnny Wang' },
    desc: {
      ru: 'Настоятель Шаолиня понимает, что время не на их стороне, и они должны тренировать больше бойцов для борьбы с династией Цин. Монах Хуэй Сянь выступает против этого, поскольку он тайно работает на суд Цин. Вокруг монастыря собираются новобранцы, которых проверяют на волю. Тем временем сбежавшие солдаты Мин ищут убежище в Шаолине. Храм подвергается нападению тысяч солдат Цин, и только восьмерым удаётся сбежать.',
      en: 'The abbot of Shaolin realizes they must train more fighters against the Qing dynasty. Monk Huixian secretly works for the court. New recruits gather at the monastery, while fleeing Ming soldiers seek refuge. The temple is attacked by thousands of Qing soldiers — only eight escape.',
    },
    link: 'https://kinogo.online/filmy/5677-hram-shaolin.html',
  },
  {
    id: 'shaolin-temple-1982',
    emoji: '🏯',
    year: 1982,
    title: { ru: 'Храм Шаолинь (1982)', en: 'Shaolin Temple (1982)' },
    directors: { ru: 'Чжан Синьянь', en: 'Zhang Xinyan' },
    actors: { ru: 'Джет Ли, Юй Хай, Дин Лань, Ху Цзяньцян', en: 'Jet Li, Yu Hai, Ding Lan, Hu Jianqiang' },
    desc: {
      ru: 'Действие разворачивается в средневековом Китае. Юноша Цзюэюань теряет отца от рук жестокого военачальника Ван Жэньцзэ. Он находит убежище в монастыре Шаолинь, где изучает боевые искусства, чтобы отомстить. В фильме показан путь от гнева к просветлению через дисциплину и обеты.',
      en: 'Set in medieval China, young Jueyuan loses his father to the cruel warlord Wang Renze. He finds refuge at the Shaolin Monastery, learning martial arts to seek revenge. The film traces his journey from anger to enlightenment through discipline and vows.',
    },
    link: null,
  },
  {
    id: 'shaolin-2011',
    emoji: '🥋',
    year: 2011,
    title: { ru: 'Шаолинь (2011)', en: 'Shaolin (2011)' },
    directors: { ru: 'Бенни Чан', en: 'Benny Chan' },
    actors: { ru: 'Джеки Чан, Энди Лау, Николас Це, Юй Шаоцюнь', en: 'Jackie Chan, Andy Lau, Nicholas Tse, Yu Shaoqun' },
    desc: {
      ru: 'В эпоху междоусобных войн молодой воин Сяо Че после гибели семьи находит приют в монастыре Шаолинь. Монахи помогают ему искупить былые грехи, а он вместе с ними встаёт на защиту простых людей от жестокого завоевателя. Экшен-драма о просветлении и сострадании.',
      en: 'During an era of civil war, young warrior Xiao Che finds refuge at Shaolin after losing his family. The monks help him atone for past sins, and together they stand to protect ordinary people from a ruthless conqueror. An action-drama about enlightenment and compassion.',
    },
    link: null,
  },
]

export default function ZenMartialPageClient() {
  const { t, locale } = useLanguage()
  const [openFilm, setOpenFilm] = useState<string | null>(null)
  const [openMartialFilm, setOpenMartialFilm] = useState<string | null>(null)
  const [showRiverEpisodes, setShowRiverEpisodes] = useState(false)

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

          {/* Bodhidharma image */}
          <div className="flex justify-center mb-8">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: '320px', border: '2px solid rgba(245, 158, 11, 0.15)', boxShadow: '0 0 40px rgba(245, 158, 11, 0.08)' }}>
              <img
                src="/images/bodhidharma-yoshitoshi-1887.jpg"
                alt="Бодхидхарма — гравюра Ёситоси (1887)"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-center" style={{ background: 'linear-gradient(transparent, rgba(15,14,10,0.9))' }}>
                <p className="text-amber-200/40 text-xs">Цукиока Ёситоси, 1887</p>
              </div>
            </div>
          </div>

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

          <div className="space-y-3">
            {shaolinFilms.map((film) => {
              const isOpen = openFilm === film.id
              return (
                <div key={film.id} className="golden-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFilm(isOpen ? null : film.id)}
                    className="w-full flex items-center gap-3 p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-2xl shrink-0">{film.emoji}</span>
                    <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-100/80">
                      {(film.title as any)[locale] || film.title.en}
                    </h3>
                    <span className="text-amber-500/50 text-sm ml-auto mr-2 shrink-0">{film.year}</span>
                    <svg
                      className={`w-4 h-4 text-amber-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 space-y-3 text-sm animate-fade-in" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.1)' }}>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 pt-3 text-amber-200/40">
                        <span><strong className="text-amber-300/60">{locale === 'ru' ? 'Режиссёр:' : 'Director:'}</strong> {(film.directors as any)[locale] || film.directors.en}</span>
                        <span><strong className="text-amber-300/60">{locale === 'ru' ? 'Актёры:' : 'Cast:'}</strong> {(film.actors as any)[locale] || film.actors.en}</span>
                      </div>
                      <p className="text-amber-100/50 leading-relaxed">
                        {(film.desc as any)[locale] || film.desc.en}
                      </p>
                      {film.link && (
                        <a
                          href={film.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors text-xs"
                        >
                          ▶ {locale === 'ru' ? 'Смотреть онлайн' : 'Watch online'}
                        </a>
                      )}
                      {!film.link && (
                        <span className="text-amber-500/30 text-xs">
                          {locale === 'ru' ? '🔗 Ссылка на просмотр появится позже' : '🔗 Watch link coming soon'}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Golden divider */}
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">⚔</span>
          <div className="golden-divider flex-1" />
        </div>

        {/* Block 5: Мartial Arts Films */}
        <section className="mb-4">
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-6 text-golden-gradient">
            {locale === 'ru' ? 'Фильмы о боевых искусствах' : 'Martial Arts Films'}
          </h2>

          <div className="space-y-3">
            {/* Kung Fu Panda */}
            <div className="golden-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenMartialFilm(openMartialFilm === 'kung-fu-panda' ? null : 'kung-fu-panda')}
                className="w-full flex items-center gap-3 p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-2xl shrink-0">🐼</span>
                <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-100/80">
                  {locale === 'ru' ? 'Кунг-фу панда' : 'Kung Fu Panda'}
                </h3>
                <span className="text-amber-500/50 text-sm ml-auto mr-2 shrink-0">2008</span>
                <svg
                  className={`w-4 h-4 text-amber-400 transition-transform duration-300 shrink-0 ${openMartialFilm === 'kung-fu-panda' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openMartialFilm === 'kung-fu-panda' && (
                <div className="px-5 pb-5 space-y-3 text-sm animate-fade-in" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.1)' }}>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 pt-3 text-amber-200/40">
                    <span><strong className="text-amber-300/60">{locale === 'ru' ? 'Режиссёр:' : 'Director:'}</strong> {locale === 'ru' ? 'Марк Осборн, Джон Стивенсон' : 'Mark Osborne, John Stevenson'}</span>
                    <span><strong className="text-amber-300/60">{locale === 'ru' ? 'Актёры:' : 'Cast:'}</strong> {locale === 'ru' ? 'Джек Блэк, Дастин Хоффман, Анджелина Джоли' : 'Jack Black, Dustin Hoffman, Angelina Jolie'}</span>
                  </div>
                  <p className="text-amber-100/50 leading-relaxed">
                    {locale === 'ru' ? 'Анимационный шедевр с буддийскими темами. Панда-обжора находит путь к мастерству через принятие себя и внутренний покой.' : 'An animated masterpiece with Buddhist themes. An overweight panda finds the path to mastery through self-acceptance and inner peace.'}
                  </p>
                  <span className="text-amber-500/30 text-xs">
                    {locale === 'ru' ? '🔗 Ссылка на просмотр появится позже' : '🔗 Watch link coming soon'}
                  </span>
                </div>
              )}
            </div>

            {/* Речные заводи (Water Margin) */}
            <div className="golden-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenMartialFilm(openMartialFilm === 'river-margin' ? null : 'river-margin')}
                className="w-full flex items-center gap-3 p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-2xl shrink-0">🏯</span>
                <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-100/80">
                  {locale === 'ru' ? 'Речные заводи (1998)' : 'Water Margin (1998)'}
                </h3>
                <span className="text-amber-500/50 text-sm ml-auto mr-2 shrink-0">1998</span>
                <svg
                  className={`w-4 h-4 text-amber-400 transition-transform duration-300 shrink-0 ${openMartialFilm === 'river-margin' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openMartialFilm === 'river-margin' && (
                <div className="px-5 pb-5 space-y-3 text-sm animate-fade-in" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.1)' }}>
                  <p className="text-amber-100/50 leading-relaxed pt-3">
                    {locale === 'ru'
                      ? '43-серийный китайский исторический сериал, основанный на одном из четырёх великих классических романов китайской литературы. История о 108 разбойниках, собравшихся на горе Лян. Сериал исследует темы чести, справедливости и буддийского учения о карме.'
                      : 'A 43-episode Chinese historical drama based on one of the Four Great Classical Novels of Chinese literature. The story of 108 outlaws who gather at Mount Liang. The series explores themes of honor, justice, and Buddhist teachings on karma.'}
                  </p>

                  <button
                    onClick={() => setShowRiverEpisodes(!showRiverEpisodes)}
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-xs font-medium"
                  >
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${showRiverEpisodes ? 'rotate-90' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {showRiverEpisodes
                      ? (locale === 'ru' ? 'Скрыть описание серий' : 'Hide episode list')
                      : (locale === 'ru' ? 'Показать описание всех серий' : 'Show all episodes')}
                  </button>

                  {showRiverEpisodes && (
                    <div className="space-y-1.5 pt-2 animate-fade-in">
                      {riverEpisodes.map((ep) => (
                        <div
                          key={ep.ep}
                          className="flex items-center gap-4 px-4 py-2 rounded-xl"
                          style={{ background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.08)' }}
                        >
                          <span className="text-amber-500/60 font-mono text-sm w-8 shrink-0">{ep.ep}</span>
                          <span className="text-amber-100/60 text-sm">
                            {(ep.title as any)[locale] || ep.title.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <span className="text-amber-500/30 text-xs">
                    {locale === 'ru' ? '🔗 Ссылка на просмотр появится позже' : '🔗 Watch link coming soon'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Golden divider */}
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">🔔</span>
          <div className="golden-divider flex-1" />
        </div>

        {/* Block 6: Zen Origins Interactive */}
        <section className="mb-4">
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-3 text-golden-gradient">
            {t.zen.zenSpreadTitle}
          </h2>
          <p className="text-amber-200/50 text-center text-base leading-relaxed max-w-3xl mx-auto mb-8">
            {t.zen.zenSpreadDesc}
          </p>

          <ZenOrigins />
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
