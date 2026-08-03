export type JourneyDay = {
  day: number
  title: string
  description: string
  href: string
}

type LocalizedJourney = {
  en: JourneyDay[]
  ru: JourneyDay[]
}

export const journeyDays: LocalizedJourney = {
  en: [
    { day: 1, title: 'Introduction: Who is the Buddha', description: 'The story of Siddhartha, his search for understanding, and his enlightenment.', href: '/teachings' },
    { day: 2, title: 'The Four Noble Truths', description: 'What suffering is, its cause, and the path to its end.', href: '/teachings' },
    { day: 3, title: 'The Noble Eightfold Path', description: 'Eight steps on the way to liberation.', href: '/theses' },
    { day: 4, title: 'Meditation and Mindfulness', description: 'Simple techniques to begin your practice.', href: '/teachings/practice' },
    { day: 5, title: 'The Dhammapada: Quotes and Wisdom', description: 'Key sayings of the Buddha with explanations.', href: '/theses' },
    { day: 6, title: 'Karma and Rebirth', description: 'The law of cause and effect in Buddhism.', href: '/theses' },
    { day: 7, title: 'Compassion and Loving-Kindness (Metta)', description: 'Practicing kindness toward yourself and others.', href: '/teachings/practice' },
    { day: 8, title: 'Buddhist Schools and Traditions', description: 'Theravada, Mahayana, and Vajrayana.', href: '/teachings' },
    { day: 9, title: 'The Five Precepts', description: 'The ethical principles of Buddhism.', href: '/theses' },
    { day: 10, title: 'The Path to Enlightenment', description: 'What nirvana is and how to approach it.', href: '/theses' },
    { day: 11, title: 'Buddhism in the Modern World', description: 'Applying the teachings in everyday life.', href: '/teachings/practice' },
    { day: 12, title: 'Sutras and Texts', description: 'An overview of the Pali Canon and other scriptures.', href: '/teachings' },
    { day: 13, title: 'Wisdom and Ignorance', description: 'How to tell truth from illusion.', href: '/theses' },
    { day: 14, title: 'Conclusion: Your Path', description: 'Consolidating what you learned and next steps for practice.', href: '/teachings/practice' },
  ],
  ru: [
    { day: 1, title: 'Введение: кто такой Будда', description: 'История Сиддхартхи, его поиск понимания и просветление.', href: '/teachings' },
    { day: 2, title: 'Четыре благородные истины', description: 'Что такое страдание, его причина и путь к его прекращению.', href: '/teachings' },
    { day: 3, title: 'Благородный восьмеричный путь', description: 'Восемь шагов к освобождению.', href: '/theses' },
    { day: 4, title: 'Медитация и осознанность', description: 'Простые техники для начала практики.', href: '/teachings/practice' },
    { day: 5, title: 'Дхаммапада: цитаты и мудрость', description: 'Ключевые изречения Будды с пояснениями.', href: '/theses' },
    { day: 6, title: 'Карма и перерождение', description: 'Закон причины и следствия в буддизме.', href: '/theses' },
    { day: 7, title: 'Сострадание и любящая доброта (Метта)', description: 'Практика развития доброты к себе и другим.', href: '/teachings/practice' },
    { day: 8, title: 'Буддийские школы и традиции', description: 'Тхеравада, Махаяна и Ваджраяна.', href: '/teachings' },
    { day: 9, title: 'Пять заповедей', description: 'Этические принципы буддизма.', href: '/theses' },
    { day: 10, title: 'Путь к просветлению', description: 'Что такое нирвана и как к ней приблизиться.', href: '/theses' },
    { day: 11, title: 'Буддизм в современном мире', description: 'Как применять учения в повседневной жизни.', href: '/teachings/practice' },
    { day: 12, title: 'Сутры и тексты', description: 'Обзор Палийского канона и других священных текстов.', href: '/teachings' },
    { day: 13, title: 'Мудрость и неведение', description: 'Как различать истину и иллюзию.', href: '/theses' },
    { day: 14, title: 'Итог: твой путь', description: 'Закрепление знаний и следующие шаги для практики.', href: '/teachings/practice' },
  ],
}

export function getJourneyDays(locale: string): JourneyDay[] {
  return journeyDays[locale as keyof LocalizedJourney] || journeyDays.en
}
