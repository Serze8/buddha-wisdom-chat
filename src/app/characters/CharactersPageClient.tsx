'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'
import HeroSilkAtlas from '@/components/HeroSilkAtlas'

type Str = { ru: string; en: string }

interface Hero {
  id: string
  name: Str
  role: Str
  era: Str
  group: 'hearts' | 'guardians' | 'youth'
  monogram: string
  gradient: string
  vibe: Str
  description: Str
  traits: Str[]
  quote: Str
  allies: Str[]
  biography: Str[]
  chat?: string
  icon?: string
  actor?: string
  color?: string
}

const series = [
  {
    id: 'buddha-2013',
    emoji: '🪷',
    title: { en: 'Buddha (2013)', ru: 'Будда (2013)' },
    desc: {
      en: 'The life of Siddhartha Gautama — from prince to the Enlightened One. A path of compassion, wisdom and awakening.',
      ru: 'Жизнь Сиддхартхи Гаутамы — от принца до Просветлённого. Путь сострадания, мудрости и пробуждения.',
    },
  },
  {
    id: 'chakravartin',
    emoji: '☸',
    title: { en: 'Chakravartin', ru: 'Чакравартин' },
    desc: {
      en: 'The story of Ashoka and Chanakya — the guardians of Dharma in the Magadha empire. Strategy, duty and the rise of a great ruler.',
      ru: 'История Ашоки и Чанакьи — хранителей Дхармы в империи Магадха. Стратегия, долг и становление великого правителя.',
    },
  },
]

const hearts: Hero[] = [
  {
    id: 'chanakya',
    name: { ru: 'Чанакья', en: 'Chanakya' },
    role: { ru: 'Главный наставник Дхармы', en: 'Chief mentor of the Dharma' },
    era: { ru: 'Все эпохи', en: 'All ages' },
    group: 'hearts',
    monogram: 'च',
    gradient: 'from-indigo-950 via-blue-700 to-sky-400',
    icon: '📜',
    vibe: { ru: 'Мудрость · Стратегия · Дхарма', en: 'Wisdom · Strategy · Dharma' },
    description: {
      ru: 'Сердце и разум Дхармы. Всегда рядом: сначала с Биндусарой, затем с Ашокой. Учитель, стратег и хранитель справедливости.',
      en: 'The heart and mind of the Dharma. Always near: first with Bindusara, then with Ashoka. Teacher, strategist and keeper of justice.',
    },
    traits: [{ ru: 'Наставник', en: 'Mentor' }, { ru: 'Стратег', en: 'Strategist' }, { ru: 'Дхарма', en: 'Dharma' }],
    quote: {
      ru: 'Дхарма — не слово. Это путь, которым идёт сильный ради слабого.',
      en: 'Dharma is not a word. It is a path the strong walk for the weak.',
    },
    allies: [{ ru: 'Биндусара', en: 'Bindusara' }, { ru: 'Ашока', en: 'Ashoka' }, { ru: 'Радогупта', en: 'Radhagupta' }],
    biography: [
      { ru: 'Чанакья — не просто советник двора. Он — нить, которая связывает три поколения правителей Магадхи. Его ум острее меча, а верность Дхарме сильнее любой клятвы.', en: 'Chanakya is not merely a court advisor. He is the thread that binds three generations of Magadha rulers. His mind is sharper than a sword, and his loyalty to the Dharma stronger than any oath.' },
      { ru: 'В начале пути он стоит рядом с императором Биндусарой: учит держать трон, видеть заговоры и не терять справедливость даже в час гнева.', en: 'At the beginning of the path he stands beside Emperor Bindusara: teaching him to hold the throne, see conspiracies and keep justice even in a moment of anger.' },
      { ru: 'Позже его взгляд обращается к юному Ашоке. Именно Чанакья видит в пылком принце будущего Чакравартина — того, кто сможет нести Дхарму не только в дворце, но и во всей империи.', en: 'Later his gaze turns to the young Ashoka. It is Chanakya who sees in the fiery prince the future Chakravartin — one who can carry the Dharma not only in the palace but across the empire.' },
      { ru: 'Он не ищет славы. Его победа — когда правда побеждает интригу, а ученик становится достойнее учителя.', en: 'He does not seek glory. His victory — when truth defeats intrigue, and the student becomes worthier than the teacher.' },
    ],
  },
  {
    id: 'bindusara',
    name: { ru: 'Биндусара', en: 'Bindusara' },
    role: { ru: 'Император Магадхи', en: 'Emperor of Magadha' },
    era: { ru: 'Начало', en: 'The beginning' },
    group: 'hearts',
    monogram: 'बि',
    gradient: 'from-slate-900 via-blue-800 to-blue-500',
    icon: '👑',
    vibe: { ru: 'Власть · Долг · Отец', en: 'Power · Duty · Father' },
    description: {
      ru: 'Великий правитель Магадхи. Вместе с Чанакьей держит империю. Отец Ашоки, чья судьба связана с будущим Дхармы.',
      en: 'The great ruler of Magadha. Together with Chanakya he holds the empire. The father of Ashoka, whose fate is tied to the future of the Dharma.',
    },
    traits: [{ ru: 'Император', en: 'Emperor' }, { ru: 'Отец', en: 'Father' }, { ru: 'Сила', en: 'Strength' }],
    quote: {
      ru: 'Корона тяжелее меча. Кто носит её — отвечает за каждый вздох подданных.',
      en: 'The crown is heavier than the sword. Whoever wears it answers for every breath of his subjects.',
    },
    allies: [{ ru: 'Чанакья', en: 'Chanakya' }, { ru: 'Ашока', en: 'Ashoka' }, { ru: 'Шубхадранги', en: 'Subhadrangi' }, { ru: 'Радогупта', en: 'Radhagupta' }],
    biography: [
      { ru: 'Биндусара — император, чьё слово звучит как закон во всей Магадхе. Его сила — не только в армии, но и в умении слушать мудрого Чанакью.', en: 'Bindusara is an emperor whose word sounds like law across Magadha. His strength lies not only in the army but in the ability to listen to the wise Chanakya.' },
      { ru: 'Как отец он стоит между долгом правителя и любовью к сыну. Судьба Ашоки для него — и гордость, и испытание: сможет ли принц выдержать тяжесть трона?', en: 'As a father he stands between the ruler\'s duty and love for his son. Ashoka\'s fate is both pride and trial for him: can the prince bear the weight of the throne?' },
      { ru: 'В союзе с Чанакьей Биндусара держит империю в равновесии. Вместе они — первый великий союз Дхармы: власть и мудрость бок о бок.', en: 'In alliance with Chanakya, Bindusara keeps the empire in balance. Together they are the first great alliance of the Dharma: power and wisdom side by side.' },
      { ru: 'Его путь — путь отца-императора: защищать землю, хранить порядок и готовить наследника, достойного имени Чакравартина.', en: 'His path is that of a father-emperor: protect the land, keep order and prepare an heir worthy of the name of Chakravartin.' },
    ],
  },
  {
    id: 'ashoka',
    name: { ru: 'Ашока', en: 'Ashoka' },
    role: { ru: 'Юный принц · будущий Чакравартин', en: 'Young prince · future Chakravartin' },
    era: { ru: 'Юность → Правление', en: 'Youth → Reign' },
    group: 'hearts',
    monogram: 'अ',
    gradient: 'from-blue-950 via-blue-600 to-sky-400',
    icon: '⚔️',
    vibe: { ru: 'Огонь · Справедливость · Путь', en: 'Fire · Justice · Path' },
    description: {
      ru: 'Молодой Ашока — пылкий, смелый, верный Дхарме. Учится у Чанакьи, любит мать Шубхадранги и растёт в тени трона.',
      en: 'Young Ashoka — ardent, brave, loyal to the Dharma. Learns from Chanakya, loves his mother Subhadrangi and grows in the shadow of the throne.',
    },
    traits: [{ ru: 'Принц', en: 'Prince' }, { ru: 'Воин', en: 'Warrior' }, { ru: 'Дхарма', en: 'Dharma' }],
    quote: {
      ru: 'Если Дхарма зовёт — я пойду. Даже если путь ведёт сквозь огонь.',
      en: 'If the Dharma calls — I will go. Even if the path leads through fire.',
    },
    allies: [{ ru: 'Чанакья', en: 'Chanakya' }, { ru: 'Шубхадранги', en: 'Subhadrangi' }, { ru: 'Радогупта', en: 'Radhagupta' }, { ru: 'Биндусара', en: 'Bindusara' }, { ru: 'Сиамак', en: 'Siamak' }],
    biography: [
      { ru: 'Юный Ашока — огонь Магадхи. Он ещё не император, но уже носит в сердце клятву справедливости. Его смелость граничит с дерзостью, а преданность матери — безгранична.', en: 'Young Ashoka is the fire of Magadha. He is not yet an emperor, but already carries a vow of justice in his heart. His courage borders on audacity, and his devotion to his mother is boundless.' },
      { ru: 'Рядом с ним — Чанакья, который закаляет ум принца, и Радогупта, верный щит на поле чести. Мать Шубхадранги хранит его душу, когда двор полон теней.', en: 'Beside him — Chanakya, who tempers the prince\'s mind, and Radhagupta, a loyal shield on the field of honour. His mother Subhadrangi guards his soul when the court is full of shadows.' },
      { ru: 'Путь Ашоки — это путь ученика: от сына императора к будущему Чакравартину. Каждый урок, каждая битва и каждая жертва ведут его к трону, достойному Дхармы.', en: 'Ashoka\'s path is that of a disciple: from the emperor\'s son to the future Chakravartin. Every lesson, every battle and every sacrifice leads him to a throne worthy of the Dharma.' },
      { ru: 'В нём живёт и воин, и защитник слабых. Именно поэтому Дхарма выбирает его — не за корону, а за сердце.', en: 'Both a warrior and a protector of the weak live in him. That is why the Dharma chooses him — not for the crown, but for the heart.' },
    ],
    chat: 'ashoka',
  },
  {
    id: 'subhadrangi',
    name: { ru: 'Шубхадранги', en: 'Subhadrangi' },
    role: { ru: 'Мать Ашоки · царица сердца', en: 'Mother of Ashoka · queen of the heart' },
    era: { ru: 'Все эпохи', en: 'All ages' },
    group: 'hearts',
    monogram: 'शु',
    gradient: 'from-rose-950 via-rose-600 to-amber-400',
    icon: '🕊️',
    vibe: { ru: 'Любовь · Защита · Жертва', en: 'Love · Protection · Sacrifice' },
    description: {
      ru: 'Мать Ашоки. Тихая сила Дхармы во дворце. Рядом с сыном в самые трудные моменты, хранит доброту и правду.',
      en: 'The mother of Ashoka. The quiet strength of the Dharma in the palace. Beside her son in the hardest moments, she keeps kindness and truth.',
    },
    traits: [{ ru: 'Мать', en: 'Mother' }, { ru: 'Защитница', en: 'Protector' }, { ru: 'Сердце', en: 'Heart' }],
    quote: {
      ru: 'Моя сила — не в троне. Моя сила — в сыне, которого я уберегу любой ценой.',
      en: 'My strength is not in the throne. My strength is in the son I will protect at any cost.',
    },
    allies: [{ ru: 'Ашока', en: 'Ashoka' }, { ru: 'Биндусара', en: 'Bindusara' }, { ru: 'Чанакья', en: 'Chanakya' }],
    biography: [
      { ru: 'Шубхадранги — тихая, но несгибаемая сила Дхармы. Во дворце, где интриги острее клинков, она хранит чистоту сердца и защищает Ашоку.', en: 'Subhadrangi is the quiet but unbending strength of the Dharma. In a palace where intrigues are sharper than blades, she keeps the purity of heart and protects Ashoka.' },
      { ru: 'Как мать она видит в сыне не только принца, но и ребёнка, которому нужна любовь. Её объятия — убежище, когда мир становится жестоким.', en: 'As a mother she sees in her son not only a prince but a child who needs love. Her embrace is a refuge when the world turns cruel.' },
      { ru: 'Она не ведёт армии и не пишет указов. Её оружие — верность, сострадание и готовность жертвовать собой ради правды.', en: 'She leads no armies and writes no edicts. Her weapons are loyalty, compassion and the readiness to sacrifice herself for the truth.' },
      { ru: 'Без Шубхадранги путь Ашоки был бы холоднее. Она — сердце семьи и живое напоминание: Дхарма начинается с любви.', en: 'Without Subhadrangi, Ashoka\'s path would be colder. She is the heart of the family and a living reminder: the Dharma begins with love.' },
    ],
  },
]

const guardians: Hero[] = [
  {
    id: 'radhagupta',
    name: { ru: 'Радогупта', en: 'Radhagupta' },
    role: { ru: 'Верный соратник · щит Дхармы', en: 'Loyal companion · shield of the Dharma' },
    era: { ru: 'С Ашокой', en: 'With Ashoka' },
    group: 'guardians',
    monogram: 'रा',
    gradient: 'from-emerald-950 via-emerald-700 to-lime-400',
    icon: '🛡️',
    vibe: { ru: 'Верность · Меч · Честь', en: 'Loyalty · Sword · Honour' },
    description: {
      ru: 'Всегда на стороне Дхармы. Соратник и опора Ашоки, вместе с Чанакьей составляет «команду правды» при дворе.',
      en: 'Always on the side of the Dharma. A companion and pillar of Ashoka — with Chanakya he forms the "team of truth" at court.',
    },
    traits: [{ ru: 'Соратник', en: 'Companion' }, { ru: 'Воин', en: 'Warrior' }, { ru: 'Верность', en: 'Loyalty' }],
    quote: {
      ru: 'Друг не тот, кто рядом в пиру. Друг — кто стоит рядом, когда мечи обнажены.',
      en: 'A friend is not one who stands by at the feast. A friend is one who stands by when the swords are drawn.',
    },
    allies: [{ ru: 'Ашока', en: 'Ashoka' }, { ru: 'Чанакья', en: 'Chanakya' }, { ru: 'Биндусара', en: 'Bindusara' }],
    biography: [
      { ru: 'Радогупта — щит Дхармы. Где Ашоке нужна сила руки, там появляется он: верный, честный, готовый принять удар первым.', en: 'Radhagupta is the shield of the Dharma. Where Ashoka needs the strength of an arm, he appears: loyal, honest, ready to take the first blow.' },
      { ru: 'Он входит в великий союз вместе с Биндусарой и Ашокой — как воин, чья преданность не продаётся. Для Чанакьи он — надёжный исполнитель планов правды.', en: 'He joins the great alliance with Bindusara and Ashoka — as a warrior whose devotion cannot be bought. To Chanakya he is a reliable executor of the plans of truth.' },
      { ru: 'Его честь проста: защищать тех, кто стоит на стороне Дхармы, и не предавать клятву даже в час поражения.', en: 'His honour is simple: protect those who stand on the side of the Dharma and never betray an oath even in the hour of defeat.' },
      { ru: 'Без Радогупты команда правды была бы неполной. Он — меч, который служит не жажде власти, а справедливости.', en: 'Without Radhagupta the team of truth would be incomplete. He is a sword that serves not the thirst for power but justice.' },
    ],
    chat: 'radhagupta',
  },
  {
    id: 'akromak',
    name: { ru: 'Акромак', en: 'Akromak' },
    role: { ru: 'Учитель · путь знания', en: 'Teacher · the path of knowledge' },
    era: { ru: 'Обучение', en: 'Education' },
    group: 'guardians',
    monogram: 'आ',
    gradient: 'from-indigo-950 via-violet-700 to-amber-400',
    icon: '📚',
    vibe: { ru: 'Знание · Дисциплина · Путь', en: 'Knowledge · Discipline · Path' },
    description: {
      ru: 'Учитель на стороне Дхармы. Передаёт знания и закаляет дух — рядом с маленьким Сиамаком и юными учениками.',
      en: 'A teacher on the side of the Dharma. Passes on knowledge and tempers the spirit — beside little Siamak and young pupils.',
    },
    traits: [{ ru: 'Учитель', en: 'Teacher' }, { ru: 'Знание', en: 'Knowledge' }, { ru: 'Дисциплина', en: 'Discipline' }],
    quote: {
      ru: 'Меч без знания — опасность. Знание без сердца — пустота. Учи и то, и другое.',
      en: 'A sword without knowledge is a danger. Knowledge without heart is emptiness. Teach both.',
    },
    allies: [{ ru: 'Сиамак', en: 'Siamak' }, { ru: 'Ашока', en: 'Ashoka' }, { ru: 'Чанакья', en: 'Chanakya' }],
    biography: [
      { ru: 'Акромак — хранитель знания на стороне Дхармы. Его класс — не только свитки и уроки, но и закалка характера.', en: 'Akromak is the keeper of knowledge on the side of the Dharma. His class is not only scrolls and lessons but the forging of character.' },
      { ru: 'Рядом с маленьким Сиамаком он терпелив и строг: учит слушать, помнить и выбирать честный путь, даже когда легче солгать.', en: 'Beside little Siamak he is patient and strict: he teaches listening, remembering and choosing the honest path even when it is easier to lie.' },
      { ru: 'Он понимает, что будущее Магадхи растёт из учеников. Поэтому каждый урок — вклад в день, когда эти дети станут воинами и советниками.', en: 'He understands that the future of Magadha grows from pupils. So every lesson is an investment in the day when these children become warriors and advisors.' },
      { ru: 'Акромак не стремится к трону. Его победа — когда ученик сам отличает Дхарму от тьмы и идёт вперёд с открытыми глазами.', en: 'Akromak does not strive for the throne. His victory — when a pupil himself distinguishes the Dharma from darkness and walks forward with open eyes.' },
    ],
  },
]

const youth: Hero[] = [
  {
    id: 'siamak',
    name: { ru: 'Сиамак', en: 'Siamak' },
    role: { ru: 'Маленький Сиамак', en: 'Little Siamak' },
    era: { ru: 'Детство', en: 'Childhood' },
    group: 'youth',
    monogram: 'सि',
    gradient: 'from-sky-950 via-cyan-600 to-teal-300',
    icon: '🪁',
    vibe: { ru: 'Детство · Чистота · Надежда', en: 'Childhood · Purity · Hope' },
    description: {
      ru: 'Сиамак в детстве — светлый образ рядом с юным Ашокой. Напоминание о невинности, дружбе и первых уроках Дхармы.',
      en: 'Siamak in childhood — a bright image beside young Ashoka. A reminder of innocence, friendship and the first lessons of the Dharma.',
    },
    traits: [{ ru: 'Детство', en: 'Childhood' }, { ru: 'Друг', en: 'Friend' }, { ru: 'Свет', en: 'Light' }],
    quote: {
      ru: 'Пока сердце чисто — Дхарма живёт даже в самом маленьком.',
      en: 'While the heart is pure — the Dharma lives even in the smallest.',
    },
    allies: [{ ru: 'Ашока', en: 'Ashoka' }, { ru: 'Акромак', en: 'Akromak' }],
    biography: [
      { ru: 'Маленький Сиамак — светлая страница истории Дхармы. Его мир ещё не разделён дворцовыми интригами: в нём живут игра, дружба и первые вопросы о добре.', en: 'Little Siamak is a bright page in the history of the Dharma. His world is not yet divided by palace intrigues: it holds play, friendship and first questions about good.' },
      { ru: 'Рядом с юным Ашокой он напоминает: даже будущий Чакравартин когда-то был ребёнком. Их связь — о чистоте, которую важно не потерять.', en: 'Beside young Ashoka he reminds: even the future Chakravartin was once a child. Their bond is about purity that must not be lost.' },
      { ru: 'Учитель Акромак направляет Сиамака, закладывая в нём уважение к знанию и дисциплине — семена будущей силы.', en: 'Teacher Akromak guides Siamak, planting in him respect for knowledge and discipline — the seeds of future strength.' },
      { ru: 'Образ маленького Сиамака — о надежде: Дхарма начинается не с трона, а с детского сердца, которое выбирает правду.', en: 'The image of little Siamak is about hope: the Dharma begins not with the throne but with a child\'s heart that chooses the truth.' },
    ],
  },
]

const alliances = [
  {
    num: '1',
    emoji: '👑',
    title: { ru: 'Биндусара + Чанакья', en: 'Bindusara + Chanakya' },
    desc: { ru: 'Первый союз: император и наставник держат Магадху вместе.', en: 'The first alliance: the emperor and the mentor hold Magadha together.' },
  },
  {
    num: '2',
    emoji: '📜',
    title: { ru: 'Чанакья + Ашока', en: 'Chanakya + Ashoka' },
    desc: { ru: 'Второй союз: учитель передаёт Дхарму будущему Чакравартину.', en: 'The second alliance: the teacher passes the Dharma to the future Chakravartin.' },
  },
  {
    num: '3',
    emoji: '🛡️',
    title: { ru: 'Биндусара · Ашока · Радогупта', en: 'Bindusara · Ashoka · Radhagupta' },
    desc: { ru: 'Третий союз: отец, сын и верный щит — сила команды правды.', en: 'The third alliance: father, son and a loyal shield — the strength of the team of truth.' },
  },
]

const buddhaSeriesCast = [
  { id: 'siddhartha', monogram: 'बु', name: { en: 'Buddha (Siddhartha)', ru: 'Будда (Сиддхартха)' }, actor: 'Himanshu Soni', role: { en: 'The Enlightened One', ru: 'Просветлённый' }, color: 'from-indigo-500 to-blue-600' },
  { id: 'yashodhara', monogram: 'यश', name: { en: 'Yashodhara', ru: 'Ясодхара' }, actor: 'Kajal Jain', role: { en: 'Princess, wife of Siddhartha', ru: 'Принцесса, жена Сиддхартхи' }, color: 'from-pink-500 to-rose-600' },
  { id: 'ananda', monogram: 'आन', name: { en: 'Ananda', ru: 'Ананда' }, actor: 'Girish Kumar', role: { en: 'Devoted disciple', ru: 'Преданный ученик' }, color: 'from-sky-500 to-indigo-600' },
  { id: 'devadatta', monogram: 'दे', name: { en: 'Devadatta', ru: 'Девадатта' }, actor: 'Khalid Siddiqui', role: { en: 'Cousin, antagonist', ru: 'Кузен, антагонист' }, color: 'from-red-500 to-red-700' },
  { id: 'maya', monogram: 'मा', name: { en: 'Queen Maya', ru: 'Царица Майя' }, actor: 'Surendra Pal', role: { en: 'Mother of Buddha', ru: 'Мать Будды' }, color: 'from-purple-500 to-violet-600' },
  { id: 'bimbisara', monogram: 'बि', name: { en: 'King Bimbisara', ru: 'Царь Бимбисара' }, actor: 'Kishore Bhatt', role: { en: 'King of Magadha, patron', ru: 'Царь Магадхи, покровитель' }, color: 'from-emerald-500 to-teal-600' },
]

function HeroCard({ hero, lang, ru }: { hero: Hero; lang: 'ru' | 'en'; ru: boolean }) {
  const [open, setOpen] = useState(false)
  const s = (x: Str) => x[lang]

  return (
    <div className="group golden-card flex flex-col overflow-hidden rounded-3xl">
      <div className={`relative h-28 bg-gradient-to-br ${hero.gradient}`}>
        <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf0] via-[#fffaf0]/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white/95" style={{ background: 'rgba(217, 119, 6, 0.9)' }}>
          {s(hero.era)}
        </span>
        {hero.icon && (
          <span className="absolute bottom-1 right-4 flex h-9 w-9 items-center justify-center rounded-full text-lg" style={{ background: 'rgba(255, 255, 255, 0.18)' }}>
            {hero.icon}
          </span>
        )}
        <div className="absolute bottom-0 right-4 translate-y-1/2">
          <div className="monogram-circle teacher-ring flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-white/90">
            <span className="relative devanagari text-4xl font-bold text-white drop-shadow-[0_1px_2px_rgba(120,53,15,0.9)]">{hero.monogram}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center px-6 pt-12 pb-5 text-center">
        <h3 className="-mt-0.5 font-[var(--font-cormorant)] text-2xl font-bold leading-tight text-slate-800">{s(hero.name)}</h3>
        <p className="mt-1 text-sm font-medium text-blue-600">{s(hero.role)}</p>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s(hero.description)}</p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{s(hero.vibe)}</p>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {hero.traits.map((t) => (
            <span key={t.en} className="rounded-full px-3 py-1 text-xs font-medium text-blue-700" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
              {s(t)}
            </span>
          ))}
        </div>

        {open && (
          <div className="mt-4 w-full space-y-4 border-t border-[#e7e5e4] pt-4 text-left animate-fade-in">
            <blockquote className="rounded-xl border border-[rgba(245,158,11,0.2)] px-4 py-3 text-sm italic text-slate-600" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>
              «{s(hero.quote)}»
            </blockquote>
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {ru ? 'Биография' : 'Biography'}
              </h4>
              {hero.biography.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-600">{s(p)}</p>
              ))}
            </div>
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                {ru ? 'Союзники Дхармы' : 'Allies of the Dharma'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {hero.allies.map((a) => (
                  <span key={a.en} className="rounded-full px-3 py-1 text-sm font-medium text-slate-600" style={{ background: 'rgba(217, 119, 6, 0.06)' }}>
                    {s(a)}
                  </span>
                ))}
              </div>
            </div>
            {hero.chat && (
              <Link
                href={`/dharma-chats/ai?character=${hero.chat}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                {ru ? 'Начать диалог' : 'Start a dialogue'} →
              </Link>
            )}
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          {open ? (ru ? 'Свернуть' : 'Collapse') : (ru ? 'Нажмите, чтобы открыть биографию' : 'Click to open the biography')}
          <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function CharactersPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'
  const s = (x: Str) => x[lang]

  return (
    <div>
      <HeroSilkAtlas />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-14">
          <span className="text-5xl block mb-4">☸️</span>
          <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-golden-gradient mb-4">
            {ru ? 'Герои Дхармы' : 'Heroes of the Dharma'}
          </h1>
          <p className="text-blue-500/70 text-lg max-w-2xl mx-auto">
            {ru ? 'Герои из сериалов' : 'Heroes from the TV series'}
          </p>
        </div>

        {/* Two series cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {series.map((ser) => (
            <div key={ser.id} className="golden-card rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-colors" style={{ background: 'rgba(217, 119, 6, 0.08)' }}>
                  {ser.emoji}
                </div>
              </div>
              <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold mb-3 text-slate-800 tracking-tight">
                {s(ser.title)}
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">{s(ser.desc)}</p>
              <a
                href={`#${ser.id}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {ru ? 'Смотреть героев' : 'View the heroes'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              {ser.id === 'chakravartin' && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Link
                    href="/alliances"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #d97706, #b45309)' }}
                  >
                    {ru ? 'Три союза Дхармы' : 'Three alliances of the Dharma'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ======= БУДДА (2013) ======= */}
        <section id="buddha-2013" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🪷</span>
            <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient">
              {s(series[0].title)}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {buddhaSeriesCast.map((c) => (
              <Link
                key={c.id}
                href={`/dharma-chats/ai?character=${c.id}`}
                className="group golden-card rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`relative flex h-28 items-start justify-start bg-gradient-to-br ${c.color}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf0] via-[#fffaf0]/40 to-transparent" />
                  <div className="absolute bottom-0 right-4 translate-y-1/2">
                    <span className="monogram-circle teacher-ring flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-white/90">
                      <span className="devanagari text-3xl font-bold text-white drop-shadow-[0_1px_2px_rgba(120,53,15,0.9)]">{c.monogram}</span>
                    </span>
                  </div>
                </div>
                <div className="pt-10 px-5 pb-5">
                  <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-slate-800">
                    {c.name[locale as 'ru' | 'en'] || c.name.en}
                  </h3>
                  <p className="text-sm text-slate-400">{c.actor}</p>
                  <p className="text-sm text-blue-600/80 mt-1">{c.role[locale as 'ru' | 'en'] || c.role.en}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ======= ЧАКРАВАРТИН — весь блок из #alliances ======= */}
        <section id="chakravartin" className="scroll-mt-24">
          <div className="text-center mb-14">
            <span className="text-5xl block mb-4">☸</span>
            <h2 className="font-[var(--font-cormorant)] text-3xl md:text-5xl font-bold text-golden-gradient mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {ru ? 'Четыре сердца Дхармы' : 'Four hearts of the Dharma'}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {ru
                ? 'Наставник, император, будущий Чакравартин и мать — основа истории. Откройте любую карточку — внутри биография, цитата и союзники.'
                : 'The mentor, the emperor, the future Chakravartin and the mother — the foundation of the story. Open any card — inside: biography, quote and allies.'}
            </p>
          </div>

          {/* Четыре сердца */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
            {hearts.map((h) => (
              <HeroCard key={h.id} hero={h} lang={lang} ru={ru} />
            ))}
          </div>

          {/* Три союза */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient mb-2">
                {ru ? 'Три союза Дхармы' : 'Three alliances of the Dharma'}
              </h3>
              <p className="text-slate-500 max-w-2xl mx-auto">
                {ru
                  ? 'Сначала Биндусара и Чанакья. Потом Чанакья и Ашока. Затем отец, сын и Радогупта — вместе.'
                  : 'First Bindusara and Chanakya. Then Chanakya and Ashoka. Then father, son and Radhagupta — together.'}
              </p>
            </div>
            <div className="space-y-4">
              {alliances.map((a) => (
                <div key={a.num} className="golden-card flex items-start gap-5 rounded-2xl p-6 transition-all hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl font-bold text-white shadow-md" style={{ background: 'linear-gradient(135deg, #d97706, #b45309)' }}>
                    {a.num}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{a.emoji}</span>
                      <h4 className="font-[var(--font-cormorant)] text-xl font-bold text-slate-800">{s(a.title)}</h4>
                    </div>
                    <p className="text-slate-500">{s(a.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Хранители и Юность */}
          <div className="mb-20 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient">
                  {ru ? 'Хранители Дхармы' : 'Guardians of the Dharma'}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {guardians.map((h) => (
                  <HeroCard key={h.id} hero={h} lang={lang} ru={ru} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient">
                  {ru ? 'Юность и надежда' : 'Youth and hope'}
                </h3>
              </div>
              <div className="grid gap-6">
                {youth.map((h) => (
                  <HeroCard key={h.id} hero={h} lang={lang} ru={ru} />
                ))}
              </div>
            </div>
          </div>

          {/* Дворец */}
          <div className="golden-card rounded-3xl px-6 py-12 text-center">
            <span className="text-4xl block mb-4">🏛️</span>
            <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {ru ? 'Дворец, где живёт Дхарма' : 'The palace where the Dharma lives'}
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {ru
                ? 'Каменные арки, тёплый свет и тени колонн — место, где встречаются император, наставник, принц и верные друзья. Здесь решают судьбу империи и хранят клятву Дхармы.'
                : 'Stone arches, warm light and the shadows of columns — the place where the emperor, the mentor, the prince and loyal friends meet. Here the fate of the empire is decided and the vow of the Dharma is kept.'}
            </p>
          </div>
        </section>

        <div className="mt-10">
          <PromoBanner page="characters" />
        </div>
      </div>
    </div>
  )
}