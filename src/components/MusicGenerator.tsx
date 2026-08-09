'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

const PRESETS: { id: string; icon: string; prompt: string }[] = [
  {
    id: 'bowls',
    icon: '🪷',
    prompt: 'calm meditation ambient with tibetan singing bowls and a soft low drone, very peaceful',
  },
  {
    id: 'nature',
    icon: '🌿',
    prompt: 'gentle meditation music with soft flowing water, wind and distant birdsong, mindful and calm',
  },
  {
    id: 'metta',
    icon: '💛',
    prompt: 'warm gentle ambient with soft strings and warm pads for metta loving-kindness meditation',
  },
  {
    id: 'zen',
    icon: '⛩️',
    prompt: 'zen meditation music with flowing water and distant temple bells, minimal and serene',
  },
  {
    id: 'drone',
    icon: '🌌',
    prompt: 'minimalist dark ambient drone for deep silent meditation, slow and spacious',
  },
]

const LENGTHS: { id: string; value: [number, number] | null }[] = [
  { id: 'auto', value: null },
  { id: '1-2', value: [60, 120] },
  { id: '2-3', value: [120, 180] },
  { id: '3-4', value: [180, 240] },
]

type Phase = 'idle' | 'generating' | 'done' | 'error'

export default function MusicGenerator() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'

  const [user, setUser] = useState<boolean | null>(null)
  const [prompt, setPrompt] = useState(PRESETS[0].prompt)
  const [instrumental, setInstrumental] = useState(true)
  const [lengthId, setLengthId] = useState('auto')
  const [phase, setPhase] = useState<Phase>('idle')
  const [statusText, setStatusText] = useState('')
  const [audioUrl, setAudioUrl] = useState('')
  const [modelVersion, setModelVersion] = useState('')
  const [error, setError] = useState('')
  const [credits, setCredits] = useState<number | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const t = {
    title: ru ? '🎵 Музыка для медитации' : '🎵 Music for meditation',
    subtitle: ru
      ? 'Сгенерируй уникальный фоновый трек для практики — от тибетских чаш до дзен-амбиента.'
      : 'Generate a unique ambient track for your practice — from tibetan bowls to zen drone.',
    presets: ru ? 'Стиль' : 'Style',
    promptLabel: ru ? 'Описание трека' : 'Track description',
    promptPlaceholder: ru
      ? 'Например: тихая медитативная музыка с тибетскими поющими чашами...'
      : 'e.g. quiet meditative music with tibetan singing bowls...',
    instrumental: ru ? 'Без вокала (инструментал)' : 'Instrumental (no vocals)',
    length: ru ? 'Длительность' : 'Length',
    generate: ru ? 'Сгенерировать музыку' : 'Generate music',
    generating: ru ? 'Генерация…' : 'Generating…',
    statusGenerating: ru ? 'ИИ создаёт трек, обычно 1–3 минуты…' : 'AI is composing the track, usually 1–3 minutes…',
    done: ru ? 'Трек готов' : 'Track ready',
    download: ru ? 'Скачать MP3' : 'Download MP3',
    expires: ru ? 'Ссылка действительна 7 дней — скачай, чтобы сохранить.' : 'Link expires in 7 days — download to keep it.',
    generateAgain: ru ? 'Сгенерировать ещё' : 'Generate another',
    credits: ru ? 'кредитов доступно' : 'credits available',
    login: ru ? 'Войдите, чтобы генерировать музыку' : 'Sign in to generate music',
    loginBtn: ru ? 'Войти' : 'Sign in',
    errorTitle: ru ? 'Ошибка' : 'Error',
    unknown: ru ? 'неизвестно' : 'unknown',
    attribution: ru ? 'Музыка создана через API Treblo (Melodia)' : 'Music powered by Treblo (Melodia) API',
  }

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      setUser(Boolean(data.user))
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(Boolean(session?.user))
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      fetch('/api/music/credits')
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (d && typeof d.num_credits === 'number') setCredits(d.num_credits)
        })
        .catch(() => {})
    }
  }, [user])

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [])

  const pollStatus = useCallback((taskId: string) => {
    setStatusText(t.statusGenerating)
    if (pollRef.current) clearInterval(pollRef.current)
    pollRef.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/music/status?taskId=${taskId}`)
        const data = await res.json()
        if (data.status === 'SUCCESS') {
          if (pollRef.current) clearInterval(pollRef.current)
          setPhase('done')
          setAudioUrl(data.audio_url || '')
          setModelVersion(data.model_version || '')
          setStatusText('')
        } else if (data.status === 'FAILURE') {
          if (pollRef.current) clearInterval(pollRef.current)
          setPhase('error')
          setError(ru ? 'Генерация не удалась (кредиты не списаны). Попробуй ещё раз.' : 'Generation failed (credits were not deducted). Try again.')
        } else if (data.error) {
          if (pollRef.current) clearInterval(pollRef.current)
          setPhase('error')
          setError(data.error)
        }
      } catch (e) {
        if (pollRef.current) clearInterval(pollRef.current)
        setPhase('error')
        setError(ru ? 'Не удалось получить статус генерации.' : 'Failed to fetch generation status.')
      }
    }, 5000)
  }, [ru, t.statusGenerating])

  const generate = async () => {
    setPhase('generating')
    setError('')
    setAudioUrl('')
    try {
      const lengthRange = LENGTHS.find((l) => l.id === lengthId)?.value || null
      const res = await fetch('/api/music', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, instrumental, lengthRange }),
      })
      const data = await res.json()
      if (!res.ok) {
        setPhase('error')
        setError(data.error || (ru ? 'Что-то пошло не так.' : 'Something went wrong.'))
        return
      }
      pollStatus(data.task_id)
    } catch (e) {
      setPhase('error')
      setError(ru ? 'Сетевая ошибка при запросе.' : 'Network error while requesting.')
    }
  }

  if (user === null) {
    return <div className="text-sm text-amber-200/40">{ru ? 'Загрузка…' : 'Loading…'}</div>
  }

  if (user === false) {
    return (
      <div className="p-6 rounded-2xl text-center" style={{ background: 'rgba(20, 14, 8, 0.6)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
        <p className="text-amber-100/60 text-sm mb-4">🎵 {t.login}</p>
        <Link
          href="/auth"
          className="inline-block px-5 py-2 rounded-full text-sm font-medium transition-colors"
          style={{ background: 'linear-gradient(135deg, #b45309, #92400e)', color: '#fde68a' }}
        >
          {t.loginBtn}
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8 rounded-2xl" style={{ background: 'rgba(20, 14, 8, 0.6)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
      <h3 className="text-lg font-bold text-amber-100/80 mb-1">{t.title}</h3>
      <p className="text-sm text-amber-100/40 mb-5 leading-relaxed">{t.subtitle}</p>

      <div className="mb-4">
        <p className="text-xs uppercase tracking-widest text-amber-400/50 mb-2">{t.presets}</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => setPrompt(p.prompt)}
              className={`px-3 py-1.5 rounded-full text-xs transition-colors ${prompt === p.prompt ? 'text-amber-900' : 'text-amber-200/60 hover:text-amber-200'}`}
              style={prompt === p.prompt
                ? { background: 'linear-gradient(135deg, #b45309, #92400e)', color: '#fde68a', border: '1px solid rgba(245, 158, 11, 0.3)' }
                : { background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.1)' }}
            >
              {p.icon} {p.id}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs uppercase tracking-widest text-amber-400/50 mb-2">{t.promptLabel}</p>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
          className="w-full p-3 rounded-xl text-sm bg-amber-950/30 border border-amber-800/20 text-amber-100/80 focus:outline-none focus:border-amber-600/40"
          placeholder={t.promptPlaceholder}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
        <label className="flex items-center gap-2 text-sm text-amber-200/50 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={instrumental}
            onChange={(e) => setInstrumental(e.target.checked)}
            className="w-4 h-4 rounded accent-amber-600"
          />
          {t.instrumental}
        </label>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-amber-400/50">{t.length}:</span>
          <select
            value={lengthId}
            onChange={(e) => setLengthId(e.target.value)}
            className="px-2 py-1 rounded-lg text-xs bg-amber-950/30 border border-amber-800/20 text-amber-100/70 focus:outline-none"
          >
            {LENGTHS.map((l) => (
              <option key={l.id} value={l.id}>
                {l.id === 'auto'
                  ? (ru ? 'Авто' : 'Auto')
                  : l.value![0] / 60 + '–' + l.value![1] / 60 + (ru ? ' мин' : ' min')}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={generate}
        disabled={phase === 'generating'}
        className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-150 active:scale-95 disabled:opacity-50"
        style={{ background: 'linear-gradient(135deg, #b45309, #92400e)', color: '#fde68a', boxShadow: '0 4px 20px rgba(245, 158, 11, 0.2)' }}
      >
        {phase === 'generating' ? '⏳ ' + t.generating : '🎵 ' + t.generate}
      </button>

      {credits !== null && (
        <p className="mt-3 text-xs text-amber-200/30">⚡ {credits} {t.credits}</p>
      )}

      {phase === 'generating' && (
        <div className="mt-5 p-4 rounded-xl flex items-center gap-3" style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
          <span className="inline-block w-4 h-4 rounded-full animate-spin" style={{ border: '2px solid rgba(245, 158, 11, 0.2)', borderTopColor: '#f59e0b' }} />
          <p className="text-sm text-amber-200/50">{t.statusGenerating}</p>
        </div>
      )}

      {phase === 'done' && audioUrl && (
        <div className="mt-5 p-4 rounded-xl space-y-3" style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
          <p className="text-sm font-medium text-amber-300/70">
            ✅ {t.done} {modelVersion ? `(${modelVersion})` : ''}
          </p>
          <audio controls src={audioUrl} className="w-full" />
          <div className="flex flex-wrap gap-3 items-center">
            <a href={audioUrl} download className="text-amber-400 text-sm hover:text-amber-300 transition-colors">
              ⬇ {t.download}
            </a>
            <button
              onClick={generate}
              className="text-amber-200/50 text-sm hover:text-amber-200 transition-colors"
            >
              ↻ {t.generateAgain}
            </button>
          </div>
          <p className="text-xs text-amber-200/30">⏳ {t.expires}</p>
        </div>
      )}

      {phase === 'error' && (
        <div className="mt-5 p-4 rounded-xl" style={{ background: 'rgba(220, 38, 38, 0.06)', border: '1px solid rgba(220, 38, 38, 0.15)' }}>
          <p className="text-sm text-red-300/70">⚠️ {t.errorTitle}: {error}</p>
        </div>
      )}

      <p className="mt-5 text-[10px] text-amber-200/20">
        <a href="https://treblo.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200/40 transition-colors">
          {t.attribution}
        </a>
      </p>
    </div>
  )
}
