import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2F4A3A',
          width: '100%',
          height: '100%',
          borderRadius: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Top arc of S */}
        <div
          style={{
            position: 'absolute',
            top: '32px',
            left: '54px',
            width: '68px',
            height: '48px',
            borderRadius: '34px 34px 0 0',
            border: '8px solid rgba(247,242,232,0.92)',
            borderBottom: 'none',
            display: 'flex',
          }}
        />
        {/* Bottom arc of S */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '54px',
            width: '68px',
            height: '48px',
            borderRadius: '0 0 34px 34px',
            border: '8px solid rgba(247,242,232,0.92)',
            borderTop: 'none',
            display: 'flex',
          }}
        />
        {/* Center vertical connector */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '8px',
            height: '52px',
            background: 'rgba(247,242,232,0.92)',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
          }}
        />
        {/* Terracotta heart */}
        <div
          style={{
            position: 'absolute',
            top: '26px',
            right: '38px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#E2845F',
            display: 'flex',
          }}
        />
      </div>
    ),
    size,
  )
}
