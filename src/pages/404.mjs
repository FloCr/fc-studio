import { site } from "../config.mjs";
import { u } from "../lib.mjs";

export default {
  path: "/404.html",
  output: "404.html",
  noindex: true,
  noForm: true,
  title: "Page introuvable | " + site.name,
  description: "Cette page n'existe pas ou a été déplacée.",
  body: `<section class="page-hero is-centered">
  <div class="container narrow">
    <p class="eyebrow">Erreur 404</p>
    <h1 class="page-title">Cette page n'existe pas.</h1>
    <p class="hero-sub">Elle a peut-être été déplacée. Vous trouverez sûrement ce que vous cherchez depuis l'accueil.</p>
    <div class="btn-row is-center">
      <a class="btn btn-dark btn-lg" href="${u("/")}">Retour à l'accueil</a>
      <a class="btn btn-ghost btn-lg" href="${u("/contact/")}">Demander un devis</a>
    </div>
  </div>
</section>`,
};
