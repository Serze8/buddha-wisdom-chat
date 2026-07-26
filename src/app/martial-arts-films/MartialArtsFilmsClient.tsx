'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const martialArtsFilms = [
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
    id: 'kung-fu-panda',
    year: 2008,
    title: { ru: 'Кунг-фу панда', en: 'Kung Fu Panda' },
    desc: {
      ru: 'Анимационный шедевр с буддийскими темами. Панда-обжора находит путь к мастерству через принятие себя и внутренний покой.',
      en: 'An animated masterpiece with Buddhist themes. An overweight panda finds the path to mastery through self-acceptance and inner peace.',
    },
  },
  {
    id: 'crouching-tiger',
    year: 2000,
    title: { ru: 'Крадущийся тигр, затаённый дракон', en: 'Crouching Tiger, Hidden Dragon' },
    desc: {
      ru: 'Шедевр Анг Ли. Два мастера боевых искусств ищут украденный меч. Фильм о любви, чести и внутренней борьбе, пропитанный даосской философией.',
      en: 'Ang Lee\'s masterpiece. Two martial arts masters search for a stolen sword. A film about love, honor, and inner struggle, steeped in Daoist philosophy.',
    },
  },
  {
    id: 'hero',
    year: 2002,
    title: { ru: 'Герой', en: 'Hero' },
    desc: {
      ru: 'Фильм Чжан Имоу о воине, который должен убить короля. Красивая визуальная работа о жертвенности ради мира и единства Китая.',
      en: 'Zhang Yimou\'s film about a warrior who must kill the king. A visually stunning story about sacrifice for peace and the unity of China.',
    },
  },
  {
    id: 'fist-of-legend',
    year: 1994,
    title: { ru: 'Кулак легенды', en: 'Fist of Legend' },
    desc: {
      ru: 'Дзет Ли в роли Чэнь Зеня — студента, возвращающегося из Японии в Китай. Фильм о национальном достоинстве и мастерстве кунг-фу.',
      en: 'Jet Li as Chen Zhen — a student returning from Japan to China. A film about national dignity and Kung Fu mastery.',
    },
  },
  {
    id: 'iron-monkey',
    year: 1993,
    title: { ru: 'Железная обезьяна', en: 'Iron Monkey' },
    desc: {
      ru: 'Классика жанра с Донни Йеном. Врач-бандит защищает бедных жителей, используя искусство боя. Юмор и отличные трюки.',
      en: 'A genre classic with Donnie Yen. A doctor-bandit protects the poor using martial arts. Great humor and stunts.',
    },
  },
  {
    id: 'once-upon-a-time-china',
    year: 1991,
    title: { ru: 'Однажды в Китае', en: 'Once Upon a Time in China' },
    desc: {
      ru: 'Джет Ли в роли легендарного мастера Вонг Фейхуна. История о столкновении традиционного Китая с западным влиянием.',
      en: 'Jet Li as the legendary master Wong Fei-hung. A story of traditional China colliding with Western influence.',
    },
  },
  {
    id: 'tiger-cage-2',
    year: 1996,
    title: { ru: 'Тигриная клетка 2', en: 'Tiger Cage 2' },
    desc: {
      ru: 'Донни Йен как детектив, распутывающий дело о коррупции. Быстрые и техничные боевые сцены.',
      en: 'Donnie Yen as a detective unraveling a corruption case. Fast and technical fight scenes.',
    },
  },
  {
    id: 'Ip-Man',
    year: 2008,
    title: { ru: 'Ип Ман', en: 'Ip Man' },
    desc: {
      ru: 'История мастера Вин Чуна, учителя Брюса Ли. Фильм о достоинстве, мастерстве и пути воина в годы японской оккупации.',
      en: 'The story of Wing Chun master Bruce Lee\'s teacher. A film about dignity, mastery, and the warrior\'s path during the Japanese occupation.',
    },
  },
  {
    id: 'shadow',
    year: 2018,
    title: { ru: 'Тень', en: 'Shadow' },
    desc: {
      ru: 'Чжан Имоу создал визуально потрясающий боевик в стиле ин-ян. История о тени военачальника, которая становится ключевой фигурой в войне.',
      en: 'Zhang Yimou created a visually stunning yin-yang style action film. The story of a warlord\'s shadow who becomes a key figure in war.',
    },
  },
  {
    id: 'the-grandmaster',
    year: 2013,
    title: { ru: 'Великий мастер', en: 'The Grandmaster' },
    desc: {
      ru: 'Вонг Кар-вай рассказывает об Ип Мане и золотом веке китайских боевых искусств. Поэтичное кино о времени и утрате.',
      en: 'Wong Kar-wai tells the story of Ip Man and the golden age of Chinese martial arts. Poetic cinema about time and loss.',
    },
  },
]

export default function MartialArtsFilmsClient() {
  const { t, locale } = useLanguage()

  return (
    <div className="relative min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/zen-martial"
          className="inline-flex items-center gap-2 text-amber-500/50 hover:text-amber-400 transition-colors mb-8 text-sm"
        >
          ← {t.common.back}
        </Link>

        <div className="text-center mb-12">
          <span className="text-5xl block mb-4">🎬</span>
          <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-golden-gradient mb-4">
            {locale === 'ru' ? 'Фильмы о боевых искусствах' : 'Martial Arts Films'}
          </h1>
          <p className="text-amber-200/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {locale === 'ru'
              ? 'Подборка лучших фильмов о боевых искусствах, где боевые техники переплетаются с духовными практиками и философией.'
              : 'A curated collection of martial arts films where fighting techniques intertwine with spiritual practices and philosophy.'}
          </p>
        </div>

        <div className="space-y-4">
          {martialArtsFilms.map((film) => (
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

        <div className="text-center mt-10">
          <Link
            href="/zen-martial"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #b45309, #92400e)',
              color: '#fde68a',
              boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}
          >
            🥋 {locale === 'ru' ? 'Вернуться к Дзен и боевым искусствам' : 'Back to Zen & Martial Arts'} →
          </Link>
        </div>
      </div>
    </div>
  )
}
