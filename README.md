# Marché Laflamme

Site vitrine statique, en français, conçu pour un déploiement sous un domaine ou un sous-domaine. Il n’y a ni dépendance à installer ni étape de compilation.

## Aperçu local

Ouvrez `index.html` dans un navigateur, ou lancez un serveur local depuis ce dossier :

```sh
python -m http.server 8000
```

Puis visitez `http://localhost:8000`.

## Déploiement sur `marchelaflamme.jopism.com`

Le dépôt est [JopPank/marche-laflamme](https://github.com/JopPank/marche-laflamme). GitHub Pages publie la branche `main`, dossier racine. Le fichier `CNAME` fixe le domaine personnalisé; `.nojekyll` permet de servir directement les fichiers.

Dans les DNS GoDaddy de `jopism.com`, ajoutez un CNAME `marchelaflamme` vers `joppank.github.io` (TTL : 1 heure). Vérifiez d’abord qu’aucun enregistrement du même nom n’existe. Ne modifiez pas les enregistrements de la racine ou des autres sous-domaines.

Lorsque GitHub valide les DNS et émet le certificat, activez **Enforce HTTPS** dans les paramètres Pages du dépôt. Vérifiez ensuite les liens, les ressources et le formulaire sur le domaine public. Les mises à jour se publient avec un push vers `main`.

Les documents Word et captures d’écran de travail sont exclus du dépôt par `.gitignore`.

## Connecter les demandes de commande

Le formulaire est connecté au déploiement Google Apps Script `MarchéLaflamme2`. Son URL publique `/exec` est configurée dans `WEBHOOK_URL` de `app.js`. Pour changer de déploiement, remplacez cette URL et publiez la modification.

Le code source du backend est dans `apps-script/Code.gs`. Le projet Google est [Laflamme Express](https://script.google.com/home/projects/1GLmSVNH0f7AvaLk9aBTXHnMg2Hnq4198G8NGbA06a4QwKlllq0DtJA3t/edit).

1. Dans Apps Script, enregistrez le code puis exécutez `setup` et autorisez personnellement l’accès à Google Sheets. Cette fonction crée une feuille privée et conserve son identifiant dans les propriétés du script.
2. Utilisez **Deploy > New deployment > Web app**, avec exécution en tant que propriétaire et accès **Anyone**, pour permettre les demandes anonymes du site.
3. Copiez l’URL `/exec` du déploiement dans `WEBHOOK_URL` de `app.js`, puis publiez la modification.
4. Testez une demande synthétique et vérifiez sa ligne dans la feuille avant d’accepter de vraies commandes.

Le backend valide les champs, neutralise les formules Sheets et verrouille les écritures concurrentes. Le timestamp et le statut sont définis côté serveur. Un identifiant de demande empêche les doublons lors d’une nouvelle tentative dans la même session. Le navigateur ne confirme la réception que si le JSON contient `ok: true` et le même identifiant.

La feuille n’est pas publique : seule la soumission de demandes est exposée. L’URL publique n’est pas une clé secrète et ne constitue pas une protection contre le spam; prévoyez une protection anti-abus adaptée avant une exploitation à grande échelle. Aucun paiement ni reçu automatique par courriel n’est effectué.

Le déploiement a été vérifié avec une demande synthétique et une nouvelle tentative utilisant le même identifiant. Une soumission depuis le navigateur a également affiché la confirmation et réinitialisé le formulaire. Les lignes nommées `TEST TECHNIQUE` ne sont pas de vraies commandes.

Si l’URL est remplacée par le marqueur `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`, le formulaire affiche un message d’indisponibilité explicite et invite le client à appeler le marché; il ne prétend pas que sa demande a été reçue.

## Fichiers

- `index.html` — contenu et structure de la page.
- `styles.css` — mise en page responsive et styles de marque.
- `app.js` — navigation mobile, date minimale et soumission du formulaire.
- `assets/storefront.webp` — image de façade optimisée pour le bandeau d’accueil.
- `apps-script/Code.gs` — validation et enregistrement des demandes dans Google Sheets.
