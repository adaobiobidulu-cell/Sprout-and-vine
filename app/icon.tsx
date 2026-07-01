import { ImageResponse } from 'next/og'
import { vineSCreamDataUri, vineSAspect } from '@/lib/logo-mark-data'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const h = 23
  const w = Math.round(h * vineSAspect)
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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={vineSCreamDataUri} alt="" width={w} height={h} style={{ width: w, height: h }} />
      </div>
    ),
    size,
  )
}
