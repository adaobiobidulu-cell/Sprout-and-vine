import Link from 'next/link'

/*
 * Preview label for product mockups (website brief section 6).
 *
 * Sits ABOVE any major mockup that shows a not-yet-shipped feature, not
 * in a footnote. Presenting roadmap features as present-tense
 * capabilities is a deceptive-design pattern the OPC has flagged on
 * services aimed at children, so this is a privacy safeguard as much as
 * a trust nicety. While the platform is in development with founding
 * operators, every major product mockup carries it.
 *
 * FLAG FOR FR REVIEW: the French wording below awaits reviewer sign-off.
 */

export default function PreviewLabel({ lang = 'en' }: { lang?: 'en' | 'fr' }) {
  const isFr = lang === 'fr'
  return (
    <p className="text-[12.5px] text-dark-text/55 leading-relaxed mb-4 flex items-start gap-2">
      <span aria-hidden="true" className="mt-[3px] w-1.5 h-1.5 rounded-full bg-sage-green flex-shrink-0" />
      <span>
        {isFr ? (
          <>
            Aperçu de ce que nous construisons avec nos opérateurs fondateurs. Les fonctionnalités sont déployées par phases, comme l'indique notre{' '}
            <Link href="/roadmap" className="text-forest-green font-medium hover:underline underline-offset-4">
              feuille de route publique
            </Link>
            .
          </>
        ) : (
          <>
            Preview of what we are building with founding operators. Features roll out in phases, as shown on our{' '}
            <Link href="/roadmap" className="text-forest-green font-medium hover:underline underline-offset-4">
              public roadmap
            </Link>
            .
          </>
        )}
      </span>
    </p>
  )
}
