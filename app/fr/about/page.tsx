import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos | Sprout & Vine',
  description: "Sprout & Vine est développé pour offrir aux opérateurs canadiens de services de garde une infrastructure moderne et apaisante.",
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">{children}</p>
}

const values = [
  { icon: '🌱', title: 'Croissance', desc: "Chaque fonctionnalité que nous construisons aide les centres à se développer, qu'il s'agisse d'accueillir plus d'enfants, de réduire la charge administrative ou d'améliorer l'expérience des familles." },
  { icon: '🤝', title: 'Connexion', desc: "Les meilleures garderies prospèrent grâce aux relations. Nous construisons des outils qui renforcent les liens entre les éducateurs, les familles et les enfants." },
  { icon: '🛡️', title: 'Confiance', desc: "Les parents nous confient ce qui leur est le plus précieux. Nous prenons la sécurité des données, la confidentialité et la fiabilité très au sérieux." },
  { icon: '💚', title: 'Soin', desc: "Nous sommes au service de personnes qui prennent soin des enfants. Cette responsabilité guide tout ce que nous faisons, de la conception à l'assistance." },
]

export default function FrAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-20 pb-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>À Propos</SectionLabel>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-6" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            Construire l'infrastructure dont les garderies canadiennes méritent.
          </h1>
          <p className="text-[18px] text-dark-text/60 leading-relaxed max-w-2xl">
            Sprout & Vine est développé avec une mission simple: donner aux opérateurs canadiens de services de garde le temps et la clarté pour se concentrer sur les enfants.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Notre Mission</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-6" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}>
              Les garderies méritent une technologie aussi attentionnée que leur travail.
            </h2>
            <p className="text-[15px] text-dark-text/65 leading-relaxed mb-5">
              Les directeurs de garderies canadiennes jonglent avec les présences, la facturation, les subventions PÉLCN, la communication avec les familles et les demandes réglementaires provinciales, souvent avec des outils fragmentés qui ne se parlent pas.
            </p>
            <p className="text-[15px] text-dark-text/65 leading-relaxed">
              Nous avons construit Sprout & Vine parce que ce problème avait une solution évidente. Une plateforme calme et intégrée, construite spécifiquement pour le contexte canadien.
            </p>
          </div>
          <div className="bg-forest-green/[0.04] rounded-3xl p-10 border border-forest-green/10">
            <p className="font-display text-[22px] font-medium text-forest-green leading-relaxed italic">
              "Chaque minute consacrée à la paperasse est une minute de moins avec les enfants. Nous existons pour récupérer ces minutes."
            </p>
            <p className="text-[13px] text-dark-text/45 mt-5 font-medium">Équipe Sprout & Vine</p>
          </div>
        </div>
      </section>

      {/* Proudly Canadian */}
      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Fièrement canadien</SectionLabel>
          <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
            Construit au Canada, pour le Canada.
          </h2>
          <p className="text-[15px] text-dark-text/65 leading-relaxed max-w-2xl">
            Sprout & Vine est une entreprise canadienne. Nous opérons depuis le Canada, avec des données stockées au Canada, pour des opérateurs canadiens.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Nos Valeurs</SectionLabel>
          <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-12" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}>
            Ce qui nous guide chaque jour.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map(v => (
              <div key={v.title} className="flex gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 bg-forest-green/[0.06]">{v.icon}</div>
                <div>
                  <h3 className="font-display text-[20px] font-medium text-forest-green mb-2">{v.title}</h3>
                  <p className="text-[14px] text-dark-text/60 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-cream font-medium leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
            Rejoignez des centres partout au Canada.
          </h2>
          <p className="text-cream/65 text-[16px] leading-relaxed mb-10">
            Commencez gratuitement. Aucune carte de crédit requise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/founding" className="bg-terracotta text-white text-[14px] font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity">
              Programme des opérateurs fondateurs
            </Link>
            <Link href="/fr/contact" className="text-cream/75 text-[14px] font-medium hover:text-cream transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
