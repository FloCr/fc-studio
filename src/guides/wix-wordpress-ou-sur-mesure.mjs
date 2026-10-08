import { offers } from "../config.mjs";
import { u, euro } from "../lib.mjs";

const [essentiel] = offers;

export default {
  slug: "wix-wordpress-ou-sur-mesure",
  category: "budget",
  title: "Wix, WordPress ou sur mesure : que choisir ?",
  h1: "Wix, WordPress ou site sur mesure : que choisir ?",
  description:
    "Comparatif honnête pour TPE et indépendants : coût, temps à y passer, vitesse, sécurité, propriété. Quand choisir Wix, WordPress ou le sur mesure.",
  intro:
    "Trois façons d'avoir un site, trois logiques différentes. Le bon choix dépend moins de la technique que de votre temps, de votre budget et de ce que le site doit faire.",
  published: "2026-10-08",
  summary: [
    "Wix et les outils du même type conviennent si vous avez du temps et voulez tout faire vous-même, en payant un abonnement.",
    "WordPress est très souple, mais demande des mises à jour régulières et une maintenance sérieuse pour rester rapide et sûr.",
    "Un site sur mesure est rapide, léger et sans extensions à surveiller ; en contrepartie, les modifications passent souvent par le développeur.",
    "Dans tous les cas, vérifiez que le nom de domaine est à votre nom et que vous pouvez récupérer votre site.",
  ],
  related: ["prix-site-internet", "etre-cite-par-chatgpt"],
  cta: "Vous hésitez encore ? Décrivez-moi votre projet.",
  body: `
<p>Je crée des sites sur mesure : je ne suis donc pas neutre. Ce guide indique aussi, honnêtement, quand les autres solutions sont un meilleur choix.</p>

<h2>Le comparatif en un coup d'œil</h2>
<div class="table-wrap">
<table>
  <thead><tr><th>Critère</th><th>Wix, Squarespace…</th><th>WordPress</th><th>Sur mesure</th></tr></thead>
  <tbody>
    <tr><td>Qui le fait</td><td>Vous</td><td>Vous ou un prestataire</td><td>Un développeur</td></tr>
    <tr><td>Coût de départ</td><td>Faible</td><td>Variable selon le thème et les extensions</td><td>Un devis de création</td></tr>
    <tr><td>Coûts récurrents</td><td>Abonnement à la plateforme</td><td>Hébergement, extensions payantes, maintenance</td><td>Hébergement, maintenance légère</td></tr>
    <tr><td>Temps à y passer</td><td>Élevé : vous construisez tout</td><td>Moyen à élevé</td><td>Faible : vous relisez et validez</td></tr>
    <tr><td>Vitesse</td><td>Correcte</td><td>Très variable selon les extensions</td><td>Excellente si le site est bien conçu</td></tr>
    <tr><td>Sécurité et mises à jour</td><td>Gérées par la plateforme</td><td>À votre charge : thème, extensions, WordPress</td><td>Peu de pièces à surveiller</td></tr>
    <tr><td>Partir ailleurs</td><td>Difficile : le site ne se déménage pas</td><td>Possible</td><td>Possible : les fichiers vous sont remis</td></tr>
  </tbody>
</table>
</div>

<h2>Wix et les créateurs de sites</h2>
<p>Wix, Squarespace ou Shopify (pour la vente) permettent de créer un site sans connaissances techniques, en glissant des blocs sur une page.</p>
<p><strong>C'est un bon choix si</strong> vous avez du temps, un peu de goût pour la mise en page, et un besoin simple. L'hébergement, la sécurité et les mises à jour sont gérés pour vous.</p>
<p><strong>Les limites :</strong> vous payez un abonnement tant que le site existe, et vous ne pouvez pas emporter votre site tel quel sur un autre service. Le résultat dépend aussi beaucoup du temps que vous y consacrez : un modèle mal rempli dessert plus qu'il n'aide.</p>

<h2>WordPress</h2>
<p>WordPress fait fonctionner une très grande partie des sites dans le monde. Il est gratuit, très souple, et des milliers de thèmes et d'extensions permettent de presque tout faire.</p>
<p><strong>C'est un bon choix si</strong> vous publiez beaucoup de contenu (blog, actualités), si vous voulez modifier vous-même toutes vos pages, ou si votre prestataire assure une maintenance sérieuse.</p>
<p><strong>Les limites :</strong> chaque extension ajoutée est du code à mettre à jour. Un WordPress négligé devient lent, et les failles des extensions non mises à jour sont une cause fréquente de piratage. Prévoyez la maintenance dans le budget.</p>

<h2>Le site sur mesure</h2>
<p>Un développeur écrit le site pour votre activité, sans thème générique ni extensions superflues.</p>
<p><strong>C'est un bon choix si</strong> vous voulez un site rapide, bien construit pour Google, qui vous ressemble, sans avoir à vous occuper de la technique. C'est aussi la solution la plus souple pour ajouter plus tard une fonction précise : réservation, paiement, devis automatique.</p>
<p><strong>Les limites :</strong> les modifications passent généralement par le développeur, ponctuellement ou via un contrat de maintenance. Si vous voulez changer vos textes chaque semaine, parlez-en avant : un espace d'édition peut être prévu.</p>

<h2>Comment trancher en trois questions</h2>
<ol>
  <li><strong>Qui va construire et entretenir le site ?</strong> Si c'est vous et que vous avez le temps, un créateur de sites suffit. Sinon, déléguez.</li>
  <li><strong>À quelle fréquence le contenu change-t-il ?</strong> Publication fréquente : WordPress. Quelques mises à jour par an : sur mesure ou créateur de sites.</li>
  <li><strong>Le site doit-il vous faire trouver sur Google ?</strong> Si oui, la vitesse, la structure et des pages par service ou par commune comptent. Un site sur mesure ou un WordPress bien tenu y répondent mieux qu'un modèle rempli à la hâte.</li>
</ol>

<h2>Ce que je propose</h2>
<p>Mes sites sont développés sur mesure, légers et rapides, à partir de ${euro(essentiel.price)}. Le site et le nom de domaine sont à vous, et je vous remets les fichiers si vous changez de prestataire. Exemples sur la page <a href="${u("/realisations/")}">réalisations</a>, détail des offres sur la page <a href="${u("/tarifs/")}">tarifs</a>.</p>`,
  faq: [
    {
      q: "Peut-on passer de Wix à WordPress ou à un site sur mesure ?",
      a: "Oui, mais le site ne se transfère pas tel quel : il faut le reconstruire en reprenant les textes et les images. Le nom de domaine, lui, peut être conservé, ce qui évite de perdre votre adresse.",
    },
    {
      q: "Un site sur mesure coûte-t-il forcément plus cher ?",
      a: "Pas forcément. Pour un site vitrine de quelques pages, un développeur indépendant peut proposer un prix comparable à une année ou deux d'abonnement à un créateur de sites, sans abonnement ensuite au-delà de l'hébergement.",
    },
    {
      q: "Pourrai-je modifier moi-même un site sur mesure ?",
      a: "Cela dépend de ce qui est prévu. Les petites modifications sont souvent faites par le développeur dans le cadre de la maintenance. Si vous voulez gérer vos contenus vous-même, un espace d'édition peut être ajouté : il faut le prévoir dès le devis.",
    },
  ],
};
