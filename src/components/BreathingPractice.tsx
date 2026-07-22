'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const PHASES = [
  { key: 'inhale', duration: 4000 },
  { key: 'holdIn', duration: 4000 },
  { key: 'exhale', duration: 4000 },
  { key: 'holdOut', duration: 4000 },
] as const

const phaseLabels: Record<string, Record<string, string>> = {
  ru: { inhale: 'Вдох', holdIn: 'Задержка', exhale: 'Выдох', holdOut: 'Пауза' },
  en: { inhale: 'Breathe in', holdIn: 'Hold', exhale: 'Breathe out', holdOut: 'Pause' },
  hi: { inhale: 'साँस लें', holdIn: 'रोकें', exhale: 'साँस छोड़ें', holdOut: 'रुकें' },
  es: { inhale: 'Inhala', holdIn: 'Sostén', exhale: 'Exhala', holdOut: 'Pausa' },
  fr: { inhale: 'Inspirez', holdIn: 'Retenez', exhale: 'Expirez', holdOut: 'Pause' },
  de: { inhale: 'Einatmen', holdIn: 'Halten', exhale: 'Ausatmen', holdOut: 'Pause' },
  zh: { inhale: '吸气', holdIn: '屏住', exhale: '呼气', holdOut: '停顿' },
  ja: { inhale: '吸う', holdIn: '止める', exhale: '吐く', holdOut: '間' },
  pt: { inhale: 'Inspire', holdIn: 'Segura', exhale: 'Expire', holdOut: 'Pausa' },
  th: { inhale: 'หายใจเข้า', holdIn: 'กลั้น', exhale: 'หายใจออก', holdOut: 'หยุด' },
  vi: { inhale: 'Hít vào', holdIn: 'Giữ', exhale: 'Thở ra', holdOut: 'Tạm dừng' },
  ko: { inhale: '들이쉬기', holdIn: '멈추기', exhale: '내쉬기', holdOut: '쉬기' },
  id: { inhale: 'Tarik napas', holdIn: 'Tahan', exhale: 'Hembuskan', holdOut: 'Jeda' },
  ms: { inhale: 'Tarik nafas', holdIn: 'Tahan', exhale: 'Hembuskan', holdOut: 'Jeda' },
  si: { inhale: 'ශ්වාස කරන්න', holdIn: 'නතර කරන්න', exhale: 'ශ්වාස පිට කරන්න', holdOut: 'විශ්‍රාම' },
  my: { inhale: 'အသက်ရှူ', holdIn: 'ထိန်း', exhale: 'အသက်မှုတ်', holdOut: 'ရပ်' },
  ne: { inhale: 'श्वास फेर्नुहोस्', holdIn: 'रोक्नुहोस्', exhale: 'श्वास छोड्नुहोस्', holdOut: 'रोकिनुहोस्' },
  bo: { inhale: 'དབུགས་འབྱིན།', holdIn: 'གནང་།', exhale: 'དབུགས་ཕྱིར་འབུད།', holdOut: 'གནང་།' },
}

export default function BreathingPractice() {
  const { locale } = useLanguage()
  const [active, setActive] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const phase = PHASES[phaseIndex]
  const labels = phaseLabels[locale] || phaseLabels.en
  const label = labels[phase.key] || labels.en

  useEffect(() => {
    if (!active) return

    const startTime = Date.now()
    const duration = phase.duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const pct = Math.min(elapsed / duration, 1)
      setProgress(pct)

      if (pct >= 1) {
        setPhaseIndex((prev) => (prev + 1) % PHASES.length)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [active, phaseIndex, phase.duration])

  const toggle = useCallback(() => {
    if (active) {
      setActive(false)
      setPhaseIndex(0)
      setProgress(0)
    } else {
      setActive(true)
      setPhaseIndex(0)
      setProgress(0)
    }
  }, [active])

  const scale = phase.key === 'inhale' || phase.key === 'holdIn'
    ? 1 + progress * 0.5
    : 1.5 - progress * 0.5

  const opacity = 0.3 + (phase.key === 'inhale' || phase.key === 'holdIn' ? progress * 0.7 : (1 - progress) * 0.7)

  return (
    <div className="flex flex-col items-center gap-5 py-6">
      <div
        className="relative w-36 h-36 rounded-full flex items-center justify-center transition-all duration-100"
        style={{
          transform: `scale(${scale})`,
          background: `radial-gradient(circle, rgba(245, 158, 11, ${opacity}) 0%, rgba(245, 158, 11, 0.05) 70%)`,
          boxShadow: active ? `0 0 40px rgba(245, 158, 11, ${opacity * 0.4})` : 'none',
        }}
      >
        <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center">
          {active ? (
            <span className="text-amber-200 text-sm font-medium font-[var(--font-inter)]">{label}</span>
          ) : (
            <span className="text-amber-400 text-2xl">🪷</span>
          )}
        </div>
      </div>

      <button
        onClick={toggle}
        className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
          active
            ? 'bg-red-600/80 hover:bg-red-500/80 text-white'
            : 'bg-amber-600 hover:bg-amber-500 text-white'
        }`}
      >
        {active ? '⏹ ' + (locale === 'ru' ? 'Остановить' : 'Stop') : '▶ ' + (locale === 'ru' ? 'Начать' : 'Start')}
      </button>

      {active && (
        <div className="flex gap-2 text-xs text-gray-500">
          {PHASES.map((p, i) => (
            <span
              key={p.key}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                i === phaseIndex ? 'bg-amber-500/20 text-amber-400' : 'text-gray-600'
              }`}
            >
              {labels[p.key]}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
