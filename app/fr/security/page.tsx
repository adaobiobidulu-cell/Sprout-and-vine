import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Sécurité | Sprout & Vine',
  description: 'Comment Sprout & Vine protège les données de votre centre de garde.',
}

export default function FrSecurityPage() {
  return (
    <ComingSoon
      title="La sécurité chez Sprout & Vine"
      description="Nous prenons la sécurité des données très au sérieux. Notre aperçu complet de la sécurité, y compris le chiffrement, les contrôles d'accès et les détails de conformité, arrive bientôt."
      backLabel="Nous contacter"
      backHref="/fr/contact"
    />
  )
}
