import ContactForm from '@/components/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Sprout & Vine Care',
  description: 'Book a demo or get in touch with the Sprout & Vine team. We respond within 1 business day.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 items-start">

        {/* Left: Form */}
        <div>
          <SectionLabel>Get in Touch</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}
          >
            Let's talk. We'll reach out within 1 business day.
          </h1>
          <ContactForm />
        </div>

        {/* Right: What to expect */}
        <div
          className="bg-white rounded-2xl p-8 sticky top-8"
          style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)' }}
        >
          <h3 className="font-display text-[24px] font-medium text-forest-green mb-6">
            What to expect
          </h3>
          <ul className="space-y-4 mb-7">
            {[
              '30-minute demo tailored to your centre size',
              'Live walkthrough of your most pressing workflows',
              'Pricing confirmation for your situation',
              'No pressure. No hard sell.',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sage-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 4-4" stroke="#6EB76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[14px] text-dark-text/70 leading-snug">{item}</p>
              </li>
            ))}
          </ul>

          <div className="border-t border-[rgba(47,74,58,0.08)] pt-6">
            <p className="text-[12px] text-dark-text/40 mb-1">Questions?</p>
            <a href="mailto:hello@sproutandvinecare.ca" className="text-[13px] text-forest-green font-medium hover:underline">
              hello@sproutandvinecare.ca
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
