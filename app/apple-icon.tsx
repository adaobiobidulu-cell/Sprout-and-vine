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
        <svg
          viewBox="0 0 58 84"
          width="110"
          height="160"
          style={{ display: 'flex' }}
        >
          <path d="M 22 14 C 18 8 10 8 12 14 C 14 18 19 16 22 14 Z" fill="rgba(247,242,232,0.8)" />
          <path d="M 22 14 C 32 8 46 12 50 24 C 54 36 46 46 34 46 C 22 46 14 38 16 28 C 18 20 26 16 34 18 C 42 20 46 30 42 38" stroke="#F7F2E8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 18 32 C 14 42 12 58 18 66 C 24 74 38 76 48 70 C 56 65 56 55 50 52 C 44 49 34 52 30 56" stroke="#F7F2E8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 44 22 C 44 20 42 18 40 20 C 38 18 36 20 36 22 C 36 25 40 29 40 29 C 40 29 44 25 44 22 Z" fill="#E2845F" />
          <path d="M 18 64 C 10 62 8 68 14 69 C 16 69 18 67 18 64 Z" fill="rgba(247,242,232,0.5)" />
          <path d="M 50 68 C 58 66 60 72 54 73 C 52 73 50 71 50 68 Z" fill="rgba(247,242,232,0.5)" />
        </svg>
      </div>
    ),
    size,
  )
}
