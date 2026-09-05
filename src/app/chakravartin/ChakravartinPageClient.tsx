'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { HeroPair } from '@/components/HeroPair'
import { ContentBlock } from '@/components/ContentBlock'
import { CrossBanner } from '@/components/CrossBanner'
import Link from 'next/link'

export default function ChakravartinPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  const hero = ru
    ? {
        title: 'Он покорил мечом.',
        subtitle: 'Он удержал Дхармой.',
        beforeLabel: 'Царь-завоеватель',
        beforeTitle: 'Ашока до Калинги',
        beforeText: 'Воин, наследник империи Маурьев. Для него власть была доказательством силы — Чакравартин по праву крови и меча.',
        afterLabel: 'Дхарма-раджа',
        afterTitle: 'Ашока после обращения',
        afterText: 'Не отрёкся от трона — изменил трон. Выгравировал Дхарму на камне, зная: империи падают, но слова остаются.',
      }
    : {
        title: 'He conquered with the sword.',
        subtitle: 'He ruled with the Dharma.',
        beforeLabel: 'Warrior king',
        beforeTitle: 'Ashoka before Kalinga',
        beforeText: 'A warrior, heir to the Maurya empire. For him, power was proof of strength — a Chakravartin by blood and by sword.',
        afterLabel: 'Dharma-raja',
        afterTitle: 'Ashoka after his conversion',
        afterText: 'He did not renounce the throne — he transformed it. He carved the Dharma into stone, knowing: empires fall, but words remain.',
      }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">👑</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-6xl font-bold text-golden-gradient mb-4 leading-tight">
          {hero.title}
        </h1>
        <p className="text-amber-600/60 text-xl md:text-2xl font-[var(--font-cormorant)] italic">
          {hero.subtitle}
        </p>
        <div className="flex items-center justify-center my-8">
          <div className="golden-divider flex-1" />
          <span className="px-4 text-2xl">☸</span>
          <div className="golden-divider flex-1" />
        </div>
      </div>

      <HeroPair
        beforeLabel={hero.beforeLabel}
        beforeTitle={hero.beforeTitle}
        beforeText={hero.beforeText}
        afterLabel={hero.afterLabel}
        afterTitle={hero.afterTitle}
        afterText={hero.afterText}
      />

      {/* Content */}
      <div className="mt-16 space-y-16">
        <ContentBlock
          id="kalinga"
          title={ru ? 'Калинга: когда победа — поражение' : 'Kalinga: when victory is defeat'}
          banner={
            <CrossBanner
              href="/buddha"
              label={ru ? 'Исток' : 'The origin'}
              title={ru ? 'Сиддхартха: тот, кто отказался →' : 'Siddhartha: the one who renounced →'}
              variant="buddha"
            />
          }
        >
          <p>
            {ru
              ? 'После битвы Ашока шёл среди трупов. Он одержал Калингу — но Калинга одержала его. «Я забрал их жизни и потерял свою душу».'
              : 'After the battle Ashoka walked among the corpses. He had won Kalinga — but Kalinga had won him. "I took their lives and lost my own soul."'}
          </p>
          <p>
            {ru
              ? 'Это был момент, когда Чакравартин впервые услышал Будду. Не через монаха — через тишину после крика.'
              : 'This was the moment the Chakravartin first heard the Buddha. Not through a monk — through the silence after the scream.'}
          </p>
          <div className="golden-card rounded-2xl p-6 italic text-amber-600/80 border border-amber-700/30">
            {ru
              ? '«Сиддхартха не воевал. Он увидел страдание раньше, чем причинил его. Но без его отказания не было бы этого принятия.»'
              : '"Siddhartha did not fight. He saw suffering before he caused it. But without his renunciation, there would have been no acceptance."'}
          </div>
        </ContentBlock>

        <ContentBlock title={ru ? 'Обращение' : 'The conversion'}>
          <p>
            {ru
              ? 'Ашока спросил буддийского монаха: «Что такое Дхарма?» Монах ответил: «То, что делает тебя меньше — и мир больше».'
              : 'Ashoka asked a Buddhist monk: "What is the Dharma?" The monk replied: "That which makes you smaller — and the world greater."'}
          </p>
          <p>
            {ru
              ? 'Ашока не стал монахом. Он стал Дхарма-раджей — царём закона. Это был третий путь: не отречение, не грабёж, но служение.'
              : 'Ashoka did not become a monk. He became a Dharma-raja — a king of the law. This was the third way: not renunciation, not plunder, but service.'}
          </p>
          <p className="font-[var(--font-cormorant)] text-2xl text-golden-gradient">
            {ru ? '«Дхарма как закон: сильнее армии, глубже короны.»' : '"Dharma as law: stronger than an army, deeper than a crown."'}
          </p>
        </ContentBlock>

        <ContentBlock
          id="edicts"
          title={ru ? 'Эдикты: Дхарма, высеченная в камне' : 'The edicts: Dharma carved in stone'}
          banner={
            <CrossBanner
              href="/teachings/path"
              label={ru ? 'Учение' : 'Teachings'}
              title={ru ? 'Путь — как Ашока применил Дхарму →' : 'The Path — how Ashoka applied the Dharma →'}
              variant="chakravartin"
            />
          }
        >
          <p>
            {ru
              ? 'Ашока выгравировал Дхарму на камне. Не для красоты — для вечности. 14 основных эдиктов на языках империи. Первая в истории попытка сделать этику законом, сильнее армии.'
              : 'Ashoka carved the Dharma into stone. Not for beauty — for eternity. Fourteen major edicts in the languages of the empire. The first attempt in history to make ethics a law stronger than any army.'}
          </p>
          <p>
            {ru
              ? 'Он знал: империи падают, но слова остаются. Его эдикты — послание через тысячелетия.'
              : 'He knew: empires fall, but words remain. His edicts are a message across the millennia.'}
          </p>
        </ContentBlock>

        <ContentBlock title={ru ? 'Ступы и миссионеры: колесо катится дальше' : 'Stupas and missionaries: the wheel rolls on'}>
          <p>
            {ru
              ? 'Махинда — в Шри-Ланку. Миссии на запад, в Грецию, в Египет. Ашока не просто правил — он вращал колесо Дхармы как никто до него.'
              : 'Mahinda — to Sri Lanka. Missions to the west, to Greece, to Egypt. Ashoka did not merely rule — he turned the Wheel of Dharma like no one before him.'}
          </p>
          <p>
            {ru
              ? 'Бодхидхарма, который через века дойдёт до Шаолиня, — потомок этой волны. Дхарма, перенесённая через границы империи.'
              : 'Bodhidharma, who would reach Shaolin centuries later, is a descendant of this wave. The Dharma, carried across the borders of an empire.'}
          </p>
        </ContentBlock>

        {/* Series link */}
        <div className="text-center space-y-3">
          <Link
            href="/chakravartin/series"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-amber-400/80 border border-amber-700/40 hover:text-amber-500 hover:border-amber-600/60 transition-colors"
          >
            📺 {ru ? 'Сериал «Чакравартин» — 442 серии' : 'The "Chakravartin" series — 442 episodes'}
          </Link>
          <div>
            <Link href="/retreats" className="text-amber-400/60 text-sm hover:text-amber-500 transition-colors">
              {ru ? 'Древние ступы → современные ретриты' : 'Ancient stupas → modern retreats'} →
            </Link>
          </div>
        </div>

        {/* Final cross banner */}
        <CrossBanner
          href="/buddha"
          label={ru ? 'Замкнуть круг' : 'Close the circle'}
          title={ru
            ? 'Вернуться к тому, кто открыл Дхарму, чтобы Ашока мог её принять →'
            : 'Return to the one who opened the Dharma, so that Ashoka could accept it →'}
          variant="buddha"
        />
      </div>
    </div>
  )
}
