import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Carrières | Sprout & Vine',
  description: 'Rejoignez l\'équipe Sprout & Vine. Aidez-nous à créer de meilleurs outils pour les services de garde canadiens.',
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
