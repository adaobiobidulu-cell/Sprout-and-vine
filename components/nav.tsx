'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function LogoMark() {
  return (
    <svg viewBox="0 0 44 58" width="26" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="24" cy="5" rx="3.5" ry="6" fill="#AEC1B0" transform="rotate(-22 24 5)" />
      <path
        d="M 26 9 C 24 3 16 1 11 5 C 6 9 7 17 12 20 C 17 23 22 21 22 27 C 22 33 14 37 10 42 C 6 47 9 54 18 54 C 27 54 34 47 30 42"
        stroke="#2F4A3A" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M 5 28 L 34 14" stroke="#2F4A3A" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M 30 42 C 36 38 39 43 34 50" stroke="#2F4A3A" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M 17 13 C 18 11 22 11 23 13 C 24 16 22 19 19 21 C 16 19 15 16 17 13 Z" fill="#E2845F" />
      <ellipse cx="15" cy="54" rx="3.2" ry="5" fill="#AEC1B0" transform="rotate(18 15 54)" />
      <ellipse cx="25" cy="53" rx="2.8" ry="4.5" fill="#AEC1B0" transform="rotate(-22 25 53)" />
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
        <div className="hidden md:flex items-center gap-5">
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
