import { readFileSync } from "node:fs";
import { site } from "./config.mjs";

const base = new URL(site.url).pathname.replace(/\/$/, "");

// Chemin interne → URL relative à la racine du site (gère un éventuel sous-dossier).
export const u = (path) => (path.startsWith("http") ? path : base + path);

// Chemin interne → URL absolue (canonical, Open Graph, sitemap).
export const abs = (path) => site.url.replace(/\/$/, "") + path;

export const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const euro = (n) => `${n.toLocaleString("fr-FR")} €`;

// Concatène un tableau de fragments en ignorant les valeurs vides.
export const join = (parts) => parts.filter(Boolean).join("\n");

// Icônes au trait, 24×24, héritent de currentColor.
const paths = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  external: '<path d="M7 17 17 7M8 7h9v9"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
};

// Logo « FC. » : même fichier que le favicon.
export const logo = (cls = "brand-mark") =>
  readFileSync(new URL("./static/favicon.svg", import.meta.url), "utf8")
    .trim()
    .replace("<svg ", `<svg class="${cls}" aria-hidden="true" focusable="false" `);

export const icon = (name, cls = "icon") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
