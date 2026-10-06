import { site, faq } from "../config.mjs";
import { offersSection, processSection, faqSection, faqSchema, ctaSection } from "../components.mjs";
import { businessSchema } from "./home.mjs";

const pricingFaq = faq.filter((f) =>
  /coûte|temps|textes|abonnement|propriétaire|modifier/.test(f.q)
);

export default {
  path: "/tarifs/",
  title: "Tarifs création de site internet, dès 200 € | " + site.name,
  description:
    "Site Essentiel à partir de 200 €, Site Pro à partir de 499 €, Site + Acquisition à partir de 900 €. Ce qui est inclus, le cadre de chaque offre et l'hébergement.",
  crumbs: [{ name: "Tarifs", path: "/tarifs/" }],
  schema: [businessSchema(), faqSchema(pricingFaq)],
  body: [
    offersSection({
      tag: "h1",
      title: "Tarifs : votre site internet à partir de 200 €",
      intro:
        "Trois offres au périmètre clair. Vous savez dès le départ ce qui est inclus, combien de pages, combien de séries de modifications. Le prix final est fixé dans le devis, avant de commencer.",
    }),
    processSection(),
    faqSection(pricingFaq, { title: "Questions sur les tarifs" }),
    ctaSection(),
  ].join("\n"),
  bodyClass: "page-tarifs",
};
