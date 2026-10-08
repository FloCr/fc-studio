import { u } from "../lib.mjs";

export default {
  slug: "site-internet-location-meublee",
  category: "metiers",
  title: "Site de réservation pour location meublée ou gîte",
  h1: "Location meublée, Airbnb, gîte : faut-il son propre site de réservation ?",
  description:
    "Réservation en direct, calendrier synchronisé avec Airbnb et Booking, paiement en ligne, obligations : le site d'un loueur en meublé de tourisme.",
  intro:
    "Airbnb et Booking apportent de la visibilité, mais prennent une commission sur chaque séjour et gardent la relation avec vos voyageurs. Un site à vous permet de recevoir des réservations en direct, en complément.",
  published: "2026-10-08",
  summary: [
    "Un site ne remplace pas les plateformes au début : il les complète, surtout pour les clients qui reviennent et ceux qui vous trouvent sur Google.",
    "Le calendrier doit être synchronisé avec Airbnb et Booking pour éviter les doubles réservations.",
    "Photos de qualité, description précise, prix clairs et paiement sécurisé sont indispensables pour inspirer confiance.",
    "En réservation directe, certaines obligations deviennent les vôtres : numéro d'enregistrement, taxe de séjour, conditions de vente.",
  ],
  related: ["mentions-legales-site-professionnel", "etre-cite-par-chatgpt"],
  cta: "Parlons du site de votre location.",
  body: `
<h2>Pourquoi un site en plus des plateformes</h2>
<ul>
  <li><strong>Moins de commissions</strong> : sur une réservation directe, vous ne reversez pas de frais à la plateforme.</li>
  <li><strong>Vos clients restent vos clients</strong> : un voyageur satisfait peut revenir réserver chez vous directement l'année suivante, ou vous recommander.</li>
  <li><strong>Vos propres règles</strong> : conditions d'annulation, acompte, durée minimum, prix pour les habitués.</li>
  <li><strong>Une vitrine indépendante</strong> : si votre annonce est suspendue ou déclassée sur une plateforme, vous gardez un canal.</li>
</ul>
<p>Soyons réalistes : au début, la majorité des réservations continuera de venir des plateformes. Le site prend de l'importance avec les clients fidèles, le bouche-à-oreille et le référencement local.</p>

<h2>Ce que le site doit contenir</h2>
<h3>Des photos qui donnent envie, et qui disent vrai</h3>
<p>Chaque pièce, la vue, l'extérieur, les équipements. Lumineuses, nettes et fidèles : une photo trop flatteuse se paie en avis déçus.</p>
<h3>Une description précise</h3>
<p>Nombre de couchages et de lits, équipements (cuisine, wifi, lave-linge, parking, climatisation), accessibilité, animaux, règles de la maison, horaires d'arrivée et de départ.</p>
<h3>Les prix, clairement</h3>
<p>Prix par nuit ou par semaine selon la saison, frais de ménage, caution, taxe de séjour : le voyageur doit connaître le total avant de réserver.</p>
<h3>Un calendrier et une réservation en ligne</h3>
<p>Le calendrier des disponibilités se <strong>synchronise</strong> avec Airbnb, Booking et les autres plateformes, via un lien de calendrier (iCal) ou un outil de gestion qui centralise tout. Le voyageur choisit ses dates, paie un acompte ou la totalité en ligne, et reçoit une confirmation.</p>
<h3>Le quartier et la région</h3>
<p>Une page sur les environs (commerces, transports, plages, vignobles, restaurants) aide les voyageurs à se projeter, et vous fait trouver sur des recherches comme « location meublée Bordeaux Chartrons » ou « gîte Saint-Émilion ».</p>
<h3>Les avis</h3>
<p>Reprenez quelques avis de vos voyageurs, avec un lien vers votre profil sur les plateformes ou votre fiche Google, pour qu'ils puissent être vérifiés.</p>

<h2>Le paiement en ligne</h2>
<p>Le paiement est traité par un prestataire sécurisé (Stripe ou le module de votre banque) : aucun numéro de carte ne passe par votre site. Vous pouvez encaisser un acompte à la réservation et le solde avant l'arrivée, et gérer la caution par une empreinte bancaire. Les possibilités sont détaillées sur la page <a href="${u("/fonctionnalites/")}">options et fonctionnalités</a>.</p>

<h2>Vos obligations en réservation directe</h2>
<p>Quand une plateforme gère la réservation, elle prend en charge une partie des démarches. En direct, elles vous reviennent :</p>
<ul>
  <li><strong>Numéro d'enregistrement</strong> : dans les communes qui l'exigent, comme Bordeaux, il doit figurer sur toute annonce, y compris votre site.</li>
  <li><strong>Taxe de séjour</strong> : c'est à vous de la collecter auprès du voyageur et de la reverser à la commune ou à l'intercommunalité.</li>
  <li><strong>Conditions générales de vente</strong> : prix, paiement, annulation, caution, règlement intérieur.</li>
  <li><strong>Médiateur de la consommation</strong> et <strong>mentions légales</strong>, comme pour tout site qui vend aux particuliers. Voir le guide des <a href="${u("/guides/mentions-legales-site-professionnel/")}">mentions légales obligatoires</a>.</li>
</ul>
<p>Les règles sur les meublés de tourisme évoluent régulièrement : vérifiez celles de votre commune avant la mise en ligne.</p>

<h2>Un ou plusieurs logements ?</h2>
<p>Pour un seul logement, un site d'une à trois pages suffit souvent : présentation, disponibilités et réservation, contact. Pour plusieurs logements, une page par logement, avec son propre calendrier, et une page de recherche par dates.</p>
<p>Pensez aussi à une <strong>version anglaise</strong> si vous accueillez des voyageurs étrangers : même partielle, elle rassure et fait réserver.</p>`,
  faq: [
    {
      q: "Comment éviter les doubles réservations entre mon site et Airbnb ?",
      a: "En synchronisant les calendriers. Chaque plateforme fournit un lien de calendrier (iCal) que votre site lit, et inversement. Pour plusieurs logements ou plateformes, un outil de gestion centralisé (channel manager) est plus fiable.",
    },
    {
      q: "Est-ce que je perds la protection d'Airbnb en réservation directe ?",
      a: "Oui, les garanties propres à la plateforme ne s'appliquent pas. Il faut donc une caution ou une empreinte bancaire, des conditions de vente claires et une assurance adaptée à la location saisonnière.",
    },
    {
      q: "Mon site sera-t-il visible face aux plateformes sur Google ?",
      a: "Sur les recherches génériques comme « location Bordeaux », les plateformes dominent. Votre site peut en revanche se positionner sur des recherches plus précises (nom du logement, quartier, type de bien) et capter les voyageurs qui vous cherchent directement.",
    },
  ],
};
