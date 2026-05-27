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
        }}
      >
        <svg viewBox="0 0 90 126" width="108" height="151" style={{ display: 'flex' }}>
          <path d="M 26 32 C 20 22 14 12 10 8" stroke="#F7F2E8" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 10 8 C 2 2 0 10 4 16 C 8 22 20 22 26 16 C 22 10 14 6 10 8 Z" fill="rgba(247,242,232,0.7)" />
          <path d="M 40 64 C 32 56 22 46 20 36 C 18 24 26 14 38 14 C 50 14 64 18 70 30 C 76 40 70 50 62 48 C 56 48 54 42 58 38 C 62 34 66 40 62 44" stroke="#F7F2E8" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 40 64 C 48 70 58 74 64 84 C 70 96 68 112 56 118 C 44 124 26 120 16 110 C 6 98 8 82 18 74 C 24 70 32 66 38 68" stroke="#F7F2E8" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 52 58 C 52 54 50 50 46 52 C 42 50 40 54 40 58 C 40 64 46 70 46 70 C 46 70 52 64 52 58 Z" fill="#E2845F" />
          <path d="M 64 84 C 76 72 88 76 84 88 C 80 96 70 94 64 84 Z" fill="rgba(247,242,232,0.6)" />
          <path d="M 62 94 C 74 86 86 92 82 104 C 78 112 66 108 62 94 Z" fill="rgba(247,242,232,0.6)" />
        </svg>
      </div>
    ),
    size,
  )
}
