'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import BreathingPractice from '@/components/BreathingPractice'
import RitualBreathingPractice from '@/components/RitualBreathingPractice'
import InterestsQuestionnaire from '@/components/InterestsQuestionnaire'

function AngerReminder() {
  const { t } = useLanguage()

  return (
    <div className="mt-6 p-6 rounded-2xl" style={{ background: 'rgba(20, 14, 8, 0.6)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
      <p className="text-sm font-medium text-amber-400/70 mb-3">🔥 {t.practice.reminderTitle}</p>
      <p className="text-amber-100/40 text-sm italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>«{t.practice.reminderText}»</p>
    </div>
  )
}

export default function PracticePageClient() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/teachings"
        className="inline-flex items-center gap-2 text-amber-500/50 hover:text-amber-400 transition-colors mb-8 text-sm"
      >
        ← {t.common.back}
      </Link>

      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-golden-gradient text-center mb-4">
        {t.practice.title}
      </h1>

      <p className="text-center text-amber-200/40 text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
        {t.practice.intro}
      </p>

      <div className="space-y-8">
        {/* === QUESTIONNAIRE === */}
        <InterestsQuestionnaire />

        {/* === MEDITATION + BREATHING === */}
        <div className="golden-card rounded-2xl p-6 md:p-8 relative noise-overlay">
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                🧘
              </div>
              <div>
                <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100/80 mb-2">
                  {t.practice.meditationTitle}
                </h2>
                <p className="text-amber-100/40 text-sm leading-relaxed">
                  {t.practice.meditationDesc}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.08)' }}>
              <p className="text-sm font-medium text-amber-400/60 mb-4">
                ✨ {t.practice.resonantBreathing}
              </p>
              <BreathingPractice />
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.08)' }}>
              <p className="text-sm font-medium text-amber-400/60 mb-4">
                🧘 {t.practice.ritualBreathing}
              </p>
              <RitualBreathingPractice />
            </div>
          </div>
        </div>

        {/* === ANGER + REMINDER === */}
        <div className="golden-card rounded-2xl p-6 md:p-8 relative noise-overlay">
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                🔥
              </div>
              <div>
                <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100/80 mb-2">
                  {t.practice.angerTitle}
                </h2>
                <p className="text-amber-100/40 text-sm leading-relaxed">
                  {t.practice.angerDesc}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.08)' }}>
              <AngerReminder />
            </div>
          </div>
        </div>

        {/* === COMPASSION === */}
        <div className="golden-card rounded-2xl p-6 md:p-8 relative noise-overlay">
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                💛
              </div>
              <div>
                <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100/80 mb-2">
                  {t.practice.compassionTitle}
                </h2>
                <p className="text-amber-100/40 text-sm leading-relaxed">
                  {t.practice.compassionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
