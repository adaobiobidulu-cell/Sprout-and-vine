import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Feuille de route | Sprout & Vine',
  description: 'Découvrez ce qui arrive prochainement sur Sprout & Vine.',
}

export default function FrRoadmapPage() {
  return (
    <ComingSoon
      title="Feuille de route produit"
      description="Découvrez ce que nous construisons ensuite. Nous partageons notre feuille de route publiquement afin que vous sachiez exactement où nous allons."
      backLabel="Voir les fonctionnalités actuelles"
      backHref="/fr/features"
    />
  )
}
