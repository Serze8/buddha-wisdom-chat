'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

type Scene = 'china' | 'japan' | 'kazakhstan'

interface Particle {
  x: number
  y: number
  prevX: number
  prevY: number
  char: string
  restX: number
  restY: number
  fontSize: number
  opacity: number
}

interface SceneConfig {
  id: Scene
  label: { ru: string; en: string }
  chars: string[]
  archColor: string
  accentColor: string
  title: { ru: string; en: string }
  subtitle: { ru: string; en: string }
  desc: { ru: string; en: string }
  link: string
}

const scenes: SceneConfig[] = [
  {
    id: 'china',
    label: { ru: 'Китай', en: 'China' },
    chars: '道佛禅心靜悟空明覺慈悲喜捨輪迴因果業報善惡'.split(''),
    archColor: '#c0392b',
    accentColor: '#f39c12',
    title: { ru: 'Шёлковый путь — Китай', en: 'Silk Road — China' },
    subtitle: { ru: 'Храмы и дворцы Поднебесной', en: 'Temples and Palaces of the Celestial Empire' },
    desc: { ru: 'От Великой стены до пещер Дуньхуана — путь буддизма через Китай изменил мир навсегда.', en: 'From the Great Wall to the Dunhuang Caves — Buddhism\'s journey through China changed the world forever.' },
    link: '/teachings',
  },
  {
    id: 'japan',
    label: { ru: 'Япония', en: 'Japan' },
    chars: '禅和敬寂優雅花鳥風月武士道桜紅葉温泉水寺鳥居'.split(''),
    archColor: '#8e44ad',
    accentColor: '#e74c3c',
    title: { ru: 'Шёлковый путь — Япония', en: 'Silk Road — Japan' },
    subtitle: { ru: 'Дзен и боевые искусства', en: 'Zen and Martial Arts' },
    desc: { ru: 'Чань-буддизм из Китая стал дзеном в Японии — путь прямого постижения ума через медитацию и боевые искусства.', en: 'Chan Buddhism from China became Zen in Japan — the path of direct mind realization through meditation and martial arts.' },
    link: '/zen-martial',
  },
  {
    id: 'kazakhstan',
    label: { ru: 'Казахстан', en: 'Kazakhstan' },
    chars: 'жолыншахирайатұранұрпажерұлымекендістәрмәдениеттарих'.split(''),
    archColor: '#2980b9',
    accentColor: '#27ae60',
    title: { ru: 'Шёлковый путь — Казахстан', en: 'Silk Road — Kazakhstan' },
    subtitle: { ru: 'Степи и кочевники', en: 'Steppes and Nomads' },
    desc: { ru: 'Великий Шёлковый путь проходил через казахстанские степи — перекрёсток цивилизаций и культур.', en: 'The Great Silk Road passed through the Kazakh steppes — a crossroads of civilizations and cultures.' },
    link: '/episodes',
  },
]

const SPRING_STIFFNESS = 0.03
const SPRING_DAMPING = 0.85
const CURTAIN_COLS = 12
const CURTAIN_ROWS = 18

export default function SilkRoadHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { locale } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)
  const [activeScene, setActiveScene] = useState<Scene>('china')
  const [transitioning, setTransitioning] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const pointerRef = useRef<{ x: number; y: number; down: boolean }>({ x: 0, y: 0, down: false })
  const animFrameRef = useRef<number>(0)
  const pausedRef = useRef(false)

  const scene = scenes.find(s => s.id === activeScene) || scenes[0]

  const initParticles = useCallback((width: number, height: number) => {
    const chars = scene.chars
    const particles: Particle[] = []
    const colW = width / (CURTAIN_COLS + 1)
    const rowH = height / (CURTAIN_ROWS + 1)
    const baseFontSize = Math.min(colW * 0.6, 18)

    for (let r = 0; r < CURTAIN_ROWS; r++) {
      for (let c = 0; c < CURTAIN_COLS; c++) {
        const x = (c + 1) * colW + (Math.random() - 0.5) * 8
        const y = (r + 1) * rowH + (Math.random() - 0.5) * 8
        const char = chars[(r * CURTAIN_COLS + c) % chars.length]
        particles.push({
          x, y, prevX: x, prevY: y,
          restX: x, restY: y,
          char,
          fontSize: baseFontSize + (Math.random() - 0.5) * 4,
          opacity: 0.15 + Math.random() * 0.25,
        })
      }
    }
    particlesRef.current = particles
  }, [scene])

  useEffect(() => { setIsMounted(true) }, [])

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    const BASE_W = 1848
    const BASE_H = 1080

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles(width, height)
    }
    resize()
    window.addEventListener('resize', resize)

    const onPointerDown = (e: PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY, down: true }
    }
    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX
      pointerRef.current.y = e.clientY
    }
    const onPointerUp = () => { pointerRef.current.down = false }

    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointerleave', onPointerUp)

    const onVisibility = () => { pausedRef.current = document.hidden }
    document.addEventListener('visibilitychange', onVisibility)

    let lastTime = 0
    const TARGET_FPS = 30
    const FRAME_MS = 1000 / TARGET_FPS

    const draw = (ts: number) => {
      animFrameRef.current = requestAnimationFrame(draw)
      if (pausedRef.current) return
      if (ts - lastTime < FRAME_MS) return
      lastTime = ts

      const scale = Math.min(width / BASE_W, height / BASE_H)
      const particles = particlesRef.current
      const ptr = pointerRef.current

      // Paper background
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)

      // Paper texture gradient
      const paperGrad = ctx.createRadialGradient(width / 2, height * 0.35, 0, width / 2, height * 0.35, width * 0.7)
      paperGrad.addColorStop(0, 'rgba(180, 140, 80, 0.06)')
      paperGrad.addColorStop(0.5, 'rgba(140, 100, 50, 0.03)')
      paperGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = paperGrad
      ctx.fillRect(0, 0, width, height)

      // Architecture silhouette (top)
      drawArchitecture(ctx, activeScene, width, height, scale, scene.archColor, scene.accentColor)

      // Text curtain particles
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      for (const p of particles) {
        // Spring physics
        const dx = p.x - p.restX
        const dy = p.y - p.restY
        const ax = -SPRING_STIFFNESS * dx
        const ay = -SPRING_STIFFNESS * dy

        const vx = (p.x - p.prevX) * SPRING_DAMPING
        const vy = (p.y - p.prevY) * SPRING_DAMPING

        p.prevX = p.x
        p.prevY = p.y
        p.x += vx + ax
        p.y += vy + ay

        // Pointer interaction
        if (ptr.down) {
          const pdx = p.x - ptr.x
          const pdy = p.y - ptr.y
          const dist = Math.sqrt(pdx * pdx + pdy * pdy)
          if (dist < 120 * scale) {
            const force = (120 * scale - dist) / (120 * scale) * 8 * scale
            p.x += (pdx / dist) * force
            p.y += (pdy / dist) * force
          }
        }

        // Draw character
        const distFromCenter = Math.abs(p.x - width / 2) / (width / 2)
        const flicker = Math.sin(ts * 0.001 + p.restX * 0.01) * 0.05
        const alpha = p.opacity + flicker

        const hue = activeScene === 'china' ? 45 : activeScene === 'japan' ? 320 : 210
        const sat = 50 + 20 * Math.sin(ts * 0.0005 + p.restY * 0.005)
        const light = 35 + 15 * Math.max(0, 1 - distFromCenter)

        ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
        ctx.font = `${p.fontSize}px 'Noto Sans SC', 'Noto Sans JP', 'Inter', monospace`
        ctx.fillText(p.char, p.x, p.y)
      }

      // Center text overlay
      const fadeIn = Math.min(1, (ts % 8000) / 1000)
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Title
      ctx.fillStyle = `rgba(245, 215, 142, ${0.85 * fadeIn})`
      ctx.font = `bold ${Math.min(48 * scale, 56)}px 'Cormorant Garamond', serif`
      const titleText = (locale === 'ru' ? scene.title.ru : scene.title.en)
      ctx.fillText(titleText, width / 2, height * 0.28)

      // Subtitle
      ctx.fillStyle = `rgba(200, 170, 100, ${0.5 * fadeIn})`
      ctx.font = `${Math.min(20 * scale, 24)}px 'Cormorant Garamond', serif`
      const subText = (locale === 'ru' ? scene.subtitle.ru : scene.subtitle.en)
      ctx.fillText(subText, width / 2, height * 0.34)

      // Description
      ctx.fillStyle = `rgba(180, 150, 90, ${0.35 * fadeIn})`
      ctx.font = `${Math.min(14 * scale, 16)}px 'Inter', sans-serif`
      const descText = (locale === 'ru' ? scene.desc.ru : scene.desc.en)
      const words = descText.split(' ')
      let line = ''
      const maxW = width * 0.6
      const lines: string[] = []
      for (const w of words) {
        const test = line + (line ? ' ' : '') + w
        if (ctx.measureText(test).width > maxW && line) {
          lines.push(line)
          line = w
        } else {
          line = test
        }
      }
      lines.push(line)
      lines.forEach((l, i) => {
        ctx.fillText(l, width / 2, height * 0.40 + i * (20 * scale))
      })
    }

    animFrameRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointerleave', onPointerUp)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [isMounted, activeScene, locale, scene, initParticles])

  const switchScene = (id: Scene) => {
    if (id === activeScene || transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setActiveScene(id)
      setTimeout(() => setTransitioning(false), 600)
    }, 400)
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as Scene
    if (scenes.find(s => s.id === hash)) {
      setActiveScene(hash)
    }
  }, [])

  useEffect(() => {
    window.location.hash = activeScene
  }, [activeScene])

  if (!isMounted) return null

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Scene buttons */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {scenes.map(s => (
          <button
            key={s.id}
            onClick={() => switchScene(s.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeScene === s.id
                ? 'text-amber-950 scale-105'
                : 'text-amber-600/50 hover:text-amber-600/80'
            }`}
            style={activeScene === s.id ? {
              background: `linear-gradient(135deg, ${s.accentColor}, ${s.archColor})`,
              boxShadow: `0 4px 20px ${s.accentColor}44`,
              border: `1px solid ${s.accentColor}66`,
            } : {
              background: 'rgba(245, 158, 11, 0.05)',
              border: '1px solid rgba(245, 158, 11, 0.15)',
            }}
          >
            {locale === 'ru' ? s.label.ru : s.label.en}
          </button>
        ))}
      </div>

      {/* CTA button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <Link
          href={scene.link}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #b45309, #92400e)',
            color: '#fcd34d',
            boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          {locale === 'ru' ? 'Исследовать' : 'Explore'} →
        </Link>
      </div>

      {/* Fade overlay for transitions */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
        style={{ opacity: transitioning ? 1 : 0, background: 'rgba(255, 255, 255, 0.8)' }}
      />
    </section>
  )
}

function drawArchitecture(
  ctx: CanvasRenderingContext2D,
  scene: Scene,
  w: number,
  h: number,
  scale: number,
  archColor: string,
  accentColor: string,
) {
  const shadowOffset = 8 * scale

  ctx.save()
  ctx.shadowColor = 'rgba(0,0,0,0.3)'
  ctx.shadowBlur = 20 * scale
  ctx.shadowOffsetX = shadowOffset
  ctx.shadowOffsetY = shadowOffset

  if (scene === 'china') {
    // Chinese palace eaves
    ctx.fillStyle = archColor
    ctx.beginPath()
    // Main roof
    ctx.moveTo(w * 0.15, h * 0.18)
    ctx.quadraticCurveTo(w * 0.5, h * 0.02, w * 0.85, h * 0.18)
    ctx.lineTo(w * 0.82, h * 0.22)
    ctx.quadraticCurveTo(w * 0.5, h * 0.08, w * 0.18, h * 0.22)
    ctx.closePath()
    ctx.fill()

    // Eave curves
    ctx.strokeStyle = accentColor
    ctx.lineWidth = 3 * scale
    ctx.beginPath()
    ctx.moveTo(w * 0.12, h * 0.19)
    ctx.quadraticCurveTo(w * 0.08, h * 0.14, w * 0.05, h * 0.16)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(w * 0.88, h * 0.19)
    ctx.quadraticCurveTo(w * 0.92, h * 0.14, w * 0.95, h * 0.16)
    ctx.stroke()

    // Pillars
    ctx.fillStyle = archColor
    for (let i = 0; i < 5; i++) {
      const px = w * (0.25 + i * 0.125)
      ctx.fillRect(px - 4 * scale, h * 0.22, 8 * scale, h * 0.12)
    }
  } else if (scene === 'japan') {
    // Japanese shrine roof
    ctx.fillStyle = archColor
    ctx.beginPath()
    ctx.moveTo(w * 0.2, h * 0.2)
    ctx.lineTo(w * 0.5, h * 0.06)
    ctx.lineTo(w * 0.8, h * 0.2)
    ctx.lineTo(w * 0.75, h * 0.24)
    ctx.lineTo(w * 0.5, h * 0.12)
    ctx.lineTo(w * 0.25, h * 0.24)
    ctx.closePath()
    ctx.fill()

    // Torii gate
    ctx.strokeStyle = accentColor
    ctx.lineWidth = 4 * scale
    ctx.beginPath()
    ctx.moveTo(w * 0.42, h * 0.24)
    ctx.lineTo(w * 0.42, h * 0.35)
    ctx.moveTo(w * 0.58, h * 0.24)
    ctx.lineTo(w * 0.58, h * 0.35)
    ctx.moveTo(w * 0.38, h * 0.26)
    ctx.lineTo(w * 0.62, h * 0.26)
    ctx.stroke()
  } else {
    // Kazakh yurt
    ctx.fillStyle = archColor
    ctx.beginPath()
    ctx.ellipse(w * 0.5, h * 0.26, w * 0.2, h * 0.1, 0, Math.PI, 0)
    ctx.lineTo(w * 0.7, h * 0.26)
    ctx.lineTo(w * 0.3, h * 0.26)
    ctx.closePath()
    ctx.fill()

    // Yurt base
    ctx.fillStyle = accentColor
    ctx.fillRect(w * 0.32, h * 0.26, w * 0.36, h * 0.04)

    // Shanyrak (crown)
    ctx.strokeStyle = accentColor
    ctx.lineWidth = 3 * scale
    ctx.beginPath()
    ctx.arc(w * 0.5, h * 0.18, 15 * scale, 0, Math.PI * 2)
    ctx.stroke()

    // Ornamental pattern
    ctx.strokeStyle = `rgba(255,255,255,0.15)`
    ctx.lineWidth = 1.5 * scale
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI
      ctx.beginPath()
      ctx.moveTo(w * 0.5, h * 0.18)
      ctx.lineTo(w * 0.5 + Math.cos(angle) * 30 * scale, h * 0.18 + Math.sin(angle) * 15 * scale)
      ctx.stroke()
    }
  }

  ctx.restore()
}
