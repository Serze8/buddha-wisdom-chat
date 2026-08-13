'use client'

let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null

function getVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return Promise.resolve([])
  }
  if (voicesPromise) return voicesPromise

  voicesPromise = new Promise(resolve => {
    const synth = window.speechSynthesis
    const current = synth.getVoices()
    if (current.length > 0) {
      resolve(current)
      return
    }
    const timer = setTimeout(() => resolve(synth.getVoices()), 3000)
    synth.addEventListener('voiceschanged', () => {
      clearTimeout(timer)
      resolve(synth.getVoices())
    }, { once: true })
  })

  return voicesPromise
}

const langMap: Record<string, string> = {
  en: 'en-US', ru: 'ru-RU', hi: 'hi-IN', es: 'es-ES',
  fr: 'fr-FR', de: 'de-DE', zh: 'zh-CN', ja: 'ja-JP',
  pt: 'pt-BR', th: 'th-TH', vi: 'vi-VN', ko: 'ko-KR',
  id: 'id-ID', my: 'my-MM', ne: 'ne-NP', bo: 'bo-CN',
  si: 'si-LK', ms: 'ms-MY', ta: 'ta-IN',
}

export async function speak(text: string, lang: string, opts: { onStart?: () => void; onEnd?: () => void; onError?: () => void; rate?: number; pitch?: number } = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

  const synth = window.speechSynthesis
  synth.cancel()

  const [voices, fallbackVoices] = await Promise.all([
    getVoices(),
    new Promise<SpeechSynthesisVoice[]>(res => setTimeout(() => res(synth.getVoices()), 250)),
  ])
  const all = voices.length ? voices : fallbackVoices

  const utterance = new SpeechSynthesisUtterance(text)
  const fullLang = langMap[lang] || lang
  utterance.lang = fullLang
  utterance.rate = opts.rate ?? 0.9
  utterance.pitch = opts.pitch ?? 1.0

  const byExact = all.filter(v => v.lang === fullLang && !v.localService)
  const byLang = all.filter(v => v.lang.startsWith(lang) && !v.localService)
  const localByExact = all.filter(v => v.lang === fullLang && v.localService)
  const localByLang = all.filter(v => v.lang.startsWith(lang) && v.localService)

  utterance.voice = byExact[0] || byLang[0] || localByExact[0] || localByLang[0] || null

  utterance.onstart = () => opts.onStart?.()
  utterance.onend = () => opts.onEnd?.()
  utterance.onerror = () => opts.onError?.()

  synth.speak(utterance)
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

export function isSpeechSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
