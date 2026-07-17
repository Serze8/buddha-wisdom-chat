'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { Mic, MicOff, Loader2 } from 'lucide-react'

interface VoiceInputProps {
  onTranscript: (text: string) => void
  language?: string
  disabled?: boolean
}

export default function VoiceInput({ onTranscript, language = 'en', disabled }: VoiceInputProps) {
  const [listening, setListening] = useState(false)
  const [processing, setProcessing] = useState(false)
  const recognitionRef = useRef<any>(null)

  const langMap: Record<string, string> = {
    en: 'en-US', ru: 'ru-RU', hi: 'hi-IN', es: 'es-ES',
    fr: 'fr-FR', de: 'de-DE', zh: 'zh-CN', ja: 'ja-JP',
  }

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in your browser')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = langMap[language] || 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setListening(false)
      setProcessing(false)
      onTranscript(transcript)
    }

    recognition.onerror = () => {
      setListening(false)
      setProcessing(false)
    }

    recognition.onend = () => {
      setListening(false)
      setProcessing(false)
    }

    recognitionRef.current = recognition
    recognition.start()
    setListening(true)
    setProcessing(true)
  }, [language, onTranscript])

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
    setListening(false)
    setProcessing(false)
  }, [])

  useEffect(() => {
    return () => { recognitionRef.current?.stop() }
  }, [])

  return (
    <button
      type="button"
      onClick={listening ? stopListening : startListening}
      disabled={disabled}
      className={`p-2.5 rounded-xl transition-all ${
        listening
          ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
          : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
      }`}
      title={listening ? 'Stop recording' : 'Start voice input'}
    >
      {processing ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : listening ? (
        <MicOff className="w-5 h-5" />
      ) : (
        <Mic className="w-5 h-5" />
      )}
    </button>
  )
}
