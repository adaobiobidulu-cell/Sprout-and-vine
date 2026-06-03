'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Props {
  heading?: string
  subheading?: string
  buttonText?: string
  source?: string
  showFirstName?: boolean
}

export default function EmailCapture({
  heading = 'Stay in the loop.',
  subheading = 'We share updates on what we are building, what we are learning, and when the platform is ready for you.',
  buttonText = 'Get updates',
  source = 'general',
  showFirstName = false,
}: Props) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) {
      setError('Please check the box above to confirm you want to receive updates.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: showFirstName && firstName ? firstName.trim() : undefined,
          source,
        }),
      })
      if (!res.ok) throw new Error('send_failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Email us directly at hello@sproutandvinecare.ca.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-[15px] font-semibold text-forest-green mb-1">You are on the list.</p>
        <p className="text-[13px] text-dark-text/55">We will be in touch as we build.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {(heading || subheading) && (
        <div className="mb-4">
          {heading && <p className="text-[16px] font-semibold text-forest-green mb-1">{heading}</p>}
          {subheading && <p className="text-[13px] text-dark-text/60 leading-relaxed">{subheading}</p>}
        </div>
      )}

      {showFirstName && (
        <input
          type="text"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name"
          className="w-full border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-2.5 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors mb-2"
        />
      )}

      <div className="flex gap-2 mb-3">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@centre.ca"
          className="flex-1 border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-2.5 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-forest-green text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#243d2f] transition-colors disabled:opacity-60 whitespace-nowrap flex-shrink-0"
        >
          {loading ? '...' : buttonText}
        </button>
      </div>

      {/* CASL consent — unchecked by default */}
      <div className="flex items-start gap-2 mb-2">
        <input
          id={`consent-${source}`}
          type="checkbox"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          className="mt-0.5 w-3.5 h-3.5 flex-shrink-0"
        />
        <label htmlFor={`consent-${source}`} className="text-[11px] text-dark-text/50 leading-relaxed cursor-pointer">
          I agree to receive updates from Sprout &amp; Vine. I can unsubscribe at any time.{' '}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-forest-green transition-colors">
            Privacy Policy
          </Link>
        </label>
      </div>

      {error && (
        <p className="text-[12px] text-terracotta mt-1">{error}</p>
      )}
    </form>
  )
}
