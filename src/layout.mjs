import { site, nav } from "./config.mjs";
import { u, abs, esc, icon, join, logo } from "./lib.mjs";

const analytics = () => {
  const { plausibleDomain, ga4Id } = site.analytics;
  if (plausibleDomain)
    return `<script defer data-domain="${esc(plausibleDomain)}" src="https://plausible.io/js/script.js"></script>`;
  if (ga4Id)
    return `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(ga4Id)}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${esc(ga4Id)}");</script>`;
  return "";
};

const breadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

const head = (page, { css, assetVersion }) => {
  const canonical = abs(page.path);
  const image = abs("/assets/img/og-image.jpg");
  const schemas = [...(page.schema || [])];
  if (page.crumbs) schemas.push(breadcrumbSchema([{ name: "Accueil", path: "/" }, ...page.crumbs]));

  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<link rel="canonical" href="${canonical}">
${site.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(site.googleSiteVerification)}">` : ""}
<meta property="og:type" content="website">
<meta property="og:locale" content="${site.locale}">
<meta property="og:site_name" content="${esc(site.brand)}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${image}">
<meta name="theme-color" content="#f8fafc">
<link rel="icon" href="${u("/favicon.svg")}" type="image/svg+xml">
<link rel="icon" href="${u("/favicon-32.png")}" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="${u("/apple-touch-icon.png")}">
<link rel="preload" href="${u("/assets/fonts/manrope-latin.woff2")}" as="font" type="font/woff2" crossorigin>
${page.preload || ""}
<style>${css.replaceAll("__BASE__", u(""))}</style>
<script>document.documentElement.classList.add("js")</script>
<script src="${u("/assets/js/main.js")}?v=${assetVersion}" defer></script>
${analytics()}
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n")}
</head>`;
};

const header = (page) => {
  const href = (item) => (page.isHome && item.anchor ? item.anchor : u(item.page));
  // Toutes les pages se terminent par le formulaire, sauf celles marquées noForm.
  const ctaHref = page.noForm ? u("/contact/") : "#devis";
  return `<header class="site-header" data-header>
  <div class="container header-inner">
    <a class="brand" href="${u("/")}" aria-label="${esc(site.name)}, accueil">
      ${logo()}
      <span class="brand-text"><strong>${esc(site.name)}</strong><span>${esc(site.tagline)}</span></span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Navigation principale" data-nav>
      <ul>
        ${nav.map((item) => `<li><a href="${href(item)}">${item.label}</a></li>`).join("")}
      </ul>
      <a class="btn btn-primary nav-cta-mobile" href="${ctaHref}">Demander un devis</a>
    </nav>
    <div class="header-actions">
      <a class="btn btn-primary btn-sm" href="${ctaHref}"><span class="hide-xs">Demander un </span>devis</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" data-nav-toggle>
        <span class="visually-hidden">Ouvrir le menu</span>${icon("menu", "icon icon-open")}${icon("close", "icon icon-close")}
      </button>
    </div>
  </div>
</header>`;
};

const footer = () => `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand" href="${u("/")}">
        ${logo()}
        <span class="brand-text"><strong>${esc(site.name)}</strong><span>${esc(site.tagline)}</span></span>
      </a>
      <p>${esc(site.brand)} : sites internet professionnels pour indépendants, artisans et petites entreprises, à partir de 200 €. Basé à Bordeaux.</p>
      ${join([
        site.email && `<p><a href="mailto:${esc(site.email)}">${icon("mail")}${esc(site.email)}</a></p>`,
        site.phone && `<p><a href="tel:${site.phone.replace(/\s/g, "")}">${icon("phone")}${esc(site.phone)}</a></p>`,
        site.googleProfile && `<p><a href="${esc(site.googleProfile)}" target="_blank" rel="noopener">${icon("star")}Fiche Google et avis<span class="visually-hidden"> (nouvel onglet)</span></a></p>`,
      ])}
    </div>
    <nav aria-label="Pages">
      <p class="footer-title">Le site</p>
      <ul>
        <li><a href="${u("/realisations/")}">Réalisations</a></li>
        <li><a href="${u("/tarifs/")}">Tarifs</a></li>
        <li><a href="${u("/#processus")}">Processus</a></li>
        <li><a href="${u("/#faq")}">FAQ</a></li>
        <li><a href="${u("/guides/")}">Guides</a></li>
        <li><a href="${u("/contact/")}">Contact</a></li>
      </ul>
    </nav>
    <nav aria-label="Services">
      <p class="footer-title">Services</p>
      <ul>
        <li><a href="${u("/creation-site-internet/")}">Création de site internet</a></li>
        <li><a href="${u("/creation-site-internet-artisan/")}">Site internet pour artisan</a></li>
        <li><a href="${u("/creation-site-internet-independant/")}">Site pour indépendant</a></li>
        <li><a href="${u("/creation-site-internet-bordeaux/")}">Site internet à Bordeaux</a></li>
        <li><a href="${u("/fonctionnalites/")}">Options et fonctionnalités</a></li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} ${esc(site.name)}</p>
      <a href="${u("/mentions-legales/")}">Mentions légales</a>
    </div>
  </div>
</footer>`;

export const layout = (page, opts) => `<!doctype html>
<html lang="${site.lang}">
${head(page, opts)}
<body${page.bodyClass ? ` class="${page.bodyClass}"` : ""}>
<a class="skip-link" href="#contenu">Aller au contenu</a>
${header(page)}
<main id="contenu">
${page.body}
</main>
${footer()}
</body>
</html>
`;
