import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Educators | Sprout & Vine',
  description: 'Sprout & Vine is built around your day, not just your director\'s. Reports in 2 minutes, milestone tagging on your phone, and parent messaging without your personal number.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

const mailtoHref = [
  'mailto:?',
  'subject=A%20platform%20your%20educators%20will%20actually%20love&',
  'body=Hi%20there%2C%0A%0AI%20came%20across%20Sprout%20%26%20Vine%20and%20think%20it%20could%20make%20a%20real%20difference%20for%20our%20team.%20Worth%20a%20look%3A%20https%3A%2F%2Fsproutandvine.ca',
].join('')

export default function ForEducatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>For Educators</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}
          >
            Built for the people who show up every day.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-xl mx-auto">
            Directors choose Sprout &amp; Vine. Educators love it. Here's why.
          </p>
        </div>
      </section>

      {/* Section 1: The daily reality */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>The Daily Reality</SectionLabel>
              <h2
                className="font-display font-medium text-forest-green leading-[1.08] mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                Your day is harder than most people realise.
              </h2>
              <p className="text-[16px] text-dark-text/65 leading-relaxed">
                You're the one logging meals, writing daily reports, tagging milestones, managing drop-offs, and communicating with 15 families. We built Sprout &amp; Vine around your day, not just your director's.
              </p>
            </div>

            {/* Visual: timeline of a typical day */}
            <div className="bg-cream rounded-2xl p-6" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
              <p className="text-[11px] font-semibold text-dark-text/40 uppercase tracking-wide mb-5">A typical Tuesday</p>
              <div className="space-y-4">
                {[
                  { time: '8:00 AM', task: 'Morning drop-off and check-ins', icon: '👋' },
                  { time: '9:30 AM', task: 'Activity — painting with Emma', icon: '🎨' },
                  { time: '11:00 AM', task: 'Log meals for 18 children', icon: '🍎' },
                  { time: '12:30 PM', task: 'Nap time, then daily reports', icon: '📋' },
                  { time: '3:00 PM', task: 'Tag 2 milestones, reply to 4 messages', icon: '🌱' },
                  { time: '4:30 PM', task: 'Pickup authorizations, sign-outs', icon: '🚗' },
                ].map(item => (
                  <div key={item.time} className="flex items-start gap-3">
                    <span className="text-[11px] font-semibold text-dark-text/35 w-16 flex-shrink-0 pt-0.5">{item.time}</span>
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <p className="text-[13px] text-dark-text/70 leading-snug">{item.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What's different for educators */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Built Around Your Day</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08]"
              style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}
            >
              Four things that change everything.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📋',
                title: 'Reports in under 2 minutes',
                body: 'Tap-to-complete templates. Add a photo. Send. Done before nap time. No more staying late to type up your notes.',
              },
              {
                icon: '🌱',
                title: 'Milestone tagging on the go',
                body: 'See something beautiful? Tag it from your phone in 10 seconds. It builds their development timeline automatically.',
              },
              {
                icon: '💬',
                title: 'Parent messaging without your personal number',
                body: 'All communication through the app. Professional boundaries kept. Parents cannot text you at 11pm.',
              },
              {
                icon: '📊',
                title: 'Ratio alerts that watch your back',
                body: 'Real-time staff:child ratio tracking. Get notified before you are ever out of compliance. Never caught off guard by a surprise inspection.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7"
                style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: 'rgba(47,74,58,0.06)' }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display text-[22px] font-medium text-forest-green mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-dark-text/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Testimonial */}
      <section className="bg-forest-green py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-3xl mb-6 opacity-50">"</div>
          <blockquote
            className="font-display font-medium text-cream leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            I used to spend 45 minutes at the end of the day on reports. Now it's 8 minutes and I'm home on time.
          </blockquote>
          <p className="text-cream/50 text-[14px]">ECE, Ontario</p>

          <div className="mt-12 pt-10 border-t border-cream/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { stat: '8 min', label: 'Average daily report time' },
                { stat: '2 taps', label: 'To tag a milestone' },
                { stat: '0 texts', label: 'To your personal number' },
              ].map(item => (
                <div key={item.label}>
                  <p className="font-display text-[40px] font-medium text-cream leading-none mb-1">{item.stat}</p>
                  <p className="text-[12px] text-cream/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tell your director */}
      <section className="bg-cream py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-white rounded-2xl p-10"
            style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)' }}
          >
            <div className="text-4xl mb-5">📬</div>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
            >
              Love what you see? Share it with your director.
            </h2>
            <p className="text-[15px] text-dark-text/60 leading-relaxed mb-8">
              Forward this page with a pre-filled email. Your director will thank you later.
            </p>
            <a
              href={mailtoHref}
              className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors mb-4"
            >
              Send this page to your director
            </a>
            <p className="text-[12px] text-dark-text/35">
              Opens your email app with subject and body pre-filled.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-5 md:px-8 text-center border-t border-[rgba(47,74,58,0.07)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[16px] text-dark-text/55 mb-6">
            Already convinced? Start your centre's free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="bg-forest-green text-white text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
              Start free trial
            </Link>
            <Link href="/pricing" className="text-[14px] font-medium text-forest-green border-2 border-forest-green px-6 py-3.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
