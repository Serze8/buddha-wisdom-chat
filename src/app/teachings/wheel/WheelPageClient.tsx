'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { ContentBlock } from '@/components/ContentBlock'
import { CrossBanner } from '@/components/CrossBanner'
import DharmachakraVideo from '@/components/DharmachakraVideo'
import { l } from '@/lib/lang'
import Link from 'next/link'

const parts = [
  {
    title: { ru: 'Ступица', en: 'The hub' },
    text: {
      ru: 'Устойчивость ума. Без внутренней опоры путь невозможен — ни для монаха, ни для царя.',
      en: 'Stability of the mind. Without inner support the path is impossible — neither for a monk nor for a king.',
    },
    emoji: '🎯',
  },
  {
    title: { ru: 'Восемь спиц', en: 'Eight spokes' },
    text: {
      ru: 'Восьмеричный путь. Не заповеди — система развития. Спицы держат обод, шаг за шагом.',
      en: 'The Eightfold Path. Not commandments — a system of development. Spokes hold the rim, step by step.',
    },
    emoji: '🛤️',
  },
  {
    title: { ru: 'Обод', en: 'The rim' },
    text: {
      ru: 'Целостность и дисциплина практики. Всё связано: воззрение, речь, действие, внимание.',
      en: 'Integrity and discipline of practice. Everything is connected: view, speech, action, mindfulness.',
    },
    emoji: '🔗',
  },
]

const traditions = [
  {
    title: { ru: 'Бенарес — первый поворот', en: 'Benares — the first turning' },
    text: {
      ru: 'Олений парк Испатаны. Пятеро аскетов. Четыре Истины и Восьмеричный путь.',
      en: 'The deer park of Isipatana. Five ascetics. The Four Truths and the Eightfold Path.',
    },
    href: '/teachings/vision',
  },
  {
    title: { ru: 'Гридхракута — второй поворот', en: 'Vulture Peak — the second turning' },
    text: {
      ru: 'Сутра сердца. Пустота не отрицает мир — она объясняет его: всё взаимозависимо, ничто не самосуще.',
      en: 'The Heart Sutra. Emptiness does not negate the world — it explains it: all is interdependent, nothing is self-existing.',
    },
    href: '/teachings/path',
  },
  {
    title: { ru: 'Вайшали — третий поворот', en: 'Vesali — the third turning' },
    text: {
      ru: 'Сутра львиного рыка. Природа будды — в каждом. Колесо не принадлежит никому и всем сразу.',
      en: 'The Lion\'s Roar Sutra. Buddha-nature is in everyone. The wheel belongs to no one and to everyone at once.',
    },
    href: '/teachings/wheel',
  },
]

const terms = [
  { pali: 'Dharma', ru: 'Дхарма', en: 'Teaching, law, phenomenon', def: { ru: 'То, что держит мир от распада.', en: 'That which holds the world from falling apart.' } },
  { pali: 'Dukkha', ru: 'Дуккха', en: 'Suffering, unsatisfactoriness', def: { ru: 'Трещина в любом опыте.', en: 'The crack in any experience.' } },
  { pali: 'Anattā', ru: 'Анатта', en: 'Non-self', def: { ru: 'Нет постоянного «я» за процессами.', en: 'No permanent self behind the processes.' } },
  { pali: 'Anicca', ru: 'Аничча', en: 'Impermanence', def: { ru: 'Всё течёт, даже троны.', en: 'Everything flows, even thrones.' } },
  { pali: 'Kamma', ru: 'Карма', en: 'Action, cause-effect', def: { ru: 'Не судьба — а закон.', en: 'Not fate — a law.' } },
  { pali: 'Nirvāṇa', ru: 'Нирвана', en: 'Extinction, liberation', def: { ru: 'Угасание жажды, не «рай».', en: 'The fading of craving, not "heaven".' } },
  { pali: 'Saṅgha', ru: 'Сангха', en: 'Community', def: { ru: 'Те, кто вращает колесо вместе.', en: 'Those who turn the wheel together.' } },
  { pali: 'Bodhisattva', ru: 'Бодхисаттва', en: 'Being of enlightenment', def: { ru: 'Тот, кто обещает стать буддой для всех.', en: 'One who vows to become a Buddha for all.' } },
  { pali: 'Cakravartin', ru: 'Чакравартин', en: 'Universal monarch', def: { ru: 'Правитель, который вращает колесо закона.', en: 'A ruler who turns the wheel of the law.' } },
  { pali: 'Dharmacakra', ru: 'Дхармачакра', en: 'Wheel of Dharma', def: { ru: 'Символ и действие: вращение учения.', en: 'Symbol and act: the turning of the teaching.' } },
  { pali: 'Stūpa', ru: 'Ступа', en: 'Stupa, monument', def: { ru: 'Тело Будды в пространстве и времени.', en: 'The Buddha\'s body in space and time.' } },
  { pali: 'Vipassanā', ru: 'Випассана', en: 'Insight meditation', def: { ru: 'Видеть вещи такими, какие они есть.', en: 'Seeing things as they are.' } },
]

const moreTeachings = [
  {
    id: 'dependent-arising',
    emoji: '🔗',
    title: { ru: 'Взаимозависимое возникновение', en: 'Dependent Origination' },
    points: {
      ru: ['Все явления возникают в зависимости от условий', 'Когда условия прекращаются, явления прекращаются', 'Понимание этого разрывает цепь страдания', '12 звеньев объясняют цикл бытия'],
      en: ['All phenomena arise in dependence on conditions', 'When conditions cease, phenomena cease', 'Understanding this breaks the chain of suffering', 'The 12 links explain the cycle of existence'],
    },
  },
  {
    id: 'metta',
    emoji: '💜',
    title: { ru: 'Метта (бескорыстная любовь)', en: 'Mettā (Loving-Kindness)' },
    points: {
      ru: ['Любовь без привязанности и ожиданий', 'Распространяйте доброту на всех существ одинаково', 'Начните с себя, затем расширяйтесь наружу', 'Метта Сутта — основополагающий текст'],
      en: ['Love without attachment or expectation', 'Extend kindness to all beings equally', 'Start with yourself, then expand outward', 'The Metta Sutta is the foundational text'],
    },
  },
]

function TeachingAccordion({ teaching, lang }: { teaching: typeof moreTeachings[0]; lang: 'ru' | 'en' }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="golden-card rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left transition-colors"
        style={{ background: open ? 'rgba(245, 158, 11, 0.03)' : 'transparent' }}
      >
        <span className="text-2xl shrink-0">{teaching.emoji}</span>
        <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700/80 flex-1">
          {l(teaching.title, lang)}
        </h3>
        <svg
          className={`w-5 h-5 text-amber-500/40 transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 animate-fade-in" style={{ borderLeft: '3px solid rgba(245, 158, 11, 0.3)' }}>
          <ul className="space-y-2">
            {l(teaching.points, lang).map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-amber-700/50 text-sm leading-relaxed">
                <span className="text-amber-500/50 mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function WheelPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">☸️</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-bold text-golden-gradient mb-4 leading-tight">
          {ru ? 'Вращать, а не владеть' : 'Turn, do not own'}
        </h1>
        <p className="text-amber-600/60 text-xl md:text-2xl font-[var(--font-cormorant)] italic max-w-3xl mx-auto">
          {ru
            ? 'Дхармачакра — не символ. Это приглашение.'
            : 'The Dharmachakra is not a symbol. It is an invitation.'}
        </p>
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">☸</span>
          <div className="golden-divider flex-1" />
        </div>
      </div>

      <div className="mt-16 space-y-16">
        <ContentBlock title={ru ? 'Что означает колесо с восемью спицами' : 'What a wheel with eight spokes means'}>
          <p>
            {ru
              ? 'У колеса три части — и каждая учит. Дхармачакра — не «колесо жизни», не круг сансары. Это указание на выход из него.'
              : 'The wheel has three parts — and each one teaches. The Dharmachakra is not the "wheel of life", not the circle of samsara. It points the way out of it.'}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {parts.map((part) => (
              <div key={part.title.en} className="golden-card rounded-2xl p-5">
                <span className="text-2xl block mb-3">{part.emoji}</span>
                <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700/90 mb-2">
                  {l(part.title, lang)}
                </h3>
                <p className="text-amber-700/40 text-sm leading-relaxed">
                  {l(part.text, lang)}
                </p>
              </div>
            ))}
          </div>
        </ContentBlock>

        {/* Video */}
        <ContentBlock title={ru ? 'Дхармачакра на видео' : 'The Dharmachakra on video'}>
          <p>
            {ru
              ? 'Разбор символа: ступица, спицы, обод — и почему колесо «вращается внутри».'
              : 'An analysis of the symbol: hub, spokes, rim — and why the wheel "turns within".'}
          </p>
          <DharmachakraVideo />
        </ContentBlock>

        <ContentBlock title={ru ? 'Три поворота в традиции' : 'Three turnings in tradition'}>
          <p>
            {ru
              ? 'Будда вращал колесо трижды. Не потому что Дхарма меняется — потому что мы смотрим с разных берегов реки.'
              : 'The Buddha turned the wheel three times. Not because the Dharma changes — because we watch from different banks of the river.'}
          </p>
          <div className="space-y-4 mt-6">
            {traditions.map((t) => (
              <div key={t.title.en} className="golden-card rounded-2xl p-6">
                <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700/90 mb-2">
                  {l(t.title, lang)}
                </h3>
                <p className="text-amber-700/50 text-sm leading-relaxed mb-3">
                  {l(t.text, lang)}
                </p>
                <Link href={t.href} className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium hover:text-amber-500 transition-colors">
                  {ru ? 'Читать →' : 'Read →'}
                </Link>
              </div>
            ))}
          </div>
        </ContentBlock>

        {/* Glossary */}
        <ContentBlock title={ru ? '12 спиц колеса: ключевые термины' : 'Twelve spokes of the wheel: key terms'}>
          <p>
            {ru
              ? 'Слова, которые встречаются на всём сайте. Знать их — значит читать без барьера.'
              : 'Words that appear across the whole site. Knowing them means reading without a barrier.'}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {terms.map((term) => (
              <div key={term.pali} className="golden-card rounded-2xl p-5">
                <p className="text-amber-400/70 text-xs font-semibold uppercase tracking-widest mb-1">{term.pali}</p>
                <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700/90">
                  {ru ? term.ru : term.en}
                </h3>
                <p className="text-amber-700/40 text-sm leading-relaxed mt-2">
                  {l(term.def, lang)}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-3 mt-6">
            {moreTeachings.map((teaching) => (
              <TeachingAccordion key={teaching.id} teaching={teaching} lang={lang} />
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title={ru ? 'Современный поворот' : 'The modern turning'}>
          <p>
            {ru
              ? 'Каждый, кто делится Дхармой, вращает колесо. Не нужно быть Буддой или царём — нужно передать учение дальше. Вопросом, ответом, молчаливым пониманием.'
              : 'Everyone who shares the Dharma turns the wheel. You do not need to be a Buddha or a king — you need to pass the teaching on. With a question, an answer, a silent understanding.'}
          </p>
          <div className="golden-card rounded-2xl p-6 italic text-amber-600/80 border border-amber-700/30">
            {ru
              ? '«Ашока вращал колесо камнем и колоннами. Мы — словом и вниманием.»'
              : '"Ashoka turned the wheel with stone and pillars. We — with words and attention."'}
          </div>
        </ContentBlock>

        <CrossBanner
          href="/dharma-chats/sangha"
          label={ru ? 'Сангха' : 'The Sangha'}
          title={ru ? 'Колесо не вращается одно. Присоединиться →' : 'The wheel does not turn alone. Join →'}
          variant="chakravartin"
        />
      </div>
    </div>
  )
}
