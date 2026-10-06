import { site, faq } from "../config.mjs";
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
    q: "Puis-je relier mon agenda en ligne au site ?",
    a: "Oui. Un bouton de prise de rendez-vous peut renvoyer vers Doctolib, Calendly ou l'outil que vous utilisez déjà. C'est le cas sur le site de Clémence Philouze, sage-femme à Bordeaux.",
  },
  {
    q: "Ma profession a des règles de communication. Est-ce compatible ?",
    a: "Oui. Le contenu reste informatif et factuel, et vous validez chaque texte avant la mise en ligne. Si votre ordre ou votre fédération impose des mentions particulières, elles sont intégrées.",
  },
  {
    q: "Je travaille seul·e. Un site d'une page peut-il suffire ?",
    a: "Souvent, oui. L'offre Essentiel va jusqu'à 3 pages : de quoi présenter votre pratique, vos services et vos informations pratiques. Le site pourra grandir plus tard si besoin.",
  },
  ...faq.filter((f) => /coûte|textes|référencement/.test(f.q)),
];

export default {
  path: "/creation-site-internet-independant/",
  title: "Création de site internet pour indépendant | " + site.name,
  description:
    "Site internet pour thérapeute, coach, consultant ou profession de santé : présentation claire, prise de rendez-vous en ligne, référencement local. À partir de 200 €.",
  crumbs: [
    { name: "Création de site internet", path: "/creation-site-internet/" },
    { name: "Indépendants", path: "/creation-site-internet-independant/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Création de site internet pour indépendants et professions libérales",
      audience: { "@type": "BusinessAudience", name: "Indépendants et professions libérales" },
      provider: { "@id": businessSchema()["@id"] },
      offers: { "@type": "Offer", priceCurrency: "EUR", price: 200, description: "À partir de 200 €" },
    },
    faqSchema(pageFaq),
  ],
  body: [
    pageHero({
      eyebrow: "Site internet pour indépendant",
      title: "Création de site internet pour indépendants et professions libérales",
      intro:
        "Thérapeute, sage-femme, coach, consultant, architecte… Un site clair et professionnel, qui inspire confiance et facilite la prise de contact. À partir de 200 €.",
    }),
    cardsSection({
      eyebrow: "L'essentiel",
      title: "Un site qui travaille pour vous pendant que vous travaillez",
      intro: "Quand on exerce seul·e, le site est souvent le premier contact avec un futur client. Il doit répondre à ses questions avant même qu'il vous appelle.",
      items: [
        { title: "Présenter clairement votre pratique", text: "Qui vous êtes, ce que vous proposez, pour qui, et comment se déroule un premier rendez-vous." },
        { title: "Faciliter la prise de rendez-vous", text: "Lien vers votre agenda en ligne (Doctolib, Calendly…) ou formulaire de contact, accessible depuis chaque page." },
        { title: "Inspirer confiance", text: "Un design soigné et sobre, adapté à votre métier, avec les informations pratiques faciles à trouver." },
        { title: "Être trouvé près de chez vous", text: "Votre ville ou vos quartiers mis en avant, et une fiche Google cohérente avec votre site." },
        { title: "Respecter votre cadre", text: "Certaines professions ont des règles de communication. Le contenu reste informatif, et vous validez chaque texte." },
        { title: "Évoluer avec votre activité", text: "Nouveau service, nouveau cabinet, nouveaux tarifs : le site s'adapte, ponctuellement ou via la maintenance." },
      ],
    }),
    projectsPicked({
      ids: ["clemence-philouze"],
      title: "Un exemple : une sage-femme libérale à Bordeaux",
      intro: "Un site centré sur l'essentiel : les activités, le cabinet, les quartiers desservis et la prise de rendez-vous en ligne.",
    }),
    offersSection({ withExtras: false }),
    processSection(),
    faqSection(pageFaq, { title: "Vos questions d'indépendant" }),
    ctaSection(),
  ].join("\n"),
};
