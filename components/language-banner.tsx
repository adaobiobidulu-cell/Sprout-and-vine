'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import BrandLogo from '@/components/brand-logo'

export default function LanguageBanner() {
  const [show, setShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    try {
      const stored = localStorage.getItem('sprout-lang')
      if (!stored) {
        const t = setTimeout(() => setShow(true), 700)
        return () => clearTimeout(t)
      }
    } catch {
      // localStorage unavailable (SSR guard)
    }
  }, [])

  function choose(lang: 'en' | 'fr') {
    try { localStorage.setItem('sprout-lang', lang) } catch {}
    setShow(false)
    if (lang === 'fr') router.push('/fr')
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(28,43,34,0.65)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Language selection"
    >
      <div
        className="bg-cream rounded-3xl p-10 max-w-sm w-full mx-5 text-center"
        style={{ boxShadow: '0 32px 80px rgba(28,43,34,0.35)' }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-7">
          <BrandLogo height={56} />
        </div>

        {/* Bilingual prompt */}
        <p className="text-[13px] text-dark-text/50 mb-1">Choose your language</p>
        <p className="text-[13px] text-dark-text/40 mb-8">Choisissez votre langue</p>

        {/* Language buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => choose('en')}
            className="flex flex-col items-center gap-2 bg-white border-2 border-[rgba(47,74,58,0.12)] rounded-2xl px-4 py-5 hover:border-forest-green hover:shadow-md transition-all group"
          >
            <span className="text-3xl">🇨🇦</span>
            <span className="text-[15px] font-semibold text-dark-text group-hover:text-forest-green transition-colors">English</span>
            <span className="text-[11px] text-dark-text/35">Continue in English</span>
          </button>
          <button
            onClick={() => choose('fr')}
            className="flex flex-col items-center gap-2 bg-white border-2 border-[rgba(47,74,58,0.12)] rounded-2xl px-4 py-5 hover:border-forest-green hover:shadow-md transition-all group"
          >
            <span className="text-3xl">🇫🇷</span>
            <span className="text-[15px] font-semibold text-dark-text group-hover:text-forest-green transition-colors">Français</span>
            <span className="text-[11px] text-dark-text/35">Continuer en français</span>
          </button>
        </div>

        <p className="text-[11px] text-dark-text/25 mt-6">
          You can change this anytime in the menu &middot; Modifiable dans le menu
        </p>
      </div>
    </div>
  )
}
