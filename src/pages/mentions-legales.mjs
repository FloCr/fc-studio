import { site } from "../config.mjs";
import { esc } from "../lib.mjs";

const todo = (v) => (v ? esc(v) : '<span class="todo">À compléter</span>');
const { legal } = site;

export default {
  path: "/mentions-legales/",
  noindex: true,
  noForm: true,
  title: "Mentions légales | " + site.name,
  description: "Mentions légales et politique de confidentialité du site.",
  body: `<section class="page-hero">
  <div class="container narrow">
    <h1 class="page-title">Mentions légales</h1>
  </div>
</section>
<section class="section is-tight">
  <div class="container narrow prose">
    <h2>Éditeur du site</h2>
    <p>${esc(legal.publisher)}<br>
    Statut : ${todo(legal.status)}<br>
    SIRET : ${todo(legal.siret)}<br>
    Adresse : ${todo(legal.address)}<br>
    ${site.email ? `Email : <a href="mailto:${esc(site.email)}">${esc(site.email)}</a><br>` : ""}
    ${site.phone ? `Téléphone : ${esc(site.phone)}<br>` : ""}
    ${legal.vat ? esc(legal.vat) : ""}</p>
    <p>Directeur de la publication : ${esc(legal.publisher)}</p>

    <h2>Hébergement</h2>
    <p>${esc(legal.host)}</p>

    <h2>Propriété intellectuelle</h2>
    <p>Les textes et la mise en page de ce site sont la propriété de ${esc(legal.publisher)}. Les captures d'écran des réalisations restent la propriété de leurs titulaires respectifs.</p>

    <h2 id="donnees">Données personnelles</h2>
    <p>Les informations envoyées via le formulaire de contact (nom, entreprise, email, téléphone, description du projet) sont utilisées uniquement pour répondre à votre demande et, le cas échéant, établir un devis. Elles ne sont ni revendues ni transmises à des tiers à des fins commerciales.</p>
    <p>Le formulaire est acheminé par le service Web3Forms, qui transmet le message par email. Les données sont conservées le temps nécessaire au traitement de la demande et, au plus, trois ans après le dernier contact.</p>
    <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. ${site.email ? `Pour l'exercer, écrivez à <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>.` : "Pour l'exercer, utilisez le formulaire de contact."}</p>

    <h2>Cookies</h2>
    <p>${
      site.analytics.ga4Id
        ? "Ce site utilise Google Analytics pour mesurer son audience."
        : site.analytics.plausibleDomain
          ? "Ce site mesure son audience avec Plausible, un outil sans cookie qui ne collecte aucune donnée personnelle."
          : "Ce site ne dépose aucun cookie."
    }</p>
  </div>
</section>`,
};
