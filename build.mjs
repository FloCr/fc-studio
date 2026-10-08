// Génère le site statique dans dist/. Aucune dépendance : `node build.mjs`.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { site } from "./src/config.mjs";
import { layout } from "./src/layout.mjs";
import { abs } from "./src/lib.mjs";

const OUT = "dist";
const pageFiles = readdirSync("src/pages").filter((f) => f.endsWith(".mjs"));
const pages = await Promise.all(pageFiles.map(async (f) => (await import(`./src/pages/${f}`)).default));

const minifyCss = (css) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    // Les espaces sont significatifs dans calc() et les media queries « and ( ».
    .replace(/\band\(/g, "and (")
    .trim();

const tidyHtml = (html) =>
  html
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join("\n");

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
// Le CSS est intégré aux pages ; les JPG des réalisations ne servent qu'à scripts/couverture.html.
const unpublished = (p) => p.endsWith(".css") || /realisations\/.+\.jpg$/.test(p);
cpSync("src/assets", join(OUT, "assets"), { recursive: true, filter: (p) => !unpublished(p) });
cpSync("src/static", OUT, { recursive: true });

const css = minifyCss(readFileSync("src/assets/css/main.css", "utf8"));
const assetVersion = createHash("sha1").update(readFileSync("src/assets/js/main.js")).digest("hex").slice(0, 8);

for (const page of pages) {
  const file = page.output || join(page.path, "index.html");
  const dest = join(OUT, file);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, tidyHtml(layout(page, { css, assetVersion })));
}

const indexed = pages.filter((p) => !p.noindex).sort((a, b) => a.path.length - b.path.length);
writeFileSync(
  join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map((p) => `  <url><loc>${abs(p.path)}</loc></url>`).join("\n")}
</urlset>
`
);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${abs("/sitemap.xml")}\n`);

const host = new URL(site.url);
if (host.pathname === "/" && !host.hostname.endsWith("github.io") && !site.url.includes("votre-domaine")) writeFileSync(join(OUT, "CNAME"), host.hostname + "\n");

console.log(`✓ ${pages.length} pages générées dans ${OUT}/ (${indexed.length} dans le sitemap)`);

const missing = [
  site.url.includes("votre-domaine") && "site.url (domaine du site)",
  !site.web3formsKey && "site.web3formsKey (le formulaire ne peut pas envoyer)",
  !site.email && !site.phone && "site.email ou site.phone (aucun contact direct affiché)",
  (!site.legal.siret || !site.legal.address || !site.legal.status) && "site.legal (mentions légales incomplètes)",
].filter(Boolean);
if (missing.length) console.warn(`\n⚠ À compléter dans src/config.mjs avant la mise en ligne :\n  - ${missing.join("\n  - ")}`);
