'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Feather, Mountain, BookOpen, Brain, Compass, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const INTERESTS_KEY = 'buddha_interests'

const interests = [
  { id: 'calm', key: 'interestCalm', icon: Feather },
  { id: 'difficult', key: 'interestDifficult', icon: Mountain },
  { id: 'learn', key: 'interestLearn', icon: BookOpen },
  { id: 'ideas', key: 'interestIdeas', icon: Brain },
  { id: 'explore', key: 'interestExplore', icon: Compass },
]

export default function InterestsQuestionnaire() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(INTERESTS_KEY)
      if (saved) setSelected(JSON.parse(saved))
    } catch {}
  }, [])

  const toggle = (id: string) => {
    const next = selected.includes(id) ? selected.filter(i => i !== id) : [...selected, id]
    setSelected(next)
    try {
      if (next.length) localStorage.setItem(INTERESTS_KEY, JSON.stringify(next))
      else localStorage.removeItem(INTERESTS_KEY)
    } catch {}
  }

  if (!mounted) return null

  return (
    <div className="golden-card rounded-2xl p-6 md:p-8 relative noise-overlay">
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
            🪷
          </div>
          <div>
            <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100/80 mb-2">
              {t.onboarding.title}
            </h2>
            <p className="text-amber-100/40 text-sm leading-relaxed">
              {t.onboarding.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {interests.map(({ id, key, icon: Icon }) => {
            const active = selected.includes(id)
            return (
              <button
                key={id}
                onClick={() => toggle(id)}
                className={cn('w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all active:scale-[0.98]', active ? 'ring-1 ring-amber-400/60' : 'hover:bg-amber-950/30')}
                style={active ? { background: 'rgba(245, 158, 11, 0.12)', boxShadow: '0 0 0 1px rgba(245, 158, 11, 0.4), 0 8px 30px rgba(245, 158, 11, 0.1)' } : undefined}
              >
                <span className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.18)' }}>
                  <Icon className={cn('w-5 h-5 transition-colors', active ? 'text-amber-400' : 'text-amber-300/50')} />
                </span>
                <span className={cn('flex-1 text-base transition-colors', active ? 'text-amber-100' : 'text-amber-200/60')}>
                  {t.onboarding[key as keyof typeof t.onboarding]}
                </span>
                <span className={cn('w-6 h-6 shrink-0 rounded-full flex items-center justify-center transition-all', active ? 'bg-amber-500' : 'border border-amber-800/50')}>
                  {active && <Check className="w-4 h-4 text-white" />}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
