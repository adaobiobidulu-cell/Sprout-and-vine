'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function LogoMark() {
  return (
    <svg viewBox="0 0 62 86" width="20" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 27 13 C 25 6 15 5 16 12 C 17 19 25 16 27 13 Z" fill="#AEC1B0" />
      <path
        d="M 28 14 C 40 8 56 20 51 34 C 46 48 24 46 20 56 C 14 66 20 78 34 76 C 48 74 56 62 47 56"
        stroke="#2F4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M 8 55 L 52 32" stroke="#2F4A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 44 27 C 38 22 36 15 40 14 C 42 13 44 17 44 17 C 44 17 46 13 48 14 C 52 15 50 22 44 27 Z" fill="#E2845F" />
      <path d="M 24 78 C 18 71 10 72 12 78 C 14 84 22 81 24 78 Z" fill="#AEC1B0" />
      <path d="M 36 77 C 42 70 50 71 48 77 C 46 83 38 80 36 77 Z" fill="#AEC1B0" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Pages that have a /fr equivalent */
const frenchPages: Record<string, string> = {
  '/': '/fr',
  '/pricing': '/fr/pricing',
}

function LangToggle() {
  const pathname = usePathname()
  const isFr = pathname.startsWith('/fr')

  const frHref = frenchPages[pathname] ?? '/fr'
  const enHref = isFr ? (pathname.replace(/^\/fr/, '') || '/') : pathname

  return (
    <div className="flex items-center gap-1.5 text-[13px] font-medium border border-[rgba(47,74,58,0.18)] rounded-full px-3 py-1">
      <Link
        href={enHref}
        className={`transition-colors ${!isFr ? 'text-forest-green font-semibold' : 'text-dark-text/40 hover:text-forest-green'}`}
      >
        EN
      </Link>
      <span className="text-dark-text/20 select-none text-[11px]">|</span>
      <Link
        href={frHref}
        className={`transition-colors ${isFr ? 'text-forest-green font-semibold' : 'text-dark-text/40 hover:text-forest-green'}`}
      >
        FR
      </Link>
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[rgba(47,74,58,0.12)]' : ''}`}
      style={{
        background: 'rgba(247,242,232,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        height: '68px',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5" aria-label="Sprout & Vine home">
          <span className="font-display text-[26px] font-medium text-forest-green leading-none tracking-tight">sprout</span>
          <LogoMark />
          <span className="font-display text-[26px] font-medium text-forest-green leading-none tracking-tight">vine</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          <Link
            href="/features"
            className="flex items-center gap-1 text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            Features <ChevronDown />
          </Link>
          <Link
            href="/pricing"
            className="text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="flex items-center gap-1 text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            Resources <ChevronDown />
          </Link>
          <Link
            href="/about"
            className="text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <LangToggle />
          <Link
            href="/login"
            className="text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="bg-forest-green text-white text-[13px] font-medium px-5 py-[10px] rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-forest-green transition-all duration-200 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-forest-green transition-all duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-forest-green transition-all duration-200 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          className="absolute top-[68px] left-0 right-0 md:hidden border-b border-[rgba(47,74,58,0.12)] shadow-lg"
          style={{ background: 'rgba(247,242,232,0.97)', backdropFilter: 'blur(12px)' }}
        >
          <nav className="px-5 py-5 flex flex-col gap-1" aria-label="Mobile navigation">
            {[
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Resources', href: '/resources' },
              { label: 'About', href: '/about' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="py-3 text-[15px] font-medium text-dark-text/80 hover:text-forest-green border-b border-[rgba(47,74,58,0.07)] last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <div className="py-1">
                <LangToggle />
              </div>
              <Link
                href="/login"
                className="text-[15px] font-medium text-dark-text/70 hover:text-forest-green transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/contact"
                className="bg-forest-green text-white text-[14px] font-medium px-5 py-3 rounded-lg text-center hover:bg-[#243d2f] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
