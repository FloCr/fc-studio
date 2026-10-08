import { offers, projects } from "../config.mjs";
import { u, esc, euro } from "../lib.mjs";

const [essentiel, pro] = offers;

const example = projects.find((p) => p.id === "mathieu-plomberie");

export default {
  slug: "site-internet-plombier",
  category: "metiers",
  title: "Site de plombier : ce qu'il doit contenir",
  h1: "Site internet pour plombier : ce qu'il doit contenir",
  description:
    "Appel en un clic, services détaillés, zone d'intervention, photos de chantiers, devis : ce qui fait appeler les clients d'un plombier chauffagiste.",
  intro:
    "Un client qui cherche un plombier est souvent pressé, parfois inquiet. Votre site doit lui répondre en quelques secondes : intervenez-vous chez lui, êtes-vous sérieux, comment vous joindre ?",
  published: "2026-10-08",
  summary: [
    "Le numéro de téléphone visible en permanence sur mobile, avec appel en un clic, est l'élément le plus important.",
    "Une page par service (dépannage, chauffe-eau, chaudière, salle de bains…) et une page par secteur aident à être trouvé.",
    "Photos de chantiers réels, assurance décennale, labels et avis rassurent plus que n'importe quel slogan.",
    "Un formulaire de devis court, qui demande les bonnes informations, fait gagner du temps aux deux côtés.",
  ],
  related: ["site-internet-ou-fiche-google", "blog-site-artisan"],
  cta: "Parlons de votre site de plombier.",
  body: `
<h2>Les éléments indispensables</h2>
<h3>Le téléphone, partout</h3>
<p>Sur mobile, le numéro doit rester visible et lancer l'appel en un clic, sur toutes les pages. C'est souvent le premier et le seul geste du client. Indiquez aussi vos horaires et si vous faites du dépannage en urgence.</p>
<h3>Votre zone d'intervention</h3>
<p>Listez clairement les communes où vous intervenez. Un client de Mérignac qui ne voit pas sa ville passe au plombier suivant.</p>
<h3>Vos services, un par un</h3>
<p>Dépannage et fuites, débouchage, chauffe-eau et ballon, chaudière et entretien, pompe à chaleur, rénovation de salle de bains… Chaque service important mérite sa propre page : c'est ce qui vous permet d'apparaître sur « remplacement chauffe-eau Pessac » et pas seulement sur « plombier ».</p>
<h3>Des preuves de sérieux</h3>
<ul>
  <li><strong>Photos de vos chantiers</strong>, même prises au téléphone, plutôt que des images de banque d'images.</li>
  <li><strong>Assurance décennale</strong> et responsabilité civile : nom de l'assureur et zone couverte.</li>
  <li><strong>Labels et qualifications</strong> (RGE, Qualibat, PG…) si vous en avez, surtout pour les travaux éligibles aux aides.</li>
  <li><strong>Avis clients</strong>, avec un lien vers votre fiche Google.</li>
  <li><strong>Votre visage et votre parcours</strong> : on fait entrer chez soi quelqu'un, pas une entreprise.</li>
</ul>
<h3>Un formulaire de devis utile</h3>
<p>Nom, téléphone, commune, type de travaux, délai souhaité, et la possibilité de joindre une photo. Pas plus : chaque champ en trop fait abandonner des clients.</p>

<h2>Les pages à prévoir</h2>
<div class="table-wrap">
<table>
  <thead><tr><th>Page</th><th>Ce qu'elle contient</th></tr></thead>
  <tbody>
    <tr><td>Accueil</td><td>Ce que vous faites, où, le téléphone, les services principaux, quelques avis</td></tr>
    <tr><td>Une page par service</td><td>Ce qui est compris, comment se passe l'intervention, une fourchette de prix si possible</td></tr>
    <tr><td>Réalisations</td><td>Photos avant / après, classées par type de travaux</td></tr>
    <tr><td>Zone d'intervention</td><td>Les communes desservies, ou une page par commune importante</td></tr>
    <tr><td>Contact / devis</td><td>Formulaire, téléphone, horaires</td></tr>
    <tr><td>Mentions légales</td><td>Identité de l'entreprise, hébergeur, données personnelles</td></tr>
  </tbody>
</table>
</div>

<h2>Être trouvé dans votre secteur</h2>
<ul>
  <li>Le titre de chaque page doit dire le service et la ville : « Remplacement de chauffe-eau à Mérignac ».</li>
  <li>Les pages par commune doivent apporter un vrai contenu (interventions réalisées, délais, particularités du secteur), pas le même texte avec le nom de la ville changé.</li>
  <li>Votre <a href="${u("/guides/apparaitre-google-maps-bordeaux/")}">fiche Google</a> doit être complète et renvoyer vers le site, avec les mêmes nom, téléphone et zone.</li>
</ul>

<h2>Les erreurs fréquentes</h2>
<ul>
  <li>Un numéro caché en bas de page, ou non cliquable sur mobile.</li>
  <li>« Plomberie, chauffage, sanitaire » sans détail : Google et les clients ne savent pas ce que vous faites vraiment.</li>
  <li>Des photos génériques, qui donnent l'impression d'un site de mise en relation.</li>
  <li>Un site lent, avec une vidéo ou un diaporama en plein écran à l'ouverture.</li>
</ul>

<h2>Un exemple concret</h2>
<p>Le site de <a href="${esc(example.url)}" target="_blank" rel="noopener">${esc(example.name)}<span class="visually-hidden"> (nouvel onglet)</span></a>, plombier chauffagiste, est pensé pour être appelé depuis un téléphone : appel en un clic, formulaire de devis, pages dédiées à 6 communes et données structurées pour Google. Voir aussi la page <a href="${u("/creation-site-internet-artisan/")}">site internet pour artisan</a>.</p>
<p>Un site de ce type démarre avec l'offre ${essentiel.name} (à partir de ${euro(essentiel.price)}) pour quelques pages, ou l'offre ${pro.name} (à partir de ${euro(pro.price)}) pour détailler vos services et votre zone.</p>`,
  faq: [
    {
      q: "Faut-il afficher ses prix sur un site de plombier ?",
      a: "Des fourchettes ou des prix « à partir de » pour les interventions courantes rassurent et filtrent les demandes. Pour les travaux plus importants, mieux vaut expliquer ce qui fait varier le prix et proposer un devis.",
    },
    {
      q: "Un site de plombier a-t-il besoin de beaucoup de pages ?",
      a: "Non. Trois pages bien faites suffisent pour démarrer. Ajoutez ensuite une page par service important et par commune clé pour gagner en visibilité.",
    },
    {
      q: "Les plateformes de mise en relation suffisent-elles ?",
      a: "Elles apportent des contacts, mais vous payez chaque demande ou un abonnement, et le client compare plusieurs artisans. Votre propre site et votre fiche Google vous apportent des demandes directes, sans commission.",
    },
  ],
};
