import { site } from "../config.mjs";
import { u, icon } from "../lib.mjs";

export default {
  path: "/merci/",
  noindex: true,
  noForm: true,
  title: "Merci pour votre demande | " + site.name,
  description: "Votre demande de devis a bien été envoyée.",
  body: `<section class="page-hero is-centered">
  <div class="container narrow">
    <p class="eyebrow">Demande envoyée</p>
    <h1 class="page-title">Merci, votre demande est bien arrivée.</h1>
    <p class="hero-sub">Je l'étudie et je reviens vers vous ${site.respondWithin24h ? "sous 24 h" : "rapidement"} avec une proposition adaptée.</p>
    <div class="btn-row is-center">
      <a class="btn btn-dark btn-lg" href="${u("/")}">Retour à l'accueil</a>
      <a class="btn btn-ghost btn-lg" href="${u("/realisations/")}">Voir les réalisations${icon("arrow")}</a>
    </div>
  </div>
</section>`,
};
