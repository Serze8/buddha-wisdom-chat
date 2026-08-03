'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Feather, Mountain, BookOpen, Brain, Compass, Check, ArrowRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'buddha_onboarded'
const INTERESTS_KEY = 'buddha_interests'

const interests = [
  { id: 'calm', key: 'interestCalm', icon: Feather },
  { id: 'difficult', key: 'interestDifficult', icon: Mountain },
  { id: 'learn', key: 'interestLearn', icon: BookOpen },
  { id: 'ideas', key: 'interestIdeas', icon: Brain },
  { id: 'explore', key: 'interestExplore', icon: Compass },
]

export default function Onboarding({ onDone }: { onDone?: () => void }) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setShow(true)
        document.body.style.overflow = 'hidden'
      }
    } catch {}
    return () => { document.body.style.overflow = '' }
  }, [])

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  const finish = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
      if (selected.length) localStorage.setItem(INTERESTS_KEY, JSON.stringify(selected))
    } catch {}
    setLeaving(true)
    setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
      onDone?.()
    }, 300)
  }

  if (!mounted || !show) return null

  return (
    <div className={cn(
      'fixed inset-0 z-[100] overflow-y-auto animate-fade-in',
      leaving && 'opacity-0 transition-opacity duration-300'
    )} style={{ background: 'radial-gradient(ellipse at 50% 0%, #1c1308 0%, #0F0E0A 60%)' }}>
      <div className="min-h-full flex flex-col items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
              <span className="text-3xl">🪷</span>
            </div>
            <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-golden-gradient mb-3">
              {t.onboarding.title}
            </h1>
            <p className="text-amber-200/50 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {t.onboarding.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {interests.map(({ id, key, icon: Icon }) => {
              const active = selected.includes(id)
              return (
                <button
                  key={id}
                  onClick={() => toggle(id)}
                  className={cn(
                    'w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all active:scale-[0.98]',
                    'golden-card',
                    active && 'ring-1 ring-amber-400/60'
                  )}
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

          <button
            onClick={finish}
            disabled={selected.length === 0}
            className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed btn-glow"
            style={{
              background: 'linear-gradient(135deg, #b45309, #92400e)',
              color: '#fde68a',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
            }}
          >
            {t.onboarding.next}
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={finish}
            className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-amber-200/40 hover:text-amber-200/70 transition-colors py-2"
          >
            <X className="w-4 h-4" />
            {t.onboarding.skip}
          </button>
        </div>
      </div>
    </div>
  )
}
