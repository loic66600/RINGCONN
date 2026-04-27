import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Language = "fr" | "en";

type TranslationContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const STORAGE_KEY = "veyra-language";

const translations = {
  fr: {
    meta: {
      title: "RingConn Gen 2 Air | Bague connectee premium pour le sommeil, la sante et le bien-etre",
      description:
        "RingConn Gen 2 Air est une bague connectee premium et discrete pour suivre le sommeil, l'activite, la recuperation et le bien-etre.",
    },
    nav: {
      preorder: "Precommander",
      languageLabel: "Changer de langue",
    },
    hero: {
      videoLabel: "Video technologique premium en arriere-plan pour RingConn Gen 2 Air",
      ringAlt: "RingConn Gen 2 Air, bague connectee premium en metal sombre avec reflet violet",
      fallbackLabel: "Apercu stylise de RingConn Gen 2 Air",
      badge: "La bague connectee concue pour la performance moderne.",
      titleLine1: "Comprenez votre corps.",
      titleLine2: "Maitrisez votre energie.",
      description:
        "Decouvrez la bague connectee premium qui suit votre sommeil, votre activite, votre recuperation et vos indicateurs de bien-etre sans ecran, bruit ni distraction.",
      primaryCta: "Commander la bague",
      secondaryCta: "Explorer les fonctions",
      floating: "Preparation, sommeil et recuperation en direct",
      trusted: "Adoptee par les profils performants",
      benefits: [
        "Suivi du sommeil",
        "Stress en temps reel",
        "Signes vitaux jour et nuit",
        "Jusqu'a 10 jours d'autonomie",
        "Fine et legere",
        "Recuperation plus lisible",
        "Activite et entrainement",
        "Sante des femmes",
      ],
    },
    showcase: {
      eyebrow: "Intelligence premium",
      title: "Une bague qui ecoute avant que votre corps ne parle.",
      description:
        "RingConn Gen 2 Air transforme les signaux invisibles en clarte quotidienne pour proteger votre energie, mieux recuperer et bouger avec plus d'intention.",
      imageAlt: "RingConn Gen 2 Air, bague connectee premium flottante",
      metrics: [
        { label: "Score de sommeil", value: "92" },
        { label: "Rythme cardiaque", value: "58 bpm" },
        { label: "Recuperation", value: "87%" },
        { label: "Pas", value: "8 420" },
        { label: "Stress", value: "Faible" },
        { label: "Temperature", value: "+0,2 degC" },
      ],
    },
    features: {
      eyebrow: "Suivi complet du bien-etre",
      title: "Des donnees utiles pour chaque moment de votre vie.",
      description:
        "RingConn Gen 2 Air analyse votre sommeil, votre stress, vos signes vitaux, votre activite et vos tendances pour transformer les signaux du corps en conseils clairs.",
      items: [
        {
          title: "Dormir",
          text: "RingConn analyse chaque aspect de votre sommeil : phases, qualite de la respiration, activite cardiaque, temperature et tendances. Comprenez ce qui influence votre repos et detectez plus tot les signes d'apnee du sommeil.",
        },
        {
          title: "Stresser",
          text: "Suivez votre niveau de stress et ses tendances en temps reel. Observez comment vos habitudes influencent votre stress et ajustez-les avant que la tension ne s'installe.",
        },
        {
          title: "Signes vitaux",
          text: "Votre corps communique par des signaux discrets comme la frequence cardiaque, sa variabilite et le taux d'oxygene dans le sang. En les enregistrant jour et nuit, RingConn vous aide a reperer les changements importants.",
        },
        {
          title: "Activite",
          text: "Suivez les reactions et la recuperation de votre corps, de vos pas quotidiens a vos entrainements structures. Analysez les donnees post-effort pour optimiser votre entrainement et developper une forme physique durable.",
        },
        {
          title: "Sante des femmes",
          text: "De legeres variations de temperature peuvent indiquer la phase de votre cycle. RingConn apprend votre rythme unique au fil du temps et predit vos regles avec une grande precision.",
        },
        {
          title: "Des conseils de sante plus intelligents",
          text: "Des informations basees sur l'IA vous aident a agir plus tot, comprendre vos tendances et adopter une approche proactive de votre bien-etre.",
        },
        {
          title: "Fine mais puissante",
          text: "Seulement 2 mm d'epaisseur et aussi legere que 2,5 g, pour un suivi quotidien discret que vous oubliez presque au doigt.",
        },
        {
          title: "Une puissance durable",
          text: "Jusqu'a 10 jours d'autonomie et une charge rapide en 90 minutes pour suivre vos nuits, vos journees et vos entrainements sans interruption.",
        },
      ],
    },
    emotion: {
      eyebrow: "Moins d'ecran. Plus de signal.",
      title: "Une technologie qui s'efface. Des indicateurs qui restent avec vous.",
      paragraph1:
        "RingConn Gen 2 Air n'est pas seulement une bague connectee. C'est une compagne silencieuse qui vous aide a comprendre votre corps, proteger votre energie, ameliorer votre sommeil et suivre votre rythme.",
      paragraph2:
        "Pas d'ecran lumineux. Pas d'interruptions constantes. Juste un tracker de sante discret qui traduit votre biologie en decisions que vous ressentez toute la journee.",
      cta: "Voir les details du produit",
    },
    insights: {
      eyebrow: "Tableau de bord bien-etre",
      title: "Une intelligence premium autour de votre doigt.",
      description:
        "Reveillez-vous avec un score de preparation, comprenez votre nuit, suivez votre activite et prenez de meilleures decisions avant que la fatigue ne dicte votre journee.",
      readiness: "Preparation quotidienne",
      ready: "Pret",
      sleep: "Architecture du sommeil",
      sleepTracked: "7 h 42 de sommeil suivi",
      bodySignals: "Signaux du corps",
      recoveryWindow: "Fenetre de recuperation",
      recoveryCopy: "Meilleur moment pour le travail concentre, selon la dette de sommeil et la charge d'activite.",
      bars: [
        { label: "Sommeil profond", value: 78 },
        { label: "Recuperation", value: 87 },
        { label: "Charge quotidienne", value: 62 },
        { label: "Calme respiratoire", value: 91 },
      ],
    },
    comparison: {
      eyebrow: "L'alternative premium",
      title: "Plus personnelle qu'une montre. Plus elegante qu'un appareil.",
      description:
        "Une bague connectee premium vous apporte l'intelligence sante dont vous avez besoin sans transformer votre poignet en tableau de bord.",
      benefit: "Avantage",
      ring: "RingConn Gen 2 Air",
      watch: "Montre connectee",
      rows: [
        "Port discret toute la journee",
        "Confort pendant le sommeil",
        "Batterie de plusieurs jours",
        "Aucune distraction d'ecran",
        "Style elegant",
      ],
    },
    proof: {
      eyebrow: "Avis clients",
      title: "Concue pour les personnes qui ne peuvent pas perdre leur rythme.",
      testimonials: [
        {
          name: "Thomas Renaud",
          role: "Sommeil et recuperation",
          quote:
            "Je dors avec la bague sans la sentir. Au reveil, je vois vraiment ce qui a degrade ma nuit et je peux ajuster ma recuperation.",
        },
        {
          name: "Adrien Cole",
          role: "Athlete d'endurance",
          quote:
            "Pendant mes sorties, elle reste discrete et legere. Les donnees d'effort et de recuperation m'aident a mieux doser mes entrainements.",
        },
        {
          name: "Lina Moreau",
          role: "Usage quotidien",
          quote:
            "Je peux travailler, ecrire et bouger sans y penser. Elle ressemble a un bijou, mais elle m'apporte des signaux de sante utiles toute la journee.",
        },
        {
          name: "Clara Nguyen",
          role: "Equilibre et bien-etre",
          quote:
            "J'aime son cote doux et discret. Elle m'aide a suivre mon energie, mon stress et mes routines sans ajouter un nouvel ecran a ma journee.",
        },
      ],
    },
    details: {
      badge: "Offre de lancement",
      description:
        "Une bague connectee premium pour le suivi du sommeil, les indicateurs de recuperation, les notifications discretes et le suivi d'activite, concue pour les personnes qui veulent garder le controle sans bruit visuel.",
      imageAlt: "RingConn Gen 2 Air, detail produit en titane sombre",
      finish: "Finition",
      ringSize: "Taille",
      colors: ["Noir mat", "Chrome argent", "Graphite profond"],
      benefits: [
        "Garantie deux ans",
        "Precommande securisee",
        "Application iPhone et Android",
        "Donnees bien-etre chiffrees",
      ],
      includedTitle: "Inclus dans la boite",
      included: ["Bague connectee", "Station de charge", "Cable USB-C", "Guide de demarrage", "Acces a l'application mobile"],
    },
    form: {
      eyebrow: "Reservez votre bague",
      title: "Commencez par votre doigt. Changez la facon dont votre journee se ressent.",
      description:
        "Rejoignez la liste de lancement, choisissez votre finition et votre taille preferees, puis recevez un acces prioritaire au paiement quand votre allocation RingConn Gen 2 Air s'ouvre.",
      name: "Nom",
      email: "E-mail",
      phone: "Telephone",
      color: "Couleur de la bague",
      size: "Taille de la bague",
      quantity: "Quantite",
      address: "Adresse",
      addressPlaceholder: "Rue, ville, pays",
      message: "Message",
      messagePlaceholder: "Indiquez toute information utile pour votre commande.",
      terms: "J'accepte d'etre contacte au sujet de ma reservation RingConn Gen 2 Air et j'accepte les conditions de lancement.",
      submit: "Reserver ma RingConn Gen 2 Air",
      consoleMessage: "Reservation envoyee",
    },
    checkout: {
      eyebrow: "Paiement securise",
      title: "Possedez le tracker sante discret concu pour votre prochain niveau.",
      description:
        "Precommandez RingConn Gen 2 Air pour 249 EUR. Votre paiement sera gere via Stripe Checkout des que le point d'acces backend sera connecte.",
      loading: "Preparation du paiement securise...",
      button: "Payer en securite avec Stripe",
      encrypted: "Paiement chiffre",
      stripeReady: "Parcours de paiement pret pour Stripe",
      createError: "Impossible de creer une session de paiement securisee.",
      missingUrl: "L'URL de paiement n'a pas ete renvoyee par le serveur.",
      fallbackError: "Le paiement est temporairement indisponible. Veuillez reessayer plus tard.",
    },
    faq: {
      eyebrow: "FAQ bague connectee",
      title: "Questions avant de choisir votre bague.",
      items: [
        {
          question: "Qu'est-ce qu'une bague connectee ?",
          answer:
            "Une bague connectee est un objet compact qui suit les signaux de sante, d'activite et de bien-etre depuis votre doigt, comme alternative discrete a une montre connectee.",
        },
        {
          question: "Comment la bague suit-elle le sommeil ?",
          answer:
            "RingConn Gen 2 Air utilise des capteurs au doigt pour estimer la duree du sommeil, les phases, les tendances cardiaques et les signaux de recuperation tout en restant confortable la nuit.",
        },
        {
          question: "Est-elle meilleure qu'une montre connectee ?",
          answer:
            "Pour les personnes qui veulent moins de distractions, plus de confort pendant le sommeil et une forme plus elegante au quotidien, une bague connectee premium peut etre le meilleur choix.",
        },
        {
          question: "Combien de temps dure la batterie ?",
          answer:
            "Le produit est concu pour une autonomie de plusieurs jours, selon les reglages de notification, le suivi d'activite et l'utilisation des capteurs.",
        },
        {
          question: "La bague est-elle etanche ?",
          answer:
            "RingConn Gen 2 Air est concue pour l'exposition quotidienne a l'eau, notamment la transpiration et les douches. Les niveaux finaux de resistance a l'eau devront etre confirmes avant l'expedition.",
        },
        {
          question: "Fonctionne-t-elle avec iPhone et Android ?",
          answer:
            "L'application mobile RingConn est prevue pour iPhone et Android, avec acces au suivi du sommeil, de l'activite et aux indicateurs de bien-etre.",
        },
        {
          question: "Puis-je payer en securite avec Stripe ?",
          answer:
            "Oui. Le bouton de paiement est prepare pour Stripe Checkout et doit etre connecte a un point d'acces backend qui cree la session securisee.",
        },
        {
          question: "Comment choisir ma taille de bague ?",
          answer:
            "Utilisez le guide des tailles avant de commander. Si vous etes entre deux tailles, choisissez celle qui reste stable sans pression pendant le sommeil.",
        },
      ],
    },
    footer: {
      description:
        "Bague connectee premium pour le suivi du sommeil, de la sante, de l'activite et du bien-etre discret.",
      features: "Fonctions",
      product: "Produit",
      reserve: "Reserver",
      checkout: "Paiement",
    },
  },
  en: {
    meta: {
      title: "RingConn Gen 2 Air | Premium Smart Ring for Sleep, Health and Wellness Tracking",
      description:
        "RingConn Gen 2 Air is a premium smart ring and discreet health tracker for sleep tracking, activity tracking, recovery insights and elegant connected wellness.",
    },
    nav: {
      preorder: "Pre-order",
      languageLabel: "Change language",
    },
    hero: {
      videoLabel: "Luxury technology video background for RingConn Gen 2 Air",
      ringAlt: "RingConn Gen 2 Air premium smart ring with reflective dark metal and violet glow",
      fallbackLabel: "Stylized fallback preview of RingConn Gen 2 Air",
      badge: "The smart ring designed for modern performance.",
      titleLine1: "Understand your body.",
      titleLine2: "Master your energy.",
      description:
        "Meet the premium connected ring that tracks your sleep, activity, recovery and wellness insights without screens, noise or distractions.",
      primaryCta: "Order the smart ring",
      secondaryCta: "Explore features",
      floating: "Live readiness, sleep and recovery intelligence",
      trusted: "Trusted by modern performers",
      benefits: [
        "Sleep tracking",
        "Real-time stress",
        "Day and night vital signs",
        "Up to 10 days battery",
        "Thin and lightweight",
        "Clearer recovery",
        "Activity and training",
        "Women's health",
      ],
    },
    showcase: {
      eyebrow: "Premium intelligence",
      title: "A ring that listens before your body speaks.",
      description:
        "RingConn Gen 2 Air turns invisible signals into daily clarity, helping you protect your energy, recover smarter and move with more intention.",
      imageAlt: "RingConn Gen 2 Air floating premium smart wearable",
      metrics: [
        { label: "Sleep Score", value: "92" },
        { label: "Heart Rate", value: "58 bpm" },
        { label: "Recovery", value: "87%" },
        { label: "Steps", value: "8,420" },
        { label: "Stress", value: "Low" },
        { label: "Temperature", value: "+0.2 degC" },
      ],
    },
    features: {
      eyebrow: "Complete wellness tracking",
      title: "Useful insight for every part of your day.",
      description:
        "RingConn Gen 2 Air analyzes sleep, stress, vital signs, activity and long-term trends to turn body signals into clear daily guidance.",
      items: [
        {
          title: "Sleep",
          text: "RingConn analyzes every aspect of your sleep: stages, breathing quality, heart activity, temperature and trends. Understand what influences your rest and spot early signs of sleep apnea.",
        },
        {
          title: "Stress",
          text: "Track your stress level and its trends in real time. See how your habits influence stress and adjust them before tension settles in.",
        },
        {
          title: "Vital signs",
          text: "Your body communicates through subtle signals such as heart rate, heart rate variability and blood oxygen. By recording them day and night, RingConn helps you notice important changes.",
        },
        {
          title: "Activity",
          text: "Track your body's reactions and recovery, from daily steps to structured workouts. Review post-effort data to optimize training and build sustainable fitness.",
        },
        {
          title: "Women's health",
          text: "Small temperature variations can indicate the phase of your cycle. RingConn learns your unique rhythm over time and predicts your period with strong precision.",
        },
        {
          title: "Smarter health guidance",
          text: "AI-based insights help you act earlier, understand your trends and take a more proactive approach to your wellbeing.",
        },
        {
          title: "Thin but powerful",
          text: "Only 2 mm thick and as light as 2.5 g, built for discreet daily tracking you almost forget is on your finger.",
        },
        {
          title: "Lasting power",
          text: "Up to 10 days of battery life and fast charging in 90 minutes, so your nights, days and workouts stay covered.",
        },
      ],
    },
    emotion: {
      eyebrow: "Less screen. More signal.",
      title: "Technology that disappears. Insights that stay with you.",
      paragraph1:
        "RingConn Gen 2 Air is not just a connected ring. It is a silent companion that helps you understand your body, protect your energy, improve your sleep and follow your rhythm.",
      paragraph2:
        "No bright display. No constant interruptions. Just a discreet health tracker that translates your biology into decisions you can feel throughout the day.",
      cta: "See product details",
    },
    insights: {
      eyebrow: "Wellness wearable dashboard",
      title: "Premium intelligence, wrapped around your finger.",
      description:
        "Wake up with a readiness score, understand your night, track your activity and make better choices before fatigue becomes the plan.",
      readiness: "Daily readiness",
      ready: "Ready",
      sleep: "Sleep architecture",
      sleepTracked: "7h 42m sleep tracked",
      bodySignals: "Body signals",
      recoveryWindow: "Recovery window",
      recoveryCopy: "Best time for focused work, based on sleep debt and activity load.",
      bars: [
        { label: "Deep sleep", value: 78 },
        { label: "Recovery", value: 87 },
        { label: "Daily strain", value: 62 },
        { label: "Respiratory calm", value: 91 },
      ],
    },
    comparison: {
      eyebrow: "The premium alternative",
      title: "More personal than a watch. More elegant than a device.",
      description:
        "A premium smart ring gives you the health intelligence you want, without turning your wrist into another dashboard.",
      benefit: "Benefit",
      ring: "RingConn Gen 2 Air",
      watch: "Smartwatch",
      rows: ["Discreet all-day wear", "Sleep comfort", "Multi-day battery", "No screen distraction", "Elegant style"],
    },
    proof: {
      eyebrow: "Social proof",
      title: "Built for people who cannot afford to lose their rhythm.",
      testimonials: [
        {
          name: "Thomas Renaud",
          role: "Sleep and recovery",
          quote:
            "I can sleep with the ring without noticing it. In the morning, I can see what affected my night and adjust my recovery.",
        },
        {
          name: "Adrien Cole",
          role: "Endurance athlete",
          quote:
            "On my runs, it stays light and discreet. Effort and recovery data help me pace training with more confidence.",
        },
        {
          name: "Lina Moreau",
          role: "Everyday user",
          quote:
            "I can work, write and move without thinking about it. It looks like jewelry, but gives me useful health signals all day.",
        },
        {
          name: "Clara Nguyen",
          role: "Balance and wellness",
          quote:
            "I like how soft and discreet it feels. It helps me follow energy, stress and routines without adding another screen to my day.",
        },
      ],
    },
    details: {
      badge: "Launch offer",
      description:
        "A premium smart ring for sleep tracking, recovery insights, discreet notifications and activity tracking, engineered for people who want control without visual noise.",
      imageAlt: "RingConn Gen 2 Air product detail in dark titanium",
      finish: "Finish",
      ringSize: "Ring size",
      colors: ["Matte Black", "Silver Chrome", "Deep Graphite"],
      benefits: ["Two-year warranty", "Secure pre-order", "iPhone and Android app", "Encrypted wellness data"],
      includedTitle: "What's included",
      included: ["Smart ring", "Charging dock", "USB-C cable", "Quick start guide", "Mobile app access"],
    },
    form: {
      eyebrow: "Reserve your ring",
      title: "Start with your finger. Change the way your day feels.",
      description:
        "Join the launch list, choose your preferred finish and size, and receive priority checkout access when your RingConn Gen 2 Air allocation opens.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      color: "Ring color",
      size: "Ring size",
      quantity: "Quantity",
      address: "Address",
      addressPlaceholder: "Street, city, country",
      message: "Message",
      messagePlaceholder: "Tell us anything useful about your order.",
      terms: "I agree to be contacted about my RingConn Gen 2 Air reservation and accept the launch terms.",
      submit: "Reserve my RingConn Gen 2 Air",
      consoleMessage: "Lead capture submitted",
    },
    checkout: {
      eyebrow: "Secure checkout",
      title: "Own the discreet health tracker built for your next level.",
      description:
        "Pre-order RingConn Gen 2 Air for 249 EUR. Your payment will be handled through Stripe Checkout once the backend session endpoint is connected.",
      loading: "Preparing secure checkout...",
      button: "Pay securely with Stripe",
      encrypted: "Encrypted payment",
      stripeReady: "Stripe-ready checkout flow",
      createError: "Unable to create a secure checkout session.",
      missingUrl: "The checkout URL was not returned by the server.",
      fallbackError: "Checkout is temporarily unavailable. Please try again later.",
    },
    faq: {
      eyebrow: "Smart ring FAQ",
      title: "Questions before you choose your ring.",
      items: [
        {
          question: "What is a smart ring?",
          answer:
            "A smart ring is a compact wearable that tracks health, activity and wellness signals from your finger, making it a discreet alternative to a smartwatch.",
        },
        {
          question: "How does the connected ring track sleep?",
          answer:
            "RingConn Gen 2 Air uses finger-based sensors to estimate sleep duration, sleep stages, heart rate trends and recovery signals while staying comfortable overnight.",
        },
        {
          question: "Is it better than a smartwatch?",
          answer:
            "For people who want less screen distraction, better sleep comfort and a more elegant everyday form, a premium smart ring can be the better choice.",
        },
        {
          question: "How long does the battery last?",
          answer:
            "The product is designed for multi-day battery life, depending on notification settings, activity tracking and sensor usage.",
        },
        {
          question: "Is the ring waterproof?",
          answer:
            "RingConn Gen 2 Air is designed for daily water exposure including sweat and showers. Final water resistance ratings should be confirmed before shipment.",
        },
        {
          question: "Does it work with iPhone and Android?",
          answer:
            "The RingConn mobile app is planned for both iPhone and Android, giving you access to sleep tracking, activity tracking and wellness insights.",
        },
        {
          question: "Can I pay securely with Stripe?",
          answer:
            "Yes. The checkout button is prepared for Stripe Checkout and must be connected to a backend endpoint that creates the secure payment session.",
        },
        {
          question: "How do I choose my ring size?",
          answer:
            "Use the sizing guide before ordering. If you are between two sizes, choose the size that feels secure without pressure during sleep.",
        },
      ],
    },
    footer: {
      description:
        "Premium smart ring for sleep tracking, health tracking, activity tracking and discreet connected wellness.",
      features: "Features",
      product: "Product",
      reserve: "Reserve",
      checkout: "Checkout",
    },
  },
} as const;

const TranslationContext = createContext<TranslationContextValue | null>(null);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "fr";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fr" ? stored : "fr";
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", translations[language].meta.description);
  }, [language]);

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used inside TranslationProvider");
  }

  return context;
}
