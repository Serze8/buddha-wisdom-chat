'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'

const theses = [
  {
    id: 'anatman',
    title: { en: 'Anattā — Non-Self', ru: 'Анатман — Не-Я' },
    content: {
      en: 'One of the Three Marks of Existence in Buddhist philosophy. It means there is no permanent, unchanging self — neither in humans nor in the world. What we call "I" is actually a constantly changing collection of five aggregates (skandhas): form, feeling, perception, mental formations, and consciousness.',
      ru: 'Одна из трёх фундаментальных характеристик бытия в буддийской философии. Она утверждает, что ни в человеке, ни во всём мире нет никакой постоянной, вечной и неизменной субстанции. То, что мы называем «я», на самом деле постоянно меняющийся набор пяти совокупностей (скандх): форма, чувство, восприятие, психические формации и сознание.',
    },
    analogy: {
      en: 'Like a cloud website that seems like one thing but is actually thousands of microservices — there is no single server, just processes working together. Similarly, "you" are a process, not a thing.',
      ru: 'Как крупный интернет-ресурс, который кажется единым целым, но на деле состоит из тысяч микросервисов. Никакого «единого сервера» не существует — есть процессы, работающие вместе. Так и «ты» — это процесс, а не вещь.',
    },
  },
]

export default function ThesesPage() {
  const { locale } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {locale === 'ru' ? 'Тезисы Буддизма' : 'Buddhist Theses'}
      </h1>

      <div className="space-y-8">
        {theses.map((thesis) => (
          <article key={thesis.id} id={thesis.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-8 scroll-mt-20">
            <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
              {(thesis.title as any)[locale] || thesis.title.en}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {(thesis.content as any)[locale] || thesis.content.en}
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-5">
              <h3 className="font-[var(--font-cormorant)] text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                {locale === 'ru' ? '🔄 Аналогия в современной жизни' : '🔄 Modern Analogy'}
              </h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                {(thesis.analogy as any)[locale] || thesis.analogy.en}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <PromoBanner page="theses" />
      </div>
    </div>
  )
}
