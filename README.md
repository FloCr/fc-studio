# Site vitrine : création de sites internet

Site statique généré par un petit script Node, **sans aucune dépendance**. HTML/CSS/JS écrits à la main, CSS intégré dans chaque page, environ 3 Ko de JS.

```bash
npm run build   # génère dist/
npm run dev     # build + prévisualisation sur http://localhost:4000
```

## Où modifier quoi

| Je veux changer…                                    | Fichier                     |
| --------------------------------------------------- | --------------------------- |
| Coordonnées, domaine, clé du formulaire, délais     | `src/config.mjs` → `site`   |
| Offres, prix, cadre, maintenance, options           | `src/config.mjs`            |
| Réalisations, arguments, étapes, FAQ                | `src/config.mjs`            |
| Texte, titre ou SEO d'une page                      | `src/pages/<page>.mjs`      |
| Une section réutilisée (hero, offres, formulaire…)  | `src/components.mjs`        |
| En-tête, pied de page, balises `<head>`             | `src/layout.mjs`            |
| Styles                                              | `src/assets/css/main.css`   |

Chaque fichier de `src/pages/` devient une page. Pour en ajouter une, copiez une page service existante et changez `path`, `title`, `description` et le contenu. Le sitemap se met à jour tout seul.

## Avant la mise en ligne

Le build affiche ce qui manque encore. À faire :

- [ ] `site.url` : le vrai domaine. Un fichier `CNAME` est alors généré pour GitHub Pages.
- [ ] `site.web3formsKey` : créer une clé sur [web3forms.com](https://web3forms.com) (comme pour Créa-Bains). Sans clé, le formulaire affiche un message d'erreur clair.
- [ ] `site.email` et/ou `site.phone`.
- [ ] `site.legal` : statut, SIRET et adresse, pour des mentions légales complètes.
- [ ] Vérifier `site.delays`, les réponses de la FAQ sur la **propriété** et l'**abonnement**, et le nombre de séries de modifications de l'offre Pro.
- [ ] `respondWithin24h: true` seulement si ce délai est tenable.
- [ ] Clémence Philouze : remplacer l'URL `github.io` par le domaine dès qu'il est actif.
- [ ] Search Console : coller le code de vérification dans `googleSiteVerification`, puis soumettre `/sitemap.xml`.
- [ ] Mesure d'audience (facultatif) : `plausibleDomain` (sans cookie) ou `ga4Id`. Un événement est envoyé à chaque demande de devis.

## Déploiement (GitHub Pages)

Le workflow `.github/workflows/deploy.yml` construit et publie `dist/` à chaque push sur `main`. Dans le dépôt, allez dans **Settings → Pages → Source** et choisissez « GitHub Actions ». Le site fonctionne aussi dans un sous-dossier (`https://user.github.io/repo`) : tous les liens suivent `site.url`.

## Images

- Captures des réalisations : `src/assets/img/realisations/<projet>-desktop-{640,960,1440}.webp` (capture 1440×900) et `<projet>-mobile-{390,780}.webp` (capture 390×844 en @2x).
- Image de partage : `scripts/og-image.html` (1200×630). Faites-en une capture, puis enregistrez-la dans `src/assets/img/og-image.jpg`.

## Pistes pour la suite

- Une page `/creation-site-internet-<ville>/`, quand la zone de prospection sera fixée et qu'il y aura du contenu local réel à y mettre.
- Une page restaurant, dès qu'il y aura une réalisation dans ce secteur.
- Les témoignages clients, dès que vous en aurez (aucun n'est inventé dans cette V1).
