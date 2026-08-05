export type Quote = {
  quote: string
  explanation: string
  source: string
}

export type LocalizedQuotes = {
  en: Quote[]
  ru: Quote[]
}

export const dailyQuotes: LocalizedQuotes = {
  en: [
    {
      quote: 'Hatred does not cease by hatred, but only by love.',
      explanation: 'Anger feeds on anger — every harsh reply gives it new strength. The only way to break the cycle is to respond with its opposite: kindness, even when it is hard.',
      source: 'Dhammapada 1:5',
    },
    {
      quote: 'The mind is everything. What you think you become.',
      explanation: 'We do not see the world as it is, but as we are. By training our thoughts — through mindfulness and wise reflection — we gradually transform who we become.',
      source: 'Buddha',
    },
    {
      quote: 'Peace comes from within. Do not seek it without.',
      explanation: 'External circumstances are never fully in our control, so peace found outside is fragile. The stable kind of peace is cultivated inside, through calmness and acceptance.',
      source: 'Buddha',
    },
    {
      quote: 'In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go.',
      explanation: 'When life ends, possessions and status lose their meaning. What remains is the love we gave, the care we brought to everyday life, and our ability to release attachments without fear.',
      source: 'Buddha',
    },
    {
      quote: 'Better than a thousand hollow words is one word that brings peace.',
      explanation: 'Volume is not value. A single sincere, timely word can calm a situation — while endless empty speech only adds noise. Speak less, mean more.',
      source: 'Dhammapada 1:100',
    },
    {
      quote: 'The fool who knows he is a fool is wise, but the fool who thinks he is wise is a real fool.',
      explanation: 'Self-awareness is the beginning of wisdom. As soon as we admit we do not know, we open the door to learning. The dangerous state is confident ignorance.',
      source: 'Dhammapada 6:63',
    },
    {
      quote: 'Health is the greatest gift, contentment the greatest wealth.',
      explanation: 'We chase money and possessions, yet forget that without health nothing is enjoyable, and without inner contentment no amount of wealth satisfies. Appreciate what you already have.',
      source: 'Dhammapada 4:204',
    },
    {
      quote: 'All that we are is the result of what we have thought.',
      explanation: 'Our character is built from countless small mental habits. Change the way you think, and your actions — and your life — will slowly follow.',
      source: 'Dhammapada 1:1',
    },
    {
      quote: 'You yourself, as much as anybody in the entire universe, deserve your love and affection.',
      explanation: 'Many people are kinder to others than to themselves. Genuine compassion begins at home: if we cannot be gentle with ourselves, our care for others becomes strained and fragile.',
      source: 'Buddha',
    },
    {
      quote: 'However many holy words you read, however many you speak, what good will they do you if you do not act upon them?',
      explanation: 'Knowledge that is not lived is just information. A single teaching applied in daily life outweighs a library of scriptures that remain unread in practice.',
      source: 'Dhammapada 19:51',
    },
    {
      quote: 'The trouble is, you think you have time.',
      explanation: 'We postpone what matters — honesty, reconciliation, kindness — assuming there will always be another day. Life is brief and uncertain; act on what is important now.',
      source: 'Buddha',
    },
    {
      quote: 'Three things cannot be long hidden: the sun, the moon, and the truth.',
      explanation: 'Deception may seem convenient for a while, but reality always reveals itself eventually. Living in harmony with the truth saves us from that painful exposure.',
      source: 'Buddha',
    },
  ],
  ru: [
    {
      quote: 'Ненависть не прекращается ненавистью, а лишь любовью.',
      explanation: 'Злоба питается злобой — каждый резкий ответ даёт ей новую силу. Разорвать этот круг можно только противоположным: добротой, даже когда это трудно.',
      source: 'Дхаммапада 1:5',
    },
    {
      quote: 'Ум — это всё. То, что ты думаешь, тем ты и становишься.',
      explanation: 'Мы видим мир не таким, каков он есть, а такими, каковы мы сами. Тренируя мысли — через осознанность и мудрое размышление — мы постепенно меняем то, кем становимся.',
      source: 'Будда',
    },
    {
      quote: 'Мир исходит изнутри. Не ищи его снаружи.',
      explanation: 'Внешние обстоятельства нам не подвластны, поэтому покой, найденный снаружи, хрупок. Устойчивый покой рождается внутри — через спокойствие и принятие.',
      source: 'Будда',
    },
    {
      quote: 'В конце концов, важны только три вещи: как сильно ты любил, как мягко ты жил и как благородно ты отпустил.',
      explanation: 'Когда жизнь завершается, имущество и статус теряют смысл. Остаётся лишь любовь, которую мы отдали, забота, внесённая в повседневность, и умение отпускать без страха.',
      source: 'Будда',
    },
    {
      quote: 'Лучше одно слово, приносящее покой, чем тысяча пустых слов.',
      explanation: 'Громкость — не ценность. Одно искреннее слово вовремя может успокоить ситуацию, а бесконечная пустая речь лишь добавляет шума. Говори меньше, но весомее.',
      source: 'Дхаммапада 1:100',
    },
    {
      quote: 'Глупец, знающий, что он глупец, мудр. А глупец, считающий себя мудрым — настоящий глупец.',
      explanation: 'Осознанность — начало мудрости. Как только мы признаём, что чего-то не знаем, мы открываем дверь учению. Опасно лишь уверенное невежество.',
      source: 'Дхаммапада 6:63',
    },
    {
      quote: 'Здоровье — величайший дар, довольство — величайшее богатство.',
      explanation: 'Мы гонимся за деньгами и вещами, забывая, что без здоровья ничто не радует, а без внутренней удовлетворённости никакое богатство не насыщает. Цени то, что уже имеешь.',
      source: 'Дхаммапада 4:204',
    },
    {
      quote: 'Всё, чем мы являемся, — это результат того, о чём мы думали.',
      explanation: 'Характер строится из множества маленьких умственных привычек. Измени способ мышления — и действия, а затем и жизнь, медленно последуют за этим.',
      source: 'Дхаммапада 1:1',
    },
    {
      quote: 'Ты сам, как и любой другой во всей вселенной, заслуживаешь своей любви и привязанности.',
      explanation: 'Многие относятся к себе строже, чем к другим. Подлинное сострадание начинается с себя: если мы не умеем быть мягкими к себе, забота о других становится хрупкой.',
      source: 'Будда',
    },
    {
      quote: 'Сколько бы священных слов ты ни прочитал, сколько бы ни произнёс — какой от них прок, если ты не поступаешь по ним?',
      explanation: 'Знание, которое не прожито, — просто информация. Одно учение, применённое в жизни, весит больше, чем библиотека писаний, не открытых на практике.',
      source: 'Дхаммапада 19:51',
    },
    {
      quote: 'Беда в том, что ты думаешь, будто у тебя есть время.',
      explanation: 'Мы откладываем важное — честность, примирение, доброту — считая, что всегда будет другой день. Жизнь коротка и непредсказуема; действуй по-важному сейчас.',
      source: 'Будда',
    },
    {
      quote: 'Три вещи нельзя долго скрывать: солнце, луну и истину.',
      explanation: 'Обман может казаться удобным какое-то время, но реальность рано или поздно открывается. Жизнь в согласии с истиной избавляет нас от мучительного разоблачения.',
      source: 'Будда',
    },
  ],
}

export function getDailyQuote(date: Date = new Date(), locale: string = 'en'): Quote {
  const list = dailyQuotes[locale as keyof LocalizedQuotes] || dailyQuotes.en
  const startOfYear = new Date(date.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / 86400000)
  return list[dayOfYear % list.length]
}
