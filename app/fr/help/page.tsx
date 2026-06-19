import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: "Centre d'aide | Sprout & Vine Care",
  description: 'Obtenez de l\'aide avec Sprout & Vine. Guides, tutoriels et réponses aux questions courantes.',
}

export default function FrHelpPage() {
  return (
    <ComingSoon
      title="Centre d'aide"
      description="Guides étape par étape, tutoriels vidéo et réponses aux questions courantes. Notre centre d'aide complet est en cours de préparation."
      backLabel="Nous contacter"
      backHref="/fr/contact"
    />
  )
}
