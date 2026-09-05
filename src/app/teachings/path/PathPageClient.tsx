'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ContentBlock } from '@/components/ContentBlock'
import { CrossBanner } from '@/components/CrossBanner'
import { l } from '@/lib/lang'
import Link from 'next/link'

const eight = [
  {
    id: 'right-view',
    title: { ru: 'Правильное воззрение', en: 'Right View' },
    buddha: { ru: 'Всё — Дуккха. Мир не даёт опоры.', en: 'All is Dukkha. The world offers no footing.' },
    ashoka: { ru: 'Ашока заменил «я — царь» на «я — слуга Дхармы».', en: 'Ashoka replaced "I am king" with "I am a servant of the Dharma".' },
    href: '/chakravartin#edicts',
    linkLabel: { ru: 'Эдикты →', en: 'The edicts →' },
  },
  {
    id: 'right-intention',
    title: { ru: 'Правильное намерение', en: 'Right Intention' },
    buddha: { ru: 'Освободить всех существ.', en: 'To liberate all beings.' },
    ashoka: { ru: 'Править для всех существ.', en: 'To rule for all beings.' },
  },
  {
    id: 'right-speech',
    title: { ru: 'Правильная речь', en: 'Right Speech' },
    buddha: { ru: 'Поворот колеса в Бенаресе.', en: 'The first turning of the wheel at Benares.' },
    ashoka: { ru: 'Эдикты на камне — речь на тысячелетия.', en: 'Edicts in stone — speech for millennia.' },
  },
  {
    id: 'right-action',
    title: { ru: 'Правильное действие', en: 'Right Action' },
    buddha: { ru: 'Шила, бхавана.', en: 'Sila, bhavana.' },
    ashoka: { ru: 'Законы о ненасилии, больницы, колодцы у дорог.', en: 'Laws of non-violence, hospitals, wells by the roads.' },
    href: '/chakravartin#edicts',
    linkLabel: { ru: 'Как закон стал Дхармой →', en: 'How law became Dharma →' },
  },
  {
    id: 'right-livelihood',
    title: { ru: 'Правильный образ жизни', en: 'Right Livelihood' },
    buddha: { ru: 'Подаяние, странствие.', en: 'Alms, wandering.' },
    ashoka: { ru: 'Налоги на Дхарму, а не на войну.', en: 'Taxes for the Dharma, not for war.' },
  },
  {
    id: 'right-effort',
    title: { ru: 'Правильное усилие', en: 'Right Effort' },
    buddha: { ru: 'Медитация.', en: 'Meditation.' },
    ashoka: { ru: 'Слушать подданных.', en: 'Listening to his subjects.' },
  },
  {
    id: 'right-mindfulness',
    title: { ru: 'Правильное внимание', en: 'Right Mindfulness' },
    buddha: { ru: 'Випассана.', en: 'Vipassana.' },
    ashoka: { ru: 'Инспекции, эдикты о справедливости.', en: 'Inspections, edicts on justice.' },
    href: '/teachings/practice',
    linkLabel: { ru: 'Тело пути: практика →', en: 'The body of the path: practice →' },
  },
  {
    id: 'right-concentration',
    title: { ru: 'Правильное сосредоточение', en: 'Right Concentration' },
    buddha: { ru: 'Самадхи.', en: 'Samadhi.' },
    ashoka: { ru: 'Самадхи через служение.', en: 'Samadhi through service.' },
  },
]

const tableRows = eight.map((row) => ({
  name: row.title,
  buddha: row.buddha,
  ashoka: row.ashoka,
}))

export default function PathPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">🧭</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-bold text-golden-gradient mb-4 leading-tight">
          {ru ? 'Идти, а не ждать' : 'Walk, do not wait'}
        </h1>
        <p className="text-amber-600/60 text-xl md:text-2xl font-[var(--font-cormorant)] italic max-w-3xl mx-auto">
          {ru
            ? 'Ашока не отрёкся от мира. Он изменил мир, следуя тому же пути.'
            : 'Ashoka did not renounce the world. He changed the world, walking the same path.'}
        </p>
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">☸</span>
          <div className="golden-divider flex-1" />
        </div>
      </div>

      <div className="mt-16 space-y-16">
        <ContentBlock title={ru ? 'Срединный путь' : 'The Middle Way'}>
          <p>
            {ru
              ? 'Не отречение, не погоня. Не монастырь, не дворец. Ашока не стал монахом — он стал царём, который правит как монах. Это и есть Срединный путь: не бежать от мира, а не быть им сожранным.'
              : 'Not renunciation, not pursuit. Not a monastery, not a palace. Ashoka did not become a monk — he became a king who rules like a monk. This is the Middle Way: not fleeing the world, but not being devoured by it.'}
          </p>
          <div className="golden-card rounded-2xl p-6 italic text-amber-600/80 border border-amber-700/30">
            {ru
              ? '«Сиддхартха отверг трон, чтобы увидеть путь. Ашока принял трон, чтобы путь не остановился.»'
              : '"Siddhartha renounced the throne to see the path. Ashoka accepted the throne so the path would not stop."'}
          </div>
        </ContentBlock>

        <ContentBlock title={ru ? 'Восьмеричный путь' : 'The Noble Eightfold Path'}>
          <p>
            {ru
              ? 'Восемь спиц одного колеса. Не заповеди — система развития. И для того, кто сидит в пещере, и для того, кто подписывает указы.'
              : 'Eight spokes of one wheel. Not commandments — a system of development. Both for one who sits in a cave and for one who signs decrees.'}
          </p>
          <div className="space-y-3 mt-6">
            {eight.map((step) => (
              <div key={step.id} className="golden-card rounded-2xl p-5">
                <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-700/90 mb-2">
                  {ru ? `Правильное ${step.title.ru}` : step.title.en}
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl p-4" style={{ background: 'rgba(245, 158, 11, 0.04)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
                    <p className="text-amber-400/60 text-xs font-semibold uppercase tracking-widest mb-1">🪷 {ru ? 'Будда' : 'Buddha'}</p>
                    <p className="text-amber-700/50">{l(step.buddha, lang)}</p>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: 'rgba(20, 184, 166, 0.04)', border: '1px solid rgba(20, 184, 166, 0.12)' }}>
                    <p className="text-teal-400/60 text-xs font-semibold uppercase tracking-widest mb-1">👑 {ru ? 'Ашока' : 'Ashoka'}</p>
                    <p className="text-amber-700/50">{l(step.ashoka, lang)}</p>
                    {step.href && step.linkLabel && (
                      <Link href={step.href} className="inline-flex items-center gap-1 text-teal-400 font-medium hover:text-teal-300 transition-colors mt-2">
                        {l(step.linkLabel, lang)}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title={ru ? 'Политика как практика' : 'Politics as practice'}>
          <p>
            {ru
              ? 'Восьмеричный путь — не инструкция для отшельника. Это инструкция для человека, который действует. Монах медитирует. Царь подписывает указ. Но оба — на одном пути.'
              : 'The Eightfold Path is not an instruction for a hermit. It is an instruction for a person who acts. A monk meditates. A king signs a decree. But both are on the same path.'}
          </p>
          <div className="overflow-x-auto rounded-2xl mt-6" style={{ border: '1px solid rgba(245, 158, 11, 0.15)' }}>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b" style={{ background: 'rgba(245, 158, 11, 0.04)', borderColor: 'rgba(245, 158, 11, 0.15)' }}>
                  <th className="p-4 text-amber-400 font-[var(--font-cormorant)] text-sm md:text-base">{ru ? 'Восьмеричный путь' : 'Eightfold Path'}</th>
                  <th className="p-4 text-amber-400 font-[var(--font-cormorant)] text-sm md:text-base">🪷 {ru ? 'Будда (монах)' : 'Buddha (monk)'}</th>
                  <th className="p-4 text-teal-400 font-[var(--font-cormorant)] text-sm md:text-base">👑 {ru ? 'Ашока (Чакравартин)' : 'Ashoka (Chakravartin)'}</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.name.ru} className="border-b" style={{ borderColor: 'rgba(245, 158, 11, 0.08)' }}>
                    <td className="p-4 text-amber-600/80 font-medium text-sm md:text-base">{ru ? row.name.ru : row.name.en}</td>
                    <td className="p-4 text-amber-700/40 text-sm md:text-base">{l(row.buddha, lang)}</td>
                    <td className="p-4 text-amber-700/40 text-sm md:text-base">{l(row.ashoka, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentBlock>

        <CrossBanner
          href="/teachings/wheel"
          label={ru ? 'Поворот 3' : 'Turning 3'}
          title={ru ? 'Путь ведёт не в нирвану одному. Вращение: вращать, а не владеть →' : 'The path leads not to nirvana alone. The Wheel: turn, do not own →'}
          variant="chakravartin"
        />
      </div>
    </div>
  )
}
