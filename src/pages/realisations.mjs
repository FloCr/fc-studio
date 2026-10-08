import { site, projects } from "../config.mjs";
import { pageHero, projectsDetailed, reasonsSection, ctaSection } from "../components.mjs";

export default {
  path: "/realisations/",
  title: "Réalisations : exemples de sites internet | " + site.brand,
  description:
    "Exemples de sites vitrines réalisés pour un artisan rénovation, un plombier chauffagiste et une sage-femme libérale. Design sur mesure, mobile, référencement.",
  crumbs: [{ name: "Réalisations", path: "/realisations/" }],
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Réalisations",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "WebSite", name: p.name, url: p.url, description: p.summary },
      })),
    },
  ],
  body: [
    pageHero({
      eyebrow: "Réalisations",
      title: "Des sites conçus pour faire venir des clients",
      intro:
        "Chaque site part du métier du client : ce que ses clients cherchent, comment ils le contactent, où il intervient. Voici trois projets en ligne.",
      actions: false,
    }),
    projectsDetailed(),
    reasonsSection(),
    ctaSection({ title: "Et si le prochain, c'était le vôtre ?" }),
  ].join("\n"),
};
