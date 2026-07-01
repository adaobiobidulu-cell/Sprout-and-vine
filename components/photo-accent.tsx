import Image from 'next/image'

/*
 * A small framed "warmth note" photo — never a full-width hero image.
 * Rounded corners, a cream card mat, and a slight warm filter so real
 * photography sits comfortably next to the illustrated brand system
 * without competing with the product/dashboard visuals.
 */
export default function PhotoAccent({
  src,
  alt,
  width = 280,
  height = 360,
  rotate = 0,
  tone = 'cream',
  className = '',
}: {
  src: string
  alt: string
  width?: number
  height?: number
  rotate?: number
  tone?: 'cream' | 'sage'
  className?: string
}) {
  return (
    <div
      className={`w-fit rounded-[28px] p-2.5 ${tone === 'sage' ? 'bg-light-sage/25' : 'bg-cream'} ${className}`}
      style={{ boxShadow: '0 16px 40px rgba(47,74,58,0.14)', transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <div className="overflow-hidden rounded-[20px]" style={{ width, height }}>
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
