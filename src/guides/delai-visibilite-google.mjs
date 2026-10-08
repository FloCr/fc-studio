import { u } from "../lib.mjs";

export default {
  slug: "delai-visibilite-google",
  category: "visibilite",
  title: "Combien de temps pour être visible sur Google ?",
  h1: "Combien de temps pour être visible sur Google ?",
  description:
    "Indexation, premières positions, résultats stables : les délais réalistes pour un nouveau site, ce qui les fait varier et comment accélérer sans se faire avoir.",
  intro:
    "Votre site est en ligne, mais personne ne le trouve encore. C'est normal : être visible sur Google se fait en plusieurs étapes, qui n'ont pas la même durée.",
  published: "2026-10-08",
  summary: [
    "Être indexé (connu de Google) prend en général de quelques jours à quelques semaines.",
    "Apparaître sur votre nom d'entreprise est rapide ; se positionner sur « métier + ville » prend plutôt plusieurs mois.",
    "La concurrence locale, l'ancienneté du domaine, la qualité des pages et la fiche Google font varier ces délais.",
    "Personne ne peut garantir une position : méfiez-vous des promesses de « première page en 15 jours ».",
  ],
  related: ["apparaitre-google-maps-bordeaux", "blog-site-artisan"],
  cta: "Un site construit pour être trouvé dès le départ.",
  body: `
<h2>Les trois étapes de la visibilité</h2>
<div class="table-wrap">
<table>
  <thead><tr><th>Étape</th><th>Ce qui se passe</th><th>Délai habituel</th></tr></thead>
  <tbody>
    <tr><td>Indexation</td><td>Google découvre vos pages et les ajoute à son index</td><td>Quelques jours à quelques semaines</td></tr>
    <tr><td>Recherches sur votre nom</td><td>Votre site apparaît quand on tape le nom de votre entreprise</td><td>Souvent dans les premières semaines</td></tr>
    <tr><td>Recherches sur votre métier</td><td>Vous remontez sur « plombier Mérignac », « site internet Bordeaux »…</td><td>Plusieurs mois, selon la concurrence</td></tr>
  </tbody>
</table>
</div>
<p>Ces délais sont des ordres de grandeur constatés, pas des engagements : Google ne publie aucun calendrier, et chaque secteur est différent.</p>

<h2>Étape 1 : se faire indexer</h2>
<p>Google découvre un nouveau site en suivant des liens ou grâce à son plan du site (sitemap). Pour l'aider :</p>
<ul>
  <li>déclarez le site dans <strong>Google Search Console</strong> et envoyez le plan du site ;</li>
  <li>ajoutez le lien du site sur votre <a href="${u("/guides/site-internet-ou-fiche-google/")}">fiche Google</a>, vos réseaux et vos profils professionnels ;</li>
  <li>vérifiez qu'aucune page importante n'est bloquée par erreur (balise « noindex », fichier robots.txt).</li>
</ul>
<p>Search Console vous indique ensuite quelles pages sont indexées, et pourquoi certaines ne le sont pas.</p>

<h2>Étape 2 : apparaître sur votre nom</h2>
<p>Si votre nom d'entreprise est assez distinctif, votre site apparaît en général rapidement sur cette recherche. C'est la première chose à vérifier. Si le nom est très courant (« Martin Plomberie »), ajoutez la ville pour tester.</p>

<h2>Étape 3 : se positionner sur votre métier</h2>
<p>C'est là que tout se joue, et c'est le plus long. Plusieurs facteurs font varier le délai :</p>
<ul>
  <li><strong>La concurrence</strong> : « plombier Bordeaux » est bien plus disputé que « plombier Saint-Médard-en-Jalles ».</li>
  <li><strong>La précision des pages</strong> : une page dédiée à chaque service et à chaque secteur se positionne plus vite qu'une page d'accueil qui parle de tout.</li>
  <li><strong>L'ancienneté et la réputation</strong> : un domaine neuf, sans lien depuis d'autres sites, part de zéro.</li>
  <li><strong>La fiche Google</strong> : pour les recherches locales, elle apparaît souvent avant les sites. Bien remplie, elle peut vous rendre visible plus vite que le site lui-même.</li>
  <li><strong>La qualité technique</strong> : un site lent, mal adapté au mobile ou mal structuré freine tout le reste.</li>
</ul>

<h2>Comment accélérer, honnêtement</h2>
<ol>
  <li><strong>Une page par service et par secteur</strong>, avec un contenu propre à chacun.</li>
  <li><strong>Une fiche Google complète</strong>, reliée au site, avec des avis réguliers.</li>
  <li><strong>Des liens depuis d'autres sites</strong> : annuaires de votre métier, fournisseurs, partenaires, presse locale.</li>
  <li><strong>Des informations cohérentes partout</strong> : même nom, même téléphone, même zone.</li>
  <li><strong>De la patience et du suivi</strong> : regardez Search Console une fois par mois plutôt que Google tous les jours.</li>
</ol>

<h2>Les promesses à fuir</h2>
<p>« Première page garantie », « résultats en 15 jours », « 500 liens pour 49 € » : personne ne contrôle le classement de Google. Les méthodes artificielles (achats de liens en masse, pages copiées à l'identique pour chaque ville, faux avis) peuvent donner un résultat rapide, puis une chute brutale quand Google les repère.</p>

<h2>Et si le site ne remonte toujours pas ?</h2>
<p>Après quelques mois sans progrès, vérifiez dans l'ordre : les pages sont-elles indexées ? Le titre de chaque page dit-il clairement le métier et la ville ? La fiche Google est-elle complète et reliée ? Le site est-il rapide sur mobile ? Si tout est en place, le frein est souvent la concurrence : il faut alors des pages plus ciblées et davantage de notoriété. C'est le travail de l'offre <a href="${u("/tarifs/")}">Site + Acquisition</a>.</p>`,
  faq: [
    {
      q: "Peut-on payer Google pour être indexé plus vite ?",
      a: "Non. L'indexation et le classement naturel sont gratuits et ne s'achètent pas. Seules les annonces Google Ads sont payantes, et elles disparaissent dès que vous arrêtez de payer.",
    },
    {
      q: "Pourquoi mon site n'apparaît-il pas du tout sur Google ?",
      a: "Le plus souvent, il n'est pas encore indexé, ou une balise bloque l'indexation. Google Search Console permet de le vérifier en quelques minutes et de demander l'indexation d'une page.",
    },
    {
      q: "Refaire mon site va-t-il me faire perdre mes positions ?",
      a: "Pas si la refonte est bien préparée : conserver le nom de domaine, rediriger les anciennes adresses vers les nouvelles et garder les contenus qui fonctionnaient. Une refonte sans redirections peut en revanche faire chuter le trafic pendant plusieurs mois.",
    },
  ],
};
