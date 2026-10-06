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
    q: "Je n'ai pas le temps de m'occuper d'un site. Comment ça se passe ?",
    a: "Vous me donnez les informations essentielles (vos services, votre zone d'intervention, vos coordonnées) et quelques photos de chantiers. Je m'occupe du reste : conception, mise en page, technique et mise en ligne. Vous n'avez qu'à relire et valider.",
  },
  {
    q: "Je n'ai pas de photos professionnelles. Est-ce un problème ?",
    a: "Non. Des photos de chantiers prises au téléphone suffisent souvent, à condition d'être nettes et bien éclairées. Je sélectionne les meilleures et je les optimise pour le site.",
  },
  {
    q: "J'ai déjà une fiche Google. Pourquoi un site en plus ?",
    a: "Votre fiche Google aide à être trouvé. Le site, lui, rassure et convainc : il présente vos services en détail, montre vos réalisations et permet de demander un devis. Les deux fonctionnent mieux ensemble, et la fiche peut renvoyer vers le site.",
  },
  ...faq.filter((f) => /coûte|temps|mobiles/.test(f.q)),
];

export default {
  path: "/creation-site-internet-artisan/",
  title: "Création de site internet pour artisan, dès 200 € | " + site.name,
  description:
    "Site internet pour plombier, électricien, chauffagiste ou rénovation : appel en un clic, photos de chantiers, demandes de devis, pages locales. Dès 200 €.",
  crumbs: [
    { name: "Création de site internet", path: "/creation-site-internet/" },
    { name: "Artisans", path: "/creation-site-internet-artisan/" },
  ],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Création de site internet pour artisans",
      audience: { "@type": "BusinessAudience", name: "Artisans" },
      provider: { "@id": businessSchema()["@id"] },
      offers: { "@type": "Offer", priceCurrency: "EUR", price: 200, description: "À partir de 200 €" },
    },
    faqSchema(pageFaq),
  ],
  body: [
    pageHero({
      eyebrow: "Site internet pour artisan",
      title: "Création de site internet pour artisans",
      intro:
        "Plombier, chauffagiste, électricien, menuisier, entreprise de rénovation… Je crée des sites qui donnent envie de vous appeler. À partir de 200 €.",
    }),
    cardsSection({
      eyebrow: "L'essentiel",
      title: "Ce qu'un site d'artisan doit faire",
      intro: "Un client qui cherche un artisan veut savoir trois choses : si vous intervenez chez lui, si votre travail est sérieux, et comment vous joindre.",
      items: [
        { title: "Être appelé en un clic", text: "Sur mobile, votre numéro reste visible et lance l'appel directement. C'est souvent le premier réflexe d'un client pressé." },
        { title: "Montrer votre travail", text: "Photos de chantiers, avant / après : rien ne rassure davantage un client qui hésite entre plusieurs artisans." },
        { title: "Recevoir des demandes de devis", text: "Un formulaire court, qui arrive directement dans votre boîte mail, avec les informations utiles pour chiffrer." },
        { title: "Être trouvé dans votre secteur", text: "Des pages dédiées aux communes où vous intervenez, pour apparaître sur les recherches du type « plombier + ville »." },
        { title: "Travailler avec votre fiche Google", text: "Votre site et votre fiche Google Business Profile se renforcent mutuellement dans les résultats locaux." },
        { title: "Rester simple", text: "Pas de blabla : vos services, votre zone, vos réalisations, vos coordonnées. Ce que vos clients viennent chercher." },
      ],
    }),
    projectsPicked({
      ids: ["crea-bains", "mathieu-plomberie"],
      title: "Deux sites d'artisans déjà en ligne",
      intro: "Une entreprise de rénovation de salles de bains et un plombier chauffagiste, tous deux dans le Val-d'Oise.",
    }),
    offersSection({ withExtras: false }),
    processSection(),
    faqSection(pageFaq, { title: "Vos questions d'artisan" }),
    ctaSection({ title: "Parlons de votre site d'artisan." }),
  ].join("\n"),
};
