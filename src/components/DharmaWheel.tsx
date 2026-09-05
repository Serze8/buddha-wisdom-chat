import './DharmaWheel.css'

interface DharmaWheelProps {
  className?: string
  size?: number
  petals?: boolean
}

export default function DharmaWheel({ className = '', size = 320, petals = true }: DharmaWheelProps) {
  const petalsCount = 8
  const spokes = 8

  return (
    <div
      className={`relative mx-auto select-none ${className}`}
      style={{ width: size, aspectRatio: '1 / 1' }}
      aria-hidden="true"
    >
      {/* Soft glow halo */}
      <div
        className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
        style={{ transform: 'scale(1.15)' }}
      />

      {/* Unified lotus petals — radial orientation (pointing outward from center) */}
      {petals && (
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full petal-breathe opacity-80"
          fill="none"
        >
          {Array.from({ length: petalsCount }).map((_, i) => {
            // 0° = top, clockwise; rotate(angle) aligns the long axis outward
            const angle = (i * 360) / petalsCount
            const rad = (angle * Math.PI) / 180
            const cx = 100 + Math.sin(rad) * 42
            const cy = 100 - Math.cos(rad) * 42
            return (
              <ellipse
                key={`petal-${i}`}
                cx={cx}
                cy={cy}
                rx={12}
                ry={20}
                transform={`rotate(${angle} ${cx} ${cy})`}
                className="fill-primary/15 stroke-primary/30"
                strokeWidth="0.5"
              />
            )
          })}
        </svg>
      )}

      {/* Spinning dharma wheel */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full dharma-spin-slow"
        fill="none"
      >
        {/* Outer rim */}
        <circle
          cx="100"
          cy="100"
          r="38"
          className="stroke-primary/70 fill-card/80"
          strokeWidth="3"
        />
        <circle
          cx="100"
          cy="100"
          r="32"
          className="stroke-primary/40"
          strokeWidth="1.2"
        />

        {/* Spokes */}
        {Array.from({ length: spokes }).map((_, i) => {
          const angle = (i * 360) / spokes
          const rad = (angle * Math.PI) / 180
          const x2 = 100 + Math.cos(rad) * 32
          const y2 = 100 + Math.sin(rad) * 32
          return (
            <line
              key={`spoke-${i}`}
              x1="100"
              y1="100"
              x2={x2}
              y2={y2}
              className="stroke-primary/55"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )
        })}

        {/* Hub */}
        <circle cx="100" cy="100" r="8" className="fill-primary/80 stroke-primary" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="3.5" className="fill-primary-foreground" />

        {/* Rim beads */}
        {Array.from({ length: spokes }).map((_, i) => {
          const angle = (i * 360) / spokes
          const rad = (angle * Math.PI) / 180
          const x = 100 + Math.cos(rad) * 38
          const y = 100 + Math.sin(rad) * 38
          return (
            <circle
              key={`bead-${i}`}
              cx={x}
              cy={y}
              r="3.2"
              className="fill-primary/70 stroke-primary"
              strokeWidth="0.8"
            />
          )
        })}
      </svg>

      {/* Center sacred symbol */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="text-primary/90 font-semibold leading-none"
          style={{ fontSize: size * 0.07 }}
          aria-hidden="true"
        >
          ?
        </span>
      </div>
    </div>
  )
}