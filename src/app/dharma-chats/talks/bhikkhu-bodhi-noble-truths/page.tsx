import type { Metadata } from 'next'
import { ContentBlock } from '@/components/content-block'
import { CrossBanner } from '@/components/cross-banner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Интервью с Бхиккху Бодхи — Благородные Истины, Благородные Пути | Wisdom Dharma Chats',
  description: 'Бхиккху Бодхи о структуре палийского канона, природе Ниббаны, зависимом возникновении и пути к освобождению. Dharma Chats with Daniel Aitken.',
}

const SECTIONS = [
  {
    id: 'about-book',
    title: 'О книге «Благородные Истины, Благородные Пути»',
    content: `Книга стала самой популярной у Wisdom Publications в год выхода. Но изначально Бхиккху Бодхи не планировал её создавать — всё началось с курса пали в монастыре Ванган (Нью-Йорк). Сначала появился учебник для изучающих палийский язык, затем — антология для широкой аудитории.

В отличие от громоздких канонических сборников, где тексты сгруппированы по длине, а не по смыслу, эта книга построена вокруг Четырёх Благородных Истин — от Дуккхи через её происхождение к пути прекращения и конечной цели.`,
  },
  {
    id: 'nikayas',
    title: 'Структура буддийского канона (Никāи)',
    content: `Бхиккху Бодхи объясняет логику четырёх основных сборников:

• Дигха-никāя («Длинные речи») — для небуддийской аудитории, апологетический характер.
• Мадджхима-никāя («Средние речи») — для новичков-монахов, ввод в основы.
• Самьютта-никāя («Связанные речи») — самый систематизированный сборник, сгруппированный по темам: Четыре Истины, скандхи, áятаны, зависимое возникновение. Именно отсюда черпались тексты для книги.
• Ангуттара-никāя («Возрастающие речи») — организована по числу пунктов (от одного до одиннадцати).`,
  },
  {
    id: 'nirvana',
    title: 'Что такое Ниббāна?',
    content: `Ниббāна — это не просто «небытие» или аннигиляция. Будда использует термины, указывающие на реальное, положительное существование:

• Амата-дхāту — бессмертный элемент. Практик, созерцая пять совокупностей как непостоянные, дуккха и безличностные, поворачивает ум к бессмертному элементу.
• Áята — база, где нет ни земли, ни воды, ни огня, ни воздуха... ни этого мира, ни другого. Это конец дуккхи.
• Дхāту — элемент, как четыре стихии. Ниббāна-дхāту реально существует.

Три двери освобождения:
• Аничча → бессимвольное (анимитта)
• Дуккха → безжелательное (аппанихита)
• Анатта → пустотность (сунната)

Ниббāна описывается как «высшее блаженство», но это не обусловленное чувство — оно лежит за пределами обычного опыта.`,
  },
  {
    id: 'consciousness',
    title: 'Сознание и Просветление',
    content: `Бодхи (просветление) — это не то же самое, что ниббāна. Бодхи — это опыт, знание, прямое переживание ниббāны. Содержанием бодхи является ниббāна.

В момент просветления ум поворачивается от пяти совокупностей и прямо переживает неусловленный элемент через мано-виннāну (умственное сознание). Понимание (паннья) — это ментальный фактор, который «проникает» и постигает ниббāну.

После смерти (париниббāна) все пять совокупностей прекращаются, включая сознание. Но это не аннигиляция — возможно, сознание становится ниббāной. Ниббāна описывается как «высший покой» (парасанта), но это не обусловленное переживание.`,
  },
  {
    id: 'dependent-origination',
    title: 'Зависимое возникновение и Ниббāна',
    content: `Зависимое возникновение — это не просто взаимосвязь всего со всем. Это строгая причинно-следственная цепочка: рождение является причиной старения и смерти, а не наоборот.

Это срединный путь между двумя крайностями:
• Вечность (атман продолжается)
• Аннигиляция (всё кончается со смертью)

Ниббāна не подчиняется зависимому возникновению — она неусловлена (асанкхāта). Путь к ней проходит через прекращение звеньев цепочки, прежде всего — невежества и жажды.`,
  },
  {
    id: 'practice',
    title: 'Практические советы',
    content: `Бхиккху Бодхи рекомендует последовательность изучения:

1. Начинающим: «В словах Будды» (In the Buddha's Words) — широкий обзор всего учения.
2. Для углублённого изучения: «Благородные Истины, Благородные Пути» — концентрированная суть пути к освобождению.
3. Для серьёзной работы: «Средние речи» (Мадджхима-никāя) — читать по тематической схеме, а не по каноническому порядку.`,
  },
  {
    id: 'engaged',
    title: 'Социальная активность и буддизм',
    content: `Бхиккху Бодхи — основатель Buddhist Global Relief (2008), организации, которая борется с голодом и бедностью через более 60 проектов по всему миру (Вьетнам, Мьянма, Шри-Ланка, Индия, Камбоджа, Монголия, Африка, Латинская Америка, США).

Особое внимание:
• Прямая продовольственная помощь
• Образование девочек из беднейших слоёв
• Помощь женщинам в создании проектов «правильного средства к существованию»

Термин «вовлечённый буддизм» Бодхи не любит — по его мнению, истинный буддизм не может не быть направлен на облегчение страданий. Экология — вопрос совести и справедливости: изменение климата уже причиняет страдания тем, кто наименее ответственен за выбросы.`,
  },
]

export default function BhikkhuBodhiTalkPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-20">
        <div className="mb-6 text-center">
          <Link
            href="/dharma-chats/talks"
            className="inline-block rounded-full bg-amber-800/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-400/70 hover:bg-amber-800/50 transition-colors"
          >
            Wisdom Dharma Chats
          </Link>
          <h1 className="mt-4 font-[var(--font-cormorant)] text-3xl md:text-5xl font-bold text-amber-700">
            Интервью с Бхиккху Бодхи
          </h1>
          <p className="mt-2 text-xl text-amber-600/60 font-[var(--font-cormorant)]">
            «Благородные Истины, Благородные Пути»
          </p>
          <p className="mt-1 text-sm text-amber-600/40">
            Ведущий: Daniel Aitken · Канал: Wisdom Publications
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-amber-800/20">
          <iframe
            src="https://www.youtube.com/embed/w4OegxVXCMA"
            title="Complete interview with Bhikkhu Bodhi | Dharma Chats"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {['Ниббāна', 'Четыре Истины', 'Зависимое возникновение', 'Пāли', 'Социальный буддизм'].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-amber-950/50 border border-amber-800/20 px-3 py-1 text-xs text-amber-500/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-20">
        {SECTIONS.map((section, i) => (
          <div key={section.id}>
            <ContentBlock id={section.id} title={section.title}>
              <div className="whitespace-pre-line text-amber-50/80 leading-relaxed">
                {section.content}
              </div>
            </ContentBlock>
            {i < SECTIONS.length - 1 && (
              <div className="my-12 border-t border-amber-800/20" />
            )}
          </div>
        ))}

        <div className="mt-16 space-y-4">
          <CrossBanner
            href="/teachings/vision"
            label="Учение"
            title="Первый поворот: Видение — Четыре Благородные Истины →"
            variant="buddha"
          />
          <CrossBanner
            href="/teachings/path"
            label="Учение"
            title="Второй поворот: Путь — Благородный Восьмеричный Путь →"
            variant="chakravartin"
          />
        </div>

        <div className="mt-16 rounded-xl border border-amber-800/20 bg-amber-950/30 p-6">
          <p className="text-sm text-amber-600/50">
            <span className="font-medium text-amber-600/70">Источник:</span>{' '}
            <a
              href="https://www.youtube.com/watch?v=w4OegxVXCMA&list=PL4DzEPq8XjkErBtgXzershBSuz920fWen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 underline"
            >
              Dharma Chats with Daniel Aitken — Wisdom Publications
            </a>
          </p>
          <p className="mt-2 text-sm text-amber-600/50">
            Перевод и изложение подготовлено для проекта Buddha-Chakravartin.
          </p>
        </div>
      </div>
    </main>
  )
}
