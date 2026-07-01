import FadeIn from '@/components/fade-in'
import BrandLogo from '@/components/brand-logo'
import Link from 'next/link'
import type { Metadata } from 'next'
import { canonicalOnly } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Log in | Sprout & Vine Care',
  alternates: canonicalOnly('/login'),
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-5">
      <FadeIn className="text-center max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <BrandLogo height={64} />
        </div>

        <h1 className="font-display text-[34px] font-medium text-forest-green mb-2">
          Centre dashboard: coming soon.
        </h1>
        <p className="text-[14px] text-dark-text/50 mb-8 leading-relaxed">
          We&rsquo;re building the dashboard together with our founding operators.
          Log in will open once the platform launches.
        </p>

        <Link
          href="/founding"
          className="inline-flex bg-forest-green text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
        >
          Join the Founding Program
        </Link>

        <div className="mt-10 pt-8 border-t border-[rgba(47,74,58,0.1)]">
          <p className="text-[13px] text-dark-text/40">
            Have questions?{' '}
            <Link href="/contact" className="text-forest-green font-medium hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </FadeIn>
    </main>
  )
}

