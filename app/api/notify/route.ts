import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, resource, label } = body

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    })

    await transporter.sendMail({
      from: `"Sprout & Vine" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Resource request: ${label}`,
      text: `Resource: ${label} (${resource})\nEmail: ${email}\n\nAdd to notify list when resource is published.`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:480px;padding:32px;background:#f9fafb;border-radius:12px">
          <p style="margin:0 0 4px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Resource download request</p>
          <h2 style="margin:0 0 16px;color:#2F4A3A;font-size:20px">${label}</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px">Resource</td><td style="color:#111827;font-size:14px">${resource}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px">Email</td><td style="color:#111827;font-size:14px">${email}</td></tr>
          </table>
        </div>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Notify error:', err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
