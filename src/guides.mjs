// ---------------------------------------------------------------------------
// Guides : articles de fond, rubrique /guides/.
// Un fichier par guide dans src/guides/, déclaré dans la liste ci-dessous.
// ---------------------------------------------------------------------------

import { site } from "./config.mjs";
import { u, abs, esc, icon } from "./lib.mjs";
import { sectionHead, faqSection, faqSchema, ctaSection } from "./components.mjs";
import { businessSchema, personSchema } from "./pages/home.mjs";

import prix from "./guides/prix-site-internet.mjs";
import ficheGoogle from "./guides/site-internet-ou-fiche-google.mjs";
import wix from "./guides/wix-wordpress-ou-sur-mesure.mjs";
import maps from "./guides/apparaitre-google-maps-bordeaux.mjs";
import ia from "./guides/etre-cite-par-chatgpt.mjs";
import delai from "./guides/delai-visibilite-google.mjs";
import blog from "./guides/blog-site-artisan.mjs";
import mentions from "./guides/mentions-legales-site-professionnel.mjs";
import plombier from "./guides/site-internet-plombier.mjs";
import sageFemme from "./guides/site-internet-sage-femme.mjs";
import restaurant from "./guides/site-internet-restaurant.mjs";
import location from "./guides/site-internet-location-meublee.mjs";

export const guides = [prix, ficheGoogle, wix, maps, ia, delai, blog, mentions, plombier, sageFemme, restaurant, location];

// Rubriques de la page /guides/, dans l'ordre d'affichage.
const categories = [
  { id: "visibilite", title: "Être trouvé sur Google et par les IA" },
  { id: "metiers", title: "Guides par métier" },
  { id: "budget", title: "Budget, outils et obligations" },
];

const guidePath = (g) => `/guides/${g.slug}/`;
const bySlug = (slug) => guides.find((g) => g.slug === slug);

// « 2026-10-08 » → « 8 octobre 2026 »
const frDate = (iso) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// Temps de lecture, à 200 mots par minute.
const readingTime = (html) => Math.max(1, Math.round(html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length / 200));

const guideCard = (g) => `
<a class="audience" href="${u(guidePath(g))}" data-reveal>
  <h3>${g.h1}</h3>
  <p>${g.description}</p>
  <span class="link-arrow">Lire le guide${icon("arrow")}</span>
</a>`;

// Liens vers les guides, à placer en bas d'une page service.
export const relatedGuides = (slugs, { title = "Pour aller plus loin" } = {}) => `
<section class="section section-alt" id="guides">
  <div class="container">
    ${sectionHead({ eyebrow: "Guides", title })}
    <div class="audiences is-guides">${slugs.map((s) => guideCard(bySlug(s))).join("")}</div>
  </div>
</section>`;

export const guidePage = (g) => {
  const path = guidePath(g);
  const related = (g.related || []).map(bySlug);
  return {
    path,
    title: `${g.title} | ${site.brand}`,
    ogTitle: g.title,
    description: g.description,
    lastmod: g.updated || g.published,
    crumbs: [
      { name: "Guides", path: "/guides/" },
      { name: g.h1, path },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: g.h1,
        description: g.description,
        url: abs(path),
        mainEntityOfPage: abs(path),
        image: abs("/assets/img/og-image.jpg"),
        inLanguage: "fr-FR",
        datePublished: g.published,
        dateModified: g.updated || g.published,
        author: { "@type": "Person", "@id": personSchema()["@id"], name: site.name, url: personSchema().url },
        publisher: { "@id": businessSchema()["@id"] },
      },
      ...(g.faq ? [faqSchema(g.faq)] : []),
    ],
    body: [
      `<section class="page-hero">
  <div class="container narrow">
    <p class="eyebrow">Guide</p>
    <h1 class="page-title">${g.h1}</h1>
    <p class="hero-sub">${g.intro}</p>
    <p class="article-meta">Par <a href="${u("/#profil")}">${esc(site.name)}</a>, développeur web à Bordeaux · Mis à jour le <time datetime="${g.updated || g.published}">${frDate(g.updated || g.published)}</time> · ${readingTime(g.body)} min de lecture</p>
  </div>
</section>
<section class="section is-tight-top">
  <div class="container narrow prose">
    <div class="summary">
      <p class="summary-title">En bref</p>
      <ul>${g.summary.map((s) => `<li>${s}</li>`).join("")}</ul>
    </div>
    ${g.body}
    ${
      related.length
        ? `<h2>À lire aussi</h2>
    <ul>${related.map((r) => `<li><a href="${u(guidePath(r))}">${r.h1}</a></li>`).join("")}</ul>`
        : ""
    }
  </div>
</section>`,
      g.faq ? faqSection(g.faq, { alt: true }) : "",
      ctaSection({ title: g.cta || "Un projet de site ? Parlons-en." }),
    ].join("\n"),
  };
};

export const guidesIndex = {
  path: "/guides/",
  title: `Guides : créer et faire connaître son site | ${site.brand}`,
  ogTitle: "Guides pour créer et faire connaître son site internet",
  description:
    "Prix d'un site internet, Wix ou sur mesure, fiche Google, Google Maps : des réponses claires pour les indépendants, artisans et petites entreprises.",
  crumbs: [{ name: "Guides", path: "/guides/" }],
  lastmod: guides.map((g) => g.updated || g.published).sort().at(-1),
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Guides",
      itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: abs(guidePath(g)), name: g.h1 })),
    },
  ],
  body: [
    `<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Guides</p>
    <h1 class="page-title">Les réponses avant de vous lancer</h1>
    <p class="hero-sub">Combien ça coûte, quel outil choisir, comment être trouvé sur Google : des guides courts et concrets, écrits pour les indépendants, artisans et petites entreprises.</p>
  </div>
</section>
${categories
  .map(
    (c, i) => `
<section class="section${i === 0 ? " is-tight-top" : ""}${i % 2 ? " section-alt" : ""}" id="${c.id}">
  <div class="container">
    ${sectionHead({ title: c.title })}
    <div class="audiences is-guides">${guides.filter((g) => g.category === c.id).map(guideCard).join("")}</div>
  </div>
</section>`
  )
  .join("")}`,
    ctaSection(),
  ].join("\n"),
};
