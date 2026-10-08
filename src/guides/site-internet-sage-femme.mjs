import { projects } from "../config.mjs";
import { u, esc } from "../lib.mjs";

const example = projects.find((p) => p.id === "clemence-philouze");

export default {
  slug: "site-internet-sage-femme",
  category: "metiers",
  title: "Site internet pour sage-femme libérale",
  h1: "Site internet pour sage-femme libérale : ce qu'il doit contenir",
  description:
    "Consultations, prise de rendez-vous en ligne, informations pratiques, règles de communication : comment construire le site d'un cabinet de sage-femme.",
  intro:
    "Les futures mères et les jeunes parents cherchent une sage-femme près de chez eux, avec des questions précises. Votre site doit y répondre simplement, dans le respect de vos règles professionnelles.",
  published: "2026-10-08",
  summary: [
    "Présentez chaque type de consultation : suivi de grossesse, préparation à la naissance, rééducation, suivi gynécologique…",
    "Le bouton de prise de rendez-vous (Doctolib ou autre) doit être accessible depuis toutes les pages.",
    "Les informations pratiques comptent autant : adresse, accès, stationnement, remboursement, visites à domicile.",
    "Le contenu reste informatif et factuel, conformément au code de déontologie : pas de promesses ni de comparaison.",
  ],
  related: ["site-internet-ou-fiche-google", "mentions-legales-site-professionnel"],
  cta: "Parlons du site de votre cabinet.",
  body: `
<h2>Ce que vos patientes cherchent</h2>
<ul>
  <li><strong>Ce que vous proposez</strong> : suivi de grossesse, entretien prénatal, préparation à la naissance et à la parentalité, suivi postnatal et à domicile, rééducation périnéale, allaitement, suivi gynécologique et contraception…</li>
  <li><strong>Où vous exercez</strong>, et si vous vous déplacez à domicile, dans quels quartiers ou communes.</li>
  <li><strong>Comment prendre rendez-vous</strong>, et dans quels délais.</li>
  <li><strong>Les conditions</strong> : conventionnement, remboursement, ce qu'il faut apporter.</li>
  <li><strong>Qui vous êtes</strong> : votre parcours, vos formations complémentaires, votre approche.</li>
</ul>

<h2>Les pages à prévoir</h2>
<div class="table-wrap">
<table>
  <thead><tr><th>Page</th><th>Ce qu'elle contient</th></tr></thead>
  <tbody>
    <tr><td>Accueil</td><td>Votre activité, le lieu, le bouton de rendez-vous, les consultations principales</td></tr>
    <tr><td>Une page par type de consultation</td><td>Pour qui, à quel moment, comment se déroule une séance, prise en charge</td></tr>
    <tr><td>Le cabinet</td><td>Adresse, plan, accès, stationnement, accessibilité, photos</td></tr>
    <tr><td>À propos</td><td>Parcours, diplômes, formations, approche</td></tr>
    <tr><td>Informations pratiques</td><td>Rendez-vous, tarifs et remboursements, documents à apporter, FAQ</td></tr>
  </tbody>
</table>
</div>

<h2>La prise de rendez-vous</h2>
<p>Si vous utilisez Doctolib ou un autre agenda en ligne, le site n'a pas besoin de le remplacer : un bouton « Prendre rendez-vous » bien visible, sur chaque page, qui renvoie vers votre agenda, suffit. Indiquez aussi comment vous joindre pour les questions qui ne relèvent pas d'un rendez-vous, et rappelez quoi faire en cas d'urgence.</p>

<h2>Respecter les règles de communication</h2>
<p>Les règles de communication des professions de santé ont été assouplies en 2020 : vous pouvez informer le public sur vos compétences et votre pratique. Le cadre reste celui du code de déontologie des sages-femmes :</p>
<ul>
  <li>une information <strong>loyale, claire et non comparative</strong> ;</li>
  <li>pas de promesse de résultat, ni de formule commerciale ;</li>
  <li>vos <strong>titres et diplômes</strong> présentés de façon exacte ;</li>
  <li>pour les avis et témoignages, vérifiez auprès de votre <strong>Ordre</strong> ce qui est admis.</li>
</ul>
<p>En pratique, un site sobre, informatif et bien rédigé respecte naturellement ce cadre. Vous validez chaque texte avant la mise en ligne.</p>

<h2>Être trouvée près de chez vos patientes</h2>
<ul>
  <li>Des titres clairs : « Sage-femme libérale à Bordeaux Caudéran », « Préparation à la naissance à Bordeaux ».</li>
  <li>Une page par quartier ou commune desservie à domicile, avec des informations propres à chacun.</li>
  <li>Une <a href="${u("/guides/site-internet-ou-fiche-google/")}">fiche Google</a> complète, reliée au site, avec les mêmes informations.</li>
</ul>

<h2>Un exemple concret</h2>
<p>Le site de <a href="${esc(example.url)}" target="_blank" rel="noopener">${esc(example.name)}<span class="visually-hidden"> (nouvel onglet)</span></a>, sage-femme libérale à Bordeaux, est centré sur la prise de rendez-vous via Doctolib, avec un accès direct à sa fiche Google et des pages dédiées à 4 quartiers de Bordeaux. Plus d'exemples sur la page <a href="${u("/creation-site-internet-independant/")}">site internet pour indépendant</a>.</p>`,
  faq: [
    {
      q: "Une sage-femme a-t-elle le droit d'avoir un site internet ?",
      a: "Oui. Depuis 2020, les sages-femmes peuvent communiquer auprès du public sur leurs compétences et leur pratique, à condition que l'information soit loyale, claire et non comparative, et sans caractère commercial.",
    },
    {
      q: "Doctolib ne suffit-il pas ?",
      a: "Doctolib gère très bien les rendez-vous, mais votre page y est courte et vous apparaissez au milieu d'autres praticiens. Votre site présente votre pratique en détail et vous fait trouver sur Google ; il renvoie ensuite vers Doctolib pour réserver.",
    },
    {
      q: "Faut-il afficher ses tarifs ?",
      a: "C'est une information attendue par les patientes : indiquer le conventionnement, les tarifs des actes courants ou au moins les conditions de remboursement évite beaucoup de questions.",
    },
  ],
};
