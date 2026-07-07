import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Carrières | Sprout & Vine Care',
  description: 'Rejoignez l\'équipe Sprout & Vine Care. Aidez-nous à créer de meilleurs outils pour les services de garde canadiens.',
  alternates: altFr('/fr/careers'),
}

export default function FrCareersPage() {
  return (
    <ComingSoon
      title="Grandissez avec nous"
      description="Nous sommes une petite équipe concentrée qui construit des outils qui aident vraiment les centres de garde canadiens à prospérer. Nous afficherons les postes vacants ici lorsque nous serons prêts à grandir."
      backLabel="En savoir plus sur nous"
      backHref="/fr/about"
    />
  )
}
