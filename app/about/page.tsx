import Link from 'next/link'

/* ── Shared section label ──────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

/* ── Value card SVG icons ──────────────────────────────────────── */
function GrowthIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true">
      <path d="M16 26 L16 8" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 14 L16 8 L22 14" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8 C16 8 14 5 16 3 C18 5 16 8 16 8 Z" fill="#2F4A3A" />
    </svg>
  )
}

function ConnectionIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true">
      <circle cx="12" cy="16" r="7" stroke="#2F4A3A" strokeWidth="1.5" />
      <circle cx="20" cy="16" r="7" stroke="#2F4A3A" strokeWidth="1.5" />
    </svg>
  )
}

function TrustIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true">
      <path d="M16 4 L26 8 L26 16 C26 21.5 21.5 26.5 16 28 C10.5 26.5 6 21.5 6 16 L6 8 Z" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CareIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true">
      <path d="M16 26 C16 26 5 19 5 12 C5 8.7 7.7 6 11 6 C13 6 14.8 7 16 8.5 C17.2 7 19 6 21 6 C24.3 6 27 8.7 27 12 C27 19 16 26 16 26 Z" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8.5 C16 8.5 18 6 20 7 C21 7.5 21 9 20 9.5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ── Values data ───────────────────────────────────────────────── */
const values = [
  {
    icon: <GrowthIcon />,
    name: 'Growth',
    desc: 'We build tools that help centers grow sustainably, one child at a time.',
  },
  {
    icon: <ConnectionIcon />,
    name: 'Connection',
    desc: 'We believe technology should bring families and educators closer, not create distance.',
  },
  {
    icon: <TrustIcon />,
    name: 'Trust',
    desc: 'Every feature we ship earns the trust of operators, educators, and the families they serve.',
  },
  {
    icon: <CareIcon />,
    name: 'Care',
    desc: 'We care about the people using our platform as much as we care about the children in their centers.',
  },
]

/* ── Team data ─────────────────────────────────────────────────── */
const team = [
  {
    emoji: '🌱',
    name: 'Team Member',
    role: 'Founder & CEO',
    bio: 'Building Sprout & Vine with the operators we serve.',
  },
  {
    emoji: '🎨',
    name: 'Team Member',
    role: 'Head of Product',
    bio: 'Building Sprout & Vine with the operators we serve.',
  },
  {
    emoji: '💚',
    name: 'Team Member',
    role: 'Head of Customer Success',
    bio: 'Building Sprout & Vine with the operators we serve.',
  },
]

/* ── Page ──────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ──────────────────────────────────────── */}
      <section className="bg-cream py-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            ABOUT US
          </p>
          <h1
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(44px, 5.5vw, 68px)' }}
          >
            We believe every child deserves a well-run, calm, and caring environment.
          </h1>
          <p
            className="text-dark-text/65 leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: '17px' }}
          >
            That belief drove us to build the childcare management platform we wish had existed from day one.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: OUR STORY ─────────────────────────────────── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text left */}
          <div>
            <SectionLabel>OUR STORY</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.1] mb-7"
              style={{ fontSize: 'clamp(40px, 4vw, 50px)' }}
            >
              Built by someone who has seen the chaos firsthand.
            </h2>
            <div className="space-y-5">
              <p className="text-[16px] text-dark-text/65 leading-relaxed">
                After years working in customer success across software companies, our founder spent time supporting childcare operators through technology transitions. What became clear quickly: the tools available were either built for US regulations, too complex for small teams, or simply not built with care. Canadian operators were left duct-taping together spreadsheets, paper forms, and apps that didn't talk to each other.
              </p>
              <p className="text-[16px] text-dark-text/65 leading-relaxed">
                Sprout & Vine was born from a simple question: what would childcare management software look like if it was built specifically for Canada, specifically for the educators using it every day, and specifically with the families in mind? The answer is what you're looking at.
              </p>
            </div>
          </div>

          {/* Accent card right */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-cream rounded-2xl p-8 max-w-xs w-full">
              <div className="text-5xl mb-5">🌱</div>
              <p className="font-display italic text-forest-green leading-snug mb-4" style={{ fontSize: '22px' }}>
                "What would this look like if it was built with real care?"
              </p>
              <p className="text-[13px] text-dark-text/40">
                The question that started it all
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: COMPANY ───────────────────────────────────── */}
      <section className="bg-cream py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          {/* Pill badge */}
          <span className="inline-block bg-forest-green/10 text-forest-green text-[11px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-6">
            PROUDLY CANADIAN
          </span>

          <h2
            className="font-display font-medium text-forest-green leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(36px, 4vw, 46px)' }}
          >
            Built under Prime Horizon Inc.
          </h2>

          <p className="text-[16px] text-dark-text/60 leading-relaxed max-w-xl mx-auto mb-10">
            Sprout & Vine is a product of Prime Horizon Inc., a proudly Canadian company. Our data stays in Canada. Our focus stays on Canada. Our team understands the unique regulatory landscape every Canadian operator navigates.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              '🍁 Canadian company',
              '🔒 Canadian data residency',
              '🌐 Bilingual platform',
            ].map((chip) => (
              <span
                key={chip}
                className="bg-white border border-[rgba(47,74,58,0.15)] text-dark-text/70 text-[13px] font-medium px-4 py-2 rounded-full"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VALUES ────────────────────────────────────── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green text-center mb-12"
            style={{ fontSize: '40px' }}
          >
            What we stand for
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.name} className="bg-cream rounded-2xl p-7">
                <div className="mb-4">{v.icon}</div>
                <h3
                  className="font-display font-medium text-forest-green mb-2"
                  style={{ fontSize: '24px' }}
                >
                  {v.name}
                </h3>
                <p className="text-[13px] text-dark-text/60 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TEAM ──────────────────────────────────────── */}
      <section className="bg-cream py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-display font-medium text-forest-green mb-4"
              style={{ fontSize: '40px' }}
            >
              The team behind the platform
            </h2>
            <p className="text-[16px] text-dark-text/55">
              A small, focused team building something meaningful for Canadian childcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {team.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-forest-green/10 flex items-center justify-center rounded-full mx-auto mb-4 text-3xl">
                  {member.emoji}
                </div>
                <p className="text-[15px] font-semibold text-dark-text mb-1">
                  {member.name}
                </p>
                <p className="text-[13px] text-dark-text/40 mb-3">
                  {member.role}
                </p>
                <p className="text-[12px] text-dark-text/40 italic">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Join our team CTA */}
          <div className="text-center">
            <p className="text-[16px] text-dark-text/55 mb-4">
              We're growing.
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-forest-green text-forest-green text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
            >
              See open roles
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ───────────────────────────────────────── */}
      <section className="bg-forest-green py-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-medium text-cream leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
          >
            Ready to see it in action?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Start free trial
            </Link>
            <Link
              href="/contact"
              className="text-cream text-[14px] font-medium px-8 py-4 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
