'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

type Str = { ru: string; en: string }
const s = (x: Str, l: 'ru' | 'en') => x[l]

const mainHeroes = [
  {
    symbol: 'च',
    name: { ru: 'Чанакья', en: 'Chanakya' },
    role: { ru: 'Главный наставник Дхармы', en: 'Chief mentor of the Dharma' },
    desc: { ru: 'Сердце и разум Дхармы. Всегда рядом: сначала с Биндусарой, затем с Ашокой. Учитель, стратег и хранитель справедливости.', en: 'The heart and mind of the Dharma. Always near: first with Bindusara, then with Ashoka. Teacher, strategist and keeper of justice.' },
    tags: [{ ru: 'Мудрость', en: 'Wisdom' }, { ru: 'Стратегия', en: 'Strategy' }, { ru: 'Дхарма', en: 'Dharma' }],
    era: { ru: 'Все эпохи', en: 'All ages' },
  },
  {
    symbol: 'बि',
    name: { ru: 'Биндусара', en: 'Bindusara' },
    role: { ru: 'Император Магадхи', en: 'Emperor of Magadha' },
    desc: { ru: 'Великий правитель Магадхи. Вместе с Чанакьей держит империю. Отец Ашоки, чья судьба связана с будущим Дхармы.', en: 'The great ruler of Magadha. With Chanakya he holds the empire. The father of Ashoka, whose fate is tied to the future of the Dharma.' },
    tags: [{ ru: 'Власть', en: 'Power' }, { ru: 'Долг', en: 'Duty' }, { ru: 'Отец', en: 'Father' }],
    era: { ru: 'Начало', en: 'The beginning' },
  },
  {
    symbol: 'अ',
    name: { ru: 'Ашока', en: 'Ashoka' },
    role: { ru: 'Юный принц · будущий Чакравартин', en: 'Young prince · future Chakravartin' },
    desc: { ru: 'Молодой Ашока — пылкий, смелый, верный Дхарме. Учится у Чанакьи, любит мать Шубхадранги и растёт в тени трона.', en: 'Young Ashoka — ardent, brave, loyal to the Dharma. Learns from Chanakya, loves his mother Subhadrangi and grows in the shadow of the throne.' },
    tags: [{ ru: 'Огонь', en: 'Fire' }, { ru: 'Справедливость', en: 'Justice' }, { ru: 'Путь', en: 'Path' }],
    era: { ru: 'Юность → Правление', en: 'Youth → Reign' },
  },
  {
    symbol: 'शु',
    name: { ru: 'Шубхадранги', en: 'Subhadrangi' },
    role: { ru: 'Мать Ашоки · царица сердца', en: 'Mother of Ashoka · queen of the heart' },
    desc: { ru: 'Мать Ашоки. Тихая сила Дхармы во дворце. Рядом с сыном в самые трудные моменты, хранит доброту и правду.', en: 'The mother of Ashoka. The quiet strength of the Dharma in the palace. Beside her son in the hardest moments, she keeps kindness and truth.' },
    tags: [{ ru: 'Любовь', en: 'Love' }, { ru: 'Защита', en: 'Protection' }, { ru: 'Жертва', en: 'Sacrifice' }],
    era: { ru: 'Все эпохи', en: 'All ages' },
  },
]

const buddhaHeroes = [
  {
    symbol: 'बु',
    name: { ru: 'Будда', en: 'Buddha' },
    role: { ru: 'Просветлённый · Учитель', en: 'The Enlightened One · Teacher' },
    desc: { ru: 'Сиддхартха Гаутама — принц, оставивший трон ради поиска истины. Достиг просветления и учил пути освобождения от страданий.', en: 'Siddhartha Gautama — the prince who left the throne in search of truth. Attained enlightenment and taught the path of liberation from suffering.' },
    tags: [{ ru: 'Просветление', en: 'Enlightenment' }, { ru: 'Сострадание', en: 'Compassion' }, { ru: 'Мудрость', en: 'Wisdom' }],
    era: { ru: 'VI-V вв. до н.э.', en: '6th-5th c. BCE' },
  },
  {
    symbol: 'यश',
    name: { ru: 'Яшодхара', en: 'Yashodhara' },
    role: { ru: 'Супруга Будды', en: 'Wife of the Buddha' },
    desc: { ru: 'Верная жена Сиддхартхи, мать Рахулы. После ухода мужа посвятила себя духовной практике, стала одной из первых монахинь.', en: 'Loyal wife of Siddhartha, mother of Rahula. After her husband\'s departure she devoted herself to spiritual practice and became one of the first nuns.' },
    tags: [{ ru: 'Верность', en: 'Loyalty' }, { ru: 'Сила', en: 'Strength' }, { ru: 'Преданность', en: 'Devotion' }],
    era: { ru: 'VI-V вв. до н.э.', en: '6th-5th c. BCE' },
  },
  {
    symbol: 'रा',
    name: { ru: 'Рахула', en: 'Rahula' },
    role: { ru: 'Сын Будды', en: 'Son of the Buddha' },
    desc: { ru: 'Сын Сиддхартхи и Яшодхары. Стал одним из первых учеников Будды, достиг просветления, известен как «Рахула Счастливый».', en: 'Son of Siddhartha and Yashodhara. Became one of the first disciples of the Buddha, attained enlightenment, known as "Rahula the Fortunate".' },
    tags: [{ ru: 'Ученик', en: 'Disciple' }, { ru: 'Просветление', en: 'Enlightenment' }, { ru: 'Наследие', en: 'Legacy' }],
    era: { ru: 'VI-V вв. до н.э.', en: '6th-5th c. BCE' },
  },
  {
    symbol: 'आन',
    name: { ru: 'Ананда', en: 'Ananda' },
    role: { ru: 'Верный ученик · двоюродный брат', en: 'Devoted disciple · cousin' },
    desc: { ru: 'Двоюродный брат Будды, его личный помощник на протяжении 25 лет. Обладал феноменальной памятью, запомнил все учения.', en: 'Cousin of the Buddha, his personal attendant for 25 years. Possessed phenomenal memory and memorized all the teachings.' },
    tags: [{ ru: 'Память', en: 'Memory' }, { ru: 'Преданность', en: 'Devotion' }, { ru: 'Учение', en: 'Teaching' }],
    era: { ru: 'VI-V вв. до н.э.', en: '6th-5th c. BCE' },
  },
]

const alliances = [
  { num: '1', emoji: '👑', title: { ru: 'Биндусара + Чанакья', en: 'Bindusara + Chanakya' }, desc: { ru: 'Первый союз: император и наставник держат Магадху вместе.', en: 'The first alliance: the emperor and the mentor hold Magadha together.' }, members: ['Биндусара', 'Чанакья'] },
  { num: '2', emoji: '📜', title: { ru: 'Чанакья + Ашока', en: 'Chanakya + Ashoka' }, desc: { ru: 'Второй союз: учитель передаёт Дхарму будущему Чакравартину.', en: 'The second alliance: the teacher passes the Dharma to the future Chakravartin.' }, members: ['Чанакья', 'Ашока'] },
  { num: '3', emoji: '🛡️', title: { ru: 'Биндусара · Ашока · Радогупта', en: 'Bindusara · Ashoka · Radhagupta' }, desc: { ru: 'Третий союз: отец, сын и верный щит — сила команды правды.', en: 'The third alliance: father, son and a loyal shield — the strength of the team of truth.' }, members: ['Биндусара', 'Ашока', 'Радогупта'] },
]

const guardians = [
  { symbol: 'रा', name: { ru: 'Радогупта', en: 'Radhagupta' }, role: { ru: 'Верный соратник · щит Дхармы', en: 'Loyal companion · shield of the Dharma' }, desc: { ru: 'Всегда на стороне Дхармы. Соратник и опора Ашоки, вместе с Чанакьей составляет «команду правды» при дворе.', en: 'Always on the side of the Dharma. A companion and pillar of Ashoka — with Chanakya he forms the "team of truth" at court.' }, tags: [{ ru: 'Верность', en: 'Loyalty' }, { ru: 'Меч', en: 'Sword' }, { ru: 'Честь', en: 'Honour' }] },
  { symbol: 'आ', name: { ru: 'Акромак', en: 'Akromak' }, role: { ru: 'Учитель · путь знания', en: 'Teacher · the path of knowledge' }, desc: { ru: 'Учитель на стороне Дхармы. Передаёт знания и закаляет дух — рядом с маленьким Сиамаком и юными учениками.', en: 'A teacher on the side of the Dharma. Passes on knowledge and tempers the spirit — beside little Siamak and young pupils.' }, tags: [{ ru: 'Знание', en: 'Knowledge' }, { ru: 'Дисциплина', en: 'Discipline' }, { ru: 'Путь', en: 'Path' }] },
]

const youth = [
  { symbol: 'सि', name: { ru: 'Сиамак', en: 'Siamak' }, role: { ru: 'Маленький Сиамак', en: 'Little Siamak' }, desc: { ru: 'Сиамак в детстве — светлый образ рядом с юным Ашокой. Напоминание о невинности, дружбе и первых уроках Дхармы.', en: 'Siamak in childhood — a bright image beside young Ashoka. A reminder of innocence, friendship and the first lessons of the Dharma.' }, tags: [{ ru: 'Детство', en: 'Childhood' }, { ru: 'Чистота', en: 'Purity' }, { ru: 'Надежда', en: 'Hope' }] },
]

export default function AlliancesPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Заголовок страницы */}
        <div className="text-center space-y-4">
          <span className="text-5xl block mb-4">☸</span>
          <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold tracking-tight text-golden-gradient">
            {ru ? 'Три союза Дхармы' : 'Three alliances of the Dharma'}
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {ru
              ? 'Сначала Биндусара и Чанакья. Потом Чанакья и Ашока. Затем отец, сын и Радогупта — вместе.'
              : 'First Bindusara and Chanakya. Then Chanakya and Ashoka. Then father, son and Radhagupta — together.'}
          </p>
        </div>

        {/* Герои Будды */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-slate-800">
              {ru ? 'Герои Будды' : 'Heroes of the Buddha'}
            </h2>
            <p className="text-slate-500">
              {ru ? 'Четыре сердца учения: Просветлённый, семья и верный ученик' : 'The four hearts of the teaching: the Enlightened One, the family and a devoted disciple'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buddhaHeroes.map((hero) => (
              <div key={hero.name.en} className="golden-card p-6 flex flex-col gap-4 rounded-3xl">
                <div className="flex justify-between items-start">
                  <div className="devanagari text-3xl font-bold text-blue-600">{hero.symbol}</div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium text-blue-700" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                    {s(hero.era, lang)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{s(hero.name, lang)}</h3>
                  <p className="text-sm text-blue-600 font-medium">{s(hero.role, lang)}</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{s(hero.desc, lang)}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {hero.tags.map((tag) => (
                    <span key={tag.en} className="px-2 py-1 rounded-md text-xs font-medium text-blue-700" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                      {s(tag, lang)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Четыре сердца Дхармы */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-slate-800">
              {ru ? 'Четыре сердца Дхармы' : 'Four hearts of the Dharma'}
            </h2>
            <p className="text-slate-500">
              {ru ? 'Наставник, император, будущий Чакравартин и мать — основа истории' : 'The mentor, the emperor, the future Chakravartin and the mother — the foundation of the story'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainHeroes.map((hero) => (
              <div key={hero.name.en} className="golden-card p-6 flex flex-col gap-4 rounded-3xl">
                <div className="flex justify-between items-start">
                  <div className="devanagari text-3xl font-bold text-blue-600">{hero.symbol}</div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium text-blue-700" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                    {s(hero.era, lang)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{s(hero.name, lang)}</h3>
                  <p className="text-sm text-blue-600 font-medium">{s(hero.role, lang)}</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{s(hero.desc, lang)}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {hero.tags.map((tag) => (
                    <span key={tag.en} className="px-2 py-1 rounded-md text-xs font-medium text-blue-700" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                      {s(tag, lang)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Три союза */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-slate-800">
              {ru ? 'Путь союзов' : 'The path of alliances'}
            </h2>
          </div>
          <div className="space-y-4">
            {alliances.map((alliance) => (
              <div key={alliance.num} className="golden-card p-6 flex items-start gap-5 rounded-2xl transition-all hover:shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-md" style={{ background: 'linear-gradient(135deg, #d97706, #b45309)' }}>
                  {alliance.num}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{alliance.emoji}</span>
                    <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-slate-800">{s(alliance.title, lang)}</h3>
                  </div>
                  <p className="text-slate-500">{s(alliance.desc, lang)}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {alliance.members.map((member) => (
                      <span key={member} className="px-3 py-1 text-sm rounded-full font-medium text-slate-600" style={{ background: 'rgba(217, 119, 6, 0.06)' }}>
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Хранители и Юность */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-slate-800">
              {ru ? 'Хранители Дхармы' : 'Guardians of the Dharma'}
            </h2>
            <p className="text-slate-500 mt-1">
              {ru ? 'Чанакья, Радогупта и учителя — ум и щит империи' : 'Chanakya, Radhagupta and the teachers — the mind and shield of the empire'}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {guardians.map((hero) => (
                <div key={hero.name.en} className="golden-card p-6 flex flex-col gap-4 rounded-3xl">
                  <div className="devanagari text-3xl font-bold text-blue-600">{hero.symbol}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{s(hero.name, lang)}</h3>
                    <p className="text-sm text-blue-600 font-medium">{s(hero.role, lang)}</p>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{s(hero.desc, lang)}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {hero.tags.map((tag) => (
                      <span key={tag.en} className="px-2 py-1 rounded-md text-xs font-medium text-blue-700" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                        {s(tag, lang)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-slate-800">
              {ru ? 'Юность и надежда' : 'Youth and hope'}
            </h2>
            <p className="text-slate-500 mt-1">
              {ru ? 'Молодой Ашока и маленький Сиамак' : 'Young Ashoka and little Siamak'}
            </p>
            {youth.map((hero) => (
              <div key={hero.name.en} className="golden-card p-6 flex flex-col gap-4 h-full rounded-3xl">
                <div className="devanagari text-3xl font-bold text-blue-600">{hero.symbol}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{s(hero.name, lang)}</h3>
                  <p className="text-sm text-blue-600 font-medium">{s(hero.role, lang)}</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{s(hero.desc, lang)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Атмосфера */}
        <section className="text-center py-12 px-6 golden-card rounded-3xl">
          <span className="text-4xl block mb-4">🏛️</span>
          <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            {ru ? 'Дворец, где живёт Дхарма' : 'The palace where the Dharma lives'}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {ru
              ? 'Каменные арки, тёплый свет и тени колонн — место, где встречаются император, наставник, принц и верные друзья. Здесь решают судьбу империи и хранят клятву Дхармы.'
              : 'Stone arches, warm light and the shadows of columns — the place where the emperor, the mentor, the prince and loyal friends meet. Here the fate of the empire is decided and the vow of the Dharma is kept.'}
          </p>
        </section>

        {/* Навигация назад */}
        <div className="text-center pt-8">
          <Link
            href="/characters"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {ru ? 'Вернуться к героям' : 'Back to the heroes'}
          </Link>
        </div>
      </div>
    </div>
  )
}