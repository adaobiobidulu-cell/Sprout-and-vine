import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Sprout & Vine',
  description: 'Comment Sprout & Vine collecte, utilise et protège vos renseignements personnels.',
}

const toc = [
  { id: 'about', label: '1. À propos de cette politique' },
  { id: 'who-we-are', label: '2. Qui nous sommes' },
  { id: 'information-collected', label: '3. Renseignements collectés' },
  { id: 'how-we-use', label: '4. Utilisation de vos renseignements' },
  { id: 'sharing', label: '5. Partage de vos renseignements' },
  { id: 'storage-security', label: '6. Stockage et sécurité' },
  { id: 'retention', label: '7. Conservation' },
  { id: 'your-rights', label: '8. Vos droits à la vie privée' },
  { id: 'cookies', label: '9. Témoins et suivi' },
  { id: 'third-parties', label: '10. Services tiers' },
  { id: 'children', label: '11. Données sur les enfants' },
  { id: 'changes', label: '12. Modifications de la politique' },
  { id: 'contact', label: '13. Nous contacter' },
]

export default function FrPrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      effectiveDate="1er janvier 2026"
      lastUpdated="1er mai 2026"
      toc={toc}
    >
      <h2 id="about">1. À propos de cette politique</h2>
      <p>
        La présente politique de confidentialité explique comment <strong>Sprout &amp; Vine</strong>{' '}
        («&nbsp;nous&nbsp;», «&nbsp;notre&nbsp;» ou «&nbsp;nos&nbsp;») collecte, utilise, divulgue et protège les renseignements personnels
        lorsque vous utilisez notre plateforme, le site web sproutandvine.ca et les services connexes
        (collectivement, les «&nbsp;Services&nbsp;»).
      </p>
      <p>
        En accédant aux Services ou en les utilisant, vous consentez à la collecte et à l'utilisation de vos
        renseignements tels que décrits dans la présente politique. Si vous n'y consentez pas, veuillez cesser
        d'utiliser les Services.
      </p>

      <h2 id="who-we-are">2. Qui nous sommes</h2>
      <p>
        Sprout &amp; Vine est une entreprise canadienne. Notre plateforme de gestion de services de garde
        est conçue pour les exploitants canadiens. Les demandes relatives à la vie privée peuvent être
        acheminées à{' '}
        <a href="mailto:privacy@sproutandvine.ca">privacy@sproutandvine.ca</a>.
      </p>
      <p>
        Nous sommes assujettis à la <strong>Loi sur la protection des renseignements personnels et les documents
        électroniques (LPRPDE)</strong> et, pour les exploitants et utilisateurs au Québec, à la{' '}
        <strong>Loi modernisant des dispositions législatives en matière de protection des renseignements
        personnels (Loi 25 / projet de loi 64)</strong>.
      </p>

      <h2 id="information-collected">3. Renseignements collectés</h2>

      <h3>Renseignements que vous fournissez directement</h3>
      <ul>
        <li><strong>Informations de compte :</strong> votre nom, adresse courriel, numéro de téléphone et le nom de votre centre de garde lors de votre inscription ou de vos communications avec nous.</li>
        <li><strong>Détails organisationnels :</strong> nom du centre, province, nombre d'enfants inscrits et autres détails opérationnels saisis lors de l'intégration.</li>
        <li><strong>Informations de paiement :</strong> coordonnées de facturation collectées par notre processeur de paiement (Stripe). Nous ne stockons pas les numéros de carte de crédit bruts sur nos serveurs.</li>
        <li><strong>Communications :</strong> messages que vous nous envoyez par courriel, formulaire de contact ou canaux de soutien intégrés.</li>
        <li><strong>Données opérationnelles :</strong> informations saisies sur votre centre, notamment les registres de présences, les données d'inscription, les rapports quotidiens et les journaux de communication avec les familles.</li>
      </ul>

      <h3>Renseignements collectés automatiquement</h3>
      <ul>
        <li><strong>Données d'utilisation :</strong> pages visitées, fonctionnalités utilisées, temps passé et actions effectuées sur la plateforme, collectés par des outils d'analyse.</li>
        <li><strong>Données de journal :</strong> adresse IP, type de navigateur, type d'appareil, URL de référence et horodatages d'accès.</li>
        <li><strong>Témoins (cookies) :</strong> petits fichiers de données déposés sur votre appareil. Voir la section 9 pour plus de détails.</li>
      </ul>

      <h3>Renseignements sur les enfants à votre charge</h3>
      <p>
        En tant qu'exploitant utilisant notre plateforme, vous pouvez saisir des informations sur les enfants
        inscrits à votre centre (noms, dates de naissance, registres de présences, étapes de développement).
        Ces informations sont saisies et contrôlées par vous, l'exploitant. Nous traitons ces données strictement
        en votre nom en tant que sous-traitant. Vous êtes responsable d'obtenir le consentement approprié des
        familles selon la loi applicable.
      </p>

      <h2 id="how-we-use">4. Utilisation de vos renseignements</h2>
      <p>Nous utilisons les renseignements collectés pour :</p>
      <ul>
        <li>Fournir, exploiter et maintenir la plateforme et les Services Sprout &amp; Vine.</li>
        <li>Traiter les paiements et gérer votre abonnement.</li>
        <li>Répondre à vos demandes d'assistance, questions et commentaires.</li>
        <li>Vous envoyer des communications relatives au service (avis de compte, alertes de sécurité, reçus de facturation).</li>
        <li>Vous envoyer des mises à jour de produits et des annonces de fonctionnalités. Vous pouvez vous désabonner en tout temps.</li>
        <li>Surveiller et améliorer la performance, la sécurité et les fonctionnalités des Services.</li>
        <li>Respecter les obligations légales, y compris les exigences fiscales et réglementaires.</li>
      </ul>
      <p>Nous ne vendons pas vos renseignements personnels à des tiers.</p>

      <h2 id="sharing">5. Partage de vos renseignements</h2>
      <p>Nous partageons les renseignements personnels uniquement dans les circonstances suivantes :</p>
      <ul>
        <li><strong>Fournisseurs de services :</strong> nous partageons des données avec des fournisseurs de confiance qui nous aident à exploiter la plateforme (hébergement, traitement des paiements, livraison de courriels). Ces fournisseurs sont contractuellement tenus de protéger vos données et ne peuvent les utiliser que sur nos instructions.</li>
        <li><strong>Exigences légales :</strong> nous pouvons divulguer des renseignements lorsque la loi, une ordonnance du tribunal ou une autorité gouvernementale l'exige.</li>
        <li><strong>Transferts d'entreprise :</strong> en cas de fusion, acquisition ou vente d'actifs, vos renseignements pourraient être transférés. Nous vous en informerons avant que vos renseignements ne soient soumis à une politique de confidentialité différente.</li>
        <li><strong>Avec votre consentement :</strong> nous pouvons partager des renseignements à toute autre fin avec votre consentement explicite.</li>
      </ul>

      <h2 id="storage-security">6. Stockage et sécurité</h2>
      <p>
        Tous les renseignements personnels traités par Sprout &amp; Vine sont stockés sur des serveurs situés
        au <strong>Canada</strong>. Nous utilisons une infrastructure infonuagique hébergée dans des régions
        canadiennes.
      </p>
      <p>Nous protégeons vos données grâce à :</p>
      <ul>
        <li>Le chiffrement en transit (TLS 1.2+) et au repos.</li>
        <li>Des contrôles d'accès basés sur les rôles limitant qui, au sein de Sprout &amp; Vine, peut accéder aux données des utilisateurs.</li>
        <li>Des évaluations de sécurité régulières et une surveillance des vulnérabilités.</li>
        <li>Des journaux d'accès sécurisés et audités pour les actions administratives.</li>
      </ul>

      <h2 id="retention">7. Conservation</h2>
      <p>
        Nous conservons vos renseignements personnels aussi longtemps que votre compte est actif, plus une
        période de <strong>sept (7) ans</strong> suivant la résiliation du compte afin de respecter les obligations
        fiscales, comptables et réglementaires canadiennes.
      </p>
      <p>
        Vous pouvez demander la suppression de votre compte et des renseignements personnels associés en
        envoyant un courriel à{' '}
        <a href="mailto:privacy@sproutandvine.ca">privacy@sproutandvine.ca</a>. Nous donnerons suite à votre
        demande dans les 30 jours, sous réserve des exigences de conservation légales.
      </p>

      <h2 id="your-rights">8. Vos droits à la vie privée</h2>

      <h3>En vertu de la LPRPDE (toutes les provinces sauf le Québec)</h3>
      <p>Vous avez le droit de :</p>
      <ul>
        <li><strong>Accès :</strong> demander une copie des renseignements personnels que nous détenons à votre sujet.</li>
        <li><strong>Rectification :</strong> demander la correction de renseignements inexacts ou incomplets.</li>
        <li><strong>Retrait du consentement :</strong> retirer votre consentement à certaines utilisations, sous réserve de contraintes légales et contractuelles.</li>
        <li><strong>Plainte :</strong> déposer une plainte auprès du Commissariat à la protection de la vie privée du Canada à <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">priv.gc.ca</a>.</li>
      </ul>

      <h3>En vertu de la Loi 25 du Québec (résidents québécois)</h3>
      <p>En plus des droits accordés par la LPRPDE, les résidents du Québec ont le droit à :</p>
      <ul>
        <li><strong>La portabilité :</strong> recevoir une copie structurée et lisible par machine des renseignements personnels que vous nous avez fournis.</li>
        <li><strong>L'effacement :</strong> demander la suppression de vos renseignements personnels lorsqu'ils ne sont plus nécessaires aux fins pour lesquelles ils ont été collectés.</li>
        <li><strong>La limitation du traitement :</strong> demander que nous limitions la façon dont nous traitons vos données dans certaines circonstances.</li>
        <li><strong>Une plainte :</strong> auprès de la Commission d'accès à l'information du Québec (CAI) à <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer">cai.gouv.qc.ca</a>.</li>
      </ul>

      <p>
        Pour exercer l'un de ces droits, envoyez un courriel à{' '}
        <a href="mailto:privacy@sproutandvine.ca">privacy@sproutandvine.ca</a>. Nous répondrons dans les
        30 jours suivant la réception de votre demande.
      </p>

      <h2 id="cookies">9. Témoins et suivi</h2>
      <p>Nous utilisons des témoins (cookies) et des technologies similaires aux fins suivantes :</p>
      <ul>
        <li><strong>Témoins essentiels :</strong> nécessaires au bon fonctionnement de la plateforme (sessions d'authentification, jetons de sécurité). Ces témoins ne peuvent pas être désactivés.</li>
        <li><strong>Témoins d'analyse :</strong> nous aident à comprendre comment la plateforme est utilisée afin que nous puissions l'améliorer (Vercel Analytics). Ces témoins collectent des données anonymisées et agrégées.</li>
      </ul>
      <p>Nous n'utilisons pas de témoins publicitaires ni de témoins de suivi comportemental.</p>

      <h2 id="third-parties">10. Services tiers</h2>
      <p>Nous faisons appel aux principaux fournisseurs de services tiers suivants :</p>
      <ul>
        <li><strong>Vercel Inc.</strong>: hébergement du site web et livraison via réseau de périphérie. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a></li>
        <li><strong>Stripe Inc.</strong>: traitement des paiements. Stripe gère toutes les données de carte de paiement sous conformité PCI-DSS. <a href="https://stripe.com/fr-ca/privacy" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a></li>
        <li><strong>Google LLC</strong>: livraison de courriels transactionnels via Gmail SMTP. <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a></li>
      </ul>

      <h2 id="children">11. Données sur les enfants</h2>
      <p>
        Nos Services sont destinés aux exploitants de services de garde et à leur personnel, à savoir des adultes exploitant
        des installations de garde d'enfants agréées. Nous ne collectons pas sciemment de renseignements personnels
        directement auprès d'enfants de moins de 13 ans. Les renseignements sur les enfants inscrits à un centre
        de garde sont saisis par l'exploitant du centre et traités en son nom.
      </p>
      <p>
        Les exploitants sont responsables de s'assurer qu'ils ont obtenu le consentement approprié des parents
        et tuteurs pour saisir et traiter les renseignements concernant les enfants à leur charge, conformément
        aux règlements provinciaux sur les services de garde et à la LPRPDE.
      </p>

      <h2 id="changes">12. Modifications de la politique</h2>
      <p>
        Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre. Lorsque nous
        apportons des modifications importantes, nous vous en informerons par courriel et en affichant un avis
        bien visible sur la plateforme au moins 30 jours avant l'entrée en vigueur des modifications.
      </p>

      <h2 id="contact">13. Nous contacter</h2>
      <p>
        Pour toute question, demande ou plainte relative à la vie privée, communiquez avec nous à :
      </p>
      <p>
        <strong>Responsable de la protection des renseignements personnels</strong><br />
        Sprout &amp; Vine<br />
        <a href="mailto:privacy@sproutandvine.ca">privacy@sproutandvine.ca</a>
      </p>
      <p>
        Nous accuserons réception de votre demande dans les 2 jours ouvrables et y répondrons dans les
        30 jours civils. Si vous n'êtes pas satisfait de notre réponse, vous avez le droit de communiquer
        avec le Commissariat à la protection de la vie privée du Canada ou, pour les résidents du Québec,
        avec la Commission d'accès à l'information du Québec.
      </p>
    </LegalLayout>
  )
}
