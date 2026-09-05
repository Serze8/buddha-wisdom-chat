'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ContentBlock } from '@/components/ContentBlock'
import { CrossBanner } from '@/components/CrossBanner'
import { l } from '@/lib/lang'
import Link from 'next/link'

const truths = [
  {
    id: 'dukkha',
    emoji: '💔',
    title: { ru: 'Дуккха — трещина', en: 'Dukkha — the crack' },
    story: {
      ru: 'Мир трещит по швам, и каждый трон стоит на трещине. Ашока увидел это после Калинги. Сиддхартха — до. Но оба увидели.',
      en: 'The world is cracking at the seams, and every throne stands on a crack. Ashoka saw it after Kalinga. Siddhartha — before. But both saw.',
    },
    points: {
      ru: ['Жизнь включает страдание', 'Дуккха — не «несчастье», а неудовлетворённость', 'Даже царь не избежит старости и смерти'],
      en: ['Life involves suffering', 'Dukkha is not "misery" but unsatisfactoriness', 'Even a king cannot escape old age and death'],
    },
    href: '/chakravartin#kalinga',
    linkLabel: { ru: 'Ашока увидел это в Калинге →', en: 'Ashoka saw it at Kalinga →' },
  },
  {
    id: 'samudaya',
    emoji: '🔥',
    title: { ru: 'Самудая — причина', en: 'Samudaya — the cause' },
    story: {
      ru: 'Причина страдания — жажда. Жажда удовольствий, существования, власти. Жажда власти — тоже жажда. Империя, сожранная голодом короны.',
      en: 'The cause of suffering is craving. Craving for pleasure, for existence, for power. Craving for power is also craving. An empire devoured by the hunger of a crown.',
    },
    points: {
      ru: ['У страдания есть причина — жажда', 'Чем больше имеешь, тем больше хочешь', 'Стена дворца не утоляет жажду'],
      en: ['Suffering has a cause — craving', 'The more you have, the more you want', 'Palace walls do not quench the thirst'],
    },
    href: undefined,
    linkLabel: undefined,
  },
  {
    id: 'nirodha',
    emoji: '🕊️',
    title: { ru: 'Нирodha — прекращение', en: 'Nirodha — the cessation' },
    story: {
      ru: 'Есть выход. Не через завоевание — через отпускание. Когда жажда угасает, трещина закрывается. Не борьбой — пониманием.',
      en: 'There is a way out. Not through conquest — through letting go. When craving fades, the crack closes. Not by struggle — by understanding.',
    },
    points: {
      ru: ['Страдание может закончиться', 'Выход — не в захвате, а в отпускании', 'Угасание жажды — это свобода'],
      en: ['Suffering can end', 'The exit is not in grasping but in letting go', 'The fading of craving is freedom'],
    },
    href: undefined,
    linkLabel: undefined,
  },
  {
    id: 'magga',
    emoji: '🛤️',
    title: { ru: 'Марга — путь', en: 'Magga — the path' },
    story: {
      ru: 'Путь. Восьмеричный. Даже для царя. Ашока не стал монахом — он стал царём, который правит как монах. Это и есть практика пути.',
      en: 'A path. The Eightfold. Even for a king. Ashoka did not become a monk — he became a king who rules like a monk. This is the practice of the path.',
    },
    points: {
      ru: ['Восьмеричный путь ведёт к концу страдания', 'Он для тех, кто действует, а не бежит', 'Второй поворот — как идти'],
      en: ['The Eightfold Path leads to the end of suffering', 'It is for those who act, not those who flee', 'The second turning — how to walk'],
    },
    href: '/teachings/path',
    linkLabel: { ru: 'Второй поворот: Путь →', en: 'The second turning: The Path →' },
  },
]

const marks = [
  {
    id: 'anicca',
    title: { ru: 'Аничча — непостоянство', en: 'Anicca — impermanence' },
    text: {
      ru: 'Всё течёт. Даже троны. Ашока знал: империи падают, но слова остаются — поэтому высекал Дхарму на камне.',
      en: 'Everything flows. Even thrones. Ashoka knew: empires fall, but words remain — that is why he carved the Dharma into stone.',
    },
    emoji: '🌊',
  },
  {
    id: 'dukkha-mark',
    title: { ru: 'Дуккха — неудовлетворённость', en: 'Dukkha — unsatisfactoriness' },
    text: {
      ru: 'Страдание присуще бытию. Не потому что мир «плох», а потому что ничто не даёт устойчивой опоры — ни богатство, ни слава.',
      en: 'Suffering is inherent to existence. Not because the world is "bad", but because nothing gives lasting support — neither wealth nor fame.',
    },
    emoji: '💧',
  },
  {
    id: 'anatman',
    title: { ru: 'Анатта — не-я', en: 'Anattā — non-self' },
    text: {
      ru: 'Нет постоянного «я». То, что мы называем «я», — постоянно меняющийся набор пяти совокупностей: форма, чувство, восприятие, формации, сознание. Как крупный интернет-ресурс, который кажется единым целым, но на деле — тысячи микросервисов. Никакого «единого сервера» нет. Так и «ты» — это процесс, а не вещь.',
      en: 'There is no permanent self. What we call "I" is a constantly changing set of five aggregates: form, feeling, perception, formations, consciousness. Like a large website that seems like one thing but is actually thousands of microservices. There is no single server — just processes working together. Similarly, "you" are a process, not a thing.',
    },
    emoji: '🪷',
  },
]

export default function VisionPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">🌅</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-bold text-golden-gradient mb-4 leading-tight">
          {ru ? 'Увидеть мир таким, какой он есть' : 'See the world as it is'}
        </h1>
        <p className="text-amber-600/60 text-xl md:text-2xl font-[var(--font-cormorant)] italic max-w-3xl mx-auto">
          {ru
            ? 'Сиддхартха увидел старость, болезнь, смерть — и понял: власть не спасёт.'
            : 'Siddhartha saw old age, sickness, and death — and understood: power cannot save.'}
        </p>
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">☸</span>
          <div className="golden-divider flex-1" />
        </div>
      </div>

      <div className="mt-16 space-y-16">
        <ContentBlock title={ru ? 'Не лекция, а диагноз' : 'Not a lecture, a diagnosis'}>
          <p>
            {ru
              ? 'Когда Будда сел в Бенаресе, он не читал лекцию. Он диагностировал. Как врач, который видит болезнь там, где пациент видит только усталость. Четыре Истины — не философия. Это протокол осмотра.'
              : 'When the Buddha sat in Benares, he did not give a lecture. He diagnosed. Like a physician who sees an illness where the patient sees only fatigue. The Four Truths are not philosophy. They are a protocol of examination.'}
          </p>
          <p className="italic text-amber-500/70">
            {ru
              ? '«В оленьем парке Будда сказал: "Я нашёл путь, который был забыт". И повернул колесо. Первый раз.»'
              : '"In the deer park the Buddha said: "I have found a path that was forgotten." And he turned the wheel. The first time."'}
          </p>
          <div className="pt-2">
            <Link href="/buddha#benares" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors">
              {ru ? '🪷 Как это было: Бенарес, олений парк →' : '🪷 How it happened: Benares, the deer park →'}
            </Link>
          </div>
        </ContentBlock>

        {/* Four Truths */}
        <ContentBlock title={ru ? 'Четыре благородные истины' : 'The Four Noble Truths'}>
          <p>
            {ru
              ? 'Не списком — историями. Четыре шага одного осмотра.'
              : 'Not as a list — as stories. Four steps of one examination.'}
          </p>
          <div className="space-y-4 mt-4">
            {truths.map((truth, i) => (
              <div key={truth.id} className="golden-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{truth.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700/90 mb-2">
                      {i + 1}. {l(truth.title, ru ? 'ru' : 'en')}
                    </h3>
                    <p className="text-amber-700/50 leading-relaxed mb-4">
                      {l(truth.story, ru ? 'ru' : 'en')}
                    </p>
                    <ul className="space-y-2 text-amber-700/40 text-sm">
                      {l(truth.points, ru ? 'ru' : 'en').map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-amber-500/60 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {truth.href && truth.linkLabel && (
                      <Link href={truth.href} className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium hover:text-amber-500 transition-colors mt-4">
                        {l(truth.linkLabel, ru ? 'ru' : 'en')}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        {/* Three Marks */}
        <ContentBlock
          id="three-marks"
          title={ru ? 'Три печати бытия' : 'Three marks of existence'}
          banner={
            <CrossBanner
              href="/teachings/path"
              label={ru ? 'Второй поворот' : 'The second turning'}
              title={ru ? 'Видение без пути — только отчаяние. Путь: идти, а не ждать →' : 'Vision without a path is only despair. The Path: walk, do not wait →'}
              variant="buddha"
            />
          }
        >
          <p>
            {ru
              ? 'Три характеристики любого опыта. Три способа увидеть мир честно — и перестать цепляться за то, что не может удержаться.'
              : 'Three characteristics of any experience. Three ways to see the world honestly — and to stop clinging to what cannot be held.'}
          </p>
          <div className="space-y-4 mt-4">
            {marks.map((mark) => (
              <div key={mark.id} id={mark.id === 'anatman' ? 'anatman' : undefined} className="golden-card rounded-2xl p-6 scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{mark.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700/90 mb-2">
                      {l(mark.title, ru ? 'ru' : 'en')}
                    </h3>
                    <p className="text-amber-700/50 leading-relaxed">
                      {l(mark.text, ru ? 'ru' : 'en')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        {/* Next */}
        <CrossBanner
          href="/teachings/path"
          label={ru ? 'Поворот 2' : 'Turning 2'}
          title={ru ? 'Путь: как Ашока прошёл его, не отрекаясь от мира →' : 'The Path: how Ashoka walked it without renouncing the world →'}
          variant="buddha"
        />
      </div>
    </div>
  )
}
