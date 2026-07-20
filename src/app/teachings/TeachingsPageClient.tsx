'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'

const teachings = [
  {
    id: 'four-truths',
    emoji: '☸️',
    title: { en: 'Four Noble Truths', ru: 'Четыре благородные истины' },
    points: {
      en: ['Dukkha — Life involves suffering', 'Samudaya — Suffering has a cause (craving)', 'Nirodha — Suffering can end', 'Magga — The Eightfold Path leads to the end'],
      ru: ['Дуккха — Жизнь включает страдание', 'Самудайя — У страдания есть причина (жажда)', 'Ниродха — Страдание может закончиться', 'Магга — Восьмеричный путь ведёт к концу'],
    },
  },
  {
    id: 'eightfold-path',
    emoji: '🛤️',
    title: { en: 'Noble Eightfold Path', ru: 'Благородный Восьмеричный путь' },
    points: {
      en: ['Right View', 'Right Intention', 'Right Speech', 'Right Action', 'Right Livelihood', 'Right Effort', 'Right Mindfulness', 'Right Concentration'],
      ru: ['Правильный взгляд', 'Правильное намерение', 'Правильная речь', 'Правильное действие', 'Правильный образ жизни', 'Правильное усилие', 'Правильная осознанность', 'Правильная концентрация'],
    },
  },
  {
    id: 'anatman',
    emoji: '🪷',
    title: { en: 'Anattā (Non-Self)', ru: 'Анатман (Не-Я)' },
    points: {
      en: ['No permanent self exists', 'Everything is impermanent', 'Attachment causes suffering', 'Realize non-self to be free'],
      ru: ['Постоянного «я» не существует', 'Всё непостоянно', 'Прикрепление вызывает страдание', 'Осознание не-Я ведёт к свободе'],
    },
  },
  {
    id: 'karma',
    emoji: '🔄',
    title: { en: 'Karma', ru: 'Карма' },
    points: {
      en: ['Actions have consequences', 'Intention matters most', 'Good actions lead to happiness', 'We shape our own future'],
      ru: ['Действия имеют последствия', 'Намерение важнее всего', 'Добрые действия ведут к счастью', 'Мы формируем своё будущее'],
    },
  },
  {
    id: 'nirvana',
    emoji: '✨',
    title: { en: 'Nirvana', ru: 'Нирвана' },
    points: {
      en: ['The cessation of suffering', 'Freedom from the cycle of rebirth', 'Ultimate peace and liberation', 'Attained through the Eightfold Path'],
      ru: ['Прекращение страдания', 'Освобождение из цикла перерождений', 'Высший покой и освобождение', 'Достижимо через Восьмеричный путь'],
    },
  },
  {
    id: 'three-marks',
    emoji: '🔺',
    title: { en: 'Three Marks of Existence', ru: 'Три печати бытия' },
    points: {
      en: ['Anicca — Everything is impermanent', 'Dukkha — Suffering is inherent in existence', 'Anattā — There is no permanent self'],
      ru: ['Аничча — Всё непостоянно', 'Дуккха — Страдание присуще бытию', 'Анатман — Нет постоянного «я»'],
    },
  },
  {
    id: 'dependent-arising',
    emoji: '🔗',
    title: { en: 'Dependent Origination', ru: 'Взаимозависимое возникновение' },
    points: {
      en: ['All phenomena arise in dependence on conditions', 'When conditions cease, phenomena cease', 'Understanding this breaks the chain of suffering', 'The 12 links explain the cycle of existence'],
      ru: ['Все явления возникают в зависимости от условий', 'Когда условия прекращаются, явления прекращаются', 'Понимание этого разрывает цепь страдания', '12 звеньев объясняют цикл бытия'],
    },
  },
  {
    id: 'metta',
    emoji: '💜',
    title: { en: 'Mettā (Loving-Kindness)', ru: 'Метта (Бескорыстная любовь)' },
    points: {
      en: ['Love without attachment or expectation', 'Extend kindness to all beings equally', 'Start with yourself, then expand outward', 'The Metta Sutta is the foundational text'],
      ru: ['Любовь без привязанности и ожиданий', 'Распространяйте доброту на всех существ одинаково', 'Начните с себя, затем расширяйтесь наружу', 'Метта Сутта — основополагающий текст'],
    },
  },
]

export default function TeachingsPageClient() {
  const { t, locale } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {t.nav.teachings}
      </h1>

      <div className="space-y-6">
        {teachings.map((teaching) => (
          <div key={teaching.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{teaching.emoji}</span>
              <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-gray-900 dark:text-gray-100">
                {(teaching.title as any)[locale] || teaching.title.en}
              </h2>
            </div>
            <ul className="space-y-2">
              {((teaching.points as any)[locale] || teaching.points.en).map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <span className="text-amber-500 mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <PromoBanner page="teachings" />
      </div>

      {/* Video Section */}
      <section className="mt-16">
        <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-100 text-center mb-8">
          {locale === 'ru' ? 'Видео' : 'Videos'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Short (vertical) */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              {locale === 'ru' ? 'Шортс' : 'Short'}
            </h3>
            <div className="relative mx-auto" style={{ maxWidth: 320 }}>
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src="https://www.youtube.com/embed/P04rX4-1TNo"
                  title="Dharmachakra — Short"
                  className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Full-screen (16:9) */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              {locale === 'ru' ? 'Полноэкранный' : 'Full Video'}
            </h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/P04rX4-1TNo"
                title="Dharmachakra — Full Video"
                className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {locale === 'ru' ? 'Краткое содержание' : 'Summary'}
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
            <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> {locale === 'ru' ? 'Колесо Дхармы (Дхармачакра) — один из древнейших символов буддизма.' : 'The Dharma Wheel (Dharmachakra) is one of the oldest symbols of Buddhism.'}</li>
            <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> {locale === 'ru' ? 'Связан с первым наставлением Будды в Сарнатхе — Четыре благородные истины и Восьмеричный путь.' : 'Connected to the Buddha\'s first teaching in Sarnath — the Four Noble Truths and the Eightfold Path.'}</li>
            <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> {locale === 'ru' ? 'Центр (ступица) — устойчивость ума. Восемь спиц — Восьмеричный путь. Обод — целостность практики.' : 'Hub — mental stability. Eight spokes — the Eightfold Path. Rim — integrity of practice.'}</li>
            <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> {locale === 'ru' ? 'Дхармачакра — не «колесо жизни». Это указание на выход из замкнутого круга страдания.' : 'Dharmachakra is not the "Wheel of Life." It points to the way out of the cycle of suffering.'}</li>
          </ul>
        </div>

        {/* Transcript (Russian) */}
        <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-800/30 p-6">
          <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">
            {locale === 'ru' ? 'Транскрипт видео' : 'Video Transcript'}
            <span className="ml-2 text-sm font-normal text-amber-600 dark:text-amber-400">(RU)</span>
          </h3>
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <p><strong className="text-amber-700 dark:text-amber-300">0:00</strong> Прежде чем начать — короткое уточнение.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:04</strong> Во-первых, этот канал посвящён философскому подходу к вопросу.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:08</strong> Во-вторых, мы рассматриваем буддийскую традицию как способ понимания реальности, а не как обсуждение различных религиозных взглядов.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:12</strong> Нас интересует суть идей, их смысл, и главное — путь освобождения.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:16</strong> Теперь — по теме.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:20</strong> Колесо Дхармы, или Дхармачакра — один из самых древних символов буддизма.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:24</strong> На санскрите «Дхармачакра» означает «колесо учения».</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:28</strong> Этот символ связывают с первым наставлением Будды после пробуждения. Оно было дано в Сарнатхе.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:32</strong> Там были изложены Четыре благородные истины и Благородный восьмеричный путь.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:36</strong> Это событие называют «первым поворотом Колеса Дхармы».</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:40</strong> Проще говоря, «поворот» означает, что учение было впервые ясно изложено.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:44</strong> То, что было пережито лично, стало объяснено первым слушателям.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:48</strong> Колесо — не магический знак и не оберег. Это символ пути освобождения. Схема, указывающая на выход из страдания.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">0:56</strong> У колеса три части.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:00</strong> Центр — ступица. Она символизирует устойчивость ума. Без внутренней устойчивости путь невозможен.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:08</strong> Восемь спиц — это Благородный восьмеричный путь: правильное понимание, правильное намерение, правильная речь, правильное действие, правильный образ жизни, правильное усилие, правильная осознанность, правильное сосредоточение.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:20</strong> Это не заповеди. Это система развития.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:24</strong> Обод соединяет всё вместе. Он символизирует целостность и дисциплину практики.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:28</strong> Важно различать. Колесо Дхармы — не «колесо жизни». И в нём нет образа страдания.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:36</strong> В буддийской традиции есть другой символ, изображающий сансару — круговорот существования.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:40</strong> Дхармачакра указывает не на замкнутый круг, а на выход из него.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:44</strong> Когда человек понимает причину страдания и видит путь его прекращения — Колесо начинает вращаться внутри него самого.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:48</strong> Колесо Дхармы — это не символ веры. Это модель понимания и путь освобождения.</p>
            <p><strong className="text-amber-700 dark:text-amber-300">1:56</strong> Поэтому этот образ остаётся центральным в буддийской традиции до сих пор.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
