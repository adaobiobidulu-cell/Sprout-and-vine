import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2F4A3A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Decorative corner circles */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'rgba(247,242,232,0.05)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(247,242,232,0.04)',
            display: 'flex',
          }}
        />

        {/* Top: wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontSize: 36,
              color: '#F7F2E8',
              fontWeight: 500,
              letterSpacing: '-0.02em',
            }}
          >
            sprout
          </span>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#E2845F',
              display: 'flex',
              marginTop: 2,
            }}
          />
          <span
            style={{
              fontSize: 36,
              color: '#F7F2E8',
              fontWeight: 500,
              letterSpacing: '-0.02em',
            }}
          >
            vine
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              color: '#F7F2E8',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: 800,
            }}
          >
            Childcare management built for Canada.
          </div>
          <div
            style={{
              fontSize: 24,
              color: 'rgba(247,242,232,0.6)',
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 660,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Attendance, billing, CWELCC tracking, and Smart Pickup Authorization. All in one calm platform.
          </div>
        </div>

        {/* Bottom: URL + accent pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontSize: 20,
              color: 'rgba(247,242,232,0.45)',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            sproutandvine.ca
          </span>
          <div
            style={{
              background: '#E2845F',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              padding: '10px 24px',
              borderRadius: 100,
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Book a Demo
          </div>
        </div>
      </div>
    ),
    size,
  )
}
