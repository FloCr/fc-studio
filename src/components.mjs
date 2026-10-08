import {
  site,
  offers,
  maintenance,
  extras,
  custom,
  projects,
  reasons,
  steps,
  seoPoints,
  faq as faqItems,
} from "./config.mjs";
import { u, esc, euro, icon, join } from "./lib.mjs";

// ---------------------------------------------------------------------------
// Briques
// ---------------------------------------------------------------------------

export const sectionHead = ({ eyebrow, title, intro, tag = "h2", center = false }) => `
<div class="section-head${center ? " is-center" : ""}" data-reveal>
  ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
  <${tag} class="section-title">${title}</${tag}>
  ${intro ? `<p class="lead">${intro}</p>` : ""}
</div>`;

const checklist = (items, cls = "checklist") =>
  `<ul class="${cls}">${items.map((i) => `<li>${icon("check")}<span>${i}</span></li>`).join("")}</ul>`;

const img = (p, kind, { sizes, eager = false, alt }) => {
  const set =
    kind === "desktop"
      ? [640, 960, 1440].map((w) => `${u(`/assets/img/realisations/${p.image}-desktop-${w}.webp`)} ${w}w`)
      : [390, 780].map((w) => `${u(`/assets/img/realisations/${p.image}-mobile-${w}.webp`)} ${w}w`);
  const [w, h] = kind === "desktop" ? [1440, 900] : [390, 844];
  const src = kind === "desktop" ? `${p.image}-desktop-960` : `${p.image}-mobile-390`;
  return `<img src="${u(`/assets/img/realisations/${src}.webp`)}" srcset="${set.join(", ")}" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
};

export const browser = (p, opts = {}) => `
<div class="browser">
  <div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span><em>${esc(p.displayUrl)}</em></div>
  ${img(p, "desktop", { alt: `Page d'accueil du site ${p.name}`, sizes: "(min-width: 1100px) 640px, 92vw", ...opts })}
</div>`;

export const phone = (p, opts = {}) => `
<div class="phone">
  ${img(p, "mobile", { alt: `Le site ${p.name} sur mobile`, sizes: "180px", ...opts })}
</div>`;

const visitLink = (p) =>
  `<a class="link-arrow" href="${esc(p.url)}" target="_blank" rel="noopener">Voir le site<span class="visually-hidden"> ${esc(p.name)} (nouvel onglet)</span>${icon("external")}</a>`;

// ---------------------------------------------------------------------------
// Hero (accueil)
// ---------------------------------------------------------------------------

export const hero = () => {
  const [main, second] = projects;
  return `
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <h1 class="hero-title">Création de sites web modernes, rapides et efficaces.</h1>
      <p class="hero-sub">Des sites vitrines sur mesure pour les indépendants, artisans et petites entreprises.</p>
      <p class="hero-price"><span>À partir de</span> <strong>200 €</strong><em>Devis gratuit, sans engagement</em></p>
      <div class="btn-row">
        <a class="btn btn-primary btn-lg" href="#devis">Demander un devis${icon("arrow")}</a>
        <a class="btn btn-ghost btn-lg" href="#realisations">Voir mes réalisations</a>
      </div>
    </div>
    <div class="hero-visual">
      <a href="#realisations" class="hero-shots" aria-label="Voir les réalisations">
        ${browser(main, { eager: true, sizes: "(min-width: 1100px) 600px, 92vw" })}
        ${phone(second, { eager: true, sizes: "150px" })}
      </a>
      <ul class="hero-badges" aria-label="Inclus dans chaque site">
        <li class="hero-badge is-1">${icon("check")}Responsive</li>
        <li class="hero-badge is-2">${icon("check")}Optimisé pour Google</li>
        <li class="hero-badge is-3">${icon("check")}Livraison rapide</li>
      </ul>
    </div>
  </div>
</section>`;
};

// En-tête des pages intérieures.
export const pageHero = ({ eyebrow, title, intro, actions = true }) => `
<section class="page-hero">
  <div class="container">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
    <h1 class="page-title">${title}</h1>
    ${intro ? `<p class="hero-sub">${intro}</p>` : ""}
    ${
      actions
        ? `<div class="btn-row">
      <a class="btn btn-primary btn-lg" href="#devis">Demander un devis${icon("arrow")}</a>
      <a class="btn btn-ghost btn-lg" href="${u("/realisations/")}">Voir mes réalisations</a>
    </div>`
        : ""
    }
  </div>
</section>`;

// ---------------------------------------------------------------------------
// Réalisations
// ---------------------------------------------------------------------------

const projectMeta = (p) => esc([p.activity, p.place].filter(Boolean).join(" · "));

const projectCard = (p, featured, attrs = "data-reveal") => `
<article class="project${featured ? " is-featured" : ""}" ${attrs}>
  <div class="project-media">
    ${browser(p, { sizes: featured ? "(min-width: 1100px) 680px, 92vw" : "(min-width: 900px) 520px, 92vw" })}
    ${featured ? phone(p, { sizes: "160px" }) : ""}
  </div>
  <div class="project-body">
    <p class="project-meta">${projectMeta(p)}</p>
    <h3 class="project-title">${esc(p.name)}</h3>
    <p>${esc(p.summary)}</p>
    ${checklist(featured ? p.features : p.features.slice(0, 3), "checklist is-compact")}
    ${visitLink(p)}
  </div>
</article>`;

// Vitrine défilante : un projet à la fois, onglets + flèches.
// Sans JS, la piste reste un simple défilement horizontal.
const showcase = () => `
<div class="showcase" data-showcase data-reveal>
  <div class="showcase-nav">
    <div class="showcase-tabs" role="group" aria-label="Choisir une réalisation">
      ${projects
        .map(
          (p, i) => `
      <button class="showcase-tab" type="button" data-showcase-go="${i}" aria-controls="slide-${p.id}"${i === 0 ? ' aria-current="true"' : ""}>
        <span class="showcase-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <span class="showcase-name">${esc(p.name)}<small>${esc(p.activity)}</small></span>
      </button>`
        )
        .join("")}
    </div>
    <div class="showcase-arrows">
      <button class="showcase-arrow is-prev" type="button" data-showcase-step="-1" aria-label="Réalisation précédente" disabled>${icon("arrow")}</button>
      <button class="showcase-arrow" type="button" data-showcase-step="1" aria-label="Réalisation suivante">${icon("arrow")}</button>
    </div>
  </div>
  <div class="showcase-track" data-showcase-track tabindex="0" role="region" aria-roledescription="carrousel" aria-label="Réalisations">
    ${projects
      .map((p, i) =>
        projectCard(p, true, `id="slide-${p.id}" aria-roledescription="diapositive" aria-label="${i + 1} sur ${projects.length} : ${esc(p.name)}"`)
      )
      .join("")}
  </div>
</div>`;

export const projectsSection = ({ title = "Des sites réels, en ligne, pour de vraies entreprises", intro, more = true } = {}) => `
<section class="section" id="realisations" aria-labelledby="realisations-title">
  <div class="container">
    ${sectionHead({
      eyebrow: "Réalisations",
      title: `<span id="realisations-title">${title}</span>`,
      intro: intro ?? "Un artisan, un plombier, une sage-femme : trois métiers, trois sites conçus pour que leurs clients les trouvent et les contactent.",
    })}
    ${showcase()}
    ${more ? `<p class="section-more"><a class="link-arrow" href="${u("/realisations/")}">Voir le détail des réalisations${icon("arrow")}</a></p>` : ""}
  </div>
</section>`;

// Version détaillée pour /realisations/.
export const projectsDetailed = () => `
<section class="section">
  <div class="container case-list">
    ${projects
      .map(
        (p, i) => `
    <article class="case${i % 2 ? " is-reversed" : ""}" id="${p.id}" data-reveal>
      <div class="case-media">
        ${browser(p, { sizes: "(min-width: 1100px) 640px, 92vw", eager: i === 0 })}
        ${phone(p, { sizes: "160px", eager: i === 0 })}
      </div>
      <div class="case-body">
        <p class="project-meta">${projectMeta(p)}</p>
        <h2 class="project-title">${esc(p.name)}</h2>
        <p>${esc(p.summary)}</p>
        <h3 class="mini-title">Ce que comprend le site</h3>
        ${checklist(["Design sur mesure", "Adapté aux mobiles", ...p.features], "checklist is-compact")}
        ${visitLink(p)}
      </div>
    </article>`
      )
      .join("")}
  </div>
</section>`;

// ---------------------------------------------------------------------------
// Pourquoi moi
// ---------------------------------------------------------------------------

export const reasonsSection = () => `
<section class="section section-alt" id="pourquoi" aria-labelledby="pourquoi-title">
  <div class="container">
    ${sectionHead({
      eyebrow: "Pourquoi travailler avec moi",
      title: `<span id="pourquoi-title">Un vrai site professionnel, sans la lourdeur d'une agence</span>`,
    })}
    <div class="reasons">
      ${reasons
        .map(
          (r) => `
      <div class="reason" data-reveal>
        <span class="reason-icon">${icon(r.icon)}</span>
        <h3>${r.title}</h3>
        <p>${r.text}</p>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------------------
// Offres
// ---------------------------------------------------------------------------

const offerCard = (o, tag) => `
<article class="offer${o.featured ? " is-featured" : ""}" data-reveal>
  ${o.badge ? `<p class="offer-badge">${o.badge}</p>` : ""}
  <${tag} class="offer-name">${o.name}</${tag}>
  <p class="offer-price"><span>à partir de</span> <strong>${euro(o.price)}</strong></p>
  <p class="offer-pitch">${o.pitch}</p>
  <a class="btn ${o.featured ? "btn-primary" : "btn-dark"} btn-block" href="#devis" data-offer="${o.id}">${o.cta}</a>
  ${checklist(o.features)}
  <div class="offer-limits">
    <p>Le cadre</p>
    <ul>${o.limits.map((l) => `<li>${l}</li>`).join("")}</ul>
  </div>
</article>`;

// Même niveau de titre que les cartes d'offres.
export const maintenanceBlock = (tag = "h3") => `
<div class="maintenance" data-reveal>
  <div>
    <p class="eyebrow">Après la mise en ligne</p>
    <${tag} class="maintenance-title">${maintenance.name}</${tag}>
    <p class="maintenance-price"><strong>${maintenance.priceFrom} à ${maintenance.priceTo} €</strong> / mois selon la formule</p>
    <p class="maintenance-note">${maintenance.note}</p>
  </div>
  ${checklist(maintenance.features, "checklist is-compact")}
</div>`;

export const extrasBlock = () => `
<div class="extras" data-reveal>
  <p class="extras-title">Options disponibles sur devis</p>
  <ul class="chips">${extras.map((e) => `<li>${e}</li>`).join("")}</ul>
  <p class="section-more"><a class="link-arrow" href="${u("/fonctionnalites/")}">Voir les options et des exemples concrets${icon("arrow")}</a></p>
</div>`;

export const offersSection = ({ tag = "h2", title, intro, withExtras = true } = {}) => {
  const cardTag = tag === "h1" ? "h2" : "h3";
  return `
<section class="section" id="offres" aria-labelledby="offres-title">
  <div class="container">
    ${sectionHead({
      eyebrow: "Offres et tarifs",
      tag,
      title: `<span id="offres-title">${title || "Des prix clairs, un périmètre défini"}</span>`,
      intro: intro || "Trois formules pour démarrer. Vous savez ce qui est inclus, et ce qui ne l'est pas.",
    })}
    <div class="offers">
      ${offers.map((o) => offerCard(o, cardTag)).join("")}
    </div>
    <p class="offers-note">${icon("info")}Chaque projet étant différent, un devis précis est établi avant le début du projet.</p>
    ${withExtras ? maintenanceBlock(cardTag) + extrasBlock() : ""}
  </div>
</section>`;
};

// ---------------------------------------------------------------------------
// Processus
// ---------------------------------------------------------------------------

export const processSection = () => `
<section class="section section-alt" id="processus" aria-labelledby="processus-title">
  <div class="container">
    ${sectionHead({
      eyebrow: "Comment ça marche",
      title: `<span id="processus-title">Quatre étapes, et votre site est en ligne</span>`,
    })}
    <ol class="steps">
      ${steps
        .map(
          (s, i) => `
      <li class="step" data-reveal>
        <span class="step-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </li>`
        )
        .join("")}
    </ol>
  </div>
</section>`;

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const seoSection = () => `
<section class="section" id="referencement" aria-labelledby="seo-title">
  <div class="container split">
    <div data-reveal>
      <p class="eyebrow">Référencement</p>
      <h2 class="section-title" id="seo-title">Le référencement est pris en compte dès la création du site</h2>
      <p class="lead">Un site invisible sur Google ne sert à rien. Le vôtre part sur des bases techniques solides.</p>
      <p>Vos clients cherchent aussi sur ChatGPT et dans les réponses IA de Google. Ces outils, comme Google, mettent en avant les sites clairs, rapides et bien structurés (activité, zone d'intervention, coordonnées). Votre site est conçu pour ça.</p>
      <p class="muted">Personne ne peut honnêtement vous garantir la première place sur Google, ni d'être cité par ChatGPT. Pour aller plus loin, l'offre Site + Acquisition ajoute le référencement local et des pages ciblées sur les recherches de vos clients.</p>
    </div>
    <div class="panel" data-reveal>
      ${checklist(seoPoints, "checklist is-grid")}
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------------------
// Profil + sur mesure
// ---------------------------------------------------------------------------

export const developerSection = () => `
<section class="section section-alt" id="profil" aria-labelledby="profil-title">
  <div class="container split">
    <div data-reveal>
      <p class="eyebrow">Qui suis-je</p>
      <h2 class="section-title" id="profil-title">Un développeur, pas une agence</h2>
      <p class="lead">Je m'appelle ${esc(site.name.split(" ")[0])}. Je crée votre site, je le mets en ligne et je m'occupe de toute la partie technique.</p>
      <p>Je suis développeur web à <a href="${u("/creation-site-internet-bordeaux/")}">Bordeaux</a>, spécialisé notamment en Ruby on Rails, HTML et CSS. Concrètement, pour vous, cela veut dire des sites rapides, personnalisés et bien construits, sans les coûts et la lourdeur d'une agence traditionnelle.</p>
    </div>
    <div class="custom-card" data-reveal>
      <h3>Besoin de plus qu'un site vitrine ?</h3>
      <p>Je développe aussi des fonctionnalités sur mesure, quand votre activité le demande.</p>
      <ul class="custom-list">
        ${custom.map((c) => `<li><strong>${c.title}</strong><span>${c.text}</span></li>`).join("")}
      </ul>
      <div class="btn-row">
        <a class="btn btn-light" href="#devis" data-offer="sur-mesure">Parler de mon projet${icon("arrow")}</a>
        <a class="link-arrow" href="${u("/fonctionnalites/")}">Voir des exemples${icon("arrow")}</a>
      </div>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const faqSection = (items = faqItems, { title = "Questions fréquentes" } = {}) => `
<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="container faq-wrap">
    ${sectionHead({ eyebrow: "FAQ", title: `<span id="faq-title">${title}</span>` })}
    <div class="faq">
      ${items
        .map(
          (f) => `
      <details class="faq-item">
        <summary><span class="faq-q">${f.q}</span><span class="faq-icon" aria-hidden="true">${icon("plus")}</span></summary>
        <div class="faq-answer"><p>${f.a}</p></div>
      </details>`
        )
        .join("")}
    </div>
  </div>
</section>`;

export const faqSchema = (items = faqItems) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

// ---------------------------------------------------------------------------
// Formulaire de devis + CTA final
// ---------------------------------------------------------------------------

const needs = [
  ["essentiel", "Un Site Essentiel (à partir de 200 €)"],
  ["pro", "Un Site Pro (à partir de 499 €)"],
  ["acquisition", "Un Site + Acquisition (à partir de 900 €)"],
  ["refonte", "Refaire mon site actuel"],
  ["sur-mesure", "Une fonctionnalité sur mesure"],
  ["inconnu", "Je ne sais pas encore"],
];

const budgets = ["Moins de 300 €", "300 à 600 €", "600 à 1 500 €", "Plus de 1 500 €", "Je ne sais pas encore"];

export const leadForm = () => `
<form class="lead-form" action="https://api.web3forms.com/submit" method="POST" data-lead-form data-thanks="${u("/merci/")}" novalidate>
  <input type="hidden" name="access_key" value="${esc(site.web3formsKey)}">
  <input type="hidden" name="subject" value="Nouvelle demande de devis — site internet">
  <input type="hidden" name="from_name" value="${esc(site.name)} — site">
  <input type="hidden" name="redirect" value="${esc(site.url.replace(/\/$/, ""))}/merci/">
  <input type="checkbox" name="botcheck" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true">

  <div class="field-row">
    <div class="field">
      <label for="f-nom">Nom</label>
      <input id="f-nom" name="nom" type="text" autocomplete="name" required>
    </div>
    <div class="field">
      <label for="f-entreprise">Entreprise</label>
      <input id="f-entreprise" name="entreprise" type="text" autocomplete="organization">
    </div>
  </div>
  <div class="field-row">
    <div class="field">
      <label for="f-email">Email</label>
      <input id="f-email" name="email" type="email" autocomplete="email" inputmode="email" required>
    </div>
    <div class="field">
      <label for="f-tel">Téléphone <span class="optional">(optionnel)</span></label>
      <input id="f-tel" name="telephone" type="tel" autocomplete="tel" inputmode="tel">
    </div>
  </div>
  <div class="field-row">
    <div class="field">
      <label for="f-activite">Activité</label>
      <input id="f-activite" name="activite" type="text" placeholder="Ex. plombier, restaurant, coach…">
    </div>
    <fieldset class="field">
      <legend>Avez-vous déjà un site ?</legend>
      <div class="radios">
        <label><input type="radio" name="site_existant" value="Oui"> Oui</label>
        <label><input type="radio" name="site_existant" value="Non"> Non</label>
      </div>
    </fieldset>
  </div>
  <div class="field-row">
    <div class="field">
      <label for="f-besoin">Que souhaitez-vous ?</label>
      <select id="f-besoin" name="besoin" data-need>
        <option value="">Choisir…</option>
        ${needs.map(([v, l]) => `<option value="${l}" data-id="${v}">${l}</option>`).join("")}
      </select>
    </div>
    <div class="field">
      <label for="f-budget">Budget approximatif</label>
      <select id="f-budget" name="budget">
        <option value="">Choisir…</option>
        ${budgets.map((b) => `<option>${b}</option>`).join("")}
      </select>
    </div>
  </div>
  <div class="field">
    <label for="f-message">Votre projet en quelques mots</label>
    <textarea id="f-message" name="message" rows="4" placeholder="Ce que vous faites, ce que vous attendez du site, une échéance éventuelle…"></textarea>
  </div>
  <button class="btn btn-primary btn-lg btn-block" type="submit">Recevoir mon devis${icon("arrow")}</button>
  <p class="form-status" role="status" aria-live="polite" data-form-status></p>
  <p class="form-legal">Vos informations servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d'autres fins. <a href="${u("/mentions-legales/")}#donnees">En savoir plus</a></p>
</form>`;

export const ctaSection = ({ title = "Votre projet commence ici.", text, tag = "h2" } = {}) => `
<section class="section cta-section" id="devis" aria-labelledby="devis-title">
  <div class="container cta-grid">
    <div class="cta-copy" data-reveal>
      <p class="eyebrow">Devis gratuit</p>
      <${tag} class="section-title" id="devis-title">${title}</${tag}>
      <p class="lead">${text || "Vous avez besoin d'un site pour votre activité ? Expliquez-moi simplement votre projet et je vous répondrai avec une proposition adaptée."}</p>
      ${checklist(
        [
          "Gratuit et sans engagement",
          "Vous échangez directement avec moi",
          site.respondWithin24h ? "Réponse sous 24 h" : "Un devis clair avant de commencer",
        ],
        "checklist is-light"
      )}
      ${join([
        (site.email || site.phone) && `<div class="cta-contact">`,
        site.phone && `<a href="tel:${site.phone.replace(/\s/g, "")}">${icon("phone")}${esc(site.phone)}</a>`,
        site.email && `<a href="mailto:${esc(site.email)}">${icon("mail")}${esc(site.email)}</a>`,
        (site.email || site.phone) && `</div>`,
      ])}
    </div>
    <div class="form-card" data-reveal>
      ${leadForm()}
    </div>
  </div>
</section>`;

// Bloc texte générique pour les pages services.
export const prose = (html) => `<div class="prose">${html}</div>`;

// Grille de cartes simples (pages services).
export const cardsSection = ({ id, eyebrow, title, intro, items, alt = false }) => `
<section class="section${alt ? " section-alt" : ""}"${id ? ` id="${id}"` : ""}>
  <div class="container">
    ${sectionHead({ eyebrow, title, intro })}
    <div class="cards">
      ${items
        .map(
          (c) => `
      <div class="card" data-reveal>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
        ${c.example ? `<p class="card-example">Exemple : <a href="${esc(c.example.url)}" target="_blank" rel="noopener">${esc(c.example.label)}<span class="visually-hidden"> (nouvel onglet)</span></a></p>` : ""}
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;

// Sélection de réalisations (pages services).
export const projectsPicked = ({ ids, title, intro }) => `
<section class="section" id="realisations">
  <div class="container">
    ${sectionHead({ eyebrow: "Réalisations", title, intro })}
    <div class="projects is-pair${ids.length === 1 ? " is-single" : ""}">
      ${projects
        .filter((p) => ids.includes(p.id))
        .map((p) => projectCard(p, ids.length === 1))
        .join("")}
    </div>
    <p class="section-more"><a class="link-arrow" href="${u("/realisations/")}">Toutes les réalisations${icon("arrow")}</a></p>
  </div>
</section>`;
