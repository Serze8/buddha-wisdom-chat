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
    </div>
  )
}
