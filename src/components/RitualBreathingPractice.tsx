'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface AudioCtx extends AudioContext {
  webkitAudioContext?: typeof AudioContext
}

export default function RitualBreathingPractice() {
  const { locale } = useLanguage()
  const isRu = locale === 'ru'

  const [isRunning, setIsRunning] = useState(false)
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle')
  const [phaseLabel, setPhaseLabel] = useState(isRu ? 'Готов' : 'Ready')
  const [phaseCount, setPhaseCount] = useState('—')
  const [cycleCount, setCycleCount] = useState(0)
  const [scale, setScale] = useState(1)
  const [glowOpacity, setGlowOpacity] = useState(0)
  const [progressWidth, setProgressWidth] = useState('0%')
  const [strikeFlash, setStrikeFlash] = useState(false)
  const [inhaleDuration, setInhaleDuration] = useState(4.0)
  const [holdDuration, setHoldDuration] = useState(6.0)
  const [exhaleDuration, setExhaleDuration] = useState(8.0)

  const circleRef = useRef<HTMLDivElement>(null)
  const mandalaRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef({
    isRunning: false,
    phase: 'idle' as 'idle' | 'inhale' | 'hold' | 'exhale',
    cycleCount: 0,
    animFrameId: 0,
    phaseStartTime: 0,
    audioCtx: null as AudioContext | null,
    omOscillators: [] as OscillatorNode[],
    omGain: null as GainNode | null,
    omFilter: null as BiquadFilterNode | null,
    isOmPlaying: false,
    strikeTimeout: null as ReturnType<typeof setTimeout> | null,
  })
  const glowRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const phaseTextRef = useRef<HTMLSpanElement>(null)
  const phaseCountRef = useRef<HTMLSpanElement>(null)
  const cycleDisplayRef = useRef<HTMLSpanElement>(null)
  const flashRef = useRef<HTMLDivElement>(null)

  const labels = {
    ready: isRu ? 'Готов' : 'Ready',
    inhale: isRu ? 'Вдох' : 'Inhale',
    hold: isRu ? 'Задержка' : 'Hold',
    exhale: isRu ? 'Выдох' : 'Exhale',
    start: isRu ? 'Начать' : 'Start',
    stop: isRu ? 'Стоп' : 'Stop',
    subtitle: isRu ? 'пранаяма' : 'pranayama',
    accent: isRu ? 'дыхание жизни' : 'breath of life',
    inhaleLbl: isRu ? 'вдох' : 'inhale',
    holdLbl: isRu ? 'задержка' : 'hold',
    exhaleLbl: isRu ? 'выдох' : 'exhale',
    cyclesLbl: isRu ? 'циклы' : 'cycles',
    footer: isRu ? 'каждый такт — удар палочки дзен' : 'each beat — zen stick strike',
    exhaleOm: isRu ? 'выдох — с звуком ॐ' : 'exhale — with sound ॐ',
    inhaleSlider: isRu ? 'Вдох (сек)' : 'Inhale (sec)',
    holdSlider: isRu ? 'Задержка (сек)' : 'Hold (sec)',
    exhaleSlider: isRu ? 'Выдох (сек)' : 'Exhale (sec)',
    sec: 'с',
  }

  const getPhaseConfig = (p: 'inhale' | 'hold' | 'exhale') => {
    switch (p) {
      case 'inhale': return { duration: inhaleDuration, label: labels.inhale, next: 'hold' as const, cls: 'phase-inhale' }
      case 'hold': return { duration: holdDuration, label: labels.hold, next: 'exhale' as const, cls: 'phase-hold' }
      case 'exhale': return { duration: exhaleDuration, label: labels.exhale, next: 'inhale' as const, cls: 'phase-exhale' }
    }
  }

  const playZenStrike = useCallback(() => {
    const s = stateRef.current
    try {
      if (!s.audioCtx) {
        s.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      const ctx = s.audioCtx
      const now = ctx.currentTime

      setStrikeFlash(true)
      clearTimeout(s.strikeTimeout!)
      s.strikeTimeout = setTimeout(() => setStrikeFlash(false), 80)

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

  const startOm = useCallback(() => {
    const s = stateRef.current
    try {
      if (!s.audioCtx) {
        s.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      if (s.isOmPlaying) return
      const ctx = s.audioCtx
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

      s.omOscillators = oscs
      s.omGain = masterGain
      s.omFilter = filter
      s.isOmPlaying = true
    } catch {}
  }, [])

  const stopOm = useCallback(() => {
    const s = stateRef.current
    try {
      if (!s.isOmPlaying) return
      const now = s.audioCtx ? s.audioCtx.currentTime : 0
      if (s.omGain) {
        s.omGain.gain.linearRampToValueAtTime(0.001, now + 0.3)
        setTimeout(() => {
          try {
            s.omOscillators.forEach(osc => { try { osc.stop() } catch {} })
            if (s.omGain) { try { s.omGain.disconnect() } catch {} }
            if (s.omFilter) { try { s.omFilter.disconnect() } catch {} }
          } catch {}
        }, 350)
      }
      s.omOscillators = []
      s.omGain = null
      s.omFilter = null
      s.isOmPlaying = false
    } catch {}
  }, [])

  const startPhase = useCallback((p: 'inhale' | 'hold' | 'exhale') => {
    const s = stateRef.current
    const config = getPhaseConfig(p)
    s.phase = p
    s.phaseStartTime = performance.now()

    setPhase(p)
    setPhaseLabel(config.label)
    setPhaseCount(config.duration + (isRu ? 'с' : 's'))
    setProgressWidth('0%')

    if (mandalaRef.current) {
      mandalaRef.current.className = 'mandala'
      mandalaRef.current.classList.add(config.cls)
    }

    playZenStrike()
    if (p === 'exhale') {
      startOm()
    } else {
      stopOm()
    }
  }, [playZenStrike, startOm, stopOm, isRu, inhaleDuration, holdDuration, exhaleDuration])

  const updateBreath = useCallback((progress: number) => {
    const s = stateRef.current
    let scale = 1
    if (s.phase === 'inhale') scale = 1 + progress * 0.25
    else if (s.phase === 'hold') scale = 1.25
    else if (s.phase === 'exhale') scale = 1 + (1 - progress) * 0.25

    setScale(scale)
    setGlowOpacity(0.2 + progress * 0.3)
    setProgressWidth((progress * 100) + '%')

    const config = getPhaseConfig(s.phase as 'inhale' | 'hold' | 'exhale')
    const remaining = Math.max(0, config.duration - ((performance.now() - s.phaseStartTime) / 1000))
    setPhaseCount(Math.ceil(remaining) + (isRu ? 'с' : 's'))
  }, [isRu, inhaleDuration, holdDuration, exhaleDuration])

  const advancePhase = useCallback(() => {
    const s = stateRef.current
    const current = s.phase
    if (current === 'exhale') {
      s.cycleCount += 1
      setCycleCount(s.cycleCount)
      stopOm()
    }
    startPhase(getPhaseConfig(current as 'inhale' | 'hold' | 'exhale').next)
  }, [startPhase, stopOm])

  const tick = useCallback(() => {
    const s = stateRef.current
    if (!s.isRunning) return
    const config = getPhaseConfig(s.phase as 'inhale' | 'hold' | 'exhale')
    const delta = (performance.now() - s.phaseStartTime) / 1000
    const progress = Math.min(delta / config.duration, 1)
    updateBreath(progress)
    if (progress >= 1) {
      advancePhase()
    }
    s.animFrameId = requestAnimationFrame(tick)
  }, [updateBreath, advancePhase])

  const startPractice = useCallback(() => {
    const s = stateRef.current
    if (s.isRunning) return
    try {
      if (!s.audioCtx) {
        s.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      if (s.audioCtx.state === 'suspended') {
        s.audioCtx.resume()
      }
    } catch {}

    s.isRunning = true
    s.cycleCount = 0
    setCycleCount(0)
    setScale(1)
    setIsRunning(true)
    startPhase('inhale')
    if (s.animFrameId) cancelAnimationFrame(s.animFrameId)
    s.animFrameId = requestAnimationFrame(tick)
  }, [startPhase, tick])

  const stopPractice = useCallback(() => {
    const s = stateRef.current
    s.isRunning = false
    if (s.animFrameId) cancelAnimationFrame(s.animFrameId)
    stopOm()
    s.phase = 'idle'
    setPhase('idle')
    setPhaseLabel(isRu ? 'Готов' : 'Ready')
    setPhaseCount('—')
    if (mandalaRef.current) mandalaRef.current.className = 'mandala'
    setScale(1)
    setGlowOpacity(0)
    setProgressWidth('0%')
    setIsRunning(false)
  }, [stopOm, isRu])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (stateRef.current.isRunning) stopPractice()
        else startPractice()
      }
      if (e.key === 'Escape' && stateRef.current.isRunning) stopPractice()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      cancelAnimationFrame(stateRef.current.animFrameId)
      stopOm()
    }
  }, [startPractice, stopPractice, stopOm])

  useEffect(() => {
    if (!isRunning) {
      setPhaseLabel(isRu ? 'Готов' : 'Ready')
      setPhaseCount('—')
    }
  }, [isRu, isRunning])

  const glowColor = phase === 'inhale' ? 'rgba(245, 158, 11, 0.35)'
    : phase === 'hold' ? 'rgba(212, 180, 138, 0.3)'
    : phase === 'exhale' ? 'rgba(180, 83, 9, 0.4)'
    : 'transparent'

  const circleColor = phase === 'inhale' ? 'rgba(245, 158, 11, 0.22)'
    : phase === 'hold' ? 'rgba(212, 180, 138, 0.2)'
    : phase === 'exhale' ? 'rgba(180, 83, 9, 0.22)'
    : 'rgba(200, 160, 100, 0.12)'

  const phaseColor = phase === 'inhale' ? '#f5c95c'
    : phase === 'hold' ? '#e8c896'
    : phase === 'exhale' ? '#d88b3c'
    : '#d4b48a'

  const ringColor = phase === 'inhale' ? 'rgba(245, 158, 11, 0.12)'
    : phase === 'hold' ? 'rgba(212, 180, 138, 0.1)'
    : phase === 'exhale' ? 'rgba(180, 83, 9, 0.12)'
    : 'rgba(200, 160, 100, 0.08)'

  return (
    <div className="relative w-full rounded-3xl overflow-hidden select-none" style={{
      background: 'radial-gradient(ellipse at 50% 30%, rgba(60, 35, 20, 0.5) 0%, transparent 70%)',
      border: '1px solid rgba(200, 160, 100, 0.12)',
      boxShadow: '0 20px 80px rgba(0, 0, 0, 0.8), inset 0 0 80px rgba(180, 120, 60, 0.04)',
      padding: '30px 20px 40px',
    }}>
      {/* Zen strike flash */}
      <div ref={flashRef} className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-75" style={{
        opacity: strikeFlash ? 1 : 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(200, 180, 150, 0.04), transparent 70%)',
      }} />

      {/* Header */}
      <div className="text-center mb-5">
        <div className="text-[13px] tracking-[6px] uppercase font-light mb-1" style={{ color: 'rgba(200, 170, 120, 0.5)' }}>
          ✦ {labels.subtitle} ✦
        </div>
        <h3 className="text-2xl md:text-3xl font-bold tracking-[4px]" style={{ fontFamily: 'var(--font-cormorant)', color: '#d4b48a', textShadow: '0 0 40px rgba(200, 160, 100, 0.1)' }}>
          <span style={{ color: '#c9a87c' }}>☸</span> 4–6–8 <span style={{ color: '#c9a87c' }}>☸</span>
        </h3>
        <div className="text-[13px] font-light tracking-[8px] mt-0.5" style={{ color: 'rgba(200, 170, 120, 0.35)' }}>
          {labels.accent}
        </div>
      </div>

      {/* Mandala */}
      <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] mx-auto my-2.5">
        <div ref={mandalaRef} className="mandala relative w-full h-full flex items-center justify-center">
          {[100, 88, 74, 60].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size + '%',
                height: size + '%',
                border: i === 3 ? `2px solid ${ringColor}` : `1px solid ${ringColor}`,
                borderStyle: i === 1 ? 'dashed' : i === 3 ? 'dotted' : 'solid',
                animation: `mandalaSpin ${[120, 90, 150, 70][i]}s linear infinite`,
                animationDirection: i % 2 === 1 ? 'reverse' : 'normal',
              }}
            />
          ))}

          {[[50, 0], [85.4, 14.6], [100, 50], [85.4, 85.4], [50, 100], [14.6, 85.4], [0, 50], [14.6, 14.6]].map(([l, t], i) => (
            <span key={i} className="absolute w-1 h-1 rounded-full" style={{ left: l + '%', top: t + '%', background: 'rgba(200, 170, 120, 0.15)', transform: 'translate(-50%, -50%)' }} />
          ))}

          {/* Glow */}
          <div
            ref={glowRef}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '70%',
              height: '70%',
              opacity: glowOpacity,
              filter: 'blur(30px)',
              background: glowColor,
              transition: 'all 0.3s ease',
            }}
          />

          {/* Breath circle */}
          <div
            ref={circleRef}
            className="relative rounded-full flex items-center justify-center"
            style={{
              width: '56%',
              height: '56%',
              border: `1px solid ${circleColor}`,
              background: 'radial-gradient(ellipse at 40% 35%, rgba(180, 140, 90, 0.08), rgba(120, 80, 40, 0.02))',
              boxShadow: phase === 'inhale'
                ? '0 0 80px rgba(160, 200, 180, 0.04), inset 0 0 80px rgba(160, 200, 180, 0.02)'
                : phase === 'hold'
                  ? '0 0 80px rgba(200, 190, 160, 0.04), inset 0 0 80px rgba(200, 190, 160, 0.02)'
                  : phase === 'exhale'
                    ? '0 0 80px rgba(200, 160, 140, 0.06), inset 0 0 80px rgba(200, 160, 140, 0.03)'
                    : '0 0 60px rgba(180, 140, 90, 0.02), inset 0 0 60px rgba(180, 140, 90, 0.02)',
              transform: `scale(${scale})`,
              transition: 'transform 0.1s linear',
              willChange: 'transform',
              zIndex: 2,
            }}
          >
            <div className="text-center pointer-events-none relative z-10 transition-all duration-300">
              <span className="block mb-0.5 transition-all duration-500" style={{ fontSize: 44, color: phaseColor, textShadow: '0 0 40px rgba(200, 160, 100, 0.15)', fontFamily: 'var(--font-cormorant)' }}>
                ॐ
              </span>
              <span ref={phaseTextRef} className="block text-[22px] font-semibold tracking-[3px] transition-all duration-300" style={{ color: phaseColor, fontFamily: 'var(--font-cormorant)' }}>
                {phaseLabel}
                <span ref={phaseCountRef} className="block text-[16px] font-light tracking-[1px] mt-0.5" style={{ color: 'rgba(200, 170, 120, 0.5)' }}>
                  {phaseCount}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="flex justify-center gap-6 md:gap-8 flex-wrap mt-3 mb-4">
        {[
          [labels.inhaleLbl, inhaleDuration],
          [labels.holdLbl, holdDuration],
          [labels.exhaleLbl, exhaleDuration],
          [labels.cyclesLbl, cycleCount],
        ].map(([lbl, val]) => (
          <div key={String(lbl)} className="text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            <div className="text-[11px] uppercase tracking-[3px] font-light" style={{ color: 'rgba(200, 170, 120, 0.3)' }}>{lbl}</div>
            <div className="text-[28px] font-light tracking-[2px] tabular-nums" style={{ color: '#d4b48a' }}>
              {typeof val === 'number' ? val.toFixed(1) : val} <span className="text-[16px]" style={{ color: 'rgba(200, 170, 120, 0.3)' }}>{typeof val === 'number' && lbl !== labels.cyclesLbl ? labels.sec : ''}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Duration sliders */}
      <div className="w-full max-w-[320px] mx-auto mt-3 mb-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm font-light opacity-70">
            <span className="text-amber-200/50">☸ {labels.inhaleSlider}</span>
            <span className="tabular-nums px-2 rounded-full text-amber-300/60" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>{inhaleDuration.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={2}
            max={8}
            step={0.2}
            value={inhaleDuration}
            disabled={isRunning}
            onChange={(e) => setInhaleDuration(parseFloat(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer disabled:opacity-30"
            style={{ background: 'linear-gradient(90deg, rgba(180, 83, 9, 0.3), rgba(245, 158, 11, 0.5))' }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm font-light opacity-70">
            <span className="text-amber-200/50">🕉 {labels.holdSlider}</span>
            <span className="tabular-nums px-2 rounded-full text-amber-300/60" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>{holdDuration.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={2}
            max={10}
            step={0.2}
            value={holdDuration}
            disabled={isRunning}
            onChange={(e) => setHoldDuration(parseFloat(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer disabled:opacity-30"
            style={{ background: 'linear-gradient(90deg, rgba(180, 83, 9, 0.3), rgba(245, 158, 11, 0.5))' }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm font-light opacity-70">
            <span className="text-amber-200/50">ॐ {labels.exhaleSlider}</span>
            <span className="tabular-nums px-2 rounded-full text-amber-300/60" style={{ background: 'rgba(245, 158, 11, 0.05)' }}>{exhaleDuration.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={2}
            max={12}
            step={0.2}
            value={exhaleDuration}
            disabled={isRunning}
            onChange={(e) => setExhaleDuration(parseFloat(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer disabled:opacity-30"
            style={{ background: 'linear-gradient(90deg, rgba(180, 83, 9, 0.3), rgba(245, 158, 11, 0.5))' }}
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-[70%] max-w-[300px] h-0.5 mx-auto mt-3.5 overflow-hidden relative rounded" style={{ background: 'rgba(200, 160, 100, 0.06)' }}>
        <div className="h-full rounded transition-[width] duration-100" style={{ width: progressWidth, background: 'linear-gradient(90deg, rgba(200, 160, 100, 0.1), rgba(200, 160, 100, 0.25))' }} />
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 flex-wrap mt-4">
        <button
          onClick={isRunning ? stopPractice : startPractice}
          className="rounded-full px-9 py-3 text-lg font-semibold tracking-[3px] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            border: '1px solid rgba(200, 160, 100, 0.15)',
            background: 'rgba(200, 160, 100, 0.06)',
            color: '#d4b48a',
            fontFamily: 'var(--font-cormorant)',
            minWidth: 140,
          }}
        >
          ◈ {isRunning ? labels.stop : labels.start}
        </button>
      </div>

      {/* Footer note */}
      <div className="text-center mt-4 text-xs tracking-[2px] font-light" style={{ color: 'rgba(200, 170, 120, 0.15)', fontFamily: 'var(--font-cormorant)' }}>
        <span className="inline-block mx-2">✧</span> {labels.footer} <span className="inline-block mx-2">✧</span>
        <span className="block mt-0.5">{labels.exhaleOm}</span>
      </div>

      <style>{`
        @keyframes mandalaSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
