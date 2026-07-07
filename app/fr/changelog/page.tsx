import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Journal des modifications | Sprout & Vine Care',
  description: 'Découvrez les nouveautés de Sprout & Vine Care: mises à jour du produit, améliorations et correctifs.',
  alternates: altFr('/fr/changelog'),
}

export default function FrChangelogPage() {
  return (
    <ComingSoon
      title="Nouveautés"
      description="Mises à jour du produit, améliorations et correctifs, tout en un seul endroit. Revenez bientôt pour nos premières entrées."
      backLabel="Voir les fonctionnalités"
      backHref="/fr/features"
    />
  )
}
