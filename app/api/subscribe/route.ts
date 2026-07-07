import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

async function sendFallbackEmail(email: string, firstName: string, source: string) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) return
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
  })
  await transporter.sendMail({
    from: `"Sprout & Vine Care" <${process.env.EMAIL_USER}>`,
    to: 'hello@sproutandvinecare.ca',
    subject: `New email signup: ${email}`,
    text: `New subscriber\nEmail: ${email}\nFirst name: ${firstName || 'not provided'}\nSource: ${source || 'unknown'}\n\nAdd to Loops manually if needed.`,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, firstName, source, centreName, operatorType, province } = body

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Try Loops first
    if (process.env.LOOPS_API_KEY) {
      const payload: Record<string, string | boolean> = { email }
      if (firstName && typeof firstName === 'string' && firstName.trim()) {
        payload.firstName = firstName.trim()
      }
      if (source && typeof source === 'string') {
        payload.userGroup = source
      }
      if (centreName && typeof centreName === 'string') {
        payload.centreName = centreName
      }
      if (operatorType && typeof operatorType === 'string') {
        payload.operatorType = operatorType
      }
      if (province && typeof province === 'string') {
        payload.province = province
      }
      if (source && typeof source === 'string' && source.startsWith('founding-application')) {
        payload.founding_applicant = true
      }

      const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        return NextResponse.json({ ok: true })
      }

      // Loops failed — log it and fall through to email fallback
      const text = await res.text()
      console.error('Loops error:', res.status, text)
    } else {
      console.error('LOOPS_API_KEY not set — using email fallback')
    }

    // Fallback: email the contact to hello@sproutandvinecare.ca
    await sendFallbackEmail(email, firstName || '', source || '')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
