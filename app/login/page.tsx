import LoginRedirect from '@/components/login-redirect'
import FadeIn from '@/components/fade-in'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log in | Sprout & Vine',
}

function LogoMark() {
  return (
    <svg viewBox="0 0 62 86" width="32" height="44" fill="none">
      <path d="M 27 13 C 25 6 15 5 16 12 C 17 19 25 16 27 13 Z" fill="#AEC1B0" />
      <path d="M 28 14 C 40 8 56 20 51 34 C 46 48 24 46 20 56 C 14 66 20 78 34 76 C 48 74 56 62 47 56" stroke="#2F4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 8 55 L 52 32" stroke="#2F4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 44 27 C 38 22 36 15 40 14 C 42 13 44 17 44 17 C 44 17 46 13 48 14 C 52 15 50 22 44 27 Z" fill="#E2845F" />
    </svg>
  )
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-5">
      <FadeIn className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="font-display text-[26px] font-medium text-forest-green tracking-tight leading-none">sprout</span>
          <LogoMark />
          <span className="font-display text-[26px] font-medium text-forest-green tracking-tight leading-none">vine</span>
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
            href="https://app.sproutandvine.ca"
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

