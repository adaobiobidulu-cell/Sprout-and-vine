import LoginRedirect from '@/components/login-redirect'
import FadeIn from '@/components/fade-in'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log in | Sprout & Vine Care',
}

function LogoMark() {
  return (
    <svg viewBox="0 0 90 126" width="32" height="44" fill="none">
      <path d="M 26 32 C 20 22 14 12 10 8" stroke="#2F4A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 10 8 C 2 2 0 10 4 16 C 8 22 20 22 26 16 C 22 10 14 6 10 8 Z" fill="#AEC1B0" />
      <path d="M 40 64 C 32 56 22 46 20 36 C 18 24 26 14 38 14 C 50 14 64 18 70 30 C 76 40 70 50 62 48 C 56 48 54 42 58 38 C 62 34 66 40 62 44" stroke="#2F4A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 40 64 C 48 70 58 74 64 84 C 70 96 68 112 56 118 C 44 124 26 120 16 110 C 6 98 8 82 18 74 C 24 70 32 66 38 68" stroke="#2F4A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 52 58 C 52 54 50 50 46 52 C 42 50 40 54 40 58 C 40 64 46 70 46 70 C 46 70 52 64 52 58 Z" fill="#E2845F" />
      <path d="M 64 84 C 76 72 88 76 84 88 C 80 96 70 94 64 84 Z" fill="#AEC1B0" />
      <path d="M 62 94 C 74 86 86 92 82 104 C 78 112 66 108 62 94 Z" fill="#AEC1B0" />
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

