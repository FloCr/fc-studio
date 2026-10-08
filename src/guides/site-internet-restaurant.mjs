import { u } from "../lib.mjs";

export default {
  slug: "site-internet-restaurant",
  category: "metiers",
  title: "Site de restaurant : ce qu'il doit contenir",
  h1: "Site internet pour restaurant : ce qu'il doit contenir",
  description:
    "Carte lisible sur mobile, horaires à jour, réservation, photos, avis, fiche Google : les éléments qui remplissent les tables, et les erreurs qui les vident.",
  intro:
    "Avant de choisir un restaurant, on regarde la carte, les photos, les horaires et les avis, presque toujours sur un téléphone. Votre site doit donner ces informations en quelques secondes.",
  published: "2026-10-08",
  summary: [
    "La carte doit être écrite en texte sur le site, pas seulement en PDF ou en photo : elle se lit mieux sur mobile et Google la comprend.",
    "Horaires, adresse, téléphone et bouton de réservation doivent être visibles dès l'ouverture de la page.",
    "Des photos réelles et récentes de vos plats et de la salle valent mieux que des visuels génériques.",
    "La fiche Google fait souvent venir plus de clients que le site : les deux doivent être cohérents et à jour.",
  ],
  related: ["site-internet-ou-fiche-google", "apparaitre-google-maps-bordeaux"],
  cta: "Parlons du site de votre restaurant.",
  body: `
<h2>Ce que vos clients cherchent, dans l'ordre</h2>
<ol>
  <li><strong>Êtes-vous ouvert</strong> aujourd'hui, ce soir, dimanche ?</li>
  <li><strong>Qu'est-ce qu'on mange</strong>, et à quel prix ?</li>
  <li><strong>Où êtes-vous</strong>, et comment venir ?</li>
  <li><strong>Peut-on réserver</strong>, et comment ?</li>
  <li><strong>À quoi ça ressemble</strong> : plats, salle, terrasse.</li>
</ol>
<p>Tout cela doit être accessible sans chercher, sur un écran de téléphone.</p>

<h2>La carte : en texte, pas en PDF</h2>
<p>Une carte en PDF ou en photo se lit mal sur mobile, se charge lentement et reste invisible pour Google. Écrite directement sur la page, elle :</p>
<ul>
  <li>s'affiche instantanément et se lit sans zoomer ;</li>
  <li>vous fait apparaître sur des recherches comme « burger végétarien Bordeaux » ou « brunch Chartrons » ;</li>
  <li>se met à jour en quelques minutes quand un plat change.</li>
</ul>
<p>Indiquez les prix, les options végétariennes ou sans gluten, et la possibilité de consulter la liste des allergènes. Les informations obligatoires en salle (comme l'origine des viandes bovines) gagnent aussi à figurer sur la carte en ligne.</p>

<h2>La réservation</h2>
<ul>
  <li><strong>Un bouton « Réserver »</strong> visible en permanence, qui renvoie vers votre outil de réservation ou ouvre un module intégré.</li>
  <li><strong>Le téléphone en un clic</strong>, pour ceux qui préfèrent appeler.</li>
  <li><strong>Les groupes et privatisations</strong> : un formulaire dédié, avec le nombre de personnes, la date et le budget.</li>
</ul>
<p>Si vous faites de la vente à emporter ou de la livraison, un lien direct vers votre propre système de commande évite une partie des commissions des plateformes.</p>

<h2>Les pages à prévoir</h2>
<div class="table-wrap">
<table>
  <thead><tr><th>Page</th><th>Ce qu'elle contient</th></tr></thead>
  <tbody>
    <tr><td>Accueil</td><td>Type de cuisine, horaires du jour, adresse, bouton de réservation, quelques photos</td></tr>
    <tr><td>La carte</td><td>Plats, prix, menus, options et allergènes, en texte</td></tr>
    <tr><td>Le lieu</td><td>Salle, terrasse, accessibilité, accès et stationnement</td></tr>
    <tr><td>Groupes et événements</td><td>Privatisation, menus de groupe, formulaire</td></tr>
    <tr><td>Contact</td><td>Adresse, plan, téléphone, horaires complets, jours de fermeture</td></tr>
  </tbody>
</table>
</div>

<h2>Photos, avis et fiche Google</h2>
<p>Pour un restaurant, la <a href="${u("/guides/site-internet-ou-fiche-google/")}">fiche Google</a> est souvent le premier point de contact : horaires, photos, avis, menu, réservation. Tenez-la à jour, notamment les <strong>horaires exceptionnels</strong> et les fermetures : rien n'agace plus qu'un restaurant fermé alors que Google l'annonçait ouvert. Votre site doit afficher exactement les mêmes informations.</p>
<p>Côté photos, quelques images nettes, prises à la lumière du jour, de vos vrais plats et de votre salle, font plus d'effet qu'une galerie de cinquante photos moyennes.</p>

<h2>Les erreurs fréquentes</h2>
<ul>
  <li>La carte uniquement en PDF, ou une carte de l'été dernier toujours en ligne.</li>
  <li>Des horaires différents entre le site, la fiche Google et la porte du restaurant.</li>
  <li>Une vidéo d'ambiance en plein écran qui ralentit tout et cache les informations utiles.</li>
  <li>Le site ne renvoie que vers les réseaux sociaux, sans carte ni horaires.</li>
</ul>

<h2>Combien ça coûte ?</h2>
<p>Un site de restaurant tient souvent en trois ou quatre pages. Il entre dans les offres <a href="${u("/tarifs/")}">Site Essentiel ou Site Pro</a>, avec la réservation en lien externe ou intégrée selon votre outil. Le plus important est que vous puissiez faire modifier la carte rapidement : c'est prévu dans la formule de maintenance.</p>`,
  faq: [
    {
      q: "Les réseaux sociaux ne suffisent-ils pas pour un restaurant ?",
      a: "Ils montrent bien l'ambiance, mais l'information y est dispersée : la carte, les horaires ou la réservation sont difficiles à trouver. Votre site et votre fiche Google donnent l'essentiel en un coup d'œil et vous font trouver sur Google.",
    },
    {
      q: "Peut-on modifier la carte facilement ?",
      a: "Oui, si c'est prévu dès le départ : soit vous la modifiez vous-même depuis un espace simple, soit vous envoyez la nouvelle carte et elle est mise à jour dans la journée dans le cadre de la maintenance.",
    },
    {
      q: "Faut-il un site en anglais ?",
      a: "Si vous accueillez beaucoup de touristes, une version anglaise de la carte et des informations pratiques est très utile. Le reste du site peut rester en français.",
    },
  ],
};
