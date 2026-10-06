# fc-studio.fr

Site de [FC Studio](https://fc-studio.fr) : création de sites internet pour indépendants, artisans et petites entreprises.

Site statique sans framework ni dépendance : HTML généré par un petit script Node, CSS écrit à la main et intégré dans chaque page, quelques lignes de JavaScript.

```bash
npm run build   # génère le site dans dist/
npm run dev     # build + prévisualisation sur http://localhost:4000
```

## Structure

```
src/
  config.mjs       contenu : offres, réalisations, FAQ, coordonnées
  pages/           une page par fichier (titre, description, contenu)
  components.mjs   sections réutilisables
  layout.mjs       <head>, en-tête, pied de page
  assets/          CSS, JS, police, images
  static/          favicon, fichiers copiés à la racine
build.mjs          génération des pages, du sitemap et du robots.txt
```

## Déploiement

Chaque push sur `main` construit et publie le site sur GitHub Pages (`.github/workflows/deploy.yml`).
