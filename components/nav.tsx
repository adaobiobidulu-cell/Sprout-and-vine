'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function LogoMark() {
  return (
    <svg viewBox="0 0 90 126" width="20" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Leaf stem */}
      <path d="M 26 32 C 20 22 14 12 10 8" stroke="#2F4A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Top leaf */}
      <path d="M 10 8 C 2 2 0 10 4 16 C 8 22 20 22 26 16 C 22 10 14 6 10 8 Z" fill="#AEC1B0" />
      {/* Upper vine: crossing up through loop to spiral curl */}
      <path d="M 40 64 C 32 56 22 46 20 36 C 18 24 26 14 38 14 C 50 14 64 18 70 30 C 76 40 70 50 62 48 C 56 48 54 42 58 38 C 62 34 66 40 62 44" stroke="#2F4A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Lower vine: crossing down through large circle */}
      <path d="M 40 64 C 48 70 58 74 64 84 C 70 96 68 112 56 118 C 44 124 26 120 16 110 C 6 98 8 82 18 74 C 24 70 32 66 38 68" stroke="#2F4A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Heart */}
      <path d="M 52 58 C 52 54 50 50 46 52 C 42 50 40 54 40 58 C 40 64 46 70 46 70 C 46 70 52 64 52 58 Z" fill="#E2845F" />
      {/* Bottom leaf — upper */}
      <path d="M 64 84 C 76 72 88 76 84 88 C 80 96 70 94 64 84 Z" fill="#AEC1B0" />
      {/* Bottom leaf — lower */}
      <path d="M 62 94 C 74 86 86 92 82 104 C 78 112 66 108 62 94 Z" fill="#AEC1B0" />
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
  '/features': '/fr/features',
  '/resources': '/fr/resources',
  '/about': '/fr/about',
  '/contact': '/fr/contact',
  '/roadmap': '/fr/roadmap',
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
  const pathname = usePathname()
  const isFr = pathname.startsWith('/fr')
  const p = (en: string) => isFr ? `/fr${en}` : en

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
        <Link href={isFr ? '/fr' : '/'} className="flex items-center gap-1.5" aria-label="Sprout & Vine home">
          <span className="font-display text-[26px] font-medium text-forest-green leading-none tracking-tight">sprout</span>
          <LogoMark />
          <span className="font-display text-[26px] font-medium text-forest-green leading-none tracking-tight">vine</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          <Link
            href={p('/features')}
            className="flex items-center gap-1 text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            {isFr ? 'Fonctionnalités' : 'Features'} <ChevronDown />
          </Link>
          <Link
            href={p('/pricing')}
            className="text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            {isFr ? 'Tarifs' : 'How Pricing Works'}
          </Link>
          <Link
            href={p('/resources')}
            className="flex items-center gap-1 text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            {isFr ? 'Ressources' : 'Resources'} <ChevronDown />
          </Link>
          <Link
            href={p('/roadmap')}
            className="text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            {isFr ? 'Feuille de route' : 'Roadmap'}
          </Link>
          <Link
            href={p('/about')}
            className="text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            {isFr ? 'À propos' : 'About'}
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <LangToggle />
          <Link
            href="/login"
            className="text-[14px] font-medium text-dark-text/80 hover:text-forest-green transition-colors"
          >
            {isFr ? 'Connexion' : 'Log in'}
          </Link>
          <Link
            href="/founding"
            className="bg-forest-green text-white text-[13px] font-medium px-5 py-[10px] rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            {isFr ? 'Programme fondateur' : 'Founding Program'}
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
              { label: isFr ? 'Fonctionnalités' : 'Features', href: p('/features') },
              { label: isFr ? 'Tarifs' : 'How Pricing Works', href: p('/pricing') },
              { label: isFr ? 'Ressources' : 'Resources', href: p('/resources') },
              { label: isFr ? 'Feuille de route' : 'Roadmap', href: p('/roadmap') },
              { label: isFr ? 'À propos' : 'About', href: p('/about') },
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
                {isFr ? 'Connexion' : 'Log in'}
              </Link>
              <Link
                href="/founding"
                className="bg-forest-green text-white text-[14px] font-medium px-5 py-3 rounded-lg text-center hover:bg-[#243d2f] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {isFr ? 'Programme fondateur' : 'Founding Program'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
