import { site, steps } from "../config.mjs";
import { ctaSection } from "../components.mjs";

export default {
  path: "/contact/",
  title: "Demander un devis gratuit pour votre site internet | " + site.brand,
  description:
    "Expliquez-moi votre projet en quelques lignes : je vous réponds avec une proposition adaptée, un tarif et un délai. Gratuit et sans engagement.",
  crumbs: [{ name: "Contact", path: "/contact/" }],
  bodyClass: "page-contact",
  body: [
    ctaSection({
      title: "Demander un devis gratuit",
      text: "Expliquez-moi simplement votre projet. Je reviens vers vous avec une proposition claire : contenu, tarif et délai.",
      tag: "h1",
    }),
    `<section class="section">
  <div class="container">
    <h2 class="section-title is-small">Et ensuite ?</h2>
    <ol class="steps is-compact">
      ${steps
        .slice(0, 3)
        .map(
          (s, i) => `<li class="step"><span class="step-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span><h3>${s.title}</h3><p>${s.text}</p></li>`
        )
        .join("")}
    </ol>
  </div>
</section>`,
  ].join("\n"),
};
