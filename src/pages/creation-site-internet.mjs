import { site, faq } from "../config.mjs";
import { u, icon } from "../lib.mjs";
import {
  pageHero,
  cardsSection,
  projectsSection,
  offersSection,
  processSection,
  sectionHead,
  faqSection,
  faqSchema,
  ctaSection,
} from "../components.mjs";
import { businessSchema } from "./home.mjs";

const audiences = `
<section class="section section-alt" id="pour-qui">
  <div class="container">
    ${sectionHead({
      eyebrow: "Pour qui",
      title: "Des sites pour celles et ceux qui n'ont pas le temps de s'en occuper",
      intro:
        "Vous connaissez votre métier, je connais le mien. Vous m'expliquez votre activité, je m'occupe du reste : conception, technique, mise en ligne.",
    })}
    <div class="audiences">
      <a class="audience" href="${u("/creation-site-internet-artisan/")}" data-reveal>
        <h3>Artisans</h3>
        <p>Plombiers, chauffagistes, électriciens, entreprises de rénovation : un site qui donne envie d'appeler et de demander un devis.</p>
        <span class="link-arrow">Site pour artisan${icon("arrow")}</span>
      </a>
      <a class="audience" href="${u("/creation-site-internet-independant/")}" data-reveal>
        <h3>Indépendants et professions libérales</h3>
        <p>Thérapeutes, coachs, consultants, professions de santé : un site clair qui inspire confiance et facilite la prise de rendez-vous.</p>
        <span class="link-arrow">Site pour indépendant${icon("arrow")}</span>
      </a>
      <div class="audience" data-reveal>
        <h3>Commerces, restaurants et TPE</h3>
        <p>Horaires, adresse, services, carte ou catalogue : l'essentiel de votre activité, accessible en quelques secondes depuis un téléphone.</p>
        <a class="link-arrow" href="#devis">Parler de mon projet${icon("arrow")}</a>
      </div>
    </div>
  </div>
</section>`;

const pageFaq = faq.filter((f) => !/propriétaire/.test(f.q));

export default {
  path: "/creation-site-internet/",
  title: "Création de site internet pour TPE, dès 200 € | " + site.name,
  description:
    "Création de site vitrine pour TPE, artisans et indépendants : design personnalisé, mobile, rapide et bien référencé. Dès 200 €, mise en ligne comprise.",
  crumbs: [{ name: "Création de site internet", path: "/creation-site-internet/" }],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Création de site internet",
      provider: { "@id": businessSchema()["@id"] },
      offers: { "@type": "Offer", priceCurrency: "EUR", price: 200, description: "À partir de 200 €" },
    },
    faqSchema(pageFaq),
  ],
  body: [
    pageHero({
      eyebrow: "Création de site internet",
      title: "Création de site internet pour les petites entreprises",
      intro:
        "Un site vitrine professionnel, rapide et adapté aux mobiles, conçu et mis en ligne par un développeur indépendant. À partir de 200 €.",
    }),
    cardsSection({
      eyebrow: "Ce qui est compris",
      title: "Tout ce qu'il faut pour être en ligne, proprement",
      intro: "Quelle que soit l'offre, votre site est livré prêt à l'emploi. Vous n'avez rien de technique à gérer.",
      items: [
        { title: "Un design à votre image", text: "Couleurs, mise en page, ton : le site est conçu pour votre activité, pas recopié d'un modèle." },
        { title: "Parfait sur mobile", text: "La majorité de vos visiteurs arrivent depuis un téléphone. Le site est pensé pour eux en premier." },
        { title: "Rapide à charger", text: "Pages légères, images optimisées : un site lent fait fuir les visiteurs et pénalise votre référencement." },
        { title: "Les bases du référencement", text: "Structure propre, titres, descriptions, plan du site et Google Search Console dès la mise en ligne." },
        { title: "Être contacté facilement", text: "Formulaire, bouton d'appel, lien de prise de rendez-vous : le contact se fait en un geste." },
        { title: "Mise en ligne comprise", text: "Nom de domaine, hébergement et connexion sécurisée (https) inclus la première année." },
      ],
    }),
    audiences,
    projectsSection({ title: "Quelques sites déjà en ligne" }),
    offersSection({ withExtras: false }),
    processSection(),
    faqSection(pageFaq),
    ctaSection(),
  ].join("\n"),
};
