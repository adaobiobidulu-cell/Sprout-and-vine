import type { CSSProperties } from 'react'

type Tone = 'forest' | 'cream'

/*
 * BrandLogo — the exact "Sprout & Vine Care" lockup.
 *
 * This is a faithful, 1:1 reproduction of the approved logo artwork:
 *  - the vine-shaped "S" is the original raster mark (public/logo-s.png),
 *  - "prout", "& Vine" and "CARE" are live text laid out at the exact
 *    coordinates, font sizes and letter-spacing of the source SVG, so the
 *    spacing matches the original pixel-for-pixel.
 *
 * Rendering the wordmark as inline <text> (rather than a flat <img>) keeps it
 * crisp at any size and lets it pick up the real Cormorant Garamond / DM Sans
 * web fonts loaded by the app.
 *
 * Source viewBox is cropped to the artwork bounds: "20 17 527 449"
 * (aspect ratio ≈ 1.174). Never distorted — width is derived from height.
 */

const VIEW = { x: 20, y: 17, w: 527, h: 449 }
const ASPECT = VIEW.w / VIEW.h // ≈ 1.174

const PALETTE: Record<Tone, { word: string; care: string; img: string }> = {
  forest: { word: '#244C31', care: '#6F7D72', img: '/logo-s.png' },
  cream: { word: '#F7F2E8', care: 'rgba(247,242,232,0.72)', img: '/logo-s-cream.png' },
}

const serif = 'var(--font-display), Georgia, "Times New Roman", serif'
const sans = 'var(--font-sans), Inter, Arial, sans-serif'

export default function BrandLogo({
  height = 58,
  tone = 'forest',
  withTagline = true,
  className,
  title = 'Sprout & Vine Care',
}: {
  height?: number
  tone?: Tone
  withTagline?: boolean
  className?: string
  title?: string
}) {
  const c = PALETTE[tone]
  const width = Math.round(height * ASPECT)

  const wordStyle: CSSProperties = {
    fill: c.word,
    fontFamily: serif,
    fontWeight: 700,
    letterSpacing: '0.005em',
  }

  return (
    <svg
      role="img"
      aria-label={title}
      width={width}
      height={height}
      viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
      className={className}
    >
      {/* No <title>: it would duplicate the aria-label as literal text content
          alongside the "prout"/"& Vine"/"CARE" text nodes below. */}
      {/* vine-shaped S — original raster mark, aspect preserved */}
      <image
        href={c.img}
        x={30}
        y={27}
        width={233}
        height={430}
        preserveAspectRatio="xMidYMid meet"
      />
      {/* wordmark */}
      {/* The leading "S" is drawn as part of the vine-shaped image above for
          visual polish, but that leaves it invisible to plain-text extraction
          (copy/paste, SEO crawlers) — this transparent glyph fills that gap
          without changing what's visually rendered. */}
      <text x={100} y={217} style={{ ...wordStyle, fontSize: 154, fill: 'transparent' }} aria-hidden="true">
        S
      </text>
      <text x={195} y={217} style={{ ...wordStyle, fontSize: 154 }}>
        prout
      </text>
      <text x={265} y={315} style={{ ...wordStyle, fontSize: 96 }}>
        &amp; Vine
      </text>
      {withTagline && (
        <text
          x={271}
          y={380}
          style={{
            fill: c.care,
            fontFamily: sans,
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: '0.24em',
          }}
        >
          CARE
        </text>
      )}
    </svg>
  )
}
