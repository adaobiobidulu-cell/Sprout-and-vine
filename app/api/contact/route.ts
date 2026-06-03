import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const REQUIRED_FIELDS = ['name', 'centerName', 'province', 'childrenCount', 'email'] as const

function buildHtml(data: Record<string, string>) {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 16px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 0;color:#111827;font-size:14px">${value}</td></tr>`
      : ''

  return `
<!DOCTYPE html>
<html>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f9fafb;margin:0;padding:32px 16px">
  <div style="max-width:540px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07)">
    <div style="background:#2F4A3A;padding:28px 32px">
      <p style="margin:0;color:rgba(247,242,232,0.7);font-size:12px;text-transform:uppercase;letter-spacing:0.1em">New contact form submission</p>
      <h1 style="margin:6px 0 0;color:#F7F2E8;font-size:22px;font-weight:600">${data.centerName}</h1>
    </div>
    <div style="padding:28px 32px">
      <table style="border-collapse:collapse;width:100%">
        ${row('Name', data.name)}
        ${row('Email', data.email)}
        ${row('Phone', data.phone || 'Not provided')}
        ${row('Province', data.province)}
        ${row('Children enrolled', data.childrenCount)}
        ${data.message ? row('Message', data.message.replace(/\n/g, '<br>')) : ''}
      </table>
      ${data.message ? '' : ''}
    </div>
    <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#9ca3af">Sent from sproutandvine.ca contact form</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Server-side validation
    for (const field of REQUIRED_FIELDS) {
      const val = body[field]
      if (!val || typeof val !== 'string' || val.trim().length === 0) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
      if (val.length > 500) {
        return NextResponse.json({ error: `Field too long: ${field}` }, { status: 400 })
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing EMAIL_USER or EMAIL_PASSWORD env vars')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const data = {
      name: body.name.trim(),
      centerName: body.centerName.trim(),
      province: body.province.trim(),
      childrenCount: body.childrenCount.trim(),
      email: body.email.trim(),
      phone: (body.phone || '').trim(),
      message: (body.message || '').trim(),
    }

    await transporter.sendMail({
      from: `"Sprout & Vine" <${process.env.EMAIL_USER}>`,
      to: 'hello@sproutandvine.ca',
      replyTo: data.email,
      subject: `New demo request: ${data.centerName} (${data.province})`,
      html: buildHtml(data),
      text: [
        `Name: ${data.name}`,
        `Centre: ${data.centerName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || 'Not provided'}`,
        `Province: ${data.province}`,
        `Children enrolled: ${data.childrenCount}`,
        data.message ? `Message: ${data.message}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
