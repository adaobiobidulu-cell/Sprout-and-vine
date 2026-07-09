import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/*
 * Parent/family interest capture (improvement brief 2.2). Kept separate
 * from /api/subscribe so parent contacts always carry the parent_interest
 * flag and the parent-interest userGroup, and operator email sequences
 * can never cross with family ones.
 */

async function sendFallbackEmail(email: string, city: string, province: string, children: string, lang: string) {
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
    subject: `New family interest signup: ${email}`,
    text: `New family interest contact\nEmail: ${email}\nCity: ${city}\nProvince: ${province}\nChildren needing care: ${children || 'not provided'}\nLanguage: ${lang}\n\nAdd to Loops manually with the parent-interest tag if needed.`,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, city, province, children, lang } = body

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }
    if (!city || typeof city !== 'string' || !city.trim()) {
      return NextResponse.json({ error: 'City is required' }, { status: 400 })
    }
    if (!province || typeof province !== 'string' || !province.trim()) {
      return NextResponse.json({ error: 'Province is required' }, { status: 400 })
    }

    if (process.env.LOOPS_API_KEY) {
      const payload: Record<string, string | boolean> = {
        email,
        userGroup: 'parent-interest',
        parent_interest: true,
        city: city.trim(),
        province: province.trim(),
      }
      if (children && typeof children === 'string' && children.trim()) {
        payload.childrenNeedingCare = children.trim()
      }
      if (lang === 'fr') payload.language = 'fr'

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
      const text = await res.text()
      console.error('Loops error (family interest):', res.status, text)
    } else {
      console.error('LOOPS_API_KEY not set — using email fallback')
    }

    await sendFallbackEmail(email, city, province, children || '', lang || 'en')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Family interest route error:', err)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
