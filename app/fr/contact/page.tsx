import type { Metadata } from 'next'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact | Sprout & Vine',
  description: "Parlez à l'équipe Sprout & Vine. Démarrez votre essai gratuit ou prenez rendez-vous pour une démonstration.",
}

export default function FrContactPage() {
  return (
    <section className="bg-cream min-h-screen py-20 px-5 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">Contact</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-4" style={{ fontSize: 'clamp(34px, 4.5vw, 52px)' }}>
            Parlons de votre centre.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-10">
            Démarrez votre essai gratuit de 14 jours ou prenez rendez-vous pour une démonstration personnalisée.
          </p>
          <ContactForm />
        </div>

        {/* What to expect */}
        <div className="lg:pt-20">
          <div className="bg-white rounded-2xl p-8 sticky top-24" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
            <h2 className="font-display text-[22px] font-medium text-forest-green mb-6">À quoi s'attendre</h2>
            <ul className="space-y-5">
              {[
                { step: '01', text: "Nous vous répondrons dans l'heure (pendant les heures ouvrables)" },
                { step: '02', text: 'Une démonstration de 20 minutes adaptée à votre centre' },
                { step: '03', text: 'Migration de vos données existantes incluse' },
                { step: '04', text: '14 jours gratuits, aucune carte de crédit requise' },
              ].map(item => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-display text-[28px] font-medium text-sage-green/40 leading-none flex-shrink-0">{item.step}</span>
                  <p className="text-[14px] text-dark-text/65 leading-relaxed pt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
