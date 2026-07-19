'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import PromoBanner from '@/components/ui/PromoBanner'

const questions = {
  en: [
    { q: 'When facing suffering, you usually...', a: ['Meditate quietly', 'Talk to friends', 'Take action immediately', 'Question everything'] },
    { q: 'Your greatest strength is...', a: ['Compassion', 'Courage', 'Wisdom', 'Ambition'] },
    { q: 'In a group, you tend to be...', a: ['The peacemaker', 'The leader', 'The questioner', 'The observer'] },
    { q: 'You value most...', a: ['Inner peace', 'Loyalty', 'Truth', 'Freedom'] },
    { q: 'Your life motto would be...', a: ['Harm no one', 'Seek knowledge', 'Live fully', 'Challenge everything'] },
  ],
  ru: [
    { q: 'Сталкиваясь со страданием, ты обычно...', a: ['Медитирую', 'Говорю с друзьями', 'Действую немедленно', 'Сомневаюсь во всём'] },
    { q: 'Твоя главная сила — это...', a: ['Сострадание', 'Храбрость', 'Мудрость', 'Амбициозность'] },
    { q: 'В группе ты обычно...', a: ['Миротворец', 'Лидер', 'Тот, кто задаёт вопросы', 'Наблюдатель'] },
    { q: 'Ты больше всего ценишь...', a: ['Внутренний покой', 'Верность', 'Истину', 'Свободу'] },
    { q: 'Твой девиз по жизни...', a: ['Не вреди', 'Ищи знания', 'Живи полно', 'Оспаривай всё'] },
  ],
}

const results = {
  en: [
    { name: 'Buddha', emoji: '🧘', desc: 'You seek inner peace and wisdom above all.' },
    { name: 'Ananda', emoji: '🙏', desc: 'You are loyal, curious, and devoted to learning.' },
    { name: 'Bimbisara', emoji: '👑', desc: 'You lead with generosity and righteousness.' },
    { name: 'Devadatta', emoji: '⚔️', desc: 'You challenge everything and never back down.' },
  ],
  ru: [
    { name: 'Будда', emoji: '🧘', desc: 'Ты ищешь внутренний покой и мудрость.' },
    { name: 'Ананда', emoji: '🙏', desc: 'Ты верный, любознательный и предан учению.' },
    { name: 'Бимбисара', emoji: '👑', desc: 'Ты leadership с щедростью и праведностью.' },
    { name: 'Девадатта', emoji: '⚔️', desc: 'Ты оспариваешь всё и никогда не отступаешь.' },
  ],
}

export default function QuizPageClient() {
  const { locale } = useLanguage()
  const q = (questions as any)[locale] || questions.en
  const r = (results as any)[locale] || results.en
  const [step, setStep] = useState(-1)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<number | null>(null)

  const start = () => { setStep(0); setAnswers([]); setResult(null) }

  const answer = (idx: number) => {
    const next = [...answers, idx]
    setAnswers(next)
    if (step < q.length - 1) {
      setStep(step + 1)
    } else {
      const sum = next.reduce((a, b) => a + b, 0)
      setResult(sum % r.length)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {locale === 'ru' ? 'Какой ты персонаж?' : 'Which Character Are You?'}
      </h1>

      {step === -1 && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-8 text-center">
          <span className="text-5xl block mb-4">🎭</span>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {locale === 'ru'
              ? 'Ответь на 5 вопросов и узнай, какой персонаж сериала «Будда» тебе ближе всего.'
              : 'Answer 5 questions and discover which character from the "Buddha" series matches you.'}
          </p>
          <button onClick={start} className="px-8 py-3 rounded-full bg-amber-700 hover:bg-amber-600 text-white font-medium transition-colors">
            {locale === 'ru' ? 'Начать' : 'Start'}
          </button>
        </div>
      )}

      {step >= 0 && result === null && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {locale === 'ru' ? 'Вопрос' : 'Question'} {step + 1}/{q.length}
            </span>
            <div className="flex gap-1">
              {q.map((_: any, i: number) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= step ? 'bg-amber-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
              ))}
            </div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {q[step].q}
          </h2>
          <div className="space-y-3">
            {q[step].a.map((a: string, i: number) => (
              <button
                key={i}
                onClick={() => answer(i)}
                className="w-full text-left px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all text-gray-700 dark:text-gray-300"
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      )}

      {result !== null && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-8 text-center">
          <span className="text-6xl block mb-4">{r[result].emoji}</span>
          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-100 mb-3">
            {locale === 'ru' ? 'Вы —' : 'You are'} {r[result].name}!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">{r[result].desc}</p>
          <div className="flex gap-3 justify-center">
            <Link
              href={`/chat?character=${r[result].name.toLowerCase()}`}
              className="px-6 py-2.5 rounded-full bg-amber-700 hover:bg-amber-600 text-white font-medium transition-colors"
            >
              {locale === 'ru' ? 'Начать чат' : 'Start Chat'}
            </Link>
            <button
              onClick={start}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
            >
              {locale === 'ru' ? 'Ещё раз' : 'Try Again'}
            </button>
          </div>
        </div>
      )}

      <div className="mt-10">
        <PromoBanner page="quiz" />
      </div>
    </div>
  )
}
