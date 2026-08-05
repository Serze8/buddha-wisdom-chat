export type GlossaryCategory = 'core' | 'practice' | 'philosophy'

export type GlossaryEntry = {
  id: string
  term: string
  script: string
  category: GlossaryCategory
  en: { name: string; definition: string }
  ru: { name: string; definition: string }
  href?: string
}

export const glossaryTerms: GlossaryEntry[] = [
  {
    id: 'buddha',
    term: 'Buddha',
    script: 'बुद्ध',
    category: 'core',
    en: { name: 'The Buddha', definition: 'The "Awakened One" — Siddhartha Gautama, who attained enlightenment and taught the path to liberation from suffering.' },
    ru: { name: 'Будда', definition: '«Пробуждённый» — Сиддхартха Гаутама, достигший просветления и указавший путь к освобождению от страданий.' },
    href: '/characters',
  },
  {
    id: 'dharma',
    term: 'Dharma',
    script: 'धर्म',
    category: 'core',
    en: { name: 'Dharma', definition: 'The universal law of reality, and the teachings of the Buddha that reveal it.' },
    ru: { name: 'Дхарма', definition: 'Универсальный закон реальности и учение Будды, раскрывающее его.' },
    href: '/teachings',
  },
  {
    id: 'dharmachakra',
    term: 'Dharmachakra',
    script: 'धर्मचक्र',
    category: 'core',
    en: { name: 'Wheel of Dharma', definition: 'The ancient symbol of the Buddha\'s teaching, whose eight spokes represent the Noble Eightfold Path.' },
    ru: { name: 'Колесо Дхармы (Дхармачакра)', definition: 'Древний символ учения Будды, восемь спиц которого символизируют Благородный восьмеричный путь.' },
    href: '/teachings',
  },
  {
    id: 'samsara',
    term: 'Saṃsāra',
    script: 'संसार',
    category: 'philosophy',
    en: { name: 'Samsara', definition: 'The cycle of birth, death and rebirth, driven by craving and ignorance.' },
    ru: { name: 'Сансара', definition: 'Круг рождения, смерти и перерождения, движимый привязанностью и неведением.' },
  },
  {
    id: 'nirvana',
    term: 'Nirvāṇa',
    script: 'निर्वाण',
    category: 'philosophy',
    en: { name: 'Nirvana', definition: 'The ultimate goal of Buddhist practice — the cessation of suffering and the end of craving.' },
    ru: { name: 'Нирвана', definition: 'Конечная цель буддийской практики — прекращение страдания и угасание привязанностей.' },
  },
  {
    id: 'bodhi',
    term: 'Bodhi',
    script: 'बोधि',
    category: 'philosophy',
    en: { name: 'Bodhi', definition: 'Enlightenment or awakening — the direct insight into the true nature of reality.' },
    ru: { name: 'Бодхи (Просветление)', definition: 'Просветление, пробуждение — прямое постижение истинной природы реальности.' },
  },
  {
    id: 'sunyata',
    term: 'Śūnyatā',
    script: 'शून्यता',
    category: 'philosophy',
    en: { name: 'Emptiness', definition: 'The Mahayana insight that all phenomena lack an independent, unchanging self-nature.' },
    ru: { name: 'Шуньята (Пустота)', definition: 'Махаянское учение о том, что все явления лишены независимой, неизменной самости.' },
  },
  {
    id: 'karma',
    term: 'Karma',
    script: 'कर्म',
    category: 'philosophy',
    en: { name: 'Karma', definition: 'The law of cause and effect: intentional actions shape our future experience.' },
    ru: { name: 'Карма', definition: 'Закон причины и следствия: намеренные действия формируют будущий опыт.' },
  },
  {
    id: 'sangha',
    term: 'Saṅgha',
    script: 'संघ',
    category: 'core',
    en: { name: 'Sangha', definition: 'The community of Buddhist practitioners — one of the Three Jewels of Buddhism.' },
    ru: { name: 'Сангха', definition: 'Сообщество буддийских практикующих — одно из Трёх Драгоценностей буддизма.' },
    href: '/community',
  },
  {
    id: 'anatta',
    term: 'Anattā',
    script: 'अनत्ता',
    category: 'philosophy',
    en: { name: 'Non-Self', definition: 'One of the Three Marks of Existence: there is no permanent, unchanging self in anything.' },
    ru: { name: 'Анатта (Не-Я)', definition: 'Одна из трёх характеристик бытия: ни в чём нет постоянной, неизменной самости.' },
    href: '/theses#anatman',
  },
  {
    id: 'metta',
    term: 'Mettā',
    script: 'मेत्ता',
    category: 'practice',
    en: { name: 'Loving-Kindness', definition: 'The practice of wishing happiness and well-being to oneself and to all beings.' },
    ru: { name: 'Метта (Любящая доброта)', definition: 'Практика пожелания счастья и благополучия себе и всем существам.' },
    href: '/teachings/practice',
  },
  {
    id: 'four-noble-truths',
    term: 'Four Noble Truths',
    script: 'चत्वारि आर्यसत्यानि',
    category: 'core',
    en: { name: 'Four Noble Truths', definition: 'The Buddha\'s first teaching: the truth of suffering, its cause, its cessation, and the path leading to its end.' },
    ru: { name: 'Четыре благородные истины', definition: 'Первое учение Будды: истина о страдании, его причине, его прекращении и пути, ведущем к прекращению.' },
    href: '/teachings',
  },
  {
    id: 'eightfold-path',
    term: 'Noble Eightfold Path',
    script: 'अष्टाङ्गमार्ग',
    category: 'core',
    en: { name: 'Noble Eightfold Path', definition: 'Eight practices leading to liberation: right view, intention, speech, action, livelihood, effort, mindfulness, and concentration.' },
    ru: { name: 'Благородный восьмеричный путь', definition: 'Восемь практик, ведущих к освобождению: правильные воззрение, намерение, речь, действие, образ жизни, усилие, осознанность и сосредоточение.' },
    href: '/theses',
  },
  {
    id: 'dependent-origination',
    term: 'Dependent Origination',
    script: 'प्रतीत्यसमुत्पाद',
    category: 'philosophy',
    en: { name: 'Dependent Origination', definition: 'The teaching that all phenomena arise in dependence on causes and conditions.' },
    ru: { name: 'Взаимозависимое возникновение', definition: 'Учение о том, что все явления возникают в зависимости от причин и условий.' },
  },
]

export const glossaryCategories: GlossaryCategory[] = ['core', 'practice', 'philosophy']

export function getGlossaryEntries(): GlossaryEntry[] {
  return glossaryTerms
}
