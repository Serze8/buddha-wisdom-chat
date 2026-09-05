'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { HeroPair } from '@/components/HeroPair'
import { ContentBlock } from '@/components/ContentBlock'
import { CrossBanner } from '@/components/CrossBanner'
import Link from 'next/link'

export default function BuddhaPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  const hero = ru
    ? {
        title: 'Он мог стать царём мира.',
        subtitle: 'Он стал Буддой.',
        beforeLabel: 'Принц Шакья',
        beforeTitle: 'Сиддхартха до отречения',
        beforeText: 'Окружённый роскошью дворца, защищённый от страдания. Жрецы предсказали: он станет либо Чакравартином — царём мира, либо Буддой — пробуждённым.',
        afterLabel: 'Будда Шакьямуни',
        afterTitle: 'После просветления',
        afterText: 'Оставил трон, чтобы найти трон, который не рушится. Нашёл Дхарму сильнее любой армии. Первый поворот колеса в Бенаресе.',
      }
    : {
        title: 'He could have ruled the world.',
        subtitle: 'He became the Buddha.',
        beforeLabel: 'Prince of the Shakyas',
        beforeTitle: 'Siddhartha before renunciation',
        beforeText: 'Surrounded by palace luxury, shielded from suffering. The priests foretold: he would become either a Chakravartin — king of the world, or a Buddha — the awakened one.',
        afterLabel: 'Buddha Shakyamuni',
        afterTitle: 'After enlightenment',
        afterText: 'He left a throne to find a throne that cannot crumble. He found a Dharma stronger than any army. The first turning of the wheel at Benares.',
      }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">🪷</span>
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
          title={ru ? 'Пророчество о двух путях' : 'The prophecy of two paths'}
          banner={
            <CrossBanner
              href="/chakravartin"
              label={ru ? 'Продолжение' : 'Continues'}
              title={ru ? 'Ашока: тот, кто принял →' : 'Ashoka: the one who accepted →'}
              variant="chakravartin"
            />
          }
        >
          <p>
            {ru
              ? 'Когда Сиддхартха родился, жрецы сказали царю: «Два пути перед ним. Если увидит страдание — станет Буддой и спасёт мир от иллюзии. Если не увидит — станет Чакравартином и подчинит мир силой».'
              : 'When Siddhartha was born, the priests told the king: "Two paths lie before him. If he sees suffering, he will become a Buddha and save the world from illusion. If he does not, he will become a Chakravartin and subdue the world by force."'}
          </p>
          <p>
            {ru
              ? 'Судьба Шакьев скрыла страдание. Но Сиддхартха нашёл его сам. И в этом поиске — не слабость, а сила, которую ни один Чакравартин не постиг.'
              : 'The fate of the Shakyas hid suffering. But Siddhartha found it himself. And in that search lies not weakness, but a strength no Chakravartin ever grasped.'}
          </p>
          <p className="italic text-amber-500/70">
            {ru
              ? '«Второй путь тоже был пройден — но другим. Через 250 лет царь Ашока принял то, что Сиддхартха отверг, и изменил само понятие власти.»'
              : '"The second path was also walked — but by another. 250 years later, King Ashoka accepted what Siddhartha renounced, and changed the very meaning of power."'}
          </p>
        </ContentBlock>

        <ContentBlock title={ru ? 'Три встречи и Великий отказ' : 'Three encounters and the Great Renunciation'}>
          <p>
            {ru
              ? 'Старость, болезнь, смерть — и монах. Четыре встречи, которые сломали стены дворца. Сиддхартха понял: власть над миром бессмысленна, если мир — это Дуккха.'
              : 'Old age, sickness, death — and a monk. Four encounters that broke the palace walls. Siddhartha understood: power over the world is meaningless if the world is Dukkha.'}
          </p>
          <p>
            {ru
              ? 'Ночь побега. Он оставил жену и сына. Не из жестокости — из сострадания ко всем отцам и сыновьям.'
              : 'The night of his escape. He left his wife and son. Not from cruelty — but from compassion for all fathers and sons.'}
          </p>
          <div className="golden-card rounded-2xl p-6 italic text-amber-600/80 border border-amber-700/30">
            {ru
              ? '«Он оставил жену и сына. Не из жестокости — из сострадания ко всем отцам и сыновьям.»'
              : '"He left his wife and son. Not from cruelty — but from compassion for all fathers and sons."'}
          </div>
        </ContentBlock>

        <ContentBlock
          title={ru ? 'Просветление под деревом Бодхи' : 'Enlightenment under the Bodhi tree'}
        >
          <p>
            {ru
              ? 'Сиддхартха не искал нового царства. Он сел под деревом Бодхи и дал обет: не вставать, пока не найдёт ответ. Мара — воплощение жажды и страха — искушал его властью над миром. Сиддхартха не взял её.'
              : 'Siddhartha did not seek a new kingdom. He sat beneath the Bodhi tree and vowed not to rise until he found the answer. Mara — the embodiment of craving and fear — tempted him with power over the world. Siddhartha did not take it.'}
          </p>
          <p className="font-[var(--font-cormorant)] text-2xl text-golden-gradient">
            {ru ? '«Он нашёл Дхарму, которая сильнее любой армии.»' : '"He found a Dharma stronger than any army."'}
          </p>
        </ContentBlock>

        <ContentBlock
          id="benares"
          title={ru ? 'Бенарес: первый поворот колеса' : 'Benares: the first turning of the wheel'}
          banner={
            <CrossBanner
              href="/teachings/vision"
              label={ru ? 'Учение' : 'Teachings'}
              title={ru ? 'Первый поворот: Видение →' : 'The first turning: Vision →'}
              variant="buddha"
            />
          }
        >
          <p>
            {ru
              ? 'В оленьем парке Испатаны пятеро аскетов услышали: «Я нашёл путь, который был забыт». Четыре Благородные Истины — не догма, а диагноз и лекарство.'
              : 'In the deer park of Isipatana five ascetics heard: "I have found a path that was forgotten." The Four Noble Truths are not a dogma but a diagnosis and a cure.'}
          </p>
          <p className="text-amber-700/80">
            {ru
              ? 'Дуккха, Самудая, Ниродха, Марга. Колесо начало вращаться.'
              : 'Dukkha, Samudaya, Nirodha, Magga. The wheel began to turn.'}
          </p>
        </ContentBlock>

        {/* Series link */}
        <div className="text-center space-y-3">
          <Link
            href="/episodes"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-amber-400/80 border border-amber-700/40 hover:text-amber-500 hover:border-amber-600/60 transition-colors"
          >
            {ru ? '📺 История Сиддхартхи — сериал «Будда»' : '📺 The story of Siddhartha — the "Buddha" series'}
          </Link>
          <div>
            <Link href="/characters" className="text-amber-400/60 text-sm hover:text-amber-500 transition-colors">
              {ru ? 'Персонажи сериала' : 'Characters of the series'} →
            </Link>
          </div>
        </div>

        {/* Final cross banner */}
        <CrossBanner
          href="/chakravartin"
          label={ru ? 'Следующая глава' : 'Next chapter'}
          title={ru
            ? 'Ашока Великий: он покорил мечом, но удержал Дхармой →'
            : 'Ashoka the Great: he conquered with the sword, but ruled with the Dharma →'}
          variant="chakravartin"
        />
      </div>
    </div>
  )
}
