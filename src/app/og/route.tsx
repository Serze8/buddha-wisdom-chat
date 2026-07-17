import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || "Buddha's Wisdom Chat"
  const subtitle = searchParams.get('subtitle') || 'Explore the teachings of the Buddha'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #451a03 100%)',
          color: 'white',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>🪷</div>
        <div style={{ fontSize: 48, fontWeight: 'bold', textAlign: 'center', maxWidth: 800 }}>
          {title}
        </div>
        <div style={{ fontSize: 24, opacity: 0.8, marginTop: 16, textAlign: 'center', maxWidth: 700 }}>
          {subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
