import { site, faq, offers, maintenance } from "../config.mjs";
import { u, abs, euro, icon } from "../lib.mjs";
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

const [essentiel, pro, acquisition] = offers;

const audiences = `
<section class="section section-alt" id="pour-qui">
  <div class="container">
    ${sectionHead({
      eyebrow: "Pour qui",
      title: "À qui s'adressent ces sites à petit prix ?",
      intro:
        "Aux indépendants, artisans et petites entreprises qui veulent un site professionnel sans payer le prix d'une agence. Vous m'expliquez votre activité, je m'occupe du reste : conception, technique, mise en ligne.",
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

const pageFaq = [
  {
    q: "Pourquoi vos sites sont-ils moins chers qu'en agence ?",
    a: "Parce qu'il n'y a ni commercial, ni chef de projet, ni locaux à financer : je réalise moi-même votre site, du premier échange à la mise en ligne. Les sites sont aussi construits pour être légers, ce qui réduit le coût de l'hébergement. Le périmètre de chaque offre est défini à l'avance, ce qui évite les heures facturées en plus.",
  },
  {
    q: "Un site pas cher est-il un site de moins bonne qualité ?",
    a: `Non. Même à ${euro(essentiel.price)}, le site est conçu pour votre activité, adapté aux mobiles, rapide et intègre les bases du référencement. Ce qui change d'une offre à l'autre, c'est le nombre de pages, le nombre de séries de modifications et le travail sur la visibilité, pas la qualité de fabrication.`,
  },
  {
    q: "Quels sont les frais après la création du site ?",
    a: `Le nom de domaine et l'hébergement sont inclus la première année. Ensuite, la formule ${maintenance.name.toLowerCase()} coûte de ${maintenance.priceFrom} à ${maintenance.priceTo} € par mois selon le niveau de suivi. Vous pouvez aussi récupérer votre site et l'héberger ailleurs : aucun abonnement n'est imposé.`,
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez le formulaire en bas de page ou écrivez-moi par e-mail en décrivant votre activité et votre besoin. Je vous réponds avec une proposition écrite : contenu, tarif et délai. Le devis est gratuit et sans engagement.",
  },
  ...faq.filter((f) => /coûte|temps|textes|référencement|propriétaire/.test(f.q)),
];

export default {
  path: "/creation-site-internet/",
  title: "Création de site internet pas cher, dès 200 € | " + site.name,
  ogTitle: "Création de site internet à petit prix, dès 200 €",
  description:
    "Je crée des sites internet professionnels à prix accessible pour les indépendants, artisans et petites entreprises. Offres dès 200 €, tarifs détaillés, devis gratuit.",
  crumbs: [{ name: "Création de site internet", path: "/creation-site-internet/" }],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Création de site internet à petit prix",
      serviceType: "Création de site internet",
      url: abs("/creation-site-internet/"),
      areaServed: { "@type": "Country", name: "France" },
      audience: { "@type": "BusinessAudience", name: "Indépendants, artisans et petites entreprises" },
      provider: { "@id": businessSchema()["@id"] },
      offers: offers.map((o) => ({
        "@type": "Offer",
        name: o.name,
        description: o.pitch,
        priceCurrency: "EUR",
        priceSpecification: { "@type": "PriceSpecification", minPrice: o.price, priceCurrency: "EUR" },
      })),
    },
    faqSchema(pageFaq),
  ],
  body: [
    pageHero({
      eyebrow: "Création de site internet pas cher",
      title: "Création de site internet à petit prix",
      intro: `Un site vitrine professionnel, rapide et adapté aux mobiles, conçu et mis en ligne par un développeur indépendant. À partir de ${euro(essentiel.price)}, nom de domaine et hébergement inclus la première année.`,
    }),
    cardsSection({
      id: "prix",
      eyebrow: "Les prix",
      title: "Combien coûte la création d'un site internet ?",
      intro: `Un site professionnel coûte de ${euro(essentiel.price)} à ${euro(acquisition.price)} et plus, selon le nombre de pages et le travail de référencement. Le prix exact est fixé dans le devis, avant de commencer.`,
      items: [
        { title: `${essentiel.name} : dès ${euro(essentiel.price)}`, text: "1 à 3 pages, design personnalisé, formulaire de contact, bases du référencement et mise en ligne. Pour être présent sur internet, proprement." },
        { title: `${pro.name} : dès ${euro(pro.price)}`, text: "4 à 7 pages, référencement local de base, mesure d'audience et fiche Google Business Profile. Le plus choisi par les artisans et les TPE." },
        { title: `${acquisition.name} : dès ${euro(acquisition.price)}`, text: "Un site complet avec stratégie de référencement, rédaction des pages et pages ciblant les recherches locales, pour attirer plus de clients." },
        { title: `Hébergement : ${maintenance.priceFrom} à ${maintenance.priceTo} € / mois`, text: "Nom de domaine et hébergement inclus la première année. Ensuite, hébergement, maintenance et petites modifications selon la formule choisie, sans engagement." },
      ],
    }),
    cardsSection({
      eyebrow: "Pourquoi ces prix",
      title: "Un site à petit prix, sans site au rabais",
      intro: "Des tarifs accessibles ne veulent pas dire un modèle bâclé. Voici d'où vient la différence de prix avec une agence.",
      alt: true,
      items: [
        { title: "Un seul interlocuteur", text: "Pas de commercial ni de chef de projet à rémunérer : vous échangez directement avec la personne qui crée votre site." },
        { title: "Un périmètre défini", text: "Nombre de pages et séries de modifications sont fixés dans chaque offre. Pas d'heures ajoutées en cours de route." },
        { title: "Des sites légers", text: "Des sites rapides et sans superflu, qui coûtent peu à héberger et à maintenir." },
        { title: "Vous restez propriétaire", text: "Le site et le nom de domaine sont à vous. Aucun abonnement imposé pour garder votre site en ligne." },
      ],
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
    projectsSection({ title: "Quelques sites déjà réalisés" }),
    offersSection({
      title: "Ce que comprend chaque formule",
      intro: `Le détail des trois offres, et ce qui n'est pas inclus. Pour comparer en détail, voir aussi la <a href="${u("/tarifs/")}">page tarifs</a>.`,
    }),
    processSection(),
    faqSection(pageFaq, { title: "Questions sur les sites à petit prix" }),
    ctaSection({ title: "Demandez votre devis gratuit." }),
  ].join("\n"),
};
