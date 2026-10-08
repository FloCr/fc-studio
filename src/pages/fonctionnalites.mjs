import { site, projects } from "../config.mjs";
import { pageHero, cardsSection, faqSection, faqSchema, ctaSection } from "../components.mjs";
import { businessSchema } from "./home.mjs";

const ex = (id) => {
  const p = projects.find((p) => p.id === id);
  return { label: p.name, url: p.url };
};

const pageFaq = [
  {
    q: "Combien coûte une fonctionnalité sur mesure ?",
    a: "Cela dépend de ce qu'elle doit faire. Un comparateur avant / après ou un bouton de paiement s'ajoutent facilement à un site existant. Un outil de gestion des demandes ou de devis automatiques demande plus de travail. Dans tous les cas, vous recevez un devis précis avant le début du projet.",
  },
  {
    q: "Peut-on ajouter une fonctionnalité plus tard ?",
    a: "Oui. Vous pouvez démarrer avec un site simple et ajouter le paiement, la réservation ou un espace client quand votre activité le demande. Le site est construit pour pouvoir évoluer.",
  },
  {
    q: "Le paiement en ligne est-il sécurisé ?",
    a: "Oui. Le paiement est traité par Stripe ou par le module de votre banque, jamais par le site lui-même : aucun numéro de carte ne transite ni n'est stocké chez vous. L'argent arrive directement sur votre compte.",
  },
  {
    q: "Puis-je garder mes outils actuels ?",
    a: "Oui, c'est même préférable. Le site peut se connecter à votre agenda, votre logiciel de facturation ou votre CRM plutôt que de les remplacer.",
  },
];

export default {
  path: "/fonctionnalites/",
  title: "Options et fonctionnalités sur mesure pour votre site | " + site.name,
  ogTitle: "Options et fonctionnalités sur mesure pour votre site",
  description:
    "Comparateur avant / après, paiement en ligne Stripe ou bancaire, réservation, gestion des demandes, devis automatiques : exemples concrets d'options à ajouter à votre site.",
  crumbs: [{ name: "Options et fonctionnalités", path: "/fonctionnalites/" }],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fonctionnalités sur mesure pour site internet",
      serviceType: "Développement de fonctionnalités web",
      provider: { "@id": businessSchema()["@id"] },
      offers: { "@type": "Offer", priceCurrency: "EUR", description: "Sur devis" },
    },
    faqSchema(pageFaq),
  ],
  body: [
    pageHero({
      eyebrow: "Options et fonctionnalités",
      title: "Ce qu'on peut ajouter à votre site",
      intro:
        "Au-delà du site vitrine, votre site peut encaisser des paiements, recevoir des réservations, trier vos demandes ou préparer vos devis. Voici des exemples concrets, tous réalisables sur devis.",
    }),
    cardsSection({
      id: "options",
      eyebrow: "Les options courantes",
      title: "Compléter votre site",
      intro: "Les ajouts les plus demandés, qui s'intègrent à n'importe quelle offre.",
      items: [
        { title: "Pages supplémentaires", text: "Une page par service, une page par commune desservie, une page équipe ou tarifs. Chaque page supplémentaire est une porte d'entrée de plus depuis Google." },
        { title: "Rédaction des textes", text: "À partir d'un échange sur votre activité, je rédige des textes clairs et pensés pour les recherches de vos clients. Vous relisez et validez." },
        { title: "Référencement local", text: "Des pages dédiées aux villes où vous intervenez, pour apparaître sur les recherches du type « métier + ville ».", example: ex("crea-bains") },
        { title: "Fiche Google Business Profile", text: "Création ou optimisation de votre fiche : catégories, horaires, photos, lien vers le site. C'est elle qui apparaît sur Google Maps." },
        { title: "Modifications ponctuelles", text: "Nouveaux tarifs, nouvelles photos, horaires d'été : sans formule de maintenance, les modifications sont faites à la demande." },
        { title: "Avis clients", text: "Accès direct à vos avis Google et bouton pour en laisser un, afin de rassurer les visiteurs qui hésitent.", example: ex("clemence-philouze") },
      ],
    }),
    cardsSection({
      id: "valoriser",
      eyebrow: "Mettre en valeur votre travail",
      title: "Des fonctions qui donnent envie",
      intro: "Pour qu'un visiteur comprenne en quelques secondes la qualité de votre travail.",
      alt: true,
      items: [
        { title: "Comparateur avant / après", text: "Le visiteur fait glisser un curseur sur la photo pour voir le chantier avant et après travaux. Idéal en rénovation, peinture, paysagisme ou esthétique.", example: ex("crea-bains") },
        { title: "Galerie de réalisations", text: "Vos chantiers ou créations classés par type de prestation, avec agrandissement des photos et chargement rapide, même sur mobile.", example: ex("crea-bains") },
        { title: "Carte de la zone d'intervention", text: "Une carte et la liste des communes desservies, pour que le client sache tout de suite si vous venez chez lui." },
        { title: "Appel en un clic", text: "Sur mobile, votre numéro reste visible et lance l'appel directement. Le réflexe d'un client pressé.", example: ex("mathieu-plomberie") },
        { title: "Simulateur de prix", text: "Le visiteur indique la surface, le type de travaux ou le nombre de personnes, et obtient une estimation avant de vous contacter." },
        { title: "Vidéo de présentation", text: "Une courte vidéo de votre atelier, de votre cabinet ou d'un chantier, intégrée sans ralentir le site." },
      ],
    }),
    cardsSection({
      id: "paiement",
      eyebrow: "Paiement en ligne",
      title: "Encaisser directement depuis le site",
      intro: "Le paiement est traité par un prestataire sécurisé : aucun numéro de carte ne passe par votre site, l'argent arrive sur votre compte.",
      items: [
        { title: "Paiement par Stripe", text: "Carte bancaire, Apple Pay et Google Pay, mis en place rapidement, sans abonnement : seulement une commission par paiement." },
        { title: "Module de votre banque", text: "Si vous avez déjà un contrat de paiement en ligne avec votre banque (Monetico, Up2pay, Sogecommerce, Systempay…), le site s'y connecte." },
        { title: "Acompte à la réservation", text: "Le client verse un acompte au moment de réserver ou de valider son devis. Moins de rendez-vous oubliés, moins d'impayés." },
        { title: "Liens de paiement", text: "Un lien à envoyer par SMS ou e-mail pour régler une facture ou un devis en ligne, sans passer par un panier." },
        { title: "Bons cadeaux", text: "Vente de cartes cadeaux en ligne, avec un bon envoyé automatiquement par e-mail à l'acheteur." },
        { title: "Petite boutique", text: "Quelques produits ou prestations à vendre en ligne, sans la lourdeur d'une plateforme e-commerce complète." },
      ],
    }),
    cardsSection({
      id: "gestion",
      eyebrow: "Gestion et automatisations",
      title: "Moins de temps passé sur l'administratif",
      intro: "Des outils simples, construits pour votre façon de travailler, que vous utilisez depuis votre ordinateur ou votre téléphone.",
      alt: true,
      items: [
        { title: "Suivi des demandes", text: "Toutes les demandes reçues par le site sont enregistrées dans un tableau de bord : nouvelle, rappelée, devis envoyé, signée. Plus rien ne se perd dans la boîte mail." },
        { title: "Devis automatiques", text: "À partir des informations saisies par le client ou par vous, le site prépare un devis PDF à votre en-tête, prêt à être relu et envoyé." },
        { title: "Relances et notifications", text: "Alerte par SMS ou e-mail à chaque nouvelle demande, relance automatique d'un devis resté sans réponse, rappel de rendez-vous au client." },
        { title: "Réservation en ligne", text: "Prise de rendez-vous reliée à votre agenda, ou lien vers l'outil que vous utilisez déjà (Doctolib, Calendly…).", example: ex("clemence-philouze") },
        { title: "Espace client", text: "Un accès réservé où vos clients retrouvent leurs documents, leurs factures ou l'avancement de leur dossier ou de leur chantier." },
        { title: "Connexion à vos outils", text: "Envoi des demandes vers votre CRM, des paiements vers votre logiciel de facturation, des rendez-vous vers votre agenda." },
      ],
    }),
    faqSection(pageFaq, { title: "Questions sur les options" }),
    ctaSection({
      title: "Une idée de fonctionnalité ?",
      text: "Décrivez ce que vous aimeriez que votre site fasse à votre place. Je vous dis ce qui est faisable, comment, et pour quel prix.",
    }),
  ].join("\n"),
};
