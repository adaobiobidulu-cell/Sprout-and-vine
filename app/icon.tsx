import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2F4A3A',
          width: '100%',
          height: '100%',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Vine S-curve — top arc */}
        <div
          style={{
            position: 'absolute',
            top: '5px',
            left: '10px',
            width: '12px',
            height: '9px',
            borderRadius: '6px 6px 0 0',
            border: '2px solid rgba(247,242,232,0.9)',
            borderBottom: 'none',
            display: 'flex',
          }}
        />
        {/* Vine S-curve — bottom arc */}
        <div
          style={{
            position: 'absolute',
            bottom: '5px',
            right: '10px',
            width: '12px',
            height: '9px',
            borderRadius: '0 0 6px 6px',
            border: '2px solid rgba(247,242,232,0.9)',
            borderTop: 'none',
            display: 'flex',
          }}
        />
        {/* Center connector */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '2px',
            height: '10px',
            background: 'rgba(247,242,232,0.9)',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
          }}
        />
        {/* Terracotta heart dot */}
        <div
          style={{
            position: 'absolute',
            top: '4px',
            right: '7px',
            width: '5px',
            height: '5px',
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
