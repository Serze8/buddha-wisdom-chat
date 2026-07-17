'use client'

import { useState, useCallback } from 'react'
import { Volume2, VolumeX, Loader2 } from 'lucide-react'

interface VoiceOutputProps {
  text: string
  language?: string
  className?: string
}

const langMap: Record<string, string> = {
  en: 'en-US', ru: 'ru-RU', hi: 'hi-IN', es: 'es-ES',
  fr: 'fr-FR', de: 'de-DE', zh: 'zh-CN', ja: 'ja-JP',
}

export default function VoiceOutput({ text, language = 'en', className }: VoiceOutputProps) {
  const [speaking, setSpeaking] = useState(false)

  const speak = useCallback(() => {
    if (!('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = langMap[language] || 'en-US'
    utterance.rate = 0.9
    utterance.pitch = 1.0

    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }, [text, language])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
  }, [])

  return (
    <button
      onClick={speaking ? stop : speak}
      className={className || 'text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1'}
    >
      {speaking ? (
        <>
          <VolumeX className="w-3 h-3" /> Stop
        </>
      ) : (
        <>
          <Volume2 className="w-3 h-3" /> Listen
        </>
      )}
    </button>
  )
}
