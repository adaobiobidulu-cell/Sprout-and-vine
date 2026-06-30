import LoginRedirect from '@/components/login-redirect'
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
      <FadeIn className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <BrandLogo height={64} />
        </div>

        <h1 className="font-display text-[34px] font-medium text-forest-green mb-2">
          Welcome back.
        </h1>
        <p className="text-[14px] text-dark-text/45 mb-6">
          Signing you in to your centre dashboard.
        </p>

        <LoginRedirect />

        <p className="text-[13px] text-dark-text/40 mt-6">
          Not redirecting?{' '}
          <a
            href="https://app.sproutandvinecare.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-green underline underline-offset-2 hover:text-dark-text transition-colors"
          >
            Click here to continue
          </a>
        </p>

        <div className="mt-10 pt-8 border-t border-[rgba(47,74,58,0.1)]">
          <p className="text-[13px] text-dark-text/40">
            Don't have an account?{' '}
            <Link href="/contact" className="text-forest-green font-medium hover:underline">
              Start a free trial
            </Link>
          </p>
        </div>
      </FadeIn>
    </main>
  )
}

