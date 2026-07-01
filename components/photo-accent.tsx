import Image from 'next/image'
import type { CSSProperties } from 'react'

/*
 * A small framed "warmth note" photo — never a full-width hero image.
 * Rounded corners, a cream card mat, and a slight warm filter so real
 * photography sits comfortably next to the illustrated brand system
 * without competing with the product/dashboard visuals.
 *
 * Renders smaller on phones by default (mobileWidth/mobileHeight, ~62% of
 * the desktop size unless overridden) so the photo fits the single-column
 * mobile layout instead of being hidden there entirely. The two sizes are
 * set as CSS custom properties and swapped by a matching media query in
 * globals.css (`.photo-accent-frame`) — plain Tailwind responsive classes
 * can't do this because width/height are runtime numbers, not literal
 * class names Tailwind can see at build time.
 */
export default function PhotoAccent({
  src,
  alt,
  width = 280,
  height = 360,
  mobileWidth,
  mobileHeight,
  rotate = 0,
  tone = 'cream',
  className = '',
}: {
  src: string
  alt: string
  width?: number
  height?: number
  mobileWidth?: number
  mobileHeight?: number
  rotate?: number
  tone?: 'cream' | 'sage'
  className?: string
}) {
  const mw = mobileWidth ?? Math.round(width * 0.62)
  const mh = mobileHeight ?? Math.round(height * 0.62)

  return (
    <div
      className={`w-fit rounded-[28px] p-2.5 ${tone === 'sage' ? 'bg-light-sage/25' : 'bg-cream'} ${className}`}
      style={{ boxShadow: '0 16px 40px rgba(47,74,58,0.14)', transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <div
        className="photo-accent-frame overflow-hidden rounded-[20px]"
        style={{ '--photo-w-mobile': `${mw}px`, '--photo-h-mobile': `${mh}px`, '--photo-w': `${width}px`, '--photo-h': `${height}px` } as CSSProperties}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          style={{ filter: 'sepia(8%) saturate(1.08) brightness(1.03)' }}
        />
      </div>
    </div>
  )
}
