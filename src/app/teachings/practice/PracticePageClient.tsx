'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import BreathingPractice from '@/components/BreathingPractice'

const mettaFormulas: Record<string, string> = {
  ru: 'Пусть я буду счастлив. Пусть я буду в покое. Пусть все существа будут счастливы.',
  en: 'May I be happy. May I be peaceful. May all beings be happy.',
  hi: 'मैं सुखी होऊँ। मैं शांत होऊँ। सभी प्राणी सुखी हों।',
  es: 'Que yo sea feliz. Que yo esté en paz. Que todos los seres sean felices.',
  fr: 'Que je soit heureux. Que je sois en paix. Que tous les êtres soient heureux.',
  de: 'Möge ich glücklich sein. Möge ich in Frieden sein. Mögen alle Wesen glücklich sein.',
  zh: '愿我快乐。愿我平静。愿一切众生快乐。',
  ja: '私が幸せでありますように。私が平和でありますように。すべての生きとし生けるものが幸せでありますように。',
  pt: 'Que eu seja feliz. Que eu esteja em paz. Que todos os seres sejam felizes.',
  th: 'ขอให้ข้าพเจ้ามีความสุข ขอให้ข้าพเจ้ามีความสงบ ขอให้สัตว์ทั้งปวงมีความสุข',
  vi: 'Nguyện cho con được hạnh phúc. Nguyện cho con được an bình. Nguyện cho tất cả chúng sinh được hạnh phúc.',
  ko: '제가 행복하길 바랍니다. 제가 평화롭길 바랍니다. 모든 중생이 행복하길 바랍니다.',
  id: 'Semoga saya bahagia. Semoga saya damai. Semoga semua makhluk bahagia.',
  ms: 'Semoga saya gembira. Semoga saya aman. Semoga semua makhluk gembira.',
  si: 'මම සතුටින් සිටිමි. මම සාමකාමීව සිටිමි. සියලු සත්ත්වයෝ සතුටින් සිටිත්වා.',
  my: 'ငါ ပျော်ရွှင်ပါစေ။ ငါ ငြိမ်ချမ်းပါစေ။ သတ္တဝါအားလုံး ပျော်ရွှင်ကြပါစေ။',
  ne: 'म सुखी होऊँ। म शान्त होऊँ। सबै प्राणी सुखी होऊन्।',
  bo: 'བདེ་བ་འཐོབ་པར་གྱུར་ཅིག ཞི་བ་འཐོབ་པར་གྱུར་ཅིག སེམས་ཅན་ཐམས་ཅད་བདེ་བ་འཐོབ་པར་གྱུར་ཅིག',
}

const speechLangs: Record<string, string> = {
  ru: 'ru-RU', en: 'en-US', hi: 'hi-IN', es: 'es-ES', fr: 'fr-FR',
  de: 'de-DE', zh: 'zh-CN', ja: 'ja-JP', pt: 'pt-BR', th: 'th-TH',
  vi: 'vi-VN', ko: 'ko-KR', id: 'id-ID', ms: 'ms-MY', si: 'si-LK',
  my: 'my-MM', ne: 'ne-NP', bo: 'bo-CN',
}

function MettaPlayer() {
  const { t, locale } = useLanguage()
  const [playing, setPlaying] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mp3Available, setMp3Available] = useState<boolean | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const formula = mettaFormulas[locale] || mettaFormulas.en
  const mp3Url = `/audio/metta/${locale}.mp3`

  useEffect(() => {
    fetch(mp3Url, { method: 'HEAD' })
      .then((res) => setMp3Available(res.ok))
      .catch(() => setMp3Available(false))
  }, [mp3Url])

  const speakFallback = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      copyText()
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(formula)
    utterance.lang = speechLangs[locale] || 'en-US'
    utterance.rate = 0.8
    utterance.pitch = 0.9
    utterance.onstart = () => setPlaying(true)
    utterance.onend = () => setPlaying(false)
    utterance.onerror = () => {
      setPlaying(false)
      copyText()
    }
    window.speechSynthesis.speak(utterance)
  }, [formula, locale])

  const play = useCallback(() => {
    if (mp3Available === false) {
      speakFallback()
      return
    }

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    const audio = new Audio(mp3Url)
    audioRef.current = audio

    audio.addEventListener('play', () => setPlaying(true))
    audio.addEventListener('ended', () => setPlaying(false))
    audio.addEventListener('error', () => {
      setPlaying(false)
      setMp3Available(false)
      speakFallback()
    })

    audio.play().catch(() => {
      setMp3Available(false)
      speakFallback()
    })
  }, [mp3Url, mp3Available, speakFallback])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current = null
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setPlaying(false)
  }, [])

  const copyText = useCallback(() => {
    navigator.clipboard.writeText(formula).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [formula])

  const sourceLabel = mp3Available === true
    ? (locale === 'ru' ? 'Студийная озвучка' : 'Studio voice')
    : mp3Available === false
      ? (locale === 'ru' ? 'Синтез речи (файл недоступен)' : 'Speech synthesis (file unavailable)')
      : ''

  return (
    <div className="mt-6 p-6 rounded-2xl" style={{ background: 'rgba(20, 14, 8, 0.6)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
      <p className="text-sm font-medium text-amber-400/70 mb-3">{t.practice.mettaTitle}</p>

      <p className="text-amber-100/40 text-sm italic mb-5 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>«{formula}»</p>

      <div className="flex gap-3 flex-wrap items-center">
        <button
          onClick={playing ? stop : play}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
          style={playing ? {
            background: 'linear-gradient(135deg, #92400e, #78350f)',
            color: '#fde68a',
            boxShadow: '0 4px 20px rgba(146, 64, 14, 0.3)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          } : {
            background: 'linear-gradient(135deg, #b45309, #92400e)',
            color: '#fde68a',
            boxShadow: '0 4px 20px rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          {playing ? '⏹ Stop' : '🎧'} {playing ? '' : t.practice.listenMetta}
        </button>

        <button
          onClick={copyText}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors"
          style={{ background: 'rgba(245, 158, 11, 0.05)', color: 'rgba(253, 230, 138, 0.5)', border: '1px solid rgba(245, 158, 11, 0.1)' }}
        >
          {copied ? '✓ Copied!' : t.practice.copyMetta}
        </button>
      </div>

      {sourceLabel && (
        <p className="text-xs text-amber-500/30 mt-3">{sourceLabel}</p>
      )}
    </div>
  )
}

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

        {/* === COMPASSION + METTA AUDIO === */}
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

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.08)' }}>
              <MettaPlayer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
