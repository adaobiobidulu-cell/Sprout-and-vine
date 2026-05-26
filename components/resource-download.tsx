'use client'

import { useState } from 'react'

interface Props {
  resource: 'cwelcc-guide' | 'licensing-checklist'
  label: string
}

export default function ResourceDownload({ resource, label }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resource, label }),
      })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex items-center gap-3 bg-sage-green/10 rounded-lg px-4 py-3">
        <span className="text-sage-green text-lg">✓</span>
        <p className="text-[13px] text-forest-green font-medium">
          You're on the list. We'll email you at <span className="font-semibold">{email}</span> when it's ready.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="your@email.ca"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={status === 'loading'}
        className="flex-1 border border-[rgba(47,74,58,0.2)] rounded-lg px-3 py-2.5 text-[13px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors disabled:opacity-60 min-w-0"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-forest-green text-white text-[13px] font-medium px-4 py-2.5 rounded-lg hover:bg-[#243d2f] transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {status === 'loading' ? '…' : 'Notify me'}
      </button>
      {status === 'error' && (
        <p className="text-[11px] text-terracotta absolute mt-12">Something went wrong. Try again.</p>
      )}
    </form>
  )
}
