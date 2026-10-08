import { u } from "../lib.mjs";

export default {
  slug: "mentions-legales-site-professionnel",
  category: "budget",
  title: "Mentions légales obligatoires d'un site pro",
  h1: "Les mentions légales obligatoires sur un site professionnel",
  description:
    "Éditeur, SIRET, hébergeur, données personnelles, cookies, CGV : ce que doit afficher le site d'un indépendant, d'un artisan ou d'une petite entreprise en France.",
  intro:
    "Tout site professionnel en France doit afficher certaines informations. Elles sont rarement lues, mais leur absence peut coûter cher et fait mauvaise impression. Voici la liste, sans jargon.",
  published: "2026-10-08",
  summary: [
    "Obligatoire : identité de l'entreprise, coordonnées, numéro d'immatriculation, directeur de la publication et hébergeur.",
    "Si le site collecte des données (formulaire de contact, réservation), il faut expliquer ce que vous en faites.",
    "Les cookies non indispensables, comme certains outils de mesure d'audience, demandent le consentement du visiteur.",
    "Si vous vendez en ligne aux particuliers, il faut aussi des conditions générales de vente et un médiateur de la consommation.",
  ],
  related: ["prix-site-internet", "site-internet-location-meublee"],
  cta: "Un site livré avec ses mentions légales.",
  body: `
<p>Ce guide donne les grandes lignes pour un site vitrine en France. Il ne remplace pas un conseil juridique : en cas de doute, notamment pour une profession réglementée, renseignez-vous auprès de votre ordre, de votre chambre consulaire ou d'un juriste.</p>

<h2>Les informations sur votre entreprise</h2>
<p>La loi pour la confiance dans l'économie numérique (LCEN) de 2004 impose d'identifier clairement qui édite le site :</p>
<ul>
  <li><strong>Entrepreneur individuel</strong> : vos nom et prénom, suivis de la mention <strong>« EI »</strong> ou « entrepreneur individuel », obligatoire depuis 2022.</li>
  <li><strong>Société</strong> : la dénomination sociale, la forme juridique (SARL, SAS…) et le montant du capital.</li>
  <li>L'<strong>adresse</strong> de l'entreprise (siège ou domicile professionnel), un <strong>e-mail</strong> et un <strong>téléphone</strong>.</li>
  <li>Le numéro <strong>SIREN ou SIRET</strong> et, selon votre situation, la mention de l'immatriculation (RCS, registre national des entreprises).</li>
  <li>Le <strong>numéro de TVA intracommunautaire</strong> si vous êtes assujetti, ou la mention « TVA non applicable, art. 293 B du CGI » en franchise de TVA.</li>
  <li>Le nom du <strong>directeur de la publication</strong> : en général, vous.</li>
</ul>

<h2>L'hébergeur</h2>
<p>Le site doit indiquer le nom, l'adresse et le téléphone de son <strong>hébergeur</strong>, c'est-à-dire l'entreprise dont les serveurs font tourner le site. Votre prestataire doit vous fournir ces informations.</p>

<h2>Les professions réglementées</h2>
<p>Si votre activité est réglementée (santé, droit, architecture, expertise comptable…), ajoutez :</p>
<ul>
  <li>votre <strong>titre professionnel</strong> et le pays où il a été obtenu ;</li>
  <li>l'<strong>ordre</strong> ou l'organisme auprès duquel vous êtes inscrit ;</li>
  <li>la référence aux <strong>règles professionnelles</strong> applicables.</li>
</ul>
<p>Pour les artisans du bâtiment, l'<strong>assurance décennale</strong> doit figurer sur les devis et factures. L'indiquer aussi sur le site (assureur et zone couverte) n'est pas toujours obligatoire, mais rassure beaucoup les clients.</p>

<h2>Les données personnelles (RGPD)</h2>
<p>Dès que votre site recueille des informations sur une personne, même un simple formulaire de contact, vous devez expliquer clairement :</p>
<ul>
  <li><strong>quelles données</strong> vous collectez et <strong>pourquoi</strong> (répondre à une demande, établir un devis…) ;</li>
  <li><strong>combien de temps</strong> vous les gardez ;</li>
  <li><strong>qui y a accès</strong>, y compris les services utilisés (outil de formulaire, agenda en ligne), et s'ils sont hors de l'Union européenne ;</li>
  <li><strong>comment exercer ses droits</strong> : accès, rectification, suppression, avec une adresse de contact.</li>
</ul>
<p>Ces informations prennent souvent la forme d'une section « Données personnelles » dans les mentions légales, ou d'une page « Politique de confidentialité ». Un court rappel sous le formulaire, avec un lien, est une bonne pratique.</p>

<h2>Les cookies</h2>
<p>Les cookies et traceurs non indispensables au fonctionnement du site (publicité, réseaux sociaux, certains outils de statistiques) demandent le <strong>consentement préalable</strong> du visiteur, avec un bandeau qui permet de refuser aussi facilement que d'accepter. C'est ce que contrôle la CNIL.</p>
<p>La solution la plus simple pour un petit site est de ne pas en avoir besoin : une mesure d'audience sans cookie, configurée selon les recommandations de la CNIL, peut se passer de bandeau.</p>

<h2>Si vous vendez en ligne</h2>
<p>Paiement, réservation avec acompte, boutique : si des particuliers peuvent acheter sur votre site, il faut en plus :</p>
<ul>
  <li>des <strong>conditions générales de vente</strong> (prix, paiement, livraison ou exécution, rétractation quand elle s'applique, garanties) ;</li>
  <li>les coordonnées d'un <strong>médiateur de la consommation</strong>, auquel le client peut s'adresser en cas de litige ;</li>
  <li>une information claire sur le <strong>droit de rétractation</strong> ou, le cas échéant, sur son absence.</li>
</ul>

<h2>Que risque-t-on sans mentions légales ?</h2>
<p>L'absence des mentions d'identification prévues par la LCEN est une infraction pénale, passible pour une personne physique d'un an d'emprisonnement et de 75 000 € d'amende, et de montants plus élevés pour une société. Les manquements au RGPD et aux règles sur les cookies relèvent de la CNIL. En pratique, les contrôles visent surtout les cas graves, mais un site sans mentions légales inspire aussi moins confiance à vos clients, et aux moteurs de recherche.</p>

<h2>Où les placer ?</h2>
<p>Sur une page dédiée, accessible depuis <strong>toutes les pages</strong>, en général par un lien dans le pied de page. Exemple : les <a href="${u("/mentions-legales/")}">mentions légales de ce site</a>. Tous les sites que je livre comprennent cette page, remplie avec vos informations.</p>`,
  faq: [
    {
      q: "Un auto-entrepreneur doit-il afficher son adresse personnelle ?",
      a: "Il doit indiquer l'adresse de son entreprise. Si vous êtes domicilié chez vous, c'est votre adresse personnelle. Pour l'éviter, une domiciliation commerciale est possible : c'est alors cette adresse qui figure sur le site.",
    },
    {
      q: "Les mentions légales et la politique de confidentialité, c'est la même chose ?",
      a: "Non, mais elles peuvent être réunies sur une même page. Les mentions légales identifient l'éditeur et l'hébergeur ; la politique de confidentialité explique l'usage des données personnelles.",
    },
    {
      q: "Peut-on copier les mentions légales d'un autre site ?",
      a: "Le modèle, oui ; le contenu, non. Chaque information doit correspondre à votre entreprise, à votre hébergeur et aux outils réellement utilisés par votre site.",
    },
  ],
};
