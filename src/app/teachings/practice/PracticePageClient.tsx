'use client'

import { useState, useCallback } from 'react'
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
  const audioRef = useState<{ current: HTMLAudioElement | null }>({ current: null })[0]

  const formula = mettaFormulas[locale] || mettaFormulas.en
  const mp3Url = `/audio/metta/${locale}.mp3`

  // Check if MP3 file exists on mount
  const checkedLang = useState(locale)[0]
  useState(() => {
    fetch(mp3Url, { method: 'HEAD' })
      .then((res) => setMp3Available(res.ok))
      .catch(() => setMp3Available(false))
  })

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
    <div className="mt-6 p-5 rounded-2xl border border-amber-700/20 backdrop-blur-sm" style={{ background: 'rgba(45, 27, 14, 0.6)' }}>
      <p className="text-sm font-medium text-amber-400 mb-3 font-[var(--font-inter)]">{t.practice.mettaTitle}</p>

      <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">«{formula}»</p>

      <div className="flex gap-3 flex-wrap items-center">
        <button
          onClick={playing ? stop : play}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
            playing
              ? 'bg-red-600/80 hover:bg-red-500/80 text-white'
              : 'bg-amber-600 hover:bg-amber-500 text-white'
          }`}
        >
          {playing ? '⏹ Stop' : t.practice.listenMetta}
        </button>

        <button
          onClick={copyText}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-gray-700/60 hover:bg-gray-600/60 text-gray-300 transition-colors"
        >
          {copied ? '✓ Copied!' : t.practice.copyMetta}
        </button>
      </div>

      {sourceLabel && (
        <p className="text-xs text-gray-500 mt-2">{sourceLabel}</p>
      )}
    </div>
  )
}

function AngerReminder() {
  const { t } = useLanguage()

  return (
    <div className="mt-6 p-5 rounded-2xl border border-amber-700/20 backdrop-blur-sm" style={{ background: 'rgba(45, 27, 14, 0.6)' }}>
      <p className="text-sm font-medium text-amber-400 mb-3 font-[var(--font-inter)]">🔥 {t.practice.reminderTitle}</p>
      <p className="text-gray-300 text-sm italic leading-relaxed">«{t.practice.reminderText}»</p>
    </div>
  )
}

export default function PracticePageClient() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/teachings"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors mb-8"
      >
        ← {t.common.back}
      </Link>

      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-4">
        {t.practice.title}
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        {t.practice.intro}
      </p>

      <div className="space-y-8">
        {/* === MEDITATION + BREATHING === */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl shrink-0">🧘</span>
            <div>
              <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {t.practice.meditationTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {t.practice.meditationDesc}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-amber-500 dark:text-amber-400 mb-2 font-[var(--font-inter)]">
              ✨ {t.practice.resonantBreathing}
            </p>
            <BreathingPractice />
          </div>
        </div>

        {/* === ANGER + REMINDER === */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl shrink-0">🔥</span>
            <div>
              <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {t.practice.angerTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {t.practice.angerDesc}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <AngerReminder />
          </div>
        </div>

        {/* === COMPASSION + METTA AUDIO === */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl shrink-0">💛</span>
            <div>
              <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {t.practice.compassionTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {t.practice.compassionDesc}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <MettaPlayer />
          </div>
        </div>
      </div>
    </div>
  )
}
