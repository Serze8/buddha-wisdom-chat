import Link from 'next/link'

export const metadata = {
  title: 'Архив бесед — Wisdom Dharma Chats',
  description: 'Dharma Chats, лекции, интервью о буддийской мудрости.',
}

const talks = [
  {
    id: 'bhikkhu-bodhi-noble-truths',
    title: 'Бхиккху Бодхи: «Благородные Истины, Благородные Пути»',
    subtitle: 'Wisdom Dharma Chats with Daniel Aitken',
    description: 'О структуре палийского канона, природе Ниббаны, зависимом возникновении и пути к освобождению.',
    duration: '1:24:00',
    tags: ['Ниббāна', 'Четыре Истины', 'Пāли'],
    href: '/dharma-chats/talks/bhikkhu-bodhi-noble-truths',
  },
]

export default function TalksPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-20">
        <div className="text-center mb-14">
          <span className="text-5xl block mb-4">📹</span>
          <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-amber-700 mb-4">
            Архив бесед
          </h1>
          <p className="text-amber-600/60 text-lg font-[var(--font-cormorant)] italic max-w-2xl mx-auto">
            Dharma Chats, лекции, интервью — мудрость, записанная словом.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {talks.map((talk) => (
            <Link
              key={talk.id}
              href={talk.href}
              className="group golden-card rounded-2xl p-6 hover:shadow-xl transition-all block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700 group-hover:text-golden-gradient transition-colors">
                    {talk.title}
                  </h2>
                  <p className="text-amber-400/70 text-sm mt-1">{talk.subtitle}</p>
                  <p className="text-amber-700/40 text-sm mt-3 leading-relaxed">{talk.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {talk.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-amber-950/50 border border-amber-800/20 px-3 py-1 text-xs text-amber-500/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-amber-600/40 whitespace-nowrap">{talk.duration}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/dharma-chats"
            className="inline-flex items-center gap-2 text-amber-400/70 hover:text-amber-400 transition-colors font-medium"
          >
            ← Назад к Dharma Chats
          </Link>
        </div>
      </div>
    </div>
  )
}
