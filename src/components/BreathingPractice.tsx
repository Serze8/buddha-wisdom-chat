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
  bo: { inhale: 'དབུགས་འབྱིན།', exhale: 'དབུགས་ཕྱིར་འབུད།', stop: 'གནང་།', ready: 'སྦྱြང་བར་གྲ་སྒྲဲག', pause: 'གནང་།', reset: 'དུས་ཚོད་སྒྲིག' },
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
  const [strikeFlash, setStrikeFlash] = useState(false)

  const audioCtxRef = useRef<AudioContext | null>(null)
  const omOscillatorsRef = useRef<OscillatorNode[]>([])
  const omGainRef = useRef<GainNode | null>(null)
  const omFilterRef = useRef<BiquadFilterNode | null>(null)
  const isOmPlayingRef = useRef(false)
  const rafRef = useRef<number>(0)
  const phaseRef = useRef<'inhale' | 'exhale'>('inhale')
  const phaseStartRef = useRef(0)
  const runningRef = useRef(false)
  const strikeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const flashRef = useRef<HTMLDivElement>(null)

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
  }, [])

  const playZenStrike = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      const ctx = audioCtxRef.current
      const now = ctx.currentTime

      setStrikeFlash(true)
      clearTimeout(strikeTimeoutRef.current!)
      strikeTimeoutRef.current = setTimeout(() => setStrikeFlash(false), 80)

      const osc1 = ctx.createOscillator()
      const gain1 = ctx.createGain()
      osc1.type = 'sine'
      osc1.frequency.setValueAtTime(880, now)
      osc1.frequency.exponentialRampToValueAtTime(720, now + 0.15)
      gain1.gain.setValueAtTime(0.08, now)
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4)
      osc1.connect(gain1)
      gain1.connect(ctx.destination)
      osc1.start(now)
      osc1.stop(now + 0.4)

      const osc2 = ctx.createOscillator()
      const gain2 = ctx.createGain()
      osc2.type = 'sine'
      osc2.frequency.setValueAtTime(1320, now)
      osc2.frequency.exponentialRampToValueAtTime(1080, now + 0.1)
      gain2.gain.setValueAtTime(0.035, now)
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25)
      osc2.connect(gain2)
      gain2.connect(ctx.destination)
      osc2.start(now)
      osc2.stop(now + 0.25)

      const bufferSize = ctx.sampleRate * 0.05
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.15))
      }
      const noise = ctx.createBufferSource()
      noise.buffer = buffer
      const gainN = ctx.createGain()
      gainN.gain.setValueAtTime(0.015, now)
      gainN.gain.exponentialRampToValueAtTime(0.001, now + 0.1)
      noise.connect(gainN)
      gainN.connect(ctx.destination)
      noise.start(now)
      noise.stop(now + 0.1)
    } catch {}
  }, [])

  const startAumSound = useCallback(() => {
    const ctx = audioCtxRef.current
    if (!ctx || isOmPlayingRef.current) return
    const now = ctx.currentTime

    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.035, now)
    masterGain.gain.linearRampToValueAtTime(0.065, now + 0.5)
    masterGain.connect(ctx.destination)

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(350, now)
    filter.frequency.linearRampToValueAtTime(450, now + 1.5)
    filter.Q.setValueAtTime(1.2, now)
    filter.connect(masterGain)

    const oscs: OscillatorNode[] = []
    const freqs: [number, number, number][] = [[108, 112, 0.6], [216, 224, 0.3], [324, 336, 0.15]]
    for (const [f1, f2, vol] of freqs) {
      const o = ctx.createOscillator()
      o.type = 'sawtooth'
      o.frequency.setValueAtTime(f1, now)
      o.frequency.linearRampToValueAtTime(f2, now + 1)
      const g = ctx.createGain()
      g.gain.setValueAtTime(vol, now)
      o.connect(g)
      g.connect(filter)
      o.start(now)
      oscs.push(o)
    }

    const osc4 = ctx.createOscillator()
    osc4.type = 'sine'
    osc4.frequency.setValueAtTime(440, now)
    osc4.frequency.linearRampToValueAtTime(460, now + 1)
    const g4 = ctx.createGain()
    g4.gain.setValueAtTime(0.04, now)
    osc4.connect(g4)
    g4.connect(filter)
    osc4.start(now)
    oscs.push(osc4)

    const vibrato = ctx.createOscillator()
    vibrato.frequency.setValueAtTime(4.5, now)
    const vGain = ctx.createGain()
    vGain.gain.setValueAtTime(2.5, now)
    vibrato.connect(vGain)
    vGain.connect(oscs[0].frequency)
    vGain.connect(oscs[1].frequency)
    vGain.connect(oscs[2].frequency)
    vibrato.start(now)
    oscs.push(vibrato)

    omOscillatorsRef.current = oscs
    omGainRef.current = masterGain
    omFilterRef.current = filter
    isOmPlayingRef.current = true
  }, [])

  const stopAumSound = useCallback((immediate = false) => {
    try {
      if (!isOmPlayingRef.current) return
      const now = audioCtxRef.current ? audioCtxRef.current.currentTime : 0

      if (omGainRef.current) {
        if (immediate) {
          omGainRef.current.gain.setValueAtTime(0.001, now)
        } else {
          omGainRef.current.gain.linearRampToValueAtTime(0.001, now + 0.3)
        }
        setTimeout(() => {
          try {
            omOscillatorsRef.current.forEach(osc => { try { osc.stop() } catch {} })
            if (omGainRef.current) { try { omGainRef.current.disconnect() } catch {} }
            if (omFilterRef.current) { try { omFilterRef.current.disconnect() } catch {} }
          } catch {}
        }, immediate ? 30 : 350)
      }

      omOscillatorsRef.current = []
      omGainRef.current = null
      omFilterRef.current = null
      isOmPlayingRef.current = false
    } catch {}
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
      playZenStrike()

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
  }, [inhaleDuration, exhaleDuration, labels, initAudio, startAumSound, stopAumSound, playZenStrike])

  const startPractice = useCallback(() => {
    initAudio()
    runningRef.current = true
    phaseRef.current = 'inhale'
    phaseStartRef.current = performance.now()
    setIsRunning(true)
    setPhase('inhale')
    setGlowClass('inhale')
    setStatusText(`${labels.inhale} · ${inhaleDuration.toFixed(1)}s`)
    playZenStrike()
    rafRef.current = requestAnimationFrame(tick)
  }, [initAudio, tick, inhaleDuration, labels, playZenStrike])

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
      clearTimeout(strikeTimeoutRef.current!)
      stopAumSound(true)
    }
  }, [labels, stopAumSound])

  const phaseLabel = labels[phase] || labels.inhale

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        ref={flashRef}
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-75"
        style={{
          opacity: strikeFlash ? 1 : 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(245, 180, 90, 0.05), transparent 70%)',
        }}
      />
      <div
        className="relative w-52 h-52 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center cursor-pointer select-none"
        style={{
          transform: `scale(${scale})`,
          background: 'radial-gradient(circle at 35% 30%, rgba(245, 158, 11, 0.12), rgba(255,255,255, 0.95))',
          boxShadow: glowClass === 'inhale'
            ? '0 0 50px rgba(245, 158, 11, 0.3), 0 0 100px rgba(245, 158, 11, 0.15), inset 0 0 30px rgba(245, 158, 11, 0.08)'
            : glowClass === 'exhale'
              ? '0 0 50px rgba(245, 158, 11, 0.2), 0 0 100px rgba(245, 158, 11, 0.1), inset 0 0 30px rgba(245, 158, 11, 0.05)'
              : '0 8px 30px rgba(69, 26, 3, 0.08), inset 0 2px 8px rgba(245, 158, 11, 0.05)',
          border: '2px solid rgba(245, 158, 11, 0.15)',
          transition: 'box-shadow 0.6s ease',
          willChange: 'transform',
        }}
        onClick={isRunning ? stopPractice : startPractice}
      >
        <span className="text-4xl md:text-5xl font-light tracking-wider" style={{ fontFamily: "'Times New Roman', serif", color: 'rgba(245, 158, 11, 0.7)', textShadow: '0 0 30px rgba(245, 158, 11, 0.2)' }}>
          ॐ
        </span>
        <span className="text-xs tracking-wider opacity-40 font-light mt-0.5" style={{ color: 'rgba(245, 158, 11, 0.5)' }}>
          Aum · ॐ · ఓం
        </span>

        <span
          className="absolute bottom-4 px-4 py-1 rounded-full text-xs uppercase tracking-[4px] font-light"
          style={{
            background: 'rgba(245, 158, 11, 0.05)',
            border: '1px solid rgba(245, 158, 11, 0.1)',
            color: 'rgba(245, 158, 11, 0.6)',
          }}
        >
          {isRunning ? phaseLabel : (statusText === labels.pause ? labels.stop : 'ॐ')}
        </span>
      </div>

      <div className="w-full max-w-xs flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-sm font-light opacity-70">
            <span className="text-amber-600/50">{locale === 'ru' ? '🌬️ Вдох (сек)' : '🌬️ Inhale (sec)'}</span>
            <span className="tabular-nums px-2 rounded-full text-amber-500/60" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>{inhaleDuration.toFixed(1)}</span>
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
            style={{ background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.3), rgba(245, 158, 11, 0.5))' }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-sm font-light opacity-70">
            <span className="text-amber-600/50">{locale === 'ru' ? '🌀 Выдох (сек)' : '🌀 Exhale (sec)'}</span>
            <span className="tabular-nums px-2 rounded-full text-amber-400/50" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>{exhaleDuration.toFixed(1)}</span>
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
            style={{ background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.3), rgba(245, 158, 11, 0.5))' }}
          />
        </div>
      </div>

      <div className="flex gap-3 w-full max-w-xs justify-center">
        <button
          onClick={isRunning ? stopPractice : startPractice}
          className="flex-1 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-150 active:scale-95"
          style={isRunning ? {
            background: 'rgba(245, 158, 11, 0.05)',
            color: 'rgba(245, 158, 11, 0.5)',
            border: '1px solid rgba(245, 158, 11, 0.1)',
          } : {
            background: 'linear-gradient(135deg, #b45309, #92400e)',
            color: '#fcd34d',
            boxShadow: '0 4px 20px rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          {isRunning ? '⏹ ' + (locale === 'ru' ? 'Стоп' : 'Stop') : '▶ ' + (locale === 'ru' ? 'Начать' : 'Start')}
        </button>

        <button
          onClick={resetPractice}
          className="flex-1 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-150 active:scale-95"
          style={{
            background: 'rgba(245, 158, 11, 0.05)',
            color: 'rgba(245, 158, 11, 0.4)',
            border: '1px solid rgba(245, 158, 11, 0.08)',
          }}
        >
          ⟲ {locale === 'ru' ? 'Сброс' : 'Reset'}
        </button>
      </div>

      <p className="text-center text-xs tracking-wider opacity-40 min-h-[20px]" style={{ color: 'rgba(245, 158, 11, 0.4)' }}>
        {statusText}
      </p>

      <p className="text-center text-[10px] opacity-20" style={{ color: 'rgba(245, 158, 11, 0.3)' }}>
        ♡ {locale === 'ru' ? 'каждый такт — удар палочки дзен · на выдохе звучит Аум' : 'each beat — zen stick strike · Aum sounds on exhale'}
      </p>
    </div>
  )
}
