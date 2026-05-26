import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Blogue | Sprout & Vine',
  description: "Réflexions sur la gestion des services de garde, le financement PÉLCN et la gestion d'un centre de la petite enfance prospère au Canada.",
}

export default function FrBlogPage() {
  return (
    <ComingSoon
      title="Le blogue Sprout & Vine"
      description="Réflexions sur la gestion des services de garde, le financement PÉLCN et la gestion d'un centre de la petite enfance prospère au Canada. Bientôt disponible."
      backLabel="Retour à l'accueil"
      backHref="/fr"
    />
  )
}
