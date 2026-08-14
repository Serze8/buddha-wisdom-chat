'use client'

import { useState, useCallback } from 'react'
import { Volume2, VolumeX, Loader2 } from 'lucide-react'
import { speak, stopSpeaking, isSpeechSupported } from '@/lib/speech'

interface VoiceOutputProps {
  text: string
  language?: string
  className?: string
}

export default function VoiceOutput({ text, language = 'en', className }: VoiceOutputProps) {
  const [speaking, setSpeaking] = useState(false)

  const speakNow = useCallback(() => {
    speak(text, language, {
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    })
  }, [text, language])

  const stop = useCallback(() => {
    stopSpeaking()
    setSpeaking(false)
  }, [])

  if (!isSpeechSupported()) return null

  return (
    <button
      onClick={speaking ? stop : speakNow}
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
