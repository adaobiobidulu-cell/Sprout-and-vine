'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heroCta = document.getElementById('hero-primary-cta')

    if (heroCta) {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      )
      observer.observe(heroCta)
      return () => observer.disconnect()
    }

    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth >= 768) return
    document.body.style.paddingBottom = visible ? '68px' : ''
    return () => { document.body.style.paddingBottom = '' }
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cream border-t border-[rgba(47,74,58,0.15)] px-4 py-3 flex items-center gap-2 shadow-[0_-4px_24px_rgba(47,74,58,0.1)]">
      <Link
        href="/founding"
        className="flex-1 bg-forest-green text-white text-[13px] font-medium py-2.5 rounded-lg hover:bg-[#243d2f] transition-colors text-center"
      >
        Join Founding Operators
      </Link>
      <Link
        href="/contact"
        className="flex-shrink-0 border border-[rgba(47,74,58,0.3)] text-dark-text/70 text-[13px] font-medium px-4 py-2.5 rounded-lg hover:border-forest-green hover:text-forest-green transition-colors whitespace-nowrap"
      >
        Book a Call
      </Link>
    </div>
  )
}
