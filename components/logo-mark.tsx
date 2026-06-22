/**
 * Sprout & Vine logo mark — single source of truth.
 * Vector reconstructed from the approved brand artwork (public/logo-mark.svg).
 * viewBox is 800×1200 (a true 2:3 portrait ratio), so the mark never squishes.
 *
 * `stroke` is the vine width in viewBox units. The master art uses ~18, which
 * disappears at small sizes — so callers pass a heavier value the smaller the
 * render, keeping the vine crisp in the nav, footer, and favicons.
 */
type Tone = 'forest' | 'cream'

export default function LogoMark({
  height = 40,
  tone = 'forest',
  stroke = 30,
  className,
}: {
  height?: number
  tone?: Tone
  stroke?: number
  className?: string
}) {
  const vine = tone === 'cream' ? '#F7F2E8' : '#1F4F34'
  const leaf = tone === 'cream' ? 'rgba(247,242,232,0.78)' : '#AEC1B0'
  const heart = '#E2845F'
  // 800:1200 = 2:3. Setting both keeps layout stable; preserveAspectRatio
  // (default meet) prevents distortion even if a caller's numbers drift.
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
      <g fill="none" stroke={vine} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        <path d="M405 150 C330 235,315 355,395 455 C465 540,555 615,555 790 C555 975,445 1080,310 1080 C180 1080,115 970,115 845 C115 700,205 610,330 575" />
        <path d="M405 150 C455 105,555 100,630 150 C705 200,710 315,615 340" />
        <path d="M615 340 C585 340,580 305,612 300" />
      </g>
      {/* Top leaf */}
      <path d="M420 92 C470 28,565 22,615 82 C600 165,500 205,420 92Z" fill={leaf} />
      {/* Lower leaves */}
      <path d="M585 720 C640 680,720 695,740 760 C705 820,635 825,585 720Z" fill={leaf} />
      <path d="M600 800 C650 770,710 785,720 840 C675 885,620 875,600 800Z" fill={leaf} />
      {/* Heart */}
      <path d="M455 500 C425 445,350 445,350 515 C350 585,420 625,455 690 C490 625,560 585,560 515 C560 445,485 445,455 500Z" fill={heart} />
    </svg>
  )
}
