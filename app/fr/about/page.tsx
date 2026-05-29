import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notre histoire | Ada et Chuck, cofondateurs de Sprout & Vine',
  description: 'Sprout & Vine a été fondé par Ada et Chuck après l\'arrivée de leur premier enfant et une recherche difficile sur le fonctionnement réel du système de garde d\'enfants au Canada. Lisez leur histoire.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

export default function FrAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Notre histoire</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5.5vw, 66px)' }}
          >
            Nous avons eu notre premier bébé et nous en sommes tombés complètement amoureux.
          </h1>
          <p className="text-[18px] text-dark-text/65 leading-relaxed">
            C&apos;est ainsi que Sprout &amp; Vine a commencé. Pas avec un plan d&apos;affaires. Avec un sentiment.
          </p>
        </div>
      </section>

      {/* Founder narrative */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 text-[17px] text-dark-text/75 leading-relaxed">

            <p>
              Quand notre premier enfant est arrivé, quelque chose a changé en moi que je n&apos;avais pas vraiment anticipé. Je voulais rester proche de ce monde: celui des jeunes enfants, de l&apos;apprentissage précoce, de ces premières années extraordinaires. Et comme beaucoup de nouveaux parents, j&apos;ai commencé à me demander à quoi cela ressemblait en tant que carrière. Pourrais-je ouvrir une garderie en milieu familial? Pourrais-je m&apos;occuper d&apos;un petit groupe d&apos;enfants et faire ce travail qui semblait soudainement si important?
            </p>

            <p>
              Alors j&apos;ai commencé à faire des recherches. Et je me suis heurté à un mur.
            </p>

            <p>
              Il n&apos;existait pas un seul endroit qui expliquait comment tout cela fonctionnait. Les exigences de licence étaient enfouies dans des PDF gouvernementaux. Le financement PÉLCPN, qui est censé aider les nouveaux opérateurs à démarrer, était presque impossible à naviguer sans connaître déjà quelqu&apos;un à l&apos;intérieur du système. Les agences, les ratios, les exigences d&apos;espace, les inspections, les assurances: chaque information vivait quelque part de différent, rédigée pour des gens qui savaient déjà ce qu&apos;ils faisaient.
            </p>

            <p>
              Je me disais continuellement: si je me bats pour trouver cette information, et que j&apos;ai une formation en opérations et en succès client, comment est-ce pour quelqu&apos;un qui n&apos;en a pas?
            </p>

            <p>
              Je continuais aussi à rencontrer le problème des listes d&apos;attente. Le Canada est en crise de garde d&apos;enfants que tout le monde reconnaît et que personne ne semble résoudre. Les familles attendent deux ou trois ans pour une place en service licencié. Les parents qui travaillent font des choix impossibles. Et pendant ce temps, il y a des gens qui veulent sincèrement s&apos;occuper d&apos;enfants, qui sont appelés à ce travail, qui pourraient ouvrir une garderie en milieu familial demain s&apos;ils savaient simplement comment.
            </p>

          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-medium text-cream leading-relaxed" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
            Le manque n&apos;est pas la passion.<br />Le manque est l&apos;information et l&apos;infrastructure.
          </p>
          <p className="text-[16px] text-cream/65 mt-6 leading-relaxed">
            C&apos;est pourquoi Sprout &amp; Vine existe.
          </p>
        </div>
      </section>

      {/* Continued narrative */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 text-[17px] text-dark-text/75 leading-relaxed">

            <p>
              Je suis venue au Canada depuis le Nigéria à l&apos;âge de seize ans. Je sais ce que c&apos;est de naviguer dans un système qui n&apos;a pas été conçu pour vous, de poser des questions auxquelles les autres semblent déjà avoir les réponses, de travailler dur juste pour trouver la ligne de départ. J&apos;ai passé des années dans l&apos;hôtellerie comme cheffe, barman et serveuse de banquet, apprenant à travailler sous pression et à prendre soin des gens. J&apos;ai vécu un rêve comme agente de bord. J&apos;ai finalement atterri dans le SaaS, dans le succès client et les opérations, où j&apos;ai appris comment un bon logiciel change la vie professionnelle des gens.
            </p>

            <p>
              Quand j&apos;ai présenté cette idée à Chuck, il n&apos;a pas hésité. C&apos;est ça, Chuck. Il a commencé sa carrière comme chimiste, ce qui lui a donné une façon d&apos;aborder les problèmes qui n&apos;a de sens que lorsqu&apos;on l&apos;a regardé travailler. Il a trouvé son chemin vers le logiciel, a passé des années dans l&apos;univers Salesforce, et est devenu le genre de développeur qui aime vraiment ce qu&apos;il fait. Il ne construit pas Sprout &amp; Vine parce que c&apos;est une bonne opportunité. Il le construit parce qu&apos;il y croit. Cela compte plus pour moi que tout ce qui figure sur son curriculum vitae.
            </p>

            <p>
              Ensemble, nous construisons la plateforme que j&apos;aurais souhaité voir exister quand j&apos;ai commencé à faire des recherches sur la garde d&apos;enfants: un guide consolidé, étape par étape, qui accompagne les opérateurs aspirants de l&apos;idée jusqu&apos;à l&apos;ouverture. Un système de conformité qui fait le gros du travail pour que les opérateurs puissent se concentrer sur les enfants. Un outil conçu spécifiquement pour le Canada, pour le PÉLCPN, pour nos provinces, pour nos réglementations, et non adapté d&apos;un produit américain qui ne comprend pas comment notre système fonctionne.
            </p>

            <p>
              Nous voulons que chaque personne appelée à prendre soin d&apos;enfants au Canada ait un chemin clair et honnête pour le faire. Et nous voulons que chaque parent qui dépose son enfant ressente une véritable tranquillité d&apos;esprit.
            </p>

            <p>
              Nous construisons cela maintenant. Nous ne sommes pas encore lancés, et nous ne nous lancerons pas avant que ce soit bien fait. Pendant que nous construisons, nous avons mis tout ce que nous savons sur la conformité en matière de garde d&apos;enfants au Canada en un seul endroit, gratuitement, pour quiconque en a besoin. Et nous cherchons cinquante opérateurs fondateurs pour nous aider à construire quelque chose qui vaut la peine d&apos;être construit.
            </p>

            <p>
              Je crois que nous sommes appelés au travail qui se trouve juste devant nous. Pour moi, en ce moment, c&apos;est celui-ci.
            </p>

            <p>
              Si c&apos;est vous, nous serions ravis de vous entendre.
            </p>

          </div>

          <p className="mt-10 text-[15px] font-medium text-dark-text/60">
            Ada, cofondatrice, Sprout &amp; Vine
          </p>
        </div>
      </section>

      {/* Founder bios */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Les fondateurs</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.1] mb-12"
            style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}
          >
            Nous sommes une petite équipe qui fait un travail sérieux.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <p className="text-[18px] font-semibold text-dark-text mb-1">Ada</p>
              <p className="text-[13px] text-dark-text/45 mb-4 uppercase tracking-[0.08em] font-medium">Cofondatrice</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                Nigériane-Canadienne. Elle a passé sa carrière à apprendre à prendre soin des gens et à construire des choses qui fonctionnent. Elle fait maintenant les deux à la fois.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <p className="text-[18px] font-semibold text-dark-text mb-1">Chuck</p>
              <p className="text-[13px] text-dark-text/45 mb-4 uppercase tracking-[0.08em] font-medium">Cofondateur</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                A commencé comme chimiste, ce qui s&apos;avère être une excellente formation pour résoudre des problèmes que personne n&apos;a résolus avant. Il a trouvé son chemin vers le logiciel, passé des années à construire dans l&apos;univers Salesforce, et quelque part en cours de route est tombé complètement amoureux de ce que la bonne technologie peut faire pour les gens. Sprout &amp; Vine est la chose la plus importante qu&apos;il ait construite à ce jour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-12" style={{ fontSize: 'clamp(34px, 4vw, 48px)' }}>
            Ce en quoi nous croyons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">Les opérateurs méritent de vrais outils</h3>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                Pas des contournements. Pas des logiciels adaptés d&apos;ailleurs qui conviennent presque. Une plateforme conçue pour l&apos;environnement réglementaire réel, les flux de travail réels et les contraintes réelles de la gestion d&apos;un centre de garde canadien.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">Les éducateurs méritent de se concentrer sur les enfants</h3>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                Chaque minute qu&apos;un éducateur passe sur la paperasse est une minute qu&apos;il ne passe pas avec un enfant. Nous mesurons notre succès par le temps que nous redonnons aux personnes dans la salle.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">Les familles méritent d&apos;être informées</h3>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                Les parents qui vous font confiance sont plus que des familles inscrites. Ils sont vos plus forts défenseurs. Les bons outils rendent cette confiance facile à construire et facile à maintenir.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
              <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">Le Canada mérite une solution canadienne</h3>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">
                PÉLCPN, licences provinciales, exigences bilingues, résidence des données. Ce ne sont pas des cas particuliers. Ce sont les fondations. Nous construisons à partir de ces fondations, pas sur quelque chose qui les ignore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proudly Canadian */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-forest-green/10 text-forest-green text-[11px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-6">
            Fièrement canadien
          </span>
          <h2
            className="font-display font-medium text-forest-green leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
          >
            Fièrement construit au Canada.
          </h2>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Nous sommes une entreprise fièrement canadienne. Nos données restent au Canada. Notre attention reste sur le Canada. Notre équipe comprend le paysage réglementaire unique que chaque opérateur canadien navigue chaque jour.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              '🍁 Entreprise canadienne',
              '🔒 Données au Canada',
              '🌐 Entièrement bilingue (FR/EN)',
            ].map(chip => (
              <span
                key={chip}
                className="bg-white border border-[rgba(47,74,58,0.15)] text-dark-text/70 text-[13px] font-medium px-4 py-2 rounded-full"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-medium text-cream leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
          >
            Vous voulez nous aider à bien construire cela?
          </h2>
          <p className="text-[16px] text-cream/60 mb-10 leading-relaxed">
            Nous cherchons 50 opérateurs fondateurs partout au Canada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/founding"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Rejoindre le programme
            </Link>
            <Link
              href="/fr/features"
              className="text-cream text-[14px] font-medium px-8 py-4 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors"
            >
              Voir la plateforme
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
