// ---------------------------------------------------------------------------
// Contenu et réglages du site. C'est le seul fichier à modifier au quotidien.
// Les valeurs marquées « À COMPLÉTER » doivent être renseignées avant la mise
// en ligne (le build affiche un avertissement tant qu'elles sont vides).
// ---------------------------------------------------------------------------

export const site = {
  // URL publique, sans slash final. Si le site est servi dans un sous-dossier
  // (ex. https://flocr.github.io/fcei), tous les liens s'adaptent.
  url: "https://fc-studio.fr",
  name: "Florian Carrière",
  tagline: "Studio web",
  lang: "fr",
  locale: "fr_FR",

  // Coordonnées affichées (laisser vide pour masquer).
  email: "", // À COMPLÉTER
  phone: "", // ex. "06 12 34 56 78"
  // Zone servie, utilisée dans les textes et les données structurées. Laisser
  // vide tant qu'aucune zone n'est arrêtée.
  area: "",

  // Formulaire : clé gratuite sur https://web3forms.com (même service que
  // Créa-Bains et Mathieu Plomberie).
  web3formsKey: "", // À COMPLÉTER

  // N'afficher « Réponse sous 24 h » que si ce délai est tenable.
  respondWithin24h: false,

  // Délais affichés dans la FAQ et les pages. À AJUSTER à votre organisation.
  delays: {
    essentiel: "une à deux semaines",
    pro: "deux à trois semaines",
  },

  // Mesure d'audience : renseigner l'un ou l'autre, rien n'est chargé sinon.
  analytics: {
    plausibleDomain: "", // ex. "votre-domaine.fr"
    ga4Id: "", // ex. "G-XXXXXXX"
  },
  // Balise de validation Google Search Console (méthode « balise HTML »).
  googleSiteVerification: "",

  // Mentions légales (obligatoires pour un site professionnel en France).
  legal: {
    publisher: "Florian Carrière",
    status: "Entrepreneur individuel",
    siret: "917 618 928 00019",
    address: "37 rue Général Gouraud, 33200 Bordeaux",
    vat: "TVA non applicable, art. 293 B du CGI", // à adapter selon votre régime
    host: "GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
  },
};

export const nav = [
  { label: "Réalisations", anchor: "#realisations", page: "/realisations/" },
  { label: "Offres", anchor: "#offres", page: "/tarifs/" },
  { label: "Processus", anchor: "#processus", page: "/#processus" },
  { label: "FAQ", anchor: "#faq", page: "/#faq" },
  { label: "Contact", anchor: "#devis", page: "/contact/" },
];

// ---------------------------------------------------------------------------
// Offres
// ---------------------------------------------------------------------------

export const offers = [
  {
    id: "essentiel",
    name: "Site Essentiel",
    price: 200,
    pitch:
      "Pour les indépendants et petites entreprises qui ont simplement besoin d'un site professionnel.",
    features: [
      "1 à 3 pages",
      "Design personnalisé",
      "Adapté aux mobiles",
      "Formulaire de contact",
      "Hébergement",
      "Bases du référencement naturel",
      "Connexion à Google Search Console",
      "Mise en ligne",
    ],
    limits: [
      "Jusqu'à 3 pages",
      "Textes et photos fournis par vous",
      "1 série de modifications incluse",
      "Fonctionnalités spécifiques sur devis",
    ],
    cta: "Choisir cette offre",
  },
  {
    id: "pro",
    name: "Site Pro",
    price: 499,
    // Le brief proposait « Le plus choisi » : à utiliser quand ce sera vérifiable.
    badge: "Recommandé",
    featured: true,
    pitch:
      "Pour les entreprises qui veulent un site plus complet et davantage travaillé.",
    features: [
      "4 à 7 pages",
      "Design entièrement personnalisé",
      "Adapté aux mobiles",
      "Référencement local de base",
      "Images et vitesse optimisées",
      "Mesure d'audience",
      "Formulaires avancés si nécessaire",
      "Mise en place de votre fiche Google Business Profile",
    ],
    limits: [
      "Jusqu'à 7 pages",
      "Jusqu'à 3 séries de modifications",
      "Fonctionnalités spécifiques sur devis",
    ],
    cta: "Choisir cette offre",
  },
  {
    id: "acquisition",
    name: "Site + Acquisition",
    price: 900,
    pitch:
      "Pour les entreprises qui veulent travailler leur visibilité et attirer plus de clients.",
    features: [
      "Site complet",
      "Stratégie de référencement",
      "Optimisation et rédaction des pages",
      "Pages ciblant les recherches locales",
      "Suivi des demandes de contact",
      "Blog ou actualités si pertinent",
      "Accompagnement dans la durée",
      "Optimisation de votre fiche Google Business Profile",
    ],
    limits: ["Périmètre défini ensemble sur devis"],
    cta: "Parler de mon projet",
  },
];

export const maintenance = {
  name: "Hébergement & maintenance",
  priceFrom: 15,
  priceTo: 30,
  features: [
    "Hébergement et nom de domaine",
    "Maintenance technique",
    "Surveillance du site",
    "Petites modifications de contenu",
    "Sauvegardes",
  ],
  note: "Pas d'abonnement obligatoire en dehors de l'hébergement. Vous restez propriétaire de votre site.",
};

export const extras = [
  "Page supplémentaire",
  "Rédaction des textes",
  "Référencement local",
  "Fiche Google Business Profile",
  "Modifications ponctuelles",
  "Réservation en ligne",
  "Fonctionnalités sur mesure",
];

export const custom = [
  { title: "Espace client", text: "Documents, suivi de commande ou de dossier, accès réservé." },
  { title: "Réservation en ligne", text: "Prise de rendez-vous ou de réservation reliée à votre agenda." },
  { title: "Automatisations", text: "Devis, relances, notifications : moins de tâches répétitives." },
  { title: "Intégrations", text: "Connexion à vos outils existants : paiement, CRM, facturation…" },
  { title: "Outils internes", text: "Une application simple, faite pour votre façon de travailler." },
];

// ---------------------------------------------------------------------------
// Réalisations (uniquement des projets réels)
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: "crea-bains",
    name: "Créa-Bains",
    activity: "Rénovation de salles de bains et climatisation",
    place: "Saint-Leu-la-Forêt, Val-d'Oise",
    url: "https://crea-bains.fr",
    displayUrl: "crea-bains.fr",
    image: "crea",
    summary:
      "Site vitrine pour une entreprise de rénovation de salles de bains et d'installation de climatisation réversible.",
    features: [
      "Comparateur avant / après interactif",
      "Galerie des chantiers réalisés",
      "Formulaire de demande de devis",
      "16 pages locales : 2 métiers × 8 communes",
      "Données structurées pour Google",
    ],
  },
  {
    id: "mathieu-plomberie",
    name: "Monsieur Mathieu Plomberie",
    activity: "Plombier chauffagiste",
    place: "Val-d'Oise",
    url: "https://monsieurmathieu-plomberie.fr",
    displayUrl: "monsieurmathieu-plomberie.fr",
    image: "mathieu",
    summary:
      "Site vitrine pour un plombier chauffagiste, pensé pour être appelé directement depuis un téléphone.",
    features: [
      "Appel en un clic sur mobile",
      "Formulaire de demande de devis",
      "Pages dédiées à 6 communes",
      "Données structurées pour Google",
    ],
  },
  {
    id: "clemence-philouze",
    name: "Clémence Philouze",
    activity: "Sage-femme libérale",
    place: "Bordeaux",
    // Domaine clemencephilouze-sagefemme.fr pas encore actif : remplacer quand il l'est.
    url: "https://flocr.github.io/clemencephilouze-sagefemme/",
    displayUrl: "clemencephilouze-sagefemme.fr",
    image: "clemence",
    summary:
      "Site vitrine pour une sage-femme libérale, centré sur la prise de rendez-vous.",
    features: [
      "Prise de rendez-vous via Doctolib",
      "Accès direct à la fiche Google et aux avis",
      "Pages dédiées à 4 quartiers de Bordeaux",
      "Données structurées pour Google",
    ],
  },
];

// ---------------------------------------------------------------------------
// Arguments, processus, SEO
// ---------------------------------------------------------------------------

export const reasons = [
  {
    icon: "pen",
    title: "Fait pour votre activité",
    text: "Chaque site est conçu autour de votre métier et de vos clients. Pas un modèle générique avec votre logo dessus.",
  },
  {
    icon: "bolt",
    title: "Rapide",
    text: "Un processus simple et cadré, pour que votre site soit en ligne sans attendre des mois.",
  },
  {
    icon: "search",
    title: "Pensé pour Google",
    text: "Structure propre, adaptée aux mobiles et rapide : les bases du référencement sont intégrées dès la création.",
  },
  {
    icon: "user",
    title: "Un seul interlocuteur",
    text: "Pas de commercial, puis de chef de projet, puis de développeur : vous échangez directement avec la personne qui réalise votre site.",
  },
];

export const steps = [
  {
    title: "Vous me présentez votre projet",
    text: "Via le formulaire ou par téléphone. Quelques minutes suffisent.",
  },
  {
    title: "Je vous propose une solution",
    text: "Je définis avec vous le contenu, le tarif et le délai. Tout est écrit avant de commencer.",
  },
  {
    title: "Je crée votre site",
    text: "Design, développement, mise en page de vos contenus et optimisation.",
  },
  {
    title: "Vous validez",
    text: "Vous relisez, on ajuste, puis je mets le site en ligne.",
  },
];

export const seoPoints = [
  "Structure HTML propre",
  "Titres et descriptions pour chaque page",
  "Affichage parfait sur mobile",
  "Pages légères et rapides",
  "Plan du site (sitemap)",
  "Indexation par Google",
  "Google Search Console",
  "Référencement local selon l'offre",
];

// ---------------------------------------------------------------------------
// FAQ — `ownership` et `subscription` reflètent le modèle hébergement décrit
// dans `maintenance` : à vérifier avant mise en ligne.
// ---------------------------------------------------------------------------

export const faq = [
  {
    q: "Combien coûte un site internet ?",
    a: "Les sites commencent à partir de 200 €. Le tarif dépend du nombre de pages, du niveau de personnalisation et des fonctionnalités nécessaires. Vous recevez un devis précis avant le début du projet, sans surprise.",
  },
  {
    q: "Combien de temps faut-il pour créer un site ?",
    a: `Comptez en général ${site.delays.essentiel} pour un Site Essentiel et ${site.delays.pro} pour un Site Pro, à partir du moment où j'ai vos textes et vos photos. Le délai exact est indiqué dans le devis.`,
  },
  {
    q: "Dois-je fournir les textes et les photos ?",
    a: "Oui pour l'offre Essentiel : vous fournissez vos textes et vos photos, je m'occupe de la mise en page. Si vous préférez, la rédaction peut être ajoutée en option. Elle est incluse dans l'offre Site + Acquisition.",
  },
  {
    q: "Le site sera-t-il adapté aux mobiles ?",
    a: "Oui. Tous les sites sont conçus d'abord pour le téléphone, puis pour la tablette et l'ordinateur. C'est sur mobile que la plupart de vos clients vous trouveront.",
  },
  {
    q: "Le référencement est-il inclus ?",
    a: "Oui, les bases techniques du référencement sont incluses dans toutes les offres : structure, titres, vitesse, sitemap, Search Console. Un travail plus poussé (référencement local, pages ciblées, rédaction) fait partie de l'offre Site + Acquisition ou peut être ajouté.",
  },
  {
    q: "Puis-je modifier mon site ensuite ?",
    a: "Oui. Les petites modifications peuvent être incluses dans la formule de maintenance, ou réalisées ponctuellement sur demande.",
  },
  {
    q: "Est-ce que je suis propriétaire de mon site ?",
    a: "Oui. Le site et son contenu vous appartiennent. Le nom de domaine est réservé à votre nom. Si vous souhaitez changer de prestataire, je vous transmets les fichiers du site.",
  },
  {
    q: "Y a-t-il un abonnement obligatoire ?",
    a: `Non. Le nom de domaine et l'hébergement sont inclus la première année. Ensuite, vous choisissez : la formule hébergement & maintenance (à partir de ${maintenance.priceFrom} €/mois), ou je vous transfère le site pour que vous l'hébergiez où vous voulez. Aucun engagement caché.`,
  },
];
