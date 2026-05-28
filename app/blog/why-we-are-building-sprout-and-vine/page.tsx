import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why we are building Sprout & Vine | Blog',
  description: "We are not building another app. We are building infrastructure. Here is what we found when we looked closely at Canadian childcare operations, and why it changed everything.",
}

export default function PostPage() {
  return (
    <article className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cream/50 hover:text-cream text-[13px] font-medium transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to blog
          </Link>
          <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-5">
            Build in public
          </p>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 52px)' }}
          >
            Why we are building Sprout &amp; Vine
          </h1>
          <div className="flex items-center gap-4 text-cream/45 text-[13px]">
            <span>Ada Obidulu</span>
            <span className="text-cream/25">·</span>
            <time dateTime="2026-05-01">May 1, 2026</time>
            <span className="text-cream/25">·</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="prose-sprout space-y-6 text-[17px] text-dark-text/75 leading-relaxed">

          <p>
            I want to start with something most software founders do not say out loud: the platform is not built yet. We have the foundation. We have a founding cohort of operators we are building with. We have a clear plan. But the product is not finished.
          </p>

          <p>
            I am writing this because I believe the people who will use Sprout and Vine deserve to know exactly where we are and why we are doing this. Not the polished version. The real version.
          </p>

          <h2 className="font-display font-medium text-forest-green text-[28px] mt-10 mb-4">
            What I found when I looked closely
          </h2>

          <p>
            I spent years in customer success at software companies. I thought I understood what it meant to help organizations adopt technology. Then I started spending time with Canadian childcare operators.
          </p>

          <p>
            What I found was not what I expected. I expected operators who were resistant to technology. What I found instead were people who wanted better tools desperately, but who had learned not to trust that better tools would ever come.
          </p>

          <p>
            One director in Ontario showed me her system. She had a sign-in binder at the front desk. A separate spreadsheet for CWELCC subsidy tracking. An app she paid for monthly that did billing, but nothing else. A group chat with parents where she fielded pickup questions at 8pm. A different app for incident reports. And a filing cabinet for everything the other systems could not handle.
          </p>

          <p>
            This is not a story about one director. Every operator I spoke to had a version of this. The tools available were either built for the US market with Canadian compliance bolted on as an afterthought, too expensive for small operations, or so complicated that staff were spending more time navigating the platform than caring for children.
          </p>

          <p>
            And none of them had a real answer for CWELCC.
          </p>

          <h2 className="font-display font-medium text-forest-green text-[28px] mt-10 mb-4">
            The CWELCC problem nobody talks about
          </h2>

          <p>
            The Canada-Wide Early Learning and Child Care program is one of the most significant changes to Canadian childcare in a generation. Subsidies that reduce fees to 10 dollars a day or less, depending on province. The intent is extraordinary.
          </p>

          <p>
            The administrative burden it created was not something anyone planned for carefully.
          </p>

          <p>
            Operators now track subsidy eligibility by child, reconcile receipts monthly with their provincial body, submit reports in formats that vary by province, and maintain documentation that did not exist two years ago. Every piece of this is done manually, in spreadsheets, by directors who are also managing licensing inspections, staff ratios, enrollment waitlists, and the actual work of running a childcare program.
          </p>

          <p>
            The existing platforms had no answer for this. Most of them still do not. Not a real one.
          </p>

          <h2 className="font-display font-medium text-forest-green text-[28px] mt-10 mb-4">
            The gap is not passion
          </h2>

          <p>
            Childcare operators in Canada are not failing because they do not care enough. They are not underprepared because they did not try hard enough. The gap is not passion. The gap is information and infrastructure.
          </p>

          <p>
            The operators I spoke to were deeply dedicated. They had answers to every child welfare question I asked. They knew their families. They knew their staff. They showed up every single day for work that most of us would find overwhelming.
          </p>

          <p>
            What they did not have was a platform that understood the regulatory environment they operated in. One that handled CWELCC from the ground up. That worked in both English and French. That was affordable enough for a 20-child home provider and powerful enough for an organization with five locations.
          </p>

          <p>
            Nobody had built that. So we are building it.
          </p>

          <h2 className="font-display font-medium text-forest-green text-[28px] mt-10 mb-4">
            How we are building it
          </h2>

          <p>
            We are not building Sprout and Vine in a room by ourselves and releasing it to the world when it is perfect. We do not think that approach works for software that has to fit as specifically as this does.
          </p>

          <p>
            We are building it with a small cohort of founding operators who represent the range of people this platform needs to serve: licensed centres, home providers, aspiring operators who are not yet open, and multi-location organizations. They give us feedback every week. They tell us what is wrong before we ship it to everyone. They are shaping the roadmap in real time.
          </p>

          <p>
            This blog is part of that same principle. We will write here about what we are building, what we are learning, what we got wrong, and what changed our minds. If you are an operator reading this, I would rather you know exactly where we are than have you find out after the fact.
          </p>

          <h2 className="font-display font-medium text-forest-green text-[28px] mt-10 mb-4">
            What is next
          </h2>

          <p>
            The Founding Operators Program is open now. We are accepting applications from licensed centres, home providers, and aspiring operators across Canada. Founding members get early access, pricing locked before public launch, and a direct line to our team.
          </p>

          <p>
            If you are an operator and this sounds like something you have needed, I would like to hear from you. Not to sell you something. To understand what you are dealing with and whether what we are building is actually the right answer for you.
          </p>

          <p>
            That conversation has been the most important thing we have done so far. I expect that will remain true.
          </p>

        </div>

        {/* Author */}
        <div className="mt-14 pt-8 border-t border-[rgba(47,74,58,0.1)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-forest-green/15 flex items-center justify-center flex-shrink-0 text-[11px] font-bold text-forest-green">
              AO
            </div>
            <div>
              <p className="text-[14px] font-semibold text-dark-text">Ada Obidulu</p>
              <p className="text-[13px] text-dark-text/50 mt-0.5">Co-founder, Sprout &amp; Vine</p>
              <p className="text-[13px] text-dark-text/55 mt-2 leading-relaxed">
                Building Sprout &amp; Vine with the Canadian childcare operators who will use it every day.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-forest-green rounded-2xl p-8 text-center">
          <p className="font-display text-[22px] font-medium text-cream mb-3">
            Ready to be part of this?
          </p>
          <p className="text-[14px] text-cream/60 mb-6 leading-relaxed">
            The Founding Operators Program is open. Apply and help shape what Sprout &amp; Vine becomes.
          </p>
          <Link
            href="/founding"
            className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-[#d4724e] transition-colors"
          >
            Apply to the Founding Program
          </Link>
        </div>
      </div>
    </article>
  )
}
