'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ExitIntent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem('sprout-exit-intent')) return
    } catch {
      return
    }

    function onMouseMove(e: MouseEvent) {
      if (e.clientY < 15) {
        try { sessionStorage.setItem('sprout-exit-intent', '1') } catch {}
        setShow(true)
        document.removeEventListener('mousemove', onMouseMove)
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setShow(false)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className="hidden md:flex fixed inset-0 z-[300] items-center justify-center"
      style={{ background: 'rgba(28,43,34,0.5)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Before you go"
    >
      <div
        className="bg-cream rounded-2xl px-10 py-9 max-w-sm w-full mx-5 text-center"
        style={{ boxShadow: '0 32px 80px rgba(28,43,34,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        <p
          className="font-display font-medium text-forest-green leading-snug mb-3"
          style={{ fontSize: 'clamp(22px, 2.5vw, 28px)' }}
        >
          Before you go
        </p>
        <p className="text-[15px] text-dark-text/60 mb-7 leading-relaxed">
          Want to see what we are building and when?
        </p>
        <Link
          href="/roadmap"
          onClick={() => setShow(false)}
          className="block bg-forest-green text-white text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-[#243d2f] transition-colors mb-4"
        >
          View the Roadmap
        </Link>
        <button
          onClick={() => setShow(false)}
          className="text-[13px] text-dark-text/40 hover:text-dark-text/65 transition-colors"
        >
          No thanks
        </button>
      </div>
    </div>
  )
}
