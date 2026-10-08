import { site, faq } from "../config.mjs";
import { abs } from "../lib.mjs";
import {
  pageHero,
  cardsSection,
  projectsPicked,
  offersSection,
  processSection,
  faqSection,
  faqSchema,
  ctaSection,
} from "../components.mjs";
import { businessSchema } from "./home.mjs";

const pageFaq = [
  {
    q: "Faut-il être à Bordeaux pour travailler ensemble ?",
    a: "Non. Je suis basé à Bordeaux, mais tout peut se faire par téléphone, par email ou en visio : deux des sites présentés ici ont été réalisés pour des artisans du Val-d'Oise. Si vous êtes à Bordeaux ou dans la métropole, on peut aussi se rencontrer.",
  },
  {
    q: "Comment apparaître sur Google Maps à Bordeaux ?",
    a: "Grâce à votre fiche Google Business Profile, reliée à votre site. Je la mets en place avec l'offre Site Pro et je l'optimise avec l'offre Site + Acquisition : catégories, zone desservie, horaires, photos et lien vers le site.",
  },
  {
    q: "Mon site peut-il cibler plusieurs quartiers ou communes ?",
    a: "Oui. Une page dédiée par quartier ou par commune desservie (Mérignac, Pessac, Talence…) aide à apparaître sur les recherches du type « métier + ville ». C'est ce qui a été fait pour Clémence Philouze, avec 4 quartiers de Bordeaux. Ces pages font partie de l'offre Site + Acquisition ou s'ajoutent en option.",
  },
  ...faq.filter((f) => /coûte|temps|propriétaire/.test(f.q)),
];

export default {
  path: "/creation-site-internet-bordeaux/",
  title: "Création de site internet à Bordeaux | " + site.brand,
  ogTitle: "Création de site internet à Bordeaux, dès 200 €",
  description:
    "Développeur web basé à Bordeaux : sites vitrines pour indépendants, artisans et TPE de Bordeaux et de la métropole. Référencement local, dès 200 €.",
  crumbs: [
    { name: "Création de site internet", path: "/creation-site-internet/" },
    { name: "Bordeaux", path: "/creation-site-internet-bordeaux/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Création de site internet à Bordeaux",
      serviceType: "Création de site internet",
      url: abs("/creation-site-internet-bordeaux/"),
      areaServed: { "@type": "City", name: "Bordeaux" },
      provider: { "@id": businessSchema()["@id"] },
      offers: { "@type": "Offer", priceCurrency: "EUR", price: 200, description: "À partir de 200 €" },
    },
    faqSchema(pageFaq),
  ],
  body: [
    pageHero({
      eyebrow: "Site internet à Bordeaux",
      title: "Création de site internet à Bordeaux",
      intro:
        "Je suis développeur web à Bordeaux. Je crée des sites vitrines rapides et bien référencés pour les indépendants, artisans et petites entreprises de Bordeaux et de la métropole. À partir de 200 €.",
    }),
    cardsSection({
      eyebrow: "Être trouvé localement",
      title: "Un site pensé pour vos clients bordelais",
      intro: "Quand quelqu'un cherche un professionnel à Bordeaux, Google met en avant ceux qui indiquent clairement leur activité, leur zone et leurs coordonnées. Votre site est construit pour ça.",
      items: [
        { title: "Sortir sur « métier + Bordeaux »", text: "Titres, textes et structure des pages indiquent clairement ce que vous faites et où, pour apparaître sur les recherches locales de vos clients." },
        { title: "Apparaître sur Google Maps", text: "Votre site et votre fiche Google Business Profile se renforcent mutuellement dans les résultats locaux et sur la carte." },
        { title: "Cibler vos quartiers et communes", text: "Chartrons, Bastide, Caudéran, Mérignac, Pessac, Talence… Une page par secteur desservi, selon votre activité." },
        { title: "Compris par les assistants IA", text: "ChatGPT et les réponses IA de Google s'appuient sur des sites clairs : activité, zone d'intervention et coordonnées sont faciles à lire." },
        { title: "Parfait sur téléphone", text: "La plupart des recherches locales se font sur mobile, souvent au moment où le client a besoin de vous." },
        { title: "Un interlocuteur à Bordeaux", text: "Vous échangez directement avec la personne qui réalise votre site, par téléphone, en visio ou en rendez-vous." },
      ],
    }),
    projectsPicked({
      ids: ["clemence-philouze"],
      title: "Un exemple bordelais : une sage-femme libérale",
      intro: "Un site centré sur la prise de rendez-vous, avec des pages dédiées à 4 quartiers de Bordeaux pour être trouvé près du cabinet.",
    }),
    offersSection({ withExtras: false }),
    processSection(),
    faqSection(pageFaq, { title: "Vos questions sur un site à Bordeaux" }),
    ctaSection({ title: "Parlons de votre site à Bordeaux." }),
  ].join("\n"),
};
