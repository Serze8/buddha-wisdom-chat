'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const phaseLabels: Record<string, Record<string, string>> = {
  ru: { inhale: 'ВДОХ', exhale: 'ВЫДОХ', stop: 'СТОП', ready: 'Готов к практике', pause: 'Пауза', reset: 'Настройте длительность.' },
  en: { inhale: 'INHALE', exhale: 'EXHALE', stop: 'STOP', ready: 'Ready to practice', pause: 'Paused', reset: 'Adjust duration.' },
  hi: { inhale: 'श्वास', exhale: 'छोड़ें', stop: 'रुकें', ready: 'अभ्यास के लिए तैयार', pause: 'रुका हुआ', reset: 'अवधि समायोजित करें।' },
  es: { inhale: 'INHALA', exhale: 'EXHALA', stop: 'PARA', ready: 'Listo para practicar', pause: 'Pausa', reset: 'Ajusta la duración.' },
  fr: { inhale: 'INSPIREZ', exhale: 'EXPIREZ', stop: 'ARRÊT', ready: 'Prêt à pratiquer', pause: 'Pause', reset: 'Ajustez la durée.' },
  de: { inhale: 'EINATMEN', exhale: 'AUSATMEN', stop: 'STOPP', ready: 'Bereit zur Übung', pause: 'Pause', reset: 'Dauer anpassen.' },
  zh: { inhale: '吸气', exhale: '呼气', stop: '停止', ready: '准备练习', pause: '暂停', reset: '调整时长。' },
  ja: { inhale: '吸う', exhale: '吐く', stop: '停止', ready: '練習の準備', pause: '一時停止', reset: '時間を調整。' },
  pt: { inhale: 'INSPIRE', exhale: 'EXPIRE', stop: 'PARAR', ready: 'Pronto para praticar', pause: 'Pausa', reset: 'Ajuste a duração.' },
  th: { inhale: 'หายใจเข้า', exhale: 'หายใจออก', stop: 'หยุด', ready: 'พร้อมฝึก', pause: 'หยุดชั่วคราว', reset: 'ปรับระยะเวลา' },
  vi: { inhale: 'HÍT VÀO', exhale: 'THỞ RA', stop: 'DỪNG', ready: 'Sẵn sàng thực hành', pause: 'Tạm dừng', reset: 'Điều chỉnh thời gian.' },
  ko: { inhale: '들이쉬기', exhale: '내쉬기', stop: '중지', ready: '연습 준비', pause: '일시정지', reset: '시간 조정.' },
  id: { inhale: 'TARIK', exhale: 'HEMBUS', stop: 'STOP', ready: 'Siap berlatih', pause: 'Jeda', reset: 'Atur durasi.' },
  ms: { inhale: 'TARIK', exhale: 'HEMBUS', stop: 'STOP', ready: 'Sedia berlatih', pause: 'Jeda', reset: 'Atur durasi.' },
  si: { inhale: 'ශ්වාස', exhale: 'පිට', stop: 'නතර', ready: 'අභ්‍යාසයට සූදානම්', pause: 'විශ්‍රාම', reset: 'කාලය සකසන්න.' },
  my: { inhale: 'ရှူ', exhale: 'မှုတ်', stop: 'ရပ်', ready: 'လေ့ကျင့်ဖို့အဆင်သင့်', pause: 'ရပ်နား', reset: 'ကြာချိန်ညှိပါ။' },
  ne: { inhale: 'श्वास', exhale: 'छोड्नुहोस्', stop: 'रोक्नुहोस्', ready: 'अभ्यासको लागि तयार', pause: 'रोकिएको', reset: 'अवधि समायोजन गर्नुहोस्।' },
  bo: { inhale: 'དབུགས་འབྱིན།', exhale: 'དབུགས་ཕྱིར་འབུད།', stop: 'གནང་།', ready: 'སྦྱོང་བར་གྲ་སྒྲིག', pause: 'གནང་།', reset: 'དུས་ཚོད་སྒྲིག' },
}

export default function BreathingPractice() {
  const { locale } = useLanguage()
  const labels = phaseLabels[locale] || phaseLabels.en

  const [isRunning, setIsRunning] = useState(false)
  const [phase, setPhase] = useState<'inhale' | 'exhale'>('inhale')
  const [inhaleDuration, setInhaleDuration] = useState(4.0)
  const [exhaleDuration, setExhaleDuration] = useState(6.0)
  const [statusText, setStatusText] = useState('')
  const [scale, setScale] = useState(1)
  const [glowClass, setGlowClass] = useState('')

  const audioCtxRef = useRef<AudioContext | null>(null)
  const oscillatorsRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; osc3: OscillatorNode; gain: GainNode } | null>(null)
  const rafRef = useRef<number>(0)
  const phaseRef = useRef<'inhale' | 'exhale'>('inhale')
  const phaseStartRef = useRef(0)
  const runningRef = useRef(false)

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
  }, [])

  const startAumSound = useCallback(() => {
    const ctx = audioCtxRef.current
    if (!ctx || oscillatorsRef.current) return

    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const osc3 = ctx.createOscillator()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    osc1.type = 'sine'
    osc1.frequency.value = 110

    osc2.type = 'sine'
    osc2.frequency.value = 220

    osc3.type = 'sine'
    osc3.frequency.value = 165

    gain.gain.value = 0.35

    filter.type = 'lowpass'
    filter.frequency.value = 800
    filter.Q.value = 0.5

    osc1.connect(gain)
    osc2.connect(gain)
    osc3.connect(gain)
    gain.connect(filter)
    filter.connect(ctx.destination)

    osc1.start()
    osc2.start()
    osc3.start()

    oscillatorsRef.current = { osc1, osc2, osc3, gain }
  }, [])

  const stopAumSound = useCallback((immediate = false) => {
    const refs = oscillatorsRef.current
    if (!refs) return

    if (immediate) {
      try {
        refs.osc1.stop()
        refs.osc2.stop()
        refs.osc3.stop()
      } catch {}
      oscillatorsRef.current = null
      return
    }

    refs.gain.gain.setTargetAtTime(0.001, audioCtxRef.current!.currentTime, 0.15)
    setTimeout(() => {
      try {
        refs.osc1.stop()
        refs.osc2.stop()
        refs.osc3.stop()
      } catch {}
      oscillatorsRef.current = null
    }, 300)
  }, [])

  const tick = useCallback(() => {
    if (!runningRef.current) return

    const now = performance.now()
    const elapsed = now - phaseStartRef.current
    const duration = (phaseRef.current === 'inhale' ? inhaleDuration : exhaleDuration) * 1000
    const remaining = Math.max(0, duration - elapsed)
    const progress = 1 - remaining / duration

    if (phaseRef.current === 'inhale') {
      setScale(1 + progress * 0.04)
    } else {
      setScale(1.04 - progress * 0.04)
    }

    if (remaining <= 0) {
      const next = phaseRef.current === 'inhale' ? 'exhale' : 'inhale'
      phaseRef.current = next
      setPhase(next)
      phaseStartRef.current = performance.now()

      if (next === 'inhale') {
        setGlowClass('inhale')
        stopAumSound(true)
      } else {
        setGlowClass('exhale')
        initAudio()
        startAumSound()
      }

      const dur = next === 'inhale' ? inhaleDuration : exhaleDuration
      setStatusText(`${next === 'inhale' ? labels.inhale : labels.exhale} · ${dur.toFixed(1)}s`)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [inhaleDuration, exhaleDuration, labels, initAudio, startAumSound, stopAumSound])

  const startPractice = useCallback(() => {
    initAudio()
    runningRef.current = true
    phaseRef.current = 'inhale'
    phaseStartRef.current = performance.now()
    setIsRunning(true)
    setPhase('inhale')
    setGlowClass('inhale')
    setStatusText(`${labels.inhale} · ${inhaleDuration.toFixed(1)}s`)
    rafRef.current = requestAnimationFrame(tick)
  }, [initAudio, tick, inhaleDuration, labels])

  const stopPractice = useCallback(() => {
    runningRef.current = false
    setIsRunning(false)
    cancelAnimationFrame(rafRef.current)
    stopAumSound(true)
    setScale(1)
    setGlowClass('')
    setPhase('inhale')
    setStatusText(labels.pause)
  }, [stopAumSound, labels])

  const resetPractice = useCallback(() => {
    stopPractice()
    setStatusText(labels.ready)
  }, [stopPractice, labels])

  useEffect(() => {
    setStatusText(labels.ready)
    return () => {
      cancelAnimationFrame(rafRef.current)
      stopAumSound(true)
    }
  }, [labels, stopAumSound])

  const phaseLabel = labels[phase] || labels.inhale

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-52 h-52 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center cursor-pointer select-none"
        style={{
          transform: `scale(${scale})`,
          background: 'radial-gradient(circle at 35% 30%, #2a3a5e, #0d1424)',
          boxShadow: glowClass === 'inhale'
            ? '0 0 40px #5f8aff, 0 0 80px #3a5fc0, inset 0 0 20px #7ba0ff'
            : glowClass === 'exhale'
              ? '0 0 40px #b8a0ff, 0 0 80px #7a5ac0, inset 0 0 20px #b58aff'
              : '0 8px 30px rgba(0, 0, 0, 0.7), inset 0 2px 6px rgba(255, 255, 255, 0.08)',
          transition: 'box-shadow 0.5s ease',
          willChange: 'transform',
        }}
        onClick={isRunning ? stopPractice : startPractice}
      >
        <span className="text-4xl md:text-5xl font-light tracking-wider text-blue-200" style={{ fontFamily: "'Times New Roman', serif", textShadow: '0 0 20px rgba(200, 180, 255, 0.3)' }}>
          ॐ
        </span>
        <span className="text-xs tracking-wider opacity-50 font-light mt-0.5 text-blue-200">
          Aum · ॐ · ఓం
        </span>

        <span
          className="absolute bottom-4 px-4 py-1 rounded-full text-xs uppercase tracking-[4px] font-light border"
          style={{
            background: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(2px)',
            borderColor: 'rgba(255,255,255,0.06)',
            color: '#eef2fb',
          }}
        >
          {isRunning ? phaseLabel : (statusText === labels.pause ? labels.stop : 'ॐ')}
        </span>
      </div>

      <div className="w-full max-w-xs flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-sm font-light opacity-80">
            <span>{locale === 'ru' ? '🌬️ Вдох (сек)' : '🌬️ Inhale (sec)'}</span>
            <span className="tabular-nums bg-gray-800/60 px-2 rounded-full text-blue-200">{inhaleDuration.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={2}
            max={8}
            step={0.2}
            value={inhaleDuration}
            onChange={(e) => {
              const v = parseFloat(e.target.value)
              setInhaleDuration(v)
              if (!isRunning) setStatusText(`${locale === 'ru' ? 'Вдох' : 'Inhale'} ${v.toFixed(1)}s · ${locale === 'ru' ? 'Выдох' : 'Exhale'} ${exhaleDuration.toFixed(1)}s`)
            }}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ background: 'linear-gradient(90deg, #3e5275, #7f96c9)' }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-sm font-light opacity-80">
            <span>{locale === 'ru' ? '🌀 Выдох (сек)' : '🌀 Exhale (sec)'}</span>
            <span className="tabular-nums bg-gray-800/60 px-2 rounded-full text-purple-200">{exhaleDuration.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={2}
            max={10}
            step={0.2}
            value={exhaleDuration}
            onChange={(e) => {
              const v = parseFloat(e.target.value)
              setExhaleDuration(v)
              if (!isRunning) setStatusText(`${locale === 'ru' ? 'Вдох' : 'Inhale'} ${inhaleDuration.toFixed(1)}s · ${locale === 'ru' ? 'Выдох' : 'Exhale'} ${v.toFixed(1)}s`)
            }}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ background: 'linear-gradient(90deg, #3e5275, #7f96c9)' }}
          />
        </div>
      </div>

      <div className="flex gap-3 w-full max-w-xs justify-center">
        <button
          onClick={isRunning ? stopPractice : startPractice}
          className={`flex-1 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-150 active:scale-95 ${
            isRunning
              ? 'bg-gray-700/80 hover:bg-gray-600/80 text-blue-100 border border-white/5'
              : 'bg-blue-700 hover:bg-blue-600 text-white shadow-lg shadow-blue-900/40 border border-blue-400/30'
          }`}
        >
          {isRunning ? '⏹ ' + (locale === 'ru' ? 'Стоп' : 'Stop') : '▶ ' + (locale === 'ru' ? 'Начать' : 'Start')}
        </button>

        <button
          onClick={resetPractice}
          className="flex-1 py-2.5 rounded-full font-medium text-sm tracking-wide bg-gray-700/60 hover:bg-gray-600/60 text-blue-100 border border-white/5 transition-all duration-150 active:scale-95"
        >
          ⟲ {locale === 'ru' ? 'Сброс' : 'Reset'}
        </button>
      </div>

      <p className="text-center text-xs tracking-wider opacity-60 text-blue-200 min-h-[20px]">
        {statusText}
      </p>

      <p className="text-center text-[10px] opacity-30 text-blue-300">
        ♡ {locale === 'ru' ? 'на выдохе звучит Аум' : 'Aum sounds on exhale'}
      </p>
    </div>
  )
}
