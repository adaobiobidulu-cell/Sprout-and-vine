import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, firstName, source } = body

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (!process.env.LOOPS_API_KEY) {
      console.error('Missing LOOPS_API_KEY env var')
      return NextResponse.json({ error: 'Subscription service not configured' }, { status: 500 })
    }

    const payload: Record<string, string> = { email }
    if (firstName && typeof firstName === 'string' && firstName.trim()) {
      payload.firstName = firstName.trim()
    }
    if (source && typeof source === 'string') {
      payload.source = source
    }

    const res = await fetch('https://app.loops.so/api/v1/contacts/upsert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Loops error:', res.status, text)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
