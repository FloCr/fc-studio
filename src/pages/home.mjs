import { site, offers } from "../config.mjs";
import { abs, u } from "../lib.mjs";
import {
  hero,
  projectsSection,
  audiencesSection,
  reasonsSection,
  offersSection,
  processSection,
  seoSection,
  developerSection,
  faqSection,
  faqSchema,
  ctaSection,
} from "../components.mjs";

const profiles = Object.values(site.profiles).filter(Boolean);

export const personSchema = () => ({
  "@type": "Person",
  "@id": abs("/#florian"),
  name: site.name,
  jobTitle: "Développeur web",
  url: abs("/#profil"),
  worksFor: { "@id": abs("/#entreprise") },
  address: { "@type": "PostalAddress", addressLocality: "Bordeaux", addressCountry: "FR" },
  knowsAbout: ["Création de site internet", "Référencement naturel", "Référencement local", "Ruby on Rails", "HTML", "CSS"],
  ...(profiles.length && { sameAs: profiles }),
});

export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": abs("/#entreprise"),
  name: site.businessName,
  alternateName: site.brand,
  description:
    "Création de sites internet professionnels pour indépendants, artisans et petites entreprises, à partir de 200 €.",
  url: abs("/"),
  image: abs("/assets/img/og-image.jpg"),
  priceRange: "À partir de 200 €",
  ...(site.email && { email: site.email }),
  ...(site.phone && { telephone: "+33" + site.phone.replace(/\s/g, "").replace(/^0/, "") }),
  logo: abs("/apple-touch-icon.png"),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bordeaux",
    postalCode: "33200",
    addressRegion: "Nouvelle-Aquitaine",
    addressCountry: "FR",
  },
  areaServed: site.area,
  ...(site.googleProfile && { sameAs: [site.googleProfile] }),
  founder: personSchema(),
  makesOffer: offers.map((o) => ({
    "@type": "Offer",
    name: o.name,
    description: o.pitch,
    priceCurrency: "EUR",
    priceSpecification: { "@type": "PriceSpecification", minPrice: o.price, priceCurrency: "EUR" },
  })),
});

export default {
  path: "/",
  isHome: true,
  title: "Création de site internet pour indépendants et artisans | " + site.brand,
  ogTitle: "Votre site internet professionnel à partir de 200 €",
  description:
    "Je crée des sites vitrines modernes, rapides et adaptés aux mobiles pour les indépendants, artisans et petites entreprises. À partir de 200 €, devis gratuit.",
  preload: `<link rel="preload" as="image" type="image/webp" href="${u("/assets/img/realisations/crea-desktop-960.webp")}" imagesrcset="${[640, 960, 1440].map((w) => `${u(`/assets/img/realisations/crea-desktop-${w}.webp`)} ${w}w`).join(", ")}" imagesizes="(min-width: 1100px) 600px, 92vw">`,
  schema: [
    businessSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.brand,
      alternateName: site.name,
      url: abs("/"),
      inLanguage: "fr-FR",
    },
    faqSchema(),
  ],
  body: [
    hero(),
    projectsSection(),
    reasonsSection(),
    offersSection(),
    processSection(),
    seoSection(),
    developerSection(),
    faqSection(),
    audiencesSection({ alt: true }),
    ctaSection(),
  ].join("\n"),
};
