# Marché Laflamme

Site vitrine statique bilingue français / anglais, conçu pour un déploiement sous un domaine ou un sous-domaine. Il n’y a ni dépendance à installer ni étape de compilation.

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

## Présentation, circulaire et identité visuelle

La section **Circulaire et promotions / Les spéciaux de la semaine** apparaît immédiatement sous la navigation, avant le bandeau du marché, comme point d'entrée prioritaire. La capture Metro fournie sert de référence de hiérarchie seulement; aucune image de produit ou promotion Metro n'est publiée. Les cartes de rayons reprennent des photos déjà utilisées sur le site : saucisses maison de la page officielle de boucherie, légumes recadrés de la circulaire, puis fromages, beignes, bouchées traiteur et gâteau des pages de services. Les badges numérotés des images des cartes ont été retirés.

Le bandeau de spéciaux présente quatre offres transcrites de la circulaire officielle du **22 au 28 octobre 2026**, vérifiée le 25 octobre sur la [page officielle des spéciaux](https://marchelaflamme.com/speciaux-hebdomadaires/) : poitrine de poulet désossée (5,99 $/lb), trio de poivrons (2,99 $ chacun), céleri (2 pour 3 $) et pommes Royal Gala ou Granny Smith (1,49 $/lb). Les recadrages des produits proviennent de l'image officielle `https://marchelaflamme.com/wp-content/uploads/2026/10/IMG_3933.jpeg`; le lien du bandeau ouvre la page officielle pour consulter l'ensemble des offres, formats et conditions.

**Pas de synchronisation hebdomadaire automatique.** Les dates, prix, offres et URL du visuel sont saisis manuellement et peuvent changer chaque semaine. Avant de publier une nouvelle édition, vérifiez la circulaire officielle et mettez à jour dans `index.html` les dates, offres et lien du visuel ainsi que les recadrages dans `styles.css`. Ne présentez pas une ancienne édition comme une nouvelle promotion; les prix et offres du bandeau sont limités aux dates indiquées. `assets/circulaire-a-venir.svg` reste disponible comme illustration d'attente, mais n'est plus affichée.

Le logo fourni (`marché laflamme logo.png`) est optimisé en `assets/marche-laflamme-logo.webp` et remplace les anciens emblèmes dessinés dans l'en-tête, le bandeau et la carte du formulaire. Ses proportions sont conservées. La photo de l'équipe dans le bandeau d'accueil est recadrée depuis la capture fournie et enregistrée dans `assets/marche-laflamme-equipe.jpg`. Le bandeau est moins haut sur ordinateur et mobile; la photo conserve une présentation distincte sur mobile.

La carte Boulangerie de l’accueil et la page `boulangerie.html` utilisent la même photo de pains que le bandeau de la [boulangerie officielle](https://marchelaflamme.com/boulangerie/) (`Marche-Laflamme-Boulangerie-Aylmer.jpg`), optimisée localement en `assets/bakery-bread.webp`. Le cadrage est aligné à droite pour garder les pains visibles. Les beignes restent uniquement sur la carte Déjeuners du traiteur, où ils représentent le produit proposé.

La fonction **coller sa liste** est conservée dans « Autres articles » de Tally, avec un guide sur le site (une ligne par article, quantité, format, exemples et regroupement manuel par rayon). Les produits courants restent un raccourci complémentaire. Il n'y a ni classement automatique par rayon ni rapprochement avec un inventaire; la préparation reste à confirmer par le personnel.

## Pages de démonstration — traiteur et gâteaux

`service-traiteur.html`, `service-gateaux.html` et `service-boucherie.html` proposent des pages courtes en français et en anglais, avec une navigation vers les sections pertinentes et des liens vers les pages officielles pour le menu, les prix et disponibilités à jour. La page Boucherie présente les saucisses maison, la viande hachée et les boulettes préparées en magasin, les coupes personnalisées (à commander un jour d’avance) et les produits prêts à cuire. Elle réutilise une photo de saucisses de la page officielle de boucherie. Les pages Traiteur et Gâteaux gardent des catégories/options concises à la place des longs carrousels; les cartes Déjeuners, Tapas, Sandwichs, Salades, Fromages et Desserts utilisent les photos des produits de l’accordéon de la page officielle du traiteur. Les galeries de gâteaux et les images des cartes sont dimensionnées pour rester compactes. La carte Boucherie, ainsi que les cartes Traiteur et Gâteaux, sur l’accueil mènent à leurs pages respectives.

Les deux pages conduisent à `demande-services.html`, un prototype à parcours conditionnel unique : gâteau, traiteur, les deux ou épicerie/autre. Le choix « les deux » affiche les deux sections; épicerie/autre utilise uniquement les champs communs. Une liste libre (épicerie, viande, précisions), la date, l’heure et les coordonnées sont communes. Les paramètres `?service=gateau`, `traiteur`, `both` et `epicerie` présélectionnent le parcours. `services.js` ne transmet ni n’enregistre aucune donnée; le bouton affiche uniquement un message de démonstration. Ne pas saisir de vrais renseignements. Le formulaire n’est pas connecté aux deux formulaires WordPress officiels ni à la démo Tally; un lien depuis l’accueil permet de choisir cette maquette bilingue à la place de Tally.

La séparation de deux pages de contenu tout en centralisant la demande garde des pages faciles à trouver et une seule expérience de formulaire. Avant tout lancement réel, le marché doit valider les options, prix, délais, allergies, modalités de cueillette et champs requis, puis choisir une boîte professionnelle ou un compte de formulaire géré par l’entreprise comme destination. La maquette n’implique aucune intégration au WordPress du marché.

## Couverture du site officiel

Inventaire vérifié le **25 octobre 2026** via le [plan de site officiel](https://marchelaflamme.com/page-sitemap1.xml) et les pages publiques. Les 12 pages de contenu originales ont un équivalent bilingue; les noms existants des pages de services sont conservés pour ne pas casser les liens.

| Page officielle | Page locale | Contenu principal |
| --- | --- | --- |
| `/` | `index.html` | Accueil, aperçu des spéciaux, rayons, contact et démos |
| `/boucherie/` | `service-boucherie.html` | Saucisses, viande hachée, coupes et demande spéciale |
| `/charcuterie-fromage/` | `charcuterie-fromage.html` | Viandes froides, fromages, salades et traiteur |
| `/fruits-legumes/` | `fruits-legumes.html` | Arrivages quotidiens, plateaux, portions et délai de 48 h |
| `/boulangerie/` | `boulangerie.html` | Pains, desserts, tarifs des gâteaux et cupcakes |
| `/service-de-gateau/` | `service-gateaux.html` | Personnalisation, formats et lien direct vers les tarifs |
| `/service-de-traiteur/` | `service-traiteur.html` | Catégories de plateaux et demande combinée |
| `/pret-a-manger/` | `pret-a-manger.html` | Plats cuisinés, portions individuelles et familiales |
| `/speciaux-hebdomadaires/` | `speciaux-hebdomadaires.html` | Circulaire complète datée et lien vers l’édition officielle |
| `/livraison-a-domicile/` | `livraison.html` | Rayon, modes de commande, livraison et cueillette |
| `/a-propos/` | `a-propos.html` | Histoire familiale et chronologie |
| `/nous-joindre/` | `contact.html` | Téléphone, courriel, adresse, carte et réseaux sociaux |

`app.js` centralise les liens de navigation et le répertoire des pages du pied de page. La barre bordeaux à liens dorés reprend l’organisation du site original : Spéciaux hebdomadaires, Produits frais, Nos services, À propos et Nous joindre. Produits frais regroupe les cinq rayons; Nos services donne accès au traiteur, aux gâteaux, à la livraison et à Laflamme Express. Tous les liens mènent aux pages locales. Les deux menus natifs sont accessibles au clavier, avec fermeture par Échap et fermeture de l’autre menu à l’ouverture; le menu mobile reste défilable. Le sélecteur FR / EN est conservé près du logo. Toutes les pages sont du HTML statique avec la feuille CSS existante : pas de migration Tailwind, de dépendance ni de compilation. Les descriptions sont résumées plutôt que reproduites intégralement; le menu traiteur détaillé reste consultable via le site officiel.

### Données vérifiées et limites

- L’histoire officielle commence en **1959**, et non 1942. Les textes du site et leurs traductions ont été corrigés.
- Le courriel publié est **marchelaflamme@hotmail.com**. `commande@marchelaflamme.com` n’est pas confirmé et n’est pas présenté comme une adresse active.
- Les tarifs de boulangerie sont regroupés dans un seul tableau de référence : 11,99 $, 17,99 $, 19,99 $, 29,99 $ et 59,99 $ selon le format; image comestible +10 $; cupcakes 0,99 $ (1–99), 0,89 $ (100+). La colonne avec image inclut déjà le supplément. Aucun calcul de commande ni régime de taxes n’est inventé.
- Les portions annoncées pour le petit rond et les deux slabs diffèrent entre la page Boulangerie et le formulaire officiel. Le tableau suit Boulangerie et signale l’écart; le formulaire conserve ses choix d’origine. Faire valider ces chiffres avant lancement.
- Livraison dans un **rayon de 5 km**, pas dans tout Gatineau : livraison gratuite après achats en magasin de plus de 50 $; commande préparée et livrée à 6 $ au-dessus de 50 $, 8 $ en dessous. Préparation gratuite des cueillettes de plus de 50 $. Le cas exactement 50 $, les frais des petites cueillettes et les créneaux ne sont pas précisés : confirmation téléphonique.
- Aucun horaire non vérifié ni faux témoignage n’est ajouté. Un lien vers les avis Google et un avis de confirmation des heures sont proposés sur l’accueil.
- La carte Google est chargée à la demande du navigateur (`loading="lazy"`) et dispose d’un lien d’itinéraire de secours. La circulaire officielle reste une image en français, même dans l’interface anglaise; un avis le précise.
- Les prix, horaires, disponibilités et circulaires ne sont pas synchronisés automatiquement. Revérifier les pages sources avant publication et actualiser les deux langues ensemble.

## Langues

Les pages publiques, le formulaire de demande de service et la fiche de préparation interne sont disponibles en français et en anglais à l’aide du sélecteur FR / EN. `language.js` applique les traductions et ajoute le choix de langue aux liens internes pour le conserver d’une page à l’autre; `?lang=en` et `?lang=fr` permettent de partager une page dans la langue voulue. Lorsqu’un texte français est modifié ou ajouté, mettez à jour sa traduction anglaise dans `language.js`. Le formulaire intégré Tally est externe et reste en français; un avis l’indique dans la version anglaise.

## Démonstration Tally — aucune commande réelle

Le site intègre le [formulaire de démonstration](https://tally.so/r/GexPOO) par une iframe native, avec un lien direct de secours. Les avertissements sur la page et sur le formulaire demandent uniquement des coordonnées fictives. Aucun achat, rappel, paiement ou livraison n'est déclenché.

Le formulaire est géré dans le compte Tally personnel de Jonathan :

- [Modifier le formulaire](https://tally.so/forms/GexPOO/edit).
- [Consulter les réponses](https://tally.so/forms/GexPOO/submissions).
- [Réglages et fermeture du formulaire](https://tally.so/forms/GexPOO/settings).

La langue est le français et reCAPTCHA est placé avant l'envoi. Une réponse fictive a été soumise manuellement et vérifiée dans le tableau des réponses. Ne contournez pas le CAPTCHA pour des tests automatisés.

Les données sont enregistrées chez Tally et synchronisées vers une nouvelle feuille Google privée dans le compte personnel de Jonathan par l'intégration gratuite Google Sheets de Tally (connexion « Marché Laflamme Demo »). Elles ne sont pas envoyées à la boîte Hotmail du marché. Aucun courriel au marché, reçu client payant ou abonnement payant n'est configuré. Supprimez les essais dans Tally ET dans Google Sheets après la présentation : ne présumez pas qu'une suppression dans un outil efface l'autre copie. Fermez le formulaire lorsque vous ne l'utilisez plus. Le plan gratuit est soumis aux conditions et limites d'utilisation de Tally; le CAPTCHA ne garantit pas l'absence de spam.

Le formulaire propose six quantités facultatives, avec un format explicite : lait 2 % en bouteilles de 2 L, bananes à l'unité, pain de blé entier de 675 g, œufs par boîte de 12, pommes par sac de 1,36 kg et bœuf haché par portion de 500 g. Ces articles sont des exemples, sans catalogue de stocks ni prix garantis. Laisser vide ou saisir zéro signifie ne pas demander le produit. La zone « Autres articles » reste facultative et demande un article avec sa quantité par ligne. Ne répétez pas un article déjà choisi. Le personnel doit confirmer les quantités; la fiche connectée bloque les quantités de produits courants négatives, fractionnaires ou non numériques.

L'iframe charge Tally et son CAPTCHA Google. Les liens de confidentialité sont affichés à proximité. Avant une utilisation réelle, faites approuver les textes, les conditions de livraison, la destination des notifications et le traitement des renseignements personnels, notamment leur stockage en Europe par Tally. La présentation n'est pas une autorisation de prendre des commandes.

## Fiche connectée Tally → Google Sheets

La [nouvelle feuille de démonstration](https://docs.google.com/spreadsheets/d/1Z6RPvFmmI3sPdupmbtLMtzqPPg6gERUQ3tc39H-o_sE/edit) reçoit les réponses Tally automatiquement, y compris les essais antérieurs importés. Elle est distincte de l'ancienne feuille Apps Script. Ne la publiez pas sur le Web et ne choisissez pas « Tous les utilisateurs disposant du lien ».

1. Ouvrez **Sheet1** et repérez la réponse à préparer. Notez son numéro de ligne (la ligne 1 contient les en-têtes).
2. Dans **Préparation**, changez uniquement **B3** pour ce numéro de ligne.
3. Ouvrez **Fiche imprimable** : coordonnées, référence de réponse, date souhaitée, consigne de remplacement, produits courants et autres articles sont réunis automatiquement. Les quantités vides ou nulles des produits courants sont exclues; les autres articles sont découpés uniquement aux retours à la ligne, pas aux virgules. Une liste vide produit un avertissement.
4. Comparez la référence et les détails à la réponse originale. En cas de message **ERREUR**, ne préparez pas de panier : vérifiez la ligne, les quantités ou les en-têtes. Les colonnes attendues manquantes produisent une erreur Sheets explicite, pas une fiche partielle.
5. Choisissez **Fichier → Imprimer → Feuille active**, **Portrait**, **Ajuster à la largeur**. Vérifiez toutes les pages avant de continuer vers l'imprimante ou le PDF. La démonstration avec quatre produits courants et une ligne libre a été vérifiée dans un aperçu d'une page.
6. Le préparateur coche et annote la fiche papier; la caisse calcule le total réel. Les statuts restent manuscrits, sans synchronisation.

**Limite de la démo : un seul préparateur à la fois.** B3 est un choix partagé, pas personnel à chaque onglet. Ne changez pas B3 et ne triez/modifiez pas les réponses pendant une préparation ou impression; vérifiez toujours la référence. Pour plusieurs employés simultanés, prévoir une sélection privée par utilisateur et un suivi des commandes avant le lancement.

La fiche utilise uniquement les formules natives Google Sheets, sans Apps Script ni nouvelle autorisation de script, clé API ou endpoint public. La formule de récupération se trouve dans `tally-picking-slip.formula.txt`; elle est placée en **Fiche imprimable!A1**, avec les cellules sous A1 laissées libres pour son résultat dynamique. La formule utilise des noms de fonctions anglais et des séparateurs virgules pour la locale actuelle de la feuille. Les en-têtes doivent garder leurs libellés exacts et rester dans les colonnes A à O de **Sheet1**; adaptez la formule si le formulaire change. Ne modifiez pas le résultat dynamique. La colonne A est réglée à 760 px, texte renvoyé à la ligne, police 12.

Si une réponse n'arrive pas, vérifiez **Tally → Integrations → Marché Laflamme Demo → historique de synchronisation** et l'autorisation Google. N'ajoutez pas de lignes de test ou de notes dans Sheet1 : Tally y cherche la première ligne vide. Gardez les notes sur papier ou dans un autre onglet. Les quantités et coordonnées de la réponse fictive récente ont été vérifiées dans la fiche; les cas numéro de ligne invalide, ligne vide, quantité négative et liste multiligne ont également été testés sans modifier les réponses originales.

## Fiche de préparation manuelle (secours)

La [page de préparation](https://marchelaflamme.jopism.com/fiche-preparation.html) est un outil manuel de démonstration, séparé du formulaire client. Elle est publique, sans authentification : ce n'est pas un portail privé du personnel. Utilisez uniquement des données fictives.

1. Dans Tally, ouvrez **Submissions**, puis une réponse individuelle, et non les statistiques **Insights**.
2. Ouvrez la page de préparation dans un autre onglet. Recopiez les coordonnées et la référence; collez uniquement la liste d'épicerie, avec un article et sa quantité par ligne. Aucun découpage par virgule ni interprétation automatique des quantités n'est effectué.
3. Vérifiez l'aperçu avec la réponse originale et confirmez les détails nécessaires avec le client dans un futur processus réel.
4. Cliquez sur **Imprimer la fiche**, puis choisissez une imprimante ou un PDF. La fiche comporte des cases par article, un espace pour les substitutions, les initiales du préparateur et un suivi manuel (confirmée, en préparation, prête, livrée ou annulée).
5. Le personnel prépare le panier, suit les consignes de remplacement et passe les produits à la caisse pour obtenir le total réel avant la livraison.

La page manuelle n'envoie ni ne sauvegarde les champs, n'utilise pas de stockage local et ne lit pas Tally ou Google Sheets. Elle propose un lien vers la feuille privée, sans en charger les réponses. Actualiser ou fermer l'onglet perd les données manuelles. Effacez les champs après l'essai; gérez séparément la conservation et la destruction des impressions/PDF. Aucun statut, prix, stock, paiement ou livraison n'est synchronisé.

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
- `service-traiteur.html`, `service-gateaux.html`, `demande-services.html`, `services.js` — pages de démonstration des services et formulaire conditionnel sans envoi.
- `fiche-preparation.html`, `fiche-preparation.css`, `fiche-preparation.js` — saisie manuelle et impression d'une fiche de démonstration, sans backend.
- `tally-picking-slip.formula.txt` — copie de récupération de la formule native de la fiche Google Sheets connectée; aucune réponse client.
- `assets/marche-laflamme-logo.webp`, `assets/marche-laflamme-equipe.jpg` — logo fourni et photo recadrée de l'équipe dans le bandeau d'accueil. `assets/marche-laflamme-banner.webp` est conservée, mais n'est plus utilisée.
- `assets/circulaire-a-venir.svg` — ancienne illustration d'attente, conservée mais non affichée; la circulaire datée est chargée depuis le site officiel.
- `assets/storefront.webp` — ancienne image de façade, conservée mais non utilisée sur la page.
