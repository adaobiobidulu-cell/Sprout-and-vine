import LoginRedirect from '@/components/login-redirect'
import FadeIn from '@/components/fade-in'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log in | Sprout & Vine',
}

function LogoMark() {
  return (
    <svg viewBox="0 0 58 84" width="32" height="44" fill="none">
      <path d="M 22 14 C 18 8 10 8 12 14 C 14 18 19 16 22 14 Z" fill="#2F4A3A" />
      <path d="M 22 14 C 32 8 46 12 50 24 C 54 36 46 46 34 46 C 22 46 14 38 16 28 C 18 20 26 16 34 18 C 42 20 46 30 42 38" stroke="#2F4A3A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 18 32 C 14 42 12 58 18 66 C 24 74 38 76 48 70 C 56 65 56 55 50 52 C 44 49 34 52 30 56" stroke="#2F4A3A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 44 22 C 44 20 42 18 40 20 C 38 18 36 20 36 22 C 36 25 40 29 40 29 C 40 29 44 25 44 22 Z" fill="#E2845F" />
      <path d="M 18 64 C 10 62 8 68 14 69 C 16 69 18 67 18 64 Z" fill="#AEC1B0" />
      <path d="M 50 68 C 58 66 60 72 54 73 C 52 73 50 71 50 68 Z" fill="#AEC1B0" />
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

