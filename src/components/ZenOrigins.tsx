'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Symbol {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  char: string
  size: number
  opacity: number
}

interface Country {
  id: string
  name: { ru: string; en: string }
  accent: string
  symbols: string[]
  desc: { ru: string; en: string }
  school: { ru: string; en: string }
}

const COUNTRIES: Country[] = [
  {
    id: 'india',
    name: { ru: 'Индия', en: 'India' },
    accent: '#E8A317',
    symbols: ['ॐ', 'धर्म', 'बुद्ध', 'शून्यता', 'करुणा', 'मार्ग', 'ज्ञान', 'शांति', 'सत्य', 'प्रेम', 'मोक्ष', 'निर्वाण', 'संघ', 'विपश्यना', 'योग'],
    desc: { ru: 'Родина буддизма. Бодхидхарма получил имя «Дхарма» от учителя Праджнятары и был 27-м патриархом.', en: 'Birthplace of Buddhism. Bodhidharma received the name "Dharma" from teacher Prajñātāra and was the 27th Patriarch.' },
    school: { ru: 'Дхарма — Учение Будды', en: 'Dharma — The Buddha\'s Teaching' },
  },
  {
    id: 'china',
    name: { ru: 'Китай', en: 'China' },
    accent: '#C41E3A',
    symbols: ['禅', '佛', '心', '道', '空', '悟', '法', '缘', '善', '定', '慧', '真', '如', '性', '相', '色', '受', '想', '行', '识'],
    desc: { ru: 'Бодхидхарма принёс Чань в Китай, основав школу в монастыре Шаолинь. 9 лет медитации лицом к стене.', en: 'Bodhidharma brought Chan to China, founding the school at Shaolin Monastery. 9 years of wall-gazing meditation.' },
    school: { ru: 'Чань — Прямое указание на ум', en: 'Chan — Direct Pointing to the Mind' },
  },
  {
    id: 'japan',
    name: { ru: 'Япония', en: 'Japan' },
    accent: '#6A0DAD',
    symbols: ['ぜん', 'ぶつ', 'しん', 'どう', 'くう', 'ご', 'えん', 'せつ', 'じつ', 'ねん', 'しん', 'じょう', 'ほう', 'かい', 'ち'],
    desc: { ru: 'Дзен-буддизм стал основой японской культуры: чайная церемония, сады камней, архитектура храмов.', en: 'Zen Buddhism became the foundation of Japanese culture: tea ceremony, rock gardens, temple architecture.' },
    school: { ru: 'Дзен — Путь осознанности', en: 'Zen — The Way of Awareness' },
  },
  {
    id: 'vietnam',
    name: { ru: 'Вьетнам', en: 'Vietnam' },
    accent: '#228B22',
    symbols: ['Thiền', 'Phật', 'Tâm', 'Đạo', 'Không', 'Ngộ', 'Pháp', 'Duyên', 'Thiện', 'Định', 'Tuệ', 'Chân', 'Như', 'Tính', 'Sắc'],
    desc: { ru: 'Тхиен (Вьетнамский Чань) сочетает буддийскую медитацию с конфуцианскими и даоскими традициями.', en: 'Thien (Vietnamese Chan) combines Buddhist meditation with Confucian and Taoist traditions.' },
    school: { ru: 'Тхиен — Гармония ума', en: 'Thien — Harmony of Mind' },
  },
  {
    id: 'korea',
    name: { ru: 'Корея', en: 'Korea' },
    accent: '#1E90FF',
    symbols: ['선', '불', '마음', '도', '공', '오', '연', '설', '실', '념', '정', '혜', '진', '여', '상'],
    desc: { ru: 'Сон (Корейский Дзен) известен практикой «хва-то» — медитативными вопросами для пробуждения.', en: 'Seon (Korean Zen) is known for hwadu practice — meditative questions for awakening.' },
    school: { ru: 'Сон — Пробуждение ума', en: 'Seon — Awakening of Mind' },
  },
]

const SPRING = 0.03
const DAMPING = 0.92
const MOUSE_RADIUS = 120

// Chime sound frequencies per country (pentatonic-ish)
const CHIME_FREQS: Record<string, number[]> = {
  india: [523, 659, 784, 880, 1047],
  china: [440, 523, 659, 784, 988],
  japan: [587, 698, 880, 988, 1175],
  vietnam: [494, 587, 698, 784, 988],
  korea: [523, 622, 740, 831, 932],
}

let audioCtx: AudioContext | null = null
let lastChimeTime = 0

function playChime(countryId: string) {
  const now = Date.now()
  if (now - lastChimeTime < 150) return
  lastChimeTime = now

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }

  const freqs = CHIME_FREQS[countryId] || CHIME_FREQS.china
  const freq = freqs[Math.floor(Math.random() * freqs.length)]
  const nowSec = audioCtx.currentTime

  const osc = audioCtx.createOscillator()
  const gain = audioCtx.createGain()
  const filter = audioCtx.createBiquadFilter()

  osc.type = 'sine'
  osc.frequency.setValueAtTime(freq, nowSec)

  filter.type = 'lowpass'
  filter.frequency.setValueAtTime(2000, nowSec)
  filter.Q.setValueAtTime(1, nowSec)

  gain.gain.setValueAtTime(0, nowSec)
  gain.gain.linearRampToValueAtTime(0.12, nowSec + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.001, nowSec + 1.5)

  osc.connect(filter)
  filter.connect(gain)
  gain.connect(audioCtx.destination)

  osc.start(nowSec)
  osc.stop(nowSec + 1.5)
}

export default function ZenOrigins() {
  const { locale } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCountry, setActiveCountry] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [fadeAlpha, setFadeAlpha] = useState(1)
  const symbolsRef = useRef<Symbol[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animRef = useRef<number>(0)
  const countryRef = useRef(0)

  const initSymbols = useCallback((countryIdx: number, width: number, height: number) => {
    const country = COUNTRIES[countryIdx]
    const cols = 7
    const rows = 4
    const symbols: Symbol[] = []
    const startX = width * 0.15
    const endX = width * 0.85
    const startY = height * 0.25
    const endY = height * 0.85
    const colStep = (endX - startX) / (cols - 1)
    const rowStep = (endY - startY) / (rows - 1)

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const charIdx = (r * cols + c) % country.symbols.length
        const x = startX + c * colStep + (Math.random() - 0.5) * 20
        const y = startY + r * rowStep + (Math.random() - 0.5) * 10
        symbols.push({
          x, y, originX: x, originY: y,
          vx: 0, vy: 0,
          char: country.symbols[charIdx],
          size: 18 + Math.random() * 14,
          opacity: 0.4 + Math.random() * 0.4,
        })
      }
    }
    symbolsRef.current = symbols
  }, [])

  const drawArchitecture = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, alpha: number) => {
    const country = COUNTRIES[countryRef.current]
    ctx.save()
    ctx.globalAlpha = alpha * 0.6
    const accentColor = country.accent

    if (country.id === 'india') {
      // Stupa
      const cx = w / 2, cy = h * 0.35
      const r = Math.min(w, h) * 0.08
      ctx.fillStyle = accentColor
      ctx.beginPath()
      ctx.ellipse(cx, cy + r * 0.3, r, r * 0.7, 0, Math.PI, 0)
      ctx.fill()
      ctx.fillRect(cx - r * 1.1, cy + r * 0.3, r * 2.2, r * 0.15)
      ctx.fillRect(cx - r * 0.8, cy + r * 0.45, r * 1.6, r * 0.1)
      ctx.beginPath()
      ctx.arc(cx, cy - r * 0.5, r * 0.12, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillRect(cx - 2, cy - r * 1.2, 4, r * 0.7)
      ctx.beginPath()
      ctx.arc(cx, cy - r * 1.3, r * 0.18, 0, Math.PI * 2)
      ctx.fill()
    } else if (country.id === 'china') {
      // Chinese pagoda
      const cx = w / 2, baseY = h * 0.45
      const levels = 5
      const levelH = h * 0.04
      for (let i = 0; i < levels; i++) {
        const y = baseY - i * levelH
        const spread = (levels - i) * w * 0.035
        ctx.fillStyle = accentColor
        ctx.beginPath()
        ctx.moveTo(cx - spread - 15, y)
        ctx.quadraticCurveTo(cx - spread, y - levelH * 0.4, cx, y - levelH)
        ctx.quadraticCurveTo(cx + spread, y - levelH * 0.4, cx + spread + 15, y)
        ctx.closePath()
        ctx.fill()
        ctx.fillRect(cx - spread * 0.5, y, spread, levelH * 0.1)
      }
      ctx.fillRect(cx - 3, baseY, 6, h * 0.15)
    } else if (country.id === 'japan') {
      // Zen temple roof
      const cx = w / 2, baseY = h * 0.38
      ctx.fillStyle = accentColor
      ctx.beginPath()
      ctx.moveTo(cx - w * 0.15, baseY)
      ctx.quadraticCurveTo(cx, baseY - h * 0.08, cx + w * 0.15, baseY)
      ctx.lineTo(cx + w * 0.13, baseY + h * 0.02)
      ctx.quadraticCurveTo(cx, baseY - h * 0.06, cx - w * 0.13, baseY + h * 0.02)
      ctx.closePath()
      ctx.fill()
      ctx.fillRect(cx - w * 0.06, baseY + h * 0.02, w * 0.12, h * 0.04)
      ctx.fillRect(cx - w * 0.04, baseY + h * 0.06, w * 0.08, h * 0.04)
      ctx.fillRect(cx - 4, baseY + h * 0.1, 8, h * 0.08)
    } else if (country.id === 'vietnam') {
      // Vietnamese pagoda
      const cx = w / 2, baseY = h * 0.4
      const levels = 3
      for (let i = 0; i < levels; i++) {
        const y = baseY - i * h * 0.06
        const spread = (levels - i) * w * 0.04
        ctx.fillStyle = accentColor
        ctx.beginPath()
        ctx.moveTo(cx - spread - 10, y)
        ctx.quadraticCurveTo(cx - spread * 0.5, y - h * 0.03, cx, y - h * 0.04)
        ctx.quadraticCurveTo(cx + spread * 0.5, y - h * 0.03, cx + spread + 10, y)
        ctx.closePath()
        ctx.fill()
      }
      ctx.fillRect(cx - 3, baseY, 6, h * 0.12)
    } else if (country.id === 'korea') {
      // Korean temple
      const cx = w / 2, baseY = h * 0.4
      ctx.fillStyle = accentColor
      for (let i = 0; i < 3; i++) {
        const y = baseY - i * h * 0.05
        const spread = w * 0.08 + i * w * 0.015
        ctx.beginPath()
        ctx.moveTo(cx - spread - 12, y)
        ctx.quadraticCurveTo(cx - spread * 0.3, y - h * 0.025, cx, y - h * 0.035)
        ctx.quadraticCurveTo(cx + spread * 0.3, y - h * 0.025, cx + spread + 12, y)
        ctx.closePath()
        ctx.fill()
      }
      ctx.fillRect(cx - w * 0.035, baseY + h * 0.005, w * 0.07, h * 0.06)
    }
    ctx.restore()
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const w = canvas.width
    const h = canvas.height
    const mouse = mouseRef.current

    ctx.clearRect(0, 0, w, h)

    // Background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, w, h)

    // Subtle paper texture
    ctx.globalAlpha = 0.03
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * w
      const y = Math.random() * h
      ctx.fillStyle = Math.random() > 0.5 ? '#E8A317' : '#8B7355'
      ctx.fillRect(x, y, Math.random() * 3, Math.random() * 3)
    }
    ctx.globalAlpha = 1

    drawArchitecture(ctx, w, h, fadeAlpha)

    // Update and draw symbols
    const symbols = symbolsRef.current
    let chimeTriggered = false
    for (const s of symbols) {
      const dx = mouse.x - s.x
      const dy = mouse.y - s.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
        const angle = Math.atan2(dy, dx)
        s.vx -= Math.cos(angle) * force * 8
        s.vy -= Math.sin(angle) * force * 8
        if (!chimeTriggered && force > 0.3) {
          playChime(COUNTRIES[countryRef.current].id)
          chimeTriggered = true
        }
      }

      s.vx += (s.originX - s.x) * SPRING
      s.vy += (s.originY - s.y) * SPRING
      s.vx *= DAMPING
      s.vy *= DAMPING
      s.x += s.vx
      s.y += s.vy

      const disp = Math.sqrt((s.x - s.originX) ** 2 + (s.y - s.originY) ** 2)
      const opacity = Math.max(0.2, s.opacity - disp * 0.003)

      ctx.save()
      ctx.globalAlpha = opacity * fadeAlpha
      ctx.fillStyle = COUNTRIES[countryRef.current].accent
      ctx.font = `${s.size}px "Cormorant Garamond", serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(s.char, s.x, s.y)
      ctx.restore()
    }

    // Mouse glow
    if (mouse.x > 0 && mouse.y > 0) {
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS)
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.08)')
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS, 0, Math.PI * 2)
      ctx.fill()
    }

    animRef.current = requestAnimationFrame(animate)
  }, [fadeAlpha, drawArchitecture])

  const handleCountryChange = useCallback((idx: number) => {
    if (idx === countryRef.current || transitioning) return
    setTransitioning(true)

    // Fade out
    const fadeOut = () => {
      setFadeAlpha(prev => {
        if (prev <= 0.05) {
          countryRef.current = idx
          const canvas = canvasRef.current
          if (canvas) {
            initSymbols(idx, canvas.width, canvas.height)
          }
          // Fade in
          let alpha = 0
          const fadeIn = () => {
            alpha += 0.04
            if (alpha >= 1) {
              setFadeAlpha(1)
              setTransitioning(false)
              return
            }
            setFadeAlpha(alpha)
            requestAnimationFrame(fadeIn)
          }
          requestAnimationFrame(fadeIn)
          return 0
        }
        setFadeAlpha(prev - 0.06)
        requestAnimationFrame(fadeOut)
        return prev - 0.06
      })
    }
    requestAnimationFrame(fadeOut)
  }, [transitioning, initSymbols])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = 600 * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = '600px'
      const ctx = canvas.getContext('2d')
      if (ctx) ctx.scale(dpr, dpr)
      initSymbols(countryRef.current, rect.width, 600)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
      }
    }

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener('mousemove', handleMouse)
    canvas.addEventListener('touchmove', handleTouch, { passive: true })
    canvas.addEventListener('mouseleave', handleLeave)
    canvas.addEventListener('touchend', handleLeave)

    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('touchmove', handleTouch)
      canvas.removeEventListener('mouseleave', handleLeave)
      canvas.removeEventListener('touchend', handleLeave)
      cancelAnimationFrame(animRef.current)
    }
  }, [animate, initSymbols])

  const country = COUNTRIES[activeCountry]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Country nav */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {COUNTRIES.map((c, i) => (
          <button
            key={c.id}
            onClick={() => {
              setActiveCountry(i)
              handleCountryChange(i)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCountry === i
                ? 'scale-110 shadow-lg'
                : 'opacity-50 hover:opacity-80'
            }`}
            style={{
              background: activeCountry === i
                ? `linear-gradient(135deg, ${c.accent}40, ${c.accent}20)`
                : 'rgba(245, 158, 11, 0.05)',
              border: `1px solid ${activeCountry === i ? c.accent + '60' : 'rgba(245, 158, 11, 0.1)'}`,
              color: activeCountry === i ? c.accent : '#292524',
            }}
          >
            {c.name[locale as keyof typeof c.name] || c.name.en}
          </button>
        ))}
      </div>

      {/* Canvas */}
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden"
        style={{
          boxShadow: '0 0 60px rgba(245, 158, 11, 0.08)',
          border: '2px solid rgba(245, 158, 11, 0.15)',
        }}
      >
        <canvas ref={canvasRef} className="w-full cursor-crosshair" style={{ height: '600px' }} />
      </div>

      {/* Country info */}
      <div className="mt-6 text-center space-y-2 animate-fade-in" key={country.id}>
        <h3
          className="font-[var(--font-cormorant)] text-2xl font-bold"
          style={{ color: country.accent }}
        >
          {country.school[locale as keyof typeof country.school] || country.school.en}
        </h3>
        <p className="text-amber-700/50 text-sm max-w-2xl mx-auto leading-relaxed">
          {country.desc[locale as keyof typeof country.desc] || country.desc.en}
        </p>
      </div>
    </div>
  )
}
