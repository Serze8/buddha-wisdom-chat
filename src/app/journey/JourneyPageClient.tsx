'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getJourneyDays } from '@/lib/journey'
import { getDailyQuote } from '@/lib/quotes'
import { Check, Lock, Play, RotateCcw, Sparkles, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'buddha_journey_progress'
const TOTAL = 14

export default function JourneyPageClient() {
  const { locale, t } = useLanguage()
  const router = useRouter()
  const days = getJourneyDays(locale)

  const [progress, setProgress] = useState<number>(0)
  const [mounted, setMounted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    const value = raw ? parseInt(raw, 10) : 0
    setProgress(Number.isFinite(value) && value >= 0 ? Math.min(value, TOTAL) : 0)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) localStorage.setItem(STORAGE_KEY, String(progress))
  }, [progress, mounted])

  const quote = getDailyQuote(new Date(), locale)
  const currentDay = progress + 1
  const allDone = progress >= TOTAL
  const pct = Math.round((progress / TOTAL) * 100)

  const completeDay = (day: number) => {
    setProgress((p) => Math.max(p, day))
  }

  const reopenDay = (day: number) => {
    setProgress(Math.max(0, day - 1))
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-8 md:mb-10 scroll-reveal">
        <p className="text-amber-500/60 text-xs tracking-widest uppercase font-medium mb-2">
          {t.journey.title}
        </p>
        <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-golden-gradient mb-3">
          {t.journey.title}
        </h1>
        <p className="text-amber-200/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {t.journey.subtitle}
        </p>
        <p className="text-amber-400/80 font-medium mt-4">
          {allDone
            ? `${progress}/${TOTAL}`
            : t.journey.dayOf.replace('{day}', String(currentDay)).replace('{total}', String(TOTAL))}
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8 scroll-reveal">
        <div className="flex items-center justify-between text-xs text-amber-200/50 mb-2">
          <span className="uppercase tracking-widest">
            {progress}/{TOTAL}
          </span>
          <span>{pct}%</span>
        </div>
        <div className="h-2.5 rounded-full border border-amber-800/30 overflow-hidden" style={{ background: 'rgba(245, 158, 11, 0.06)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg, rgba(245,158,11,0.7), #F59E0B)',
            }}
          />
        </div>
      </div>

      {/* Completion banner */}
      {allDone && (
        <div className="golden-card rounded-2xl p-6 mb-8 text-center scroll-reveal">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-amber-400" />
          <p className="font-[var(--font-cormorant)] text-xl text-amber-100 font-semibold">
            {t.journey.completed}!
          </p>
          <p className="text-amber-200/50 text-sm mt-1">{t.journey.subtitle}</p>
        </div>
      )}

      {/* Quote of the Day */}
      <section className="mb-10 scroll-reveal">
        <div className="golden-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-amber-500/60 text-xs tracking-widest uppercase font-medium">
              {t.onboarding.quoteOfDay}
            </span>
            <span className="text-amber-600/40 text-xs" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {new Date().toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', { month: 'long', day: 'numeric' })}
            </span>
          </div>
          <p className="font-[var(--font-cormorant)] text-xl italic text-golden-gradient leading-relaxed">
            «{quote.quote}»
          </p>
          <p className="text-amber-600/60 text-sm mt-2" style={{ fontFamily: 'var(--font-cormorant)' }}>— {quote.source}</p>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="mt-3 inline-flex items-center gap-2 text-amber-400/80 hover:text-amber-400 text-sm font-medium transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            {showExplanation ? t.onboarding.hideExplanation : t.onboarding.understandWhat}
          </button>
          {showExplanation && (
            <div className="mt-3 rounded-xl p-4 border border-amber-500/15" style={{ background: 'rgba(245, 158, 11, 0.06)' }}>
              <p className="text-amber-200/60 text-sm leading-relaxed">{quote.explanation}</p>
            </div>
          )}
        </div>
      </section>

      {/* Days */}
      <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100 mb-5 scroll-reveal">
        {t.journey.title}
      </h2>
      <div className="space-y-3 stagger-children">
        {days.map((day) => {
          const isCompleted = day.day <= progress
          const isCurrent = day.day === currentDay && !allDone
          const isLocked = !isCompleted && !isCurrent
          return (
            <div
              key={day.day}
              className={cn(
                'rounded-xl border p-4 md:p-5 transition-all scroll-reveal',
                isCurrent && 'border-amber-400/70 bg-amber-400/5 shadow-lg shadow-amber-900/20',
                isCompleted && 'border-amber-700/30 bg-amber-900/10',
                isLocked && 'border-amber-900/20 bg-transparent opacity-50'
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-full border text-sm font-bold shrink-0',
                    isCompleted && 'border-amber-500/60 text-amber-400 bg-amber-500/10',
                    isCurrent && 'border-amber-400 text-amber-400 bg-amber-400/10',
                    isLocked && 'border-amber-900/40 text-amber-200/30'
                  )}
                >
                  {day.day}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-xs uppercase tracking-widest text-amber-500/60">
                      {t.journey.dayOf.replace('{day}', String(day.day)).replace('{total}', String(TOTAL))}
                    </p>
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-amber-400/80">
                        <Check className="w-3 h-3" /> {t.journey.completed}
                      </span>
                    )}
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-amber-400">
                        <Play className="w-3 h-3" /> {t.journey.inProgress}
                      </span>
                    )}
                  </div>
                  <p className="font-[var(--font-cormorant)] text-lg text-amber-100/80 leading-snug mt-0.5">
                    {day.title}
                  </p>
                  {!isLocked && (
                    <p className="text-amber-200/40 text-sm leading-relaxed mt-1">{day.description}</p>
                  )}
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  {isLocked && <Lock className="w-4 h-4 text-amber-200/20" />}
                  {isCurrent && (
                    <button
                      onClick={() => {
                        completeDay(day.day)
                        router.push(day.href)
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium px-3.5 py-2 transition-colors active:scale-[0.97]"
                    >
                      <Play className="w-3.5 h-3.5" />
                      {t.journey.start}
                    </button>
                  )}
                  {isCompleted && (
                    <>
                      <Link
                        href={day.href}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-amber-700/40 hover:border-amber-500/60 text-amber-300 text-sm font-medium px-3 py-2 transition-colors"
                      >
                        {t.journey.continue}
                      </Link>
                      <button
                        onClick={() => reopenDay(day.day)}
                        title={t.journey.reset}
                        className="rounded-lg p-2 text-amber-200/40 hover:text-amber-400 transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Reset */}
      <div className="text-center mt-8 pb-4">
        <button
          onClick={() => setProgress(0)}
          className="inline-flex items-center gap-2 text-amber-200/40 hover:text-amber-300 text-sm transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t.journey.reset}
        </button>
      </div>
    </div>
  )
}
