'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { l } from '@/lib/lang'

type Color = [number, number, number]

interface Gate {
  id: string
  dir: { ru: string; en: string }
  sub: { ru: string; en: string }
  href: string
  color: Color
  path: string
  textX: number
  textY: number
  subY: number
}

const GATES: Gate[] = [
  {
    id: 'east',
    dir: { ru: 'Восток', en: 'East' },
    sub: { ru: 'Учение', en: 'Teaching' },
    href: '/teachings',
    color: [245, 158, 11],
    path: 'M 325 220 L 420 175 L 420 265 Z',
    textX: 388,
    textY: 215,
    subY: 232,
  },
  {
    id: 'south',
    dir: { ru: 'Юг', en: 'South' },
    sub: { ru: 'Практика', en: 'Practice' },
    href: '/teachings/practice',
    color: [20, 184, 166],
    path: 'M 220 325 L 175 420 L 265 420 Z',
    textX: 220,
    textY: 383,
    subY: 400,
  },
  {
    id: 'west',
    dir: { ru: 'Запад', en: 'West' },
    sub: { ru: 'История', en: 'History' },
    href: '/buddha',
    color: [225, 29, 72],
    path: 'M 115 220 L 20 175 L 20 265 Z',
    textX: 52,
    textY: 215,
    subY: 232,
  },
  {
    id: 'north',
    dir: { ru: 'Север', en: 'North' },
    sub: { ru: 'Сангха', en: 'Sangha' },
    href: '/dharma-chats/sangha',
    color: [139, 92, 246],
    path: 'M 220 115 L 175 20 L 265 20 Z',
    textX: 220,
    textY: 48,
    subY: 66,
  },
]

const TIERS = [
  { r: 205, label: { ru: 'Будущее', en: 'Future' }, x: 75, y: 75 },
  { r: 155, label: { ru: 'Настоящее', en: 'Present' }, x: 110, y: 110 },
  { r: 105, label: { ru: 'Прошлое', en: 'Past' }, x: 146, y: 146 },
]

const rgba = (c: Color, a: number) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`

export function StupaWheel() {
  const router = useRouter()
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center py-8">
      <svg
        viewBox="0 0 440 440"
        className="w-full max-w-lg"
        style={{ display: 'block' }}
        role="group"
        aria-label={ru ? 'Ступа времени: четыре входа, три яруса, колесо Дхармы' : 'Stupa of time: four gates, three tiers, wheel of Dharma'}
      >
        {/* Ярусы времени */}
        {TIERS.map((tier) => (
          <circle
            key={`ring-${tier.r}`}
            cx="220"
            cy="220"
            r={tier.r}
            fill="none"
            stroke="rgba(245, 158, 11, 0.18)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        ))}

        {/* Входы — стороны света */}
        {GATES.map((gate) => {
          const isHovered = hovered === gate.id
          return (
            <g
              key={gate.id}
              onMouseEnter={() => setHovered(gate.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => router.push(gate.href)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  router.push(gate.href)
                }
              }}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label={`${l(gate.dir, lang)} — ${l(gate.sub, lang)}`}
            >
              <path
                d={gate.path}
                className="transition-all duration-200"
                style={{
                  fill: rgba(gate.color, isHovered ? 0.22 : 0.1),
                  stroke: rgba(gate.color, isHovered ? 0.9 : 0.45),
                  strokeWidth: isHovered ? 2 : 1.5,
                  filter: isHovered ? `drop-shadow(0 0 8px ${rgba(gate.color, 0.6)})` : 'none',
                }}
              />
              <text
                x={gate.textX}
                y={gate.textY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none text-[13px] font-medium transition-colors duration-200"
                style={{ fill: isHovered ? rgba(gate.color, 1) : rgba(gate.color, 0.8) }}
              >
                {l(gate.dir, lang)}
              </text>
              <text
                x={gate.textX}
                y={gate.subY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none text-[11px] transition-colors duration-200"
                style={{ fill: isHovered ? 'rgba(69, 26, 3, 0.75)' : 'rgba(69, 26, 3, 0.45)' }}
              >
                {l(gate.sub, lang)}
              </text>
            </g>
          )
        })}

        {/* Центральный купол */}
        <circle
          cx="220"
          cy="220"
          r="80"
          className="transition-all duration-200 cursor-pointer"
          style={{
            fill: hovered === 'center' ? 'rgba(245, 158, 11, 0.09)' : 'rgba(245, 158, 11, 0.05)',
            stroke: hovered === 'center' ? 'rgba(245, 158, 11, 0.55)' : 'rgba(245, 158, 11, 0.35)',
            strokeWidth: 2,
          }}
          onMouseEnter={() => setHovered('center')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => router.push('/teachings')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              router.push('/teachings')
            }
          }}
          aria-label={ru ? 'Дхарма — учения' : 'Dharma — teachings'}
        />

        {/* Колесо Дхармы */}
        <g transform="translate(220, 220)" className="pointer-events-none">
          <circle r="42" fill="none" stroke="rgba(245, 158, 11, 0.55)" strokeWidth="2" />
          <circle r="42" fill="none" stroke="rgba(245, 158, 11, 0.55)" strokeWidth="3" strokeDasharray="2 5" opacity="0.5" />
          <g stroke="rgba(245, 158, 11, 0.5)" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
            <line x1="0" y1="-42" x2="0" y2="42" />
            <line x1="-42" y1="0" x2="42" y2="0" />
            <line x1="-29.7" y1="-29.7" x2="29.7" y2="29.7" />
            <line x1="-29.7" y1="29.7" x2="29.7" y2="-29.7" />
          </g>
          <circle r="10" fill="rgba(245, 158, 11, 0.85)" />
          <circle r="4" fill="rgba(245, 158, 11, 0.9)" />
        </g>

        {/* Подпись центра */}
        <text
          x="220"
          y="288"
          textAnchor="middle"
          dominantBaseline="middle"
          className="pointer-events-none text-[11px] font-medium uppercase tracking-widest"
          style={{ fill: 'rgba(245, 158, 11, 0.75)' }}
        >
          {ru ? 'Дхарма' : 'Dharma'}
        </text>

        {/* Подписи ярусов */}
        {TIERS.map((tier) => (
          <text
            key={`label-${tier.r}`}
            x={tier.x}
            y={tier.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="pointer-events-none text-[10px] uppercase tracking-widest"
            style={{ fill: 'rgba(245, 158, 11, 0.55)' }}
          >
            {l(tier.label, lang)}
          </text>
        ))}
      </svg>

      <p className="mt-4 text-xs text-amber-600/50 tracking-wide">
        {ru ? 'Наведите на вход — кликните, чтобы исследовать' : 'Hover a gate — click to explore'}
      </p>
    </div>
  )
}
