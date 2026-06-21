'use client'

import { useEffect, useState } from 'react'

export default function LoginRedirect() {
  const [dots, setDots] = useState('.')

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(d => d.length >= 3 ? '.' : d + '.')
    }, 500)

    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://app.sproutandvinecare.ca'
    }, 1500)

    return () => {
      clearInterval(dotInterval)
      clearTimeout(redirectTimer)
    }
  }, [])

  return (
    <p className="text-[15px] text-dark-text/50 mt-4">
      Redirecting you to your dashboard{dots}
    </p>
  )
}
