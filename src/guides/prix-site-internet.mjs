import { offers, maintenance } from "../config.mjs";
import { u, euro } from "../lib.mjs";

const [essentiel, pro, acquisition] = offers;

export default {
  slug: "prix-site-internet",
  category: "budget",
  title: "Combien coûte un site internet en 2026 ?",
  h1: "Combien coûte un site internet en 2026 ?",
  description:
    "Prix d'un site vitrine seul, avec un freelance ou une agence, frais annuels et pièges des contrats de location : ce qu'il faut prévoir en 2026.",
  intro:
    "De zéro à plusieurs milliers d'euros : l'écart est énorme. Voici ce qui explique ces prix, ce que vous paierez après la mise en ligne, et les pièges à éviter.",
  published: "2026-10-08",
  summary: [
    "Un site vitrine coûte en général de quelques centaines d'euros (freelance) à plusieurs milliers (agence). Le faire soi-même revient à un abonnement mensuel.",
    "Le prix dépend surtout du nombre de pages, de la rédaction, des fonctionnalités et du travail de référencement.",
    "Après la création, prévoyez le nom de domaine (environ 10 à 20 € par an) et l'hébergement, plus la maintenance si vous la confiez.",
    "Méfiez-vous des contrats de location sur plusieurs années : vous payez longtemps un site qui ne vous appartient pas.",
  ],
  related: ["wix-wordpress-ou-sur-mesure", "site-internet-ou-fiche-google"],
  cta: "Recevez un prix précis pour votre site.",
  body: `
<h2>Les grandes fourchettes de prix</h2>
<p>Pour un <strong>site vitrine</strong> (présenter votre activité, vos services, vos coordonnées), voici les ordres de grandeur que l'on rencontre couramment en France. Une boutique en ligne ou une application coûtent nettement plus cher.</p>
<div class="table-wrap">
<table>
  <thead><tr><th>Solution</th><th>Prix de création</th><th>Ensuite</th><th>Pour qui</th></tr></thead>
  <tbody>
    <tr><td>Le faire soi-même (Wix, Squarespace…)</td><td>0 €, mais votre temps</td><td>Abonnement mensuel à la plateforme</td><td>Ceux qui ont du temps et aiment bricoler</td></tr>
    <tr><td>Développeur ou freelance</td><td>De quelques centaines à environ 2 000 €</td><td>Hébergement, maintenance en option</td><td>Indépendants, artisans, TPE</td></tr>
    <tr><td>Agence web</td><td>De 1 500 à 5 000 € et plus</td><td>Contrat de maintenance souvent proposé</td><td>Entreprises avec un projet plus large</td></tr>
  </tbody>
</table>
</div>
<p>La différence entre un freelance et une agence ne tient pas forcément à la qualité du site : une agence finance aussi des commerciaux, des chefs de projet et des locaux. Un indépendant qui réalise tout lui-même peut proposer un prix plus bas pour un résultat comparable sur un site vitrine.</p>

<h2>Ce qui fait varier le prix</h2>
<ul>
  <li><strong>Le nombre de pages.</strong> Une page unique ou trois pages bien construites suffisent souvent pour démarrer. Chaque page de service ou de commune ajoutée demande du travail de conception et de rédaction.</li>
  <li><strong>Le design.</strong> Un modèle adapté coûte moins cher qu'un design entièrement pensé pour votre activité.</li>
  <li><strong>Les textes.</strong> Les fournir vous-même fait baisser la facture. Une rédaction travaillée autour de ce que vos clients tapent sur Google prend du temps, et se paie.</li>
  <li><strong>Les fonctionnalités.</strong> Prise de rendez-vous, paiement en ligne, espace client, simulateur de prix : chacune s'ajoute au devis.</li>
  <li><strong>Le référencement.</strong> Les bases techniques devraient être incluses partout. Un vrai travail de visibilité (pages locales, stratégie de contenu, fiche Google) est un poste à part.</li>
</ul>

<h2>Ce que vous paierez après la mise en ligne</h2>
<p>Un site a des frais de fonctionnement, quel que soit son prix de création :</p>
<ul>
  <li><strong>Le nom de domaine</strong> (votre adresse, par exemple <em>votre-entreprise.fr</em>) : environ 10 à 20 € par an pour un .fr ou un .com.</li>
  <li><strong>L'hébergement</strong> : de quelques euros à quelques dizaines d'euros par mois selon le type de site. Un site léger coûte peu à héberger.</li>
  <li><strong>La maintenance</strong> : mises à jour, sauvegardes, surveillance. Indispensable sur un WordPress, plus légère sur un site sans extensions.</li>
  <li><strong>Les modifications</strong> : nouveaux tarifs, nouvelles photos. Incluses dans certains contrats, facturées à la demande dans d'autres.</li>
</ul>

<h2>Les pièges à éviter</h2>
<h3>La location de site sur plusieurs années</h3>
<p>Certains prestataires proposent un site « sans frais de création », contre un abonnement mensuel avec un engagement de 24, 36 ou 48 mois. Au total, la facture dépasse souvent largement le prix d'un site acheté, et le site ne vous appartient pas : à la fin du contrat, vous repartez de zéro. Lisez la durée d'engagement et les conditions de résiliation avant de signer.</p>
<h3>Le nom de domaine au nom du prestataire</h3>
<p>Votre nom de domaine doit être réservé <strong>à votre nom</strong>. Sinon, changer de prestataire peut vouloir dire changer d'adresse, et perdre une partie de votre visibilité sur Google.</p>
<h3>Les modifications facturées sans cadre</h3>
<p>Un devis bas peut cacher des allers-retours facturés à l'heure. Vérifiez combien de séries de modifications sont comprises avant la mise en ligne.</p>

<h2>Un exemple concret : mes tarifs</h2>
<p>Pour donner un point de repère, voici mes offres, pour des sites vitrines réalisés sur mesure :</p>
<ul>
  <li><strong>${essentiel.name}</strong> : à partir de ${euro(essentiel.price)}, de 1 à 3 pages.</li>
  <li><strong>${pro.name}</strong> : à partir de ${euro(pro.price)}, de 4 à 7 pages, avec référencement local de base et fiche Google Business Profile.</li>
  <li><strong>${acquisition.name}</strong> : à partir de ${euro(acquisition.price)}, avec stratégie de référencement et pages ciblées.</li>
  <li><strong>${maintenance.name}</strong> : de ${maintenance.priceFrom} à ${maintenance.priceTo} € par mois, après une première année où le nom de domaine et l'hébergement sont inclus.</li>
</ul>
<p>Le site et le nom de domaine vous appartiennent, sans engagement. Le détail de chaque offre est sur la <a href="${u("/tarifs/")}">page tarifs</a>, et la <a href="${u("/creation-site-internet/")}">page création de site à petit prix</a> explique d'où viennent ces prix.</p>

<h2>Comment fixer votre budget</h2>
<p>Avant de comparer des devis, répondez à trois questions :</p>
<ol>
  <li><strong>Que doit faire le site ?</strong> Être trouvé, rassurer, recevoir des demandes de devis, prendre des rendez-vous, vendre ?</li>
  <li><strong>Combien de pages vous faut-il vraiment ?</strong> Une page par service important, plus éventuellement une par ville où vous intervenez.</li>
  <li><strong>Avez-vous du temps ?</strong> Si oui, un outil à faire soi-même peut suffire. Sinon, le temps économisé justifie souvent de déléguer.</li>
</ol>
<p>Un bon devis répond noir sur blanc à ces points : nombre de pages, ce qui est inclus, nombre de modifications, délai, frais annuels et propriété du site.</p>`,
  faq: [
    {
      q: "Un site à 200 € peut-il être professionnel ?",
      a: "Oui, si son périmètre est clair : quelques pages, un design adapté à votre activité, une version mobile soignée et les bases du référencement. Le prix bas vient du nombre de pages limité et de l'absence d'intermédiaires, pas d'une qualité au rabais.",
    },
    {
      q: "Faut-il payer chaque mois pour avoir un site internet ?",
      a: "Il faut au minimum payer le nom de domaine et l'hébergement, ce qui représente quelques euros par mois pour un site vitrine léger. Un abonnement plus élevé n'est justifié que s'il comprend un vrai service : maintenance, modifications, suivi.",
    },
    {
      q: "Le référencement est-il compris dans le prix d'un site ?",
      a: "Les bases techniques (structure, titres, vitesse, version mobile, plan du site) devraient l'être dans tous les cas. Le travail de visibilité plus poussé, comme les pages par commune ou la rédaction ciblée, est généralement facturé à part.",
    },
  ],
};
