import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Buddha-Chakravartin Chat'
  const subtitle = searchParams.get('subtitle') || 'Three Times of Dharma'

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
          background: 'linear-gradient(135deg, #451a03 0%, #d97706 50%, #f97316 100%)',
          color: 'white',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>ॐ</div>
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
