export function TermsOfService() {
  return (
    <section id="cgv" className="relative bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Conditions Générales de Vente</h1>
        <div className="mt-8 space-y-6 text-white/72">
          <div>
            <h2 className="text-lg font-semibold text-white">1. Objet</h2>
            <p>Les présentes conditions générales régissent la vente de RingConn Gen 2 Air et l'accès aux services associés.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">2. Prix et Paiement</h2>
            <p>Les prix affichés sont en EUR, toutes taxes comprises. Le paiement s'effectue via Stripe Checkout, plateforme sécurisée conforme PCI-DSS. Aucune charge n'est débité avant validation de la commande.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">3. Livraison</h2>
            <p>Les délais de livraison seront communiqués lors de la confirmation de précommande. Nous nous engageons à livrer dans les meilleurs délais. Les frais de port sont à la charge du client selon la zone géographique.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">4. Droit de Rétractation</h2>
            <p>Conformément à la loi, vous disposez d'un délai de 14 jours à partir de la livraison pour retourner le produit dans son emballage d'origine. Le remboursement sera effectué dans les 30 jours suivant la réception.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">5. Garantie</h2>
            <p>RingConn Gen 2 Air est couverte par une garantie de 2 ans contre les défauts de fabrication. Cette garantie ne couvre pas les dégâts accidentels, l'usure normale ou les modifications non autorisées.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">6. Responsabilité</h2>
            <p>RingConn n'est pas responsable des données personnelles perdues, des infections informatiques ou de tout dommage indirect résultant de l'utilisation du produit ou de l'application.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrivacyPolicy() {
  return (
    <section id="privacy" className="relative bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Politique de Confidentialité</h1>
        <div className="mt-8 space-y-6 text-white/72">
          <div>
            <h2 className="text-lg font-semibold text-white">1. Collecte des Données</h2>
            <p>RingConn collecte uniquement les données nécessaires pour fonctionner : données de santé (sommeil, cœur, stress), données d'activité, informations de compte, et données de paiement (traitées par Stripe). Aucune donnée n'est collectée sans votre consentement explicite.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">2. Utilisation des Données</h2>
            <p>Vos données de santé sont utilisées exclusivement pour : améliorer votre suivi personnel, générer vos rapports et insights, améliorer la précision de l'IA. Nous ne vendons jamais vos données à des tiers sans consentement préalable.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">3. Sécurité</h2>
            <p>Vos données sont chiffrées bout en bout entre votre appareil et nos serveurs. Nous utilisons le chiffrement AES-256, le protocole TLS 1.3, et stockons les données sur des serveurs sécurisés conformes ISO 27001.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">4. Droits RGPD</h2>
            <p>Vous avez le droit d'accéder, rectifier, ou supprimer vos données. Vous pouvez exporter vos données de santé à tout moment au format standard. Pour exercer ces droits, contactez privacy@ringconn.com.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">5. Cookies</h2>
            <p>Nous utilisons des cookies pour l'authentification, la préférence de langue, et l'analyse anonyme du site. Vous pouvez refuser les cookies de suivi via la banneau de consentement au bas de la page.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">6. Durée de Conservation</h2>
            <p>Vos données de santé sont conservées aussi longtemps que votre compte est actif. Après suppression de compte, les données sont effacées dans les 30 jours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalNotice() {
  return (
    <section id="rgpd" className="relative bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Mentions Légales</h1>
        <div className="mt-8 space-y-6 text-white/72">
          <div>
            <h2 className="text-lg font-semibold text-white">Éditeur du Site</h2>
            <p>
              RingConn SAS<br />
              Siège social : [Adresse à compléter]<br />
              SIRET : [Numéro à compléter]<br />
              Contact : contact@ringconn.com
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Directeur de Publication</h2>
            <p>Loïc Rossignol</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Conception et Réalisation</h2>
            <p>
              Propulsé par <strong>LORN Digital Studio</strong><br />
              <a href="https://lorndigitalstudio.com" className="text-[#FA93FA] hover:underline">lorndigitalstudio.com</a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Hébergement</h2>
            <p>
              GitHub Pages<br />
              https://pages.github.com
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Déclaration CNIL</h2>
            <p>RingConn est conforme au RGPD (UE) 2016/679 et à la loi Informatique et Libertés. Les données personnelles sont traitées de manière sécurisée et transparente.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Propriété Intellectuelle</h2>
            <p>Le contenu du site (textes, images, logos) est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Responsabilité</h2>
            <p>RingConn n'est pas responsable des liens externes ou des contenus de tiers. Le site est fourni "tel quel" sans garantie de disponibilité permanente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <section id="contact" className="relative bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Nous Contacter</h1>
        <div className="mt-8 space-y-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Support Produit</h2>
            <p className="mt-2 text-white/72">Avez-vous une question sur RingConn ou besoin d'aide avec votre bague ?</p>
            <p className="mt-4 text-white">support@ringconn.com</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Confidentialité & Données</h2>
            <p className="mt-2 text-white/72">Demande d'accès, rectification ou suppression de données personnelles</p>
            <p className="mt-4 text-white">privacy@ringconn.com</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Partenariats & Presse</h2>
            <p className="mt-2 text-white/72">Collaborations, interviews, ou demandes médias</p>
            <p className="mt-4 text-white">press@ringconn.com</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Créé par</h2>
            <p className="mt-2 text-white/72">Design, développement et stratégie numérique</p>
            <p className="mt-4">
              <a href="https://lorndigitalstudio.com" target="_blank" rel="noopener noreferrer" className="text-[#FA93FA] hover:underline">
                LORN Digital Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
