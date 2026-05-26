import Link from 'next/link'
import FadeIn from '@/components/fade-in'

interface Props {
  title: string
  description: string
  backLabel?: string
  backHref?: string
}

export default function ComingSoon({
  title,
  description,
  backLabel = 'Back to home',
  backHref = '/',
}: Props) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <FadeIn className="text-center max-w-md">
        <div className="inline-flex items-center gap-2 bg-sage/20 text-forest-green text-[12px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8">
          Coming Soon
        </div>
        <h1
          className="font-display font-medium text-forest-green mb-4 leading-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
        >
          {title}
        </h1>
        <p className="text-[16px] text-dark-text/60 leading-relaxed mb-10">
          {description}
        </p>
        <Link
          href={backHref}
          className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
        >
          {backLabel}
        </Link>
      </FadeIn>
    </div>
  )
}
