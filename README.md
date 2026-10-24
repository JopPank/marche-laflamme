# Marché Laflamme

Site vitrine statique, en français, conçu pour un déploiement sous un domaine ou un sous-domaine. Il n’y a ni dépendance à installer ni étape de compilation.

## Aperçu local

Ouvrez `index.html` dans un navigateur, ou lancez un serveur local depuis ce dossier :

```sh
python -m http.server 8000
```

Puis visitez `http://localhost:8000`.

## Déploiement sur `marchelaflamme.jopism.com`

Le site est composé de fichiers statiques et peut être publié avec l’hébergement Web GoDaddy ou un autre hébergeur statique. Pour le publier avec GoDaddy :

1. Vérifiez que `jopism.com` utilise le compte GoDaddy et notez le produit d’hébergement associé.
2. Téléversez `index.html`, `styles.css`, `app.js` et le dossier `assets` dans le répertoire Web configuré pour le sous-domaine.
3. Dans DNS, créez `marchelaflamme` comme enregistrement A ou CNAME selon les valeurs données par l’hébergeur; activez HTTPS dans le panneau d’hébergement.
4. Vérifiez le sous-domaine, le certificat HTTPS, les liens et la présentation sur téléphone et ordinateur.

Les enregistrements DNS et le répertoire de publication dépendent du forfait GoDaddy actif; n’utilisez pas de valeurs DNS génériques. Aucun accès au compte GoDaddy ni aucune modification DNS ne sont nécessaires pour tester le site localement.

## Connecter les demandes de commande

Le formulaire est prêt à envoyer une requête `POST`, mais il reste désactivé tant que l’URL du webhook n’a pas été configurée. Remplacez `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` dans `app.js` par l’URL de déploiement de votre Google Apps Script Web App.

Le script doit accepter un corps JSON (`Content-Type: text/plain;charset=utf-8`), valider les champs, enregistrer `timestamp`, `clientName`, `phone`, `address`, `deliveryDate`, `deliveryTime`, `items` et `status`, puis répondre avec un statut HTTP de réussite. Configurez l’accès du déploiement et les autorisations Google Sheets avant d’utiliser le formulaire en production. Les reçus automatiques par courriel nécessitent une fonctionnalité côté Apps Script; ils ne sont pas envoyés par cette page statique.

Avant que le webhook soit connecté, le formulaire affiche un message d’indisponibilité explicite et invite le client à appeler le marché; il ne prétend pas que sa demande a été reçue.

## Fichiers

- `index.html` — contenu et structure de la page.
- `styles.css` — mise en page responsive et styles de marque.
- `app.js` — navigation mobile, date minimale et soumission du formulaire.
- `assets/storefront.webp` — image de façade optimisée pour le bandeau d’accueil.
