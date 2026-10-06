import { site } from "../config.mjs";
import { u, esc, icon } from "../lib.mjs";

const next = [
  {
    title: "J'étudie votre demande",
    text: "Je regarde votre activité, votre site actuel s'il existe, et ce dont vous avez besoin.",
  },
  {
    title: "Je vous recontacte",
    text: `Par email ou par téléphone, ${site.respondWithin24h ? "sous 24 h" : "rapidement"}, pour préciser ce qui doit l'être.`,
  },
  {
    title: "Vous recevez votre devis",
    text: "Contenu, tarif et délai, noir sur blanc. Gratuit et sans engagement.",
  },
];

export default {
  path: "/merci/",
  noindex: true,
  noForm: true,
  title: "Merci pour votre demande | " + site.name,
  description: "Votre demande de devis a bien été envoyée.",
  body: `<section class="page-hero is-centered thanks">
  <div class="container narrow">
    <span class="thanks-icon" aria-hidden="true">${icon("check")}</span>
    <h1 class="page-title">Merci, votre demande est bien arrivée.</h1>
    <p class="hero-sub">Je reviens vers vous ${site.respondWithin24h ? "sous 24 h" : "rapidement"} avec une proposition adaptée à votre projet.</p>
  </div>
</section>
<section class="section is-tight">
  <div class="container">
    <h2 class="section-title is-small">Et maintenant ?</h2>
    <ol class="steps is-compact">
      ${next
        .map(
          (s, i) => `<li class="step"><span class="step-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span><h3>${s.title}</h3><p>${s.text}</p></li>`
        )
        .join("")}
    </ol>
    ${
      site.email
        ? `<p class="thanks-note">Un oubli, une précision ? Écrivez-moi directement à <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>.</p>`
        : ""
    }
    <div class="btn-row">
      <a class="btn btn-ghost btn-lg" href="${u("/realisations/")}">Voir mes réalisations</a>
      <a class="btn btn-ghost btn-lg" href="${u("/")}">Retour à l'accueil${icon("arrow")}</a>
    </div>
  </div>
</section>`,
};
