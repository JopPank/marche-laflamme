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

## Démonstration Tally — aucune commande réelle

Le site intègre le [formulaire de démonstration](https://tally.so/r/GexPOO) par une iframe native, avec un lien direct de secours. Les avertissements sur la page et sur le formulaire demandent uniquement des coordonnées fictives. Aucun achat, rappel, paiement ou livraison n'est déclenché.

Le formulaire est géré dans le compte Tally personnel de Jonathan :

- [Modifier le formulaire](https://tally.so/forms/GexPOO/edit).
- [Consulter les réponses](https://tally.so/forms/GexPOO/submissions).
- [Réglages et fermeture du formulaire](https://tally.so/forms/GexPOO/settings).

La langue est le français et reCAPTCHA est placé avant l'envoi. Une réponse fictive a été soumise manuellement et vérifiée dans le tableau des réponses. Ne contournez pas le CAPTCHA pour des tests automatisés.

Les données sont enregistrées chez Tally, pas dans Google Sheets ni dans la boîte Hotmail du marché. Aucun connecteur Sheets, courriel au marché, reçu client payant ou abonnement payant n'est configuré. Les réponses restent jusqu'à leur suppression manuelle : supprimez les essais après la présentation et fermez le formulaire lorsque vous ne l'utilisez plus. Le plan gratuit est soumis aux conditions et limites d'utilisation de Tally; le CAPTCHA ne garantit pas l'absence de spam.

L'iframe charge Tally et son CAPTCHA Google. Les liens de confidentialité sont affichés à proximité. Avant une utilisation réelle, faites approuver les textes, les conditions de livraison, la destination des notifications et le traitement des renseignements personnels, notamment leur stockage en Europe par Tally. La présentation n'est pas une autorisation de prendre des commandes.

## Fiche de préparation imprimable

La [page de préparation](https://marchelaflamme.jopism.com/fiche-preparation.html) est un outil manuel de démonstration, séparé du formulaire client. Elle est publique, sans authentification : ce n'est pas un portail privé du personnel. Utilisez uniquement des données fictives.

1. Dans Tally, ouvrez **Submissions**, puis une réponse individuelle, et non les statistiques **Insights**.
2. Ouvrez la page de préparation dans un autre onglet. Recopiez les coordonnées et la référence; collez uniquement la liste d'épicerie, avec un article et sa quantité par ligne. Aucun découpage par virgule ni interprétation automatique des quantités n'est effectué.
3. Vérifiez l'aperçu avec la réponse originale et confirmez les détails nécessaires avec le client dans un futur processus réel.
4. Cliquez sur **Imprimer la fiche**, puis choisissez une imprimante ou un PDF. La fiche comporte des cases par article, un espace pour les substitutions, les initiales du préparateur et un suivi manuel (confirmée, en préparation, prête, livrée ou annulée).
5. Le personnel prépare le panier, suit les consignes de remplacement et passe les produits à la caisse pour obtenir le total réel avant la livraison.

La page n'envoie ni ne sauvegarde les champs, n'utilise pas de stockage local et ne lit pas Tally ou Google Sheets. Actualiser ou fermer l'onglet perd les données. Effacez les champs après l'essai; gérez séparément la conservation et la destruction des impressions/PDF. Aucun statut, prix, stock, paiement ou livraison n'est synchronisé. Le formulaire client reste inchangé.

## Ancien backend Google retiré

Le déploiement Apps Script `MarchéLaflamme2` a été archivé par le propriétaire. Son ancienne URL `/exec` renvoie HTTP 404 lors de la vérification du 24 octobre 2026. Le site ne contient plus de requête vers Apps Script, et le code du backend a été retiré du dépôt courant (il reste dans l'historique Git).

Le projet Google et la feuille privée historique n'ont pas été supprimés. Ne réactivez pas l'ancien déploiement public : il ne possédait pas de protection anti-abus adaptée.

## Courriel professionnel — proposition seulement

Le site affiche l'adresse Hotmail existante fournie dans les documents. Aucune boîte `info@marchelaflamme.com` ou `commande@marchelaflamme.com` n'a été créée.

Pour un futur lancement, le propriétaire de `marchelaflamme.com` peut choisir :

- Une redirection de `info@marchelaflamme.com` vers sa boîte Hotmail existante : réception au même endroit, mais une réponse depuis Hotmail n'utilise pas automatiquement l'adresse professionnelle.
- Une véritable boîte chez un fournisseur de courriel professionnel : réception et envoi sous l'adresse du domaine, dans Outlook, webmail ou une application mobile. Un abonnement est généralement nécessaire.

Vérifiez le domaine (le nom existant contient bien `marche`, avec un `e`), les accès DNS et les enregistrements de messagerie actuels avant toute modification MX/SPF/DKIM/DMARC. Le sous-domaine de démonstration `marchelaflamme.jopism.com` ne donne aucun contrôle sur le domaine du marché. Aucun paramètre de messagerie n'a été modifié.

## Fichiers

- `index.html` — contenu et structure de la page.
- `styles.css` — mise en page responsive et styles de marque.
- `app.js` — navigation mobile et année du pied de page; aucune collecte de commandes.
- `fiche-preparation.html`, `fiche-preparation.css`, `fiche-preparation.js` — saisie manuelle et impression d'une fiche de démonstration, sans backend.
- `assets/storefront.webp` — image de façade optimisée pour le bandeau d’accueil.
