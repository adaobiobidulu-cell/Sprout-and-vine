import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Sprout & Vine",
  description: "Les conditions régissant votre utilisation de la plateforme et des services Sprout & Vine.",
}

const toc = [
  { id: 'agreement', label: "1. Acceptation des conditions" },
  { id: 'services', label: '2. Description des services' },
  { id: 'accounts', label: '3. Comptes et accès' },
  { id: 'payment', label: '4. Abonnement et paiement' },
  { id: 'data', label: '5. Vos données' },
  { id: 'acceptable-use', label: '6. Utilisation acceptable' },
  { id: 'ip', label: '7. Propriété intellectuelle' },
  { id: 'termination', label: '8. Résiliation' },
  { id: 'disclaimers', label: '9. Exclusions de garantie' },
  { id: 'liability', label: '10. Limitation de responsabilité' },
  { id: 'indemnification', label: '11. Indemnisation' },
  { id: 'governing-law', label: '12. Droit applicable' },
  { id: 'changes', label: '13. Modifications des conditions' },
  { id: 'contact', label: '14. Contact' },
]

export default function FrTermsPage() {
  return (
    <LegalLayout
      title="Conditions d'utilisation"
      effectiveDate="1er janvier 2026"
      lastUpdated="1er mai 2026"
      toc={toc}
    >
      <h2 id="agreement">1. Acceptation des conditions</h2>
      <p>
        Les présentes conditions d'utilisation («&nbsp;Conditions&nbsp;») constituent un accord légalement
        contraignant entre vous et <strong>Prime Horizon Inc.</strong> («&nbsp;Prime Horizon&nbsp;», «&nbsp;nous&nbsp;»,
        «&nbsp;notre&nbsp;» ou «&nbsp;nos&nbsp;»), exploitant sous le nom de <strong>Sprout &amp; Vine</strong>,
        régissant votre utilisation de notre plateforme de gestion de services de garde, du site web
        sproutandvine.ca et des services connexes (collectivement, les «&nbsp;Services&nbsp;»).
      </p>
      <p>
        En créant un compte, en cliquant sur «&nbsp;J'accepte&nbsp;» ou en utilisant les Services, vous confirmez
        avoir lu, compris et accepté d'être lié par les présentes Conditions et notre{' '}
        <a href="/fr/privacy">Politique de confidentialité</a>, incorporée par référence.
      </p>
      <p>
        Si vous n'acceptez pas ces Conditions, vous n'êtes pas autorisé à utiliser les Services.
      </p>

      <h2 id="services">2. Description des services</h2>
      <p>
        Sprout &amp; Vine est une plateforme de gestion de services de garde hébergée dans le nuage pour les
        exploitants canadiens. La plateforme comprend des fonctionnalités pour le suivi des présences, la
        facturation et les paiements, la gestion des subventions PÉLCN, la communication avec les familles,
        les rapports quotidiens, la gestion des inscriptions et des listes d'attente, et l'Autorisation de
        collecte sécurisée.
      </p>
      <p>
        Nous offrons trois niveaux d'abonnement : <strong>Seeds</strong> (gratuit), <strong>Sprout</strong>{' '}
        (payant mensuel ou annuel) et <strong>Vine</strong> (entreprise, tarification personnalisée). La
        disponibilité des fonctionnalités varie selon le niveau tel que décrit sur notre{' '}
        <a href="/fr/pricing">page de tarification</a>.
      </p>

      <h2 id="accounts">3. Comptes et accès</h2>

      <h3>Inscription</h3>
      <p>
        Pour accéder à la plupart des fonctionnalités, vous devez créer un compte et fournir des informations
        exactes, actuelles et complètes. Vous vous engagez à maintenir à jour les informations de votre compte.
      </p>

      <h3>Sécurité du compte</h3>
      <p>
        Vous êtes responsable de la confidentialité de vos identifiants de connexion. Vous devez nous aviser
        immédiatement à{' '}
        <a href="mailto:support@sproutandvine.ca">support@sproutandvine.ca</a> si vous soupçonnez un accès non
        autorisé à votre compte.
      </p>

      <h3>Utilisateurs autorisés</h3>
      <p>
        Vous pouvez inviter des membres du personnel et des éducateurs de votre centre à utiliser la plateforme
        sous votre compte. Vous êtes responsable de toutes les activités effectuées sous votre compte, y compris
        les actions de tout utilisateur invité.
      </p>

      <h2 id="payment">4. Abonnement et paiement</h2>

      <h3>Frais</h3>
      <p>
        Les abonnements payants (Sprout et Vine) sont facturés en <strong>dollars canadiens (CAD)</strong>.
        Les tarifs actuels sont affichés sur notre <a href="/fr/pricing">page de tarification</a> et peuvent
        être modifiés avec un préavis écrit de 30 jours.
      </p>

      <h3>Cycle de facturation</h3>
      <p>
        Les abonnements Sprout sont facturés mensuellement ou annuellement selon votre choix. Les abonnements
        annuels sont facturés en totalité au début de chaque période de facturation.
      </p>

      <h3>Annulation et remboursements</h3>
      <p>
        Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte ou en nous
        contactant. L'annulation prend effet à la fin de la période de facturation en cours — vous conserverez
        un accès complet jusqu'à cette date. Nous n'effectuons pas de remboursements au prorata pour le temps
        non utilisé dans une période de facturation, sauf lorsque la loi l'exige.
      </p>

      <h2 id="data">5. Vos données</h2>

      <h3>Propriété des données</h3>
      <p>
        Vous conservez la pleine propriété de toutes les données que vous saisissez dans la plateforme,
        y compris les informations sur votre centre, votre personnel, les enfants à votre charge et les familles
        («&nbsp;Données client&nbsp;»). Nous ne revendiquons aucun droit de propriété sur vos Données client.
      </p>

      <h3>Exportation des données</h3>
      <p>
        Vous pouvez exporter vos Données client à tout moment via les outils d'exportation de la plateforme.
        Lors de la résiliation de votre compte, vous disposerez de 30 jours pour exporter vos données avant
        leur suppression de nos systèmes.
      </p>

      <h3>Vos responsabilités</h3>
      <p>
        Vous êtes responsable de vous assurer que vous avez le droit légal de saisir des informations sur les
        enfants et les familles dans la plateforme, notamment en obtenant le consentement approprié des parents
        et tuteurs conformément aux règlements provinciaux applicables sur les services de garde et à la LPRPDE.
      </p>

      <h2 id="acceptable-use">6. Utilisation acceptable</h2>
      <p>Vous vous engagez à ne pas :</p>
      <ul>
        <li>Utiliser les Services à des fins illégales ou en violation de toute loi ou réglementation applicable.</li>
        <li>Usurper l'identité d'une personne ou d'une entité, ou représenter faussement votre affiliation.</li>
        <li>Télécharger ou transmettre des logiciels malveillants, virus ou tout code conçu pour nuire.</li>
        <li>Tenter d'obtenir un accès non autorisé à toute partie des Services ou à notre infrastructure.</li>
        <li>Revendre, concéder sous licence ou commercialiser les Services sans notre accord écrit exprès.</li>
        <li>Violer les droits à la vie privée de toute personne, y compris les enfants inscrits à votre centre.</li>
      </ul>

      <h2 id="ip">7. Propriété intellectuelle</h2>
      <p>
        La plateforme Sprout &amp; Vine, y compris ses logiciels, sa conception, son interface utilisateur,
        ses marques de commerce, ses logos et toute propriété intellectuelle connexe, appartient à Prime Horizon
        Inc. et est protégée par les lois canadiennes et internationales sur la propriété intellectuelle.
      </p>
      <p>
        Vous conservez tous les droits sur vos Données client. En saisissant des Données client dans la
        plateforme, vous nous accordez une licence limitée pour traiter ces données uniquement aux fins de
        fournir et d'améliorer les Services.
      </p>

      <h2 id="termination">8. Résiliation</h2>
      <p>
        Vous pouvez résilier votre compte à tout moment via les paramètres de votre compte. Nous pouvons
        suspendre ou résilier votre compte immédiatement si nous avons des raisons de croire que vous avez
        substantiellement enfreint les présentes Conditions.
      </p>

      <h2 id="disclaimers">9. Exclusions de garantie</h2>
      <p>
        LES SERVICES SONT FOURNIS «&nbsp;TELS QUELS&nbsp;» ET «&nbsp;SELON DISPONIBILITÉ&nbsp;» SANS GARANTIE
        D'AUCUNE SORTE. DANS LA MESURE PERMISE PAR LA LOI APPLICABLE, PRIME HORIZON INC. EXCLUT EXPRESSÉMENT
        TOUTES LES GARANTIES, QU'ELLES SOIENT EXPRESSES, IMPLICITES, LÉGALES OU AUTRES.
      </p>
      <p>
        Nous ne garantissons pas que les Services seront ininterrompus ou exempts d'erreurs. Nous ne garantissons
        pas l'exactitude des calculs de subventions PÉLCN — vous restez responsable de vérifier la conformité
        réglementaire auprès de votre autorité provinciale.
      </p>

      <h2 id="liability">10. Limitation de responsabilité</h2>
      <p>
        DANS LA MESURE MAXIMALE PERMISE PAR LA LOI APPLICABLE, PRIME HORIZON INC. ET SES DIRIGEANTS, ADMINISTRATEURS,
        EMPLOYÉS ET AGENTS NE SERONT PAS RESPONSABLES DES DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS
        OU PUNITIFS.
      </p>
      <p>
        NOTRE RESPONSABILITÉ TOTALE ENVERS VOUS POUR TOUTES LES RÉCLAMATIONS NE DÉPASSERA PAS LE PLUS ÉLEVÉ DES
        MONTANTS SUIVANTS : (A) LES FRAIS TOTAUX QUE VOUS NOUS AVEZ PAYÉS AU COURS DES DOUZE (12) MOIS PRÉCÉDANT
        LA RÉCLAMATION, OU (B) CENT DOLLARS CANADIENS (100 $ CAD).
      </p>

      <h2 id="indemnification">11. Indemnisation</h2>
      <p>
        Vous acceptez d'indemniser et de dégager de toute responsabilité Prime Horizon Inc. et ses affiliés,
        dirigeants, administrateurs, employés et agents contre toute réclamation, responsabilité, dommage, perte
        et dépense (y compris les honoraires d'avocat raisonnables) découlant de votre utilisation des Services,
        de votre violation des présentes Conditions ou de vos Données client.
      </p>

      <h2 id="governing-law">12. Droit applicable et règlement des différends</h2>
      <p>
        Les présentes Conditions sont régies par les lois de la <strong>province d'Ontario</strong> et les lois
        fédérales du Canada qui s'y appliquent, sans égard aux principes de conflit de lois.
      </p>
      <p>
        Tout différend qui ne peut être résolu à l'amiable sera soumis à la juridiction exclusive des tribunaux
        de la province d'Ontario, Canada. Avant d'engager toute procédure légale, vous acceptez de tenter de
        résoudre les différends en nous contactant à{' '}
        <a href="mailto:legal@sproutandvine.ca">legal@sproutandvine.ca</a> en nous accordant 30 jours pour
        répondre.
      </p>

      <h2 id="changes">13. Modifications des conditions</h2>
      <p>
        Nous pouvons mettre à jour les présentes Conditions de temps à autre. Lorsque nous apportons des
        modifications importantes, nous vous en informerons par courriel et en affichant un avis sur la
        plateforme au moins 30 jours avant l'entrée en vigueur des modifications. Votre utilisation continue
        des Services après la date d'entrée en vigueur constitue une acceptation des Conditions révisées.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        Pour toute question concernant les présentes Conditions, communiquez avec nous à :
      </p>
      <p>
        <strong>Prime Horizon Inc.</strong> (exploitant sous le nom de Sprout &amp; Vine)<br />
        <a href="mailto:legal@sproutandvine.ca">legal@sproutandvine.ca</a>
      </p>
      <p>
        Pour les questions relatives à la vie privée, consultez notre{' '}
        <a href="/fr/privacy">Politique de confidentialité</a> ou écrivez à{' '}
        <a href="mailto:privacy@sproutandvine.ca">privacy@sproutandvine.ca</a>.
      </p>
    </LegalLayout>
  )
}
