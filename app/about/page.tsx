import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story | Ada and Chuck, Co-Founders of Sprout and Vine',
  description: 'Sprout and Vine was built by Ada and Chuck after the arrival of their first child and a frustrating search for how Canada\'s childcare system actually works. Read their story.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Our story</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5.5vw, 66px)' }}
          >
            We had our first baby and fell completely in love.
          </h1>
          <p className="text-[18px] text-dark-text/65 leading-relaxed">
            That is how Sprout and Vine started. Not with a business plan. With a feeling.
          </p>
        </div>
      </section>

      {/* Founder narrative */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 text-[17px] text-dark-text/75 leading-relaxed">

            <p>
              When our first child arrived, something shifted in me that I had not fully expected. I wanted to stay close to that world: the world of small children, of early learning, of those first extraordinary years. And like a lot of new parents, I started asking what that actually looked like as a career. Could I open a home daycare? Could I care for a small group of children and do this work that suddenly felt so important?
            </p>

            <p>
              So I started researching. And I hit a wall.
            </p>

            <p>
              There was no single place that explained how any of it worked. Licensing requirements were buried in government PDFs. CWELCC funding, which is supposed to help new operators get started, was nearly impossible to navigate without already knowing someone inside the system. The agencies, the ratios, the space requirements, the inspections, the insurance: every piece of information lived somewhere different, written for people who already knew what they were doing.
            </p>

            <p>
              I kept thinking: if I am struggling to find this information, and I have a background in operations and customer success, what is it like for someone who does not?
            </p>

            <p>
              I also kept running into the waitlist problem. Canada is in a childcare crisis that everyone acknowledges and nobody seems to be fixing. Families wait two or three years for a licensed spot. Working parents are making impossible choices. And meanwhile, there are people who genuinely want to care for children, who are called to this work, who could open a home daycare tomorrow if they just knew how.
            </p>

          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-medium text-cream leading-relaxed" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
            The gap is not passion.<br />The gap is information and infrastructure.
          </p>
          <p className="text-[16px] text-cream/65 mt-6 leading-relaxed">
            This is why Sprout and Vine exists.
          </p>
        </div>
      </section>

      {/* Continued narrative */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 text-[17px] text-dark-text/75 leading-relaxed">

            <p>
              I came to Canada from Nigeria at sixteen. I know what it feels like to navigate a system that was not designed with you in mind, to ask questions other people seem to already know the answers to, to work hard just to find the starting line. I spent years in hospitality as a chef, a bartender, and a banquet server, learning how to operate under pressure and take care of people. I lived a dream as a flight attendant. I eventually landed in SaaS, in customer success and operations, where I learned how good software changes people's working lives.
            </p>

            <p>
              When I brought this idea to Chuck, he did not hesitate. That is Chuck. He started his career as a chemist, which gave him a way of looking at problems that I think only makes sense once you have watched him work. He found his way into software, spent years deep in the Salesforce world, and became the kind of developer who genuinely loves what he does. He is not building Sprout and Vine because it is a good opportunity. He is building it because he believes in it. That matters to me more than anything else on his resume.
            </p>

            <p>
              Together we are building the platform I wished existed when I started researching childcare: a consolidated, step-by-step guide that walks aspiring operators from idea to open doors. A compliance system that does the heavy lifting so operators can focus on the children. A tool built specifically for Canada, for CWELCC, for our provinces, for our regulations, and not adapted from an American product that does not understand how our system works.
            </p>

            <p>
              We want every person called to care for children in Canada to have a clear, honest path to doing it. And we want every parent dropping off their child to feel genuine peace of mind.
            </p>

            <p>
              We are building this now. We are not launched yet, and we will not launch until it is right. While we build, we have put everything we know about Canadian childcare compliance in one place, free, for anyone who needs it. And we are looking for fifty founding operators to help us build something worth building.
            </p>

            <p>
              I believe we are called to the work that is right in front of us. For me, right now, this is it.
            </p>

            <p>
              If that is you, we would love to hear from you.
            </p>

          </div>

          <p className="mt-10 text-[15px] font-medium text-dark-text/60">
            Ada, Co-Founder, Sprout and Vine
          </p>
        </div>
      </section>

      {/* Founder bios */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>The founders</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.1] mb-12"
            style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}
          >
            We are a small team doing serious work.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <p className="text-[18px] font-semibold text-dark-text mb-1">Ada</p>
              <p className="text-[13px] text-dark-text/45 mb-4 uppercase tracking-[0.08em] font-medium">Co-Founder</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                Nigerian-Canadian. Spent her career learning how to take care of people and build things that work. Now doing both at once.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <p className="text-[18px] font-semibold text-dark-text mb-1">Chuck</p>
              <p className="text-[13px] text-dark-text/45 mb-4 uppercase tracking-[0.08em] font-medium">Co-Founder</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                Started out as a chemist, which turns out to be excellent training for solving problems nobody has solved before. Found his way into software, spent years building in the Salesforce world, and somewhere along the way fell completely in love with what good technology can do for people. Sprout and Vine is the most important thing he has built yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-12" style={{ fontSize: 'clamp(34px, 4vw, 48px)' }}>
            What we believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Operators deserve real tools',
                desc: 'Not workarounds. Not ported-from-somewhere-else software that almost fits. A platform designed for the actual regulatory environment, the actual workflows, and the actual constraints of running a Canadian childcare centre.',
              },
              {
                title: 'Educators deserve to focus on children',
                desc: 'Every minute an educator spends on paperwork is a minute not spent with a child. We measure our success by how much time we give back to the people in the room.',
              },
              {
                title: 'Families deserve to be informed',
                desc: 'Parents who trust you are more than enrolled families. They are your strongest advocates. The right tools make that trust easy to build and easy to keep.',
              },
              {
                title: 'Canada deserves a Canadian solution',
                desc: 'CWELCC, provincial licensing, bilingual requirements, data residency. These are not edge cases. They are the foundation. We build from that foundation, not on top of something that ignores it.',
              },
            ].map(item => (
              <div key={item.title} className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
                <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">{item.title}</h3>
                <p className="text-[14px] text-dark-text/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proudly Canadian */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-forest-green/10 text-forest-green text-[11px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-6">
            Proudly Canadian
          </span>
          <h2
            className="font-display font-medium text-forest-green leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
          >
            Proudly built in Canada.
          </h2>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-10 max-w-xl mx-auto">
            We are a proudly Canadian company. Our data stays in Canada. Our focus stays on Canada. Our team understands the unique regulatory landscape every Canadian operator navigates every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              '🍁 Canadian company',
              '🔒 Canadian data residency',
              '🌐 Fully bilingual (EN/FR)',
            ].map(chip => (
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

      {/* CTA */}
      <section className="bg-forest-green py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-medium text-cream leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
          >
            Want to help us build this right?
          </h2>
          <p className="text-[16px] text-cream/60 mb-10 leading-relaxed">
            We are looking for 50 founding operators across Canada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/founding"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Join the program
            </Link>
            <Link
              href="/features"
              className="text-cream text-[14px] font-medium px-8 py-4 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors"
            >
              See the platform
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
