type Tone = 'forest' | 'cream'

export default function LogoMark({
  height = 40,
  tone = 'forest',
  stroke = 32,
  className,
}: {
  height?: number
  tone?: Tone
  stroke?: number
  className?: string
}) {
  const vine  = tone === 'cream' ? '#F7F2E8' : '#2F4A3A'
  const leaf  = tone === 'cream' ? 'rgba(247,242,232,0.78)' : '#AEC1B0'
  const vein  = tone === 'cream' ? 'rgba(47,74,58,0.18)'   : 'rgba(255,255,255,0.42)'
  const heart = '#E2845F'
  const width = (height * 2) / 3

  return (
    <svg
      viewBox="0 0 800 1200"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Vine S-curve */}
      <g fill="none" stroke={vine} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        <path d="M405 150 C330 235,315 355,395 455 C465 540,555 615,555 790 C555 975,445 1080,310 1080 C180 1080,115 970,115 845 C115 700,205 610,330 575" />
        <path d="M405 150 C455 105,555 100,630 150 C705 200,710 315,615 340" />
        <path d="M615 340 C585 340,580 305,612 300" />
      </g>

      {/* Top leaf */}
      <path d="M420 92 C470 28,565 22,615 82 C600 165,500 205,420 92Z" fill={leaf} />
      <path d="M500 185 C510 120,515 65,520 35" stroke={vein} strokeWidth="10" strokeLinecap="round" fill="none" />

      {/* Lower leaves */}
      <path d="M585 720 C640 680,720 695,740 760 C705 820,635 825,585 720Z" fill={leaf} />
      <path d="M595 722 C650 702,708 714,728 732" stroke={vein} strokeWidth="10" strokeLinecap="round" fill="none" />

      <path d="M600 800 C650 770,710 785,720 840 C675 885,620 875,600 800Z" fill={leaf} />
      <path d="M608 802 C652 786,700 796,712 828" stroke={vein} strokeWidth="10" strokeLinecap="round" fill="none" />

      {/* Heart */}
      <path d="M455 500 C425 445,350 445,350 515 C350 585,420 625,455 690 C490 625,560 585,560 515 C560 445,485 445,455 500Z" fill={heart} />
    </svg>
  )
}
