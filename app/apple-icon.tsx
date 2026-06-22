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
        <svg viewBox="0 0 800 1200" width="100" height="150" style={{ display: 'flex' }}>
          <path d="M405 150 C330 235,315 355,395 455 C465 540,555 615,555 790 C555 975,445 1080,310 1080 C180 1080,115 970,115 845 C115 700,205 610,330 575" stroke="#F7F2E8" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M405 150 C455 105,555 100,630 150 C705 200,710 315,615 340" stroke="#F7F2E8" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M615 340 C585 340,580 305,612 300" stroke="#F7F2E8" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M420 92 C470 28,565 22,615 82 C600 165,500 205,420 92Z" fill="rgba(247,242,232,0.85)" />
          <path d="M585 720 C640 680,720 695,740 760 C705 820,635 825,585 720Z" fill="rgba(247,242,232,0.85)" />
          <path d="M600 800 C650 770,710 785,720 840 C675 885,620 875,600 800Z" fill="rgba(247,242,232,0.85)" />
          <path d="M455 500 C425 445,350 445,350 515 C350 585,420 625,455 690 C490 625,560 585,560 515 C560 445,485 445,455 500Z" fill="#E2845F" />
        </svg>
      </div>
    ),
    size,
  )
}
