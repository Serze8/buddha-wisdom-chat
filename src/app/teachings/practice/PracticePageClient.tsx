'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import BreathingPractice from '@/components/BreathingPractice'
import RitualBreathingPractice from '@/components/RitualBreathingPractice'

function AngerReminder() {
  const { t } = useLanguage()

  return (
    <div className="mt-6 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255, 0.6)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
      <p className="text-sm font-medium text-amber-400/70 mb-3">🔥 {t.practice.reminderTitle}</p>
      <p className="text-amber-700/40 text-sm italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>«{t.practice.reminderText}»</p>
    </div>
  )
}

export default function PracticePageClient() {
  const { t, locale } = useLanguage()
  const ru = locale === 'ru'

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/teachings"
        className="inline-flex items-center gap-2 text-amber-500/50 hover:text-amber-400 transition-colors mb-8 text-sm"
      >
        ← {t.common.back}
      </Link>

      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-golden-gradient text-center mb-4">
        {ru ? 'Практика — не подготовка. Она и есть путь.' : 'Practice is not a preparation. It is the path itself.'}
      </h1>

      <p className="text-center text-amber-600/40 text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
        {ru
          ? 'Дыхание, медитация, работа с гневом и сострадание — тело пути. Каждый вдох — как дышал Сиддхартха под деревом Бодхи.'
          : 'Breathing, meditation, working with anger, and compassion — the body of the path. Every breath, as Siddhartha breathed beneath the Bodhi tree.'}
      </p>

      <div className="space-y-8">
        {/* === MEDITATION + BREATHING === */}
        <div className="golden-card rounded-2xl p-6 md:p-8 relative noise-overlay">
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                🧘
              </div>
              <div>
                <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700/80 mb-2">
                  {t.practice.meditationTitle}
                </h2>
                <p className="text-amber-700/40 text-sm leading-relaxed">
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
                <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700/80 mb-2">
                  {t.practice.angerTitle}
                </h2>
                <p className="text-amber-700/40 text-sm leading-relaxed">
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
                <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700/80 mb-2">
                  {t.practice.compassionTitle}
                </h2>
                <p className="text-amber-700/40 text-sm leading-relaxed">
                  {t.practice.compassionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === BODY OF THE PATH BANNER === */}
      <div className="mt-8">
        <Link
          href="/dharma-chats/sangha"
          className="group block w-full"
        >
          <div className="golden-card rounded-2xl p-6 md:p-7 relative overflow-hidden">
            <span className="absolute -right-4 -top-4 text-7xl opacity-[0.05] select-none pointer-events-none">💬</span>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-amber-500/80 text-xs font-semibold uppercase tracking-widest">{ru ? 'Сангха' : 'The Sangha'}</p>
                <p className="mt-1.5 font-[var(--font-cormorant)] text-xl md:text-2xl text-amber-700/90 leading-snug">
                  {ru ? 'Когда тело готово — вращай колесо вместе с другими →' : 'When the body is ready — turn the wheel with others →'}
                </p>
              </div>
              <span className="text-2xl shrink-0">→</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
