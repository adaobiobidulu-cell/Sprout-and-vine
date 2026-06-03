import { NextResponse } from 'next/server'

export async function GET() {
  const key = process.env.LOOPS_API_KEY

  if (!key) {
    return NextResponse.json({ status: 'error', message: 'LOOPS_API_KEY is not set in Vercel environment variables' })
  }

  try {
    const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({ email: 'test-diagnostic@sproutandvinecare.ca', userGroup: 'diagnostic' }),
    })

    const text = await res.text()
    return NextResponse.json({
      status: res.ok ? 'ok' : 'loops_error',
      httpStatus: res.status,
      loopsResponse: text,
      keyPrefix: key.slice(0, 6) + '...',
    })
  } catch (err) {
    return NextResponse.json({ status: 'network_error', message: String(err) })
  }
}
