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

## Performance et accessibilité

Les images des cartes de fromages, traiteur et gâteaux de l'accueil sont servies localement en WebP (`assets/department-*.webp`). Les pains utilisent deux variantes de 480 et 960 pixels avec `srcset` et `sizes`, sur l'accueil et la page Boulangerie. La photo de l'équipe utilise `assets/marche-laflamme-equipe.webp`, sans modifier le cadrage des visages.

Sur l'accueil, la feuille Google Fonts est préchargée puis appliquée sans bloquer le premier rendu; les polices de remplacement et `display=swap` restent en place, avec une feuille de style de secours sans JavaScript.

Les quatre cartes de spéciaux utilisent des photos de produits locales en WebP de 640 × 416 pixels (`assets/specials-{chicken,peppers,celery,apples}.webp`), plutôt que les recadrages flous de la circulaire. Elles sont illustratives, sans prix ni texte imprimé dans l'image; les offres et le lien vers la circulaire complète restent inchangés. Lors d'un changement d'édition, adaptez les photos aux produits annoncés en même temps que les prix et les dates.

Photos utilisées sous la [licence Pexels](https://www.pexels.com/license/), avec recadrage et compression :
- [Poitrines de poulet, photo 5769375](https://www.pexels.com/photo/seasoned-raw-chicken-breasts-on-cutting-board-5769375/).
- [Poivrons, photo 5268270](https://www.pexels.com/photo/yellow-red-and-green-bell-peppers-5268270/).
- [Céleri, photo 13044694](https://www.pexels.com/photo/close-up-photo-of-celery-stalks-13044694/).
- [Pommes rouges et vertes, photo 1402659](https://www.pexels.com/photo/red-and-green-apples-1402659/).

La section Laflamme Express se trouve sur `livraison.html#commande`; les liens de l'accueil et de la navigation y conduisent. Le formulaire Tally ne se connecte à Tally ou reCAPTCHA qu'après ouverture de « Ouvrir le formulaire de démonstration ». Replier puis rouvrir le panneau conserve le formulaire et les données fictives déjà saisies. Sans JavaScript ou si le fournisseur est indisponible, le lien permanent vers la démo dans un nouvel onglet et le formulaire combiné bilingue restent disponibles. Les avertissements de confidentialité et de démonstration sont conservés.

Le nom accessible du logo provient de son texte alternatif et de sa légende visible, sans libellé qui masque cette dernière. Les couleurs des textes secondaires, du téléphone et de la date de la carte de circulaire sont ajustées pour améliorer le contraste. Pour vérifier les gains, relancez Lighthouse sur le site publié dans un profil sans extensions; les scores de l'ancien rapport ne sont pas une mesure de ces modifications.

## Présentation, circulaire et identité visuelle

### Cartes bento

Les raccourcis de l'en-tête utilisent un dégradé crème et lin avec une bordure or sourd; le bandeau d'accueil reprend le fond crème et un fondu assorti vers la photo. Les accents bordeaux restent inchangés, sans grand aplat jaune vif dans ces deux zones.

En Boulangerie, la carte « Créez le gâteau parfait pour chaque occasion » est un lien entier vers `#gateaux` (formats et prix), avec la même interaction que la carte Cupcakes : soulèvement, halo, flèche et focus clavier. Le bouton rouge interne est remplacé par la flèche, sans liens imbriqués.

Les deux liens « Préparer une demande » du Traiteur utilisent la variante compacte `bento-action` : fond crème, flèche ronde bordeaux et interactions des cartes, en conservant le parcours `?service=traiteur#demande`.

Les autres actions anciennement rouges (`button--red`, nom conservé pour compatibilité) reprennent ce style dans toute la feuille partagée, y compris les boutons de simulation. Le panneau Tally utilise la même présentation avec un indicateur plus/moins natif; la fiche de préparation adapte également ses boutons d'action dans sa feuille séparée, sans modifier l'impression. Les états de langue sélectionnée et les petits accents bordeaux restent distincts des appels à l'action.

Les liens d'action autonomes `a.text-link` (menu officiel, exploration des rayons, aperçu des offres, plateaux traiteur et itinéraires) partagent également ce traitement. Les éléments `span.text-link` à l'intérieur d'une carte déjà cliquable, la navigation et les liens intégrés aux paragraphes ne deviennent pas des boutons.

L'accueil (rayons et spéciaux), les catégories Traiteur et les aperçus Livraison, Boulangerie et Contact partagent des cartes arrondies, des ombres légères et des accents crème, bordeaux et or dans `styles.css`. Les rayons et catégories utilisent des tailles variées sur ordinateur; les grilles se simplifient sur tablette et mobile sans changer l'ordre du contenu. Les cartes de produits restent informatives, sans faux lien.

Les quatre autres rayons suivent la même présentation : la Boucherie associe sa photo aux tuiles de fraîcheur et de service, la Charcuterie combine trois cartes asymétriques avec les plateaux existants, les Fruits et légumes mettent en valeur la fraîcheur et le premier plateau de chaque catégorie sans déstructurer le catalogue, et le Prêt à manger distingue ses trois listes par des teintes douces. Les variétés de saucisses, plats, ingrédients, prix et portions restent visibles sans interaction. Ces cartes informatives ne simulent pas des boutons; les halos et soulèvements restent réservés aux vrais liens.

Les liens de cartes proposent un léger soulèvement et un halo au survol avec une souris précise, ainsi qu'un contour visible au clavier. Les galeries Traiteur conservent leurs éléments natifs `details`/`summary` et grandissent sans hauteur fixe à l'ouverture. Les effets respectent `prefers-reduced-motion`; aucune dépendance ni animation JavaScript n'est ajoutée. Les traductions existantes, tableaux de prix, modalités de livraison, avertissements de démonstration et formulaires restent conservés. Pour vérifier une modification, contrôler les dix surfaces en FR et EN à 320, 390, 768 et 1440 pixels, les galeries ouvertes, le focus clavier et la réduction des animations.

La page Livraison utilise la photo fournie `Delivery Truck.png`, optimisée en `assets/delivery-truck.webp` (1100 × 509 pixels). Le camion reste entièrement visible, sans recadrage, dans une carte à côté des options sur ordinateur et au-dessus de celles-ci sur mobile; son texte alternatif est bilingue.

La section **Circulaire et promotions / Les spéciaux de la semaine** apparaît immédiatement sous la navigation, avant le bandeau du marché, comme point d'entrée prioritaire. La capture Metro fournie sert de référence de hiérarchie seulement; aucune image de produit ou promotion Metro n'est publiée. Les cartes de rayons reprennent des photos déjà utilisées sur le site : saucisses maison de la page officielle de boucherie, légumes recadrés de la circulaire, puis fromages, beignes, bouchées traiteur et gâteau des pages de services. Les badges numérotés des images des cartes ont été retirés.

Le bandeau de spéciaux présente quatre offres transcrites de la circulaire officielle du **22 au 28 octobre 2026**, vérifiée le 25 octobre sur la [page officielle des spéciaux](https://marchelaflamme.com/speciaux-hebdomadaires/) : poitrine de poulet désossée (5,99 $/lb), trio de poivrons (2,99 $ chacun), céleri (2 pour 3 $) et pommes Royal Gala ou Granny Smith (1,49 $/lb). Les photos sont illustratives; le lien du bandeau ouvre la page officielle pour consulter l'ensemble des offres, formats et conditions.

**Pas de synchronisation hebdomadaire automatique.** Les dates, prix, offres et URL du visuel sont saisis manuellement et peuvent changer chaque semaine. Avant de publier une nouvelle édition, vérifiez la circulaire officielle et mettez à jour dans `index.html` les dates, offres et lien du visuel ainsi que les recadrages dans `styles.css`. Ne présentez pas une ancienne édition comme une nouvelle promotion; les prix et offres du bandeau sont limités aux dates indiquées. `assets/circulaire-a-venir.svg` reste disponible comme illustration d'attente, mais n'est plus affichée.

Le logo fourni (`marché laflamme logo.png`) est optimisé en `assets/marche-laflamme-logo.webp` et remplace les anciens emblèmes dessinés dans l'en-tête, le bandeau et la carte du formulaire. Ses proportions sont conservées. La photo de l'équipe dans le bandeau d'accueil est recadrée depuis la capture fournie et enregistrée dans `assets/marche-laflamme-equipe.jpg`. Le bandeau est moins haut sur ordinateur et mobile; la photo conserve une présentation distincte sur mobile. Son cadrage est aligné en haut à toutes les tailles pour conserver les visages entiers sans augmenter la hauteur du bandeau.

La carte Boulangerie de l’accueil et la page `boulangerie.html` utilisent la même photo de pains que le bandeau de la [boulangerie officielle](https://marchelaflamme.com/boulangerie/) (`Marche-Laflamme-Boulangerie-Aylmer.jpg`), optimisée localement en `assets/bakery-bread.webp`. Le cadrage est aligné à droite pour garder les pains visibles. La carte Déjeuners du traiteur utilise le plateau de viennoiseries et raisins fourni, optimisé en `assets/catering-breakfast-pastries.webp`, à la place des beignes. Les six cartes de catégories traiteur ne portent plus de numéros.

La fonction **coller sa liste** est conservée dans « Autres articles » de Tally, avec un guide sur le site (une ligne par article, quantité, format, exemples et regroupement manuel par rayon). Les produits courants restent un raccourci complémentaire. Il n'y a ni classement automatique par rayon ni rapprochement avec un inventaire; la préparation reste à confirmer par le personnel.

## Pages de démonstration — traiteur et gâteaux

`service-traiteur.html` est une page autonome en français et en anglais. Le contenu des gâteaux et cupcakes se trouve dans `boulangerie.html#gateaux`, avec les options, tarifs, formulaire de demande et informations pratiques regroupés dans cette page. La navigation, les cartes de l’accueil et les liens de services pointent vers ces destinations; l’ancien `service-gateaux.html` redirige vers la section Boulangerie pour conserver les liens enregistrés. La page Boucherie présente les saucisses maison, la viande hachée et les boulettes préparées en magasin, les coupes personnalisées (à commander un jour d’avance) et les produits prêts à cuire. Elle réutilise une photo de saucisses de la page officielle de boucherie. La page Traiteur garde des catégories de plateaux concises à la place des longs carrousels; les cartes Déjeuners, Tapas, Sandwichs, Salades, Fromages et Desserts utilisent les photos des produits de l’accordéon de la page officielle du traiteur. La carte Boucherie et la carte Traiteur de l’accueil mènent à leurs pages respectives.

Les pages conduisent à `demande-services.html`, un prototype à parcours conditionnel unique : gâteau, cupcakes, traiteur ou les deux. Le choix « les deux » affiche les sections gâteau et traiteur; une liste libre permet d’ajouter d’autres précisions. Le parcours cupcakes permet de préciser la saveur (vanille, chocolat ou red velvet) et la quantité, avec les prix publiés indiqués. La date, l’heure et les coordonnées sont communes. Les paramètres `?service=gateau`, `cupcakes`, `traiteur` et `both` présélectionnent le parcours. Le bouton Laflamme Express mène à la section de commande de `livraison.html`. `services.js` ne transmet ni n’enregistre aucune donnée; le bouton de simulation affiche uniquement un message de démonstration. Ne pas saisir de vrais renseignements. Le formulaire n’est pas connecté aux deux formulaires WordPress officiels ni à la démo Tally; un lien depuis l’accueil permet de choisir cette maquette bilingue à la place de Tally.

La séparation de deux pages de contenu tout en centralisant la demande garde des pages faciles à trouver et une seule expérience de formulaire. Avant tout lancement réel, le marché doit valider les options, prix, délais, allergies, modalités de cueillette et champs requis, puis choisir une boîte professionnelle ou un compte de formulaire géré par l’entreprise comme destination. La maquette n’implique aucune intégration au WordPress du marché.

La page Boucherie comprend aussi les 13 variétés de saucisses maison et les quatre produits prêts à cuire (boulettes de bœuf, souvlaki, brochettes, produits marinés) des captures officielles fournies. Les listes sont bilingues et compactes, avec disponibilité à confirmer; les mentions de viande hachée en magasin, de boulettes préparées quotidiennement et de coupes à commander une journée à l’avance sont conservées.

La page Charcuterie & fromages détaille le comptoir de 24 pieds, les plus de 50 variétés de viandes froides et la coupe sur demande, avec toutes les familles de viandes citées dans les captures et le rôti de porc à l’ail maison. Elle présente aussi le bar à salades (plus de dix variétés, quantités sur demande, exemples macaroni et coquilles aux tomates séchées et bacon), les fromages québécois, importés et traditionnels et les arrivages St-Albert et La Trappe à Fromage trois jours par semaine. Ces détails sont disponibles dans les deux langues.

La page Fruits & légumes reprend les 14 articles du menu officiel : six plateaux/desserts de fruits et huit plateaux de légumes/salades. Les noms, ingrédients, prix (dont la salade de fruits à 15,99 $/kg), portions publiées et délai de 48 h sont disponibles dans les deux langues. Prix vérifiés le 25 octobre 2026, sans synchronisation automatique; aucune portion n’est inventée pour les salades. Les photos officielles sont optimisées en fichiers locaux `assets/produce-*.webp` et chargées paresseusement sous le bandeau. Les images réutilisées pour plusieurs plats correspondent aux associations du site officiel. Le rayon et le plateau de crudités illustrent les arrivages et inspections quotidiens ainsi que les commandes pour fêtes et rencontres.

## Couverture du site officiel

Inventaire vérifié le **25 octobre 2026** via le [plan de site officiel](https://marchelaflamme.com/page-sitemap1.xml) et les pages publiques. Les 12 pages de contenu originales ont un équivalent bilingue; les noms existants des pages de services sont conservés pour ne pas casser les liens.

| Page officielle | Page locale | Contenu principal |
| --- | --- | --- |
| `/` | `index.html` | Accueil, aperçu des spéciaux, rayons, contact et démos |
| `/boucherie/` | `service-boucherie.html` | Saucisses, viande hachée, coupes et demande spéciale |
| `/charcuterie-fromage/` | `charcuterie-fromage.html` | Viandes froides, fromages, salades et traiteur |
| `/fruits-legumes/` | `fruits-legumes.html` | Arrivages quotidiens, plateaux, portions et délai de 48 h |
| `/boulangerie/` | `boulangerie.html` | Pains et desserts |
| `/service-de-gateau/` | `boulangerie.html#gateaux` | Personnalisation, formats, prix des gâteaux et cupcakes |
| `/service-de-traiteur/` | `service-traiteur.html` | Catégories de plateaux et demande combinée |
| `/pret-a-manger/` | `pret-a-manger.html` | Plats cuisinés, portions individuelles et familiales |
| `/speciaux-hebdomadaires/` | `speciaux-hebdomadaires.html` | Circulaire complète datée et lien vers l’édition officielle |
| `/livraison-a-domicile/` | `livraison.html` | Rayon, modes de commande, livraison et cueillette |
| `/a-propos/` | `a-propos.html` | Histoire familiale et chronologie |
| `/nous-joindre/` | `contact.html` | Téléphone, courriel, adresse, carte et réseaux sociaux |

`app.js` centralise les liens de navigation, le répertoire des pages et le bloc de coordonnées compact partagé dans le pied de page de toutes les pages du site. Trois boutons dans l’espace de l’en-tête donnent accès à la circulaire hebdomadaire, à la page Livraison et cueillette et au formulaire Laflamme Express; les boutons Facebook et Instagram sont adjacents au sélecteur de langue. La barre bordeaux regroupe Produits frais, Nos services, À propos et Nous joindre. Produits frais regroupe les cinq rayons; Nos services donne accès aux pages distinctes Traiteur et Gâteaux, à la livraison et à Laflamme Express. Tous les liens mènent aux pages locales. Le pied de page reste dans le flux normal et se place au bas des pages courtes; il n’est pas fixé à l’écran. Les deux menus natifs sont accessibles au clavier, avec fermeture par Échap et fermeture de l’autre menu à l’ouverture; le menu mobile reste défilable. Le sélecteur FR / EN est conservé près du logo. Toutes les pages sont du HTML statique avec la feuille CSS existante : pas de migration Tailwind, de dépendance ni de compilation. Les descriptions sont résumées plutôt que reproduites intégralement; le menu traiteur détaillé reste consultable via le site officiel.

La page À propos regroupe l’introduction et la photo à gauche, avec la chronologie à droite sur ordinateur, pour voir les deux parties sans parcourir deux grandes sections. Sous 760 px, les colonnes s’empilent pour garder une lecture confortable.

### Données vérifiées et limites

- L’histoire officielle commence en **1959**, et non 1942. Les textes du site et leurs traductions ont été corrigés.
- Le courriel affiché sur le site est **info@marchelaflamme.com**, selon la demande du propriétaire.
- Les tarifs des gâteaux et cupcakes sont regroupés dans un seul tableau de référence sur la page Gâteaux : 11,99 $, 17,99 $, 19,99 $, 29,99 $ et 59,99 $ selon le format; image comestible +10 $; cupcakes 0,99 $ (1–99), 0,89 $ (100+). La colonne avec image inclut déjà le supplément. Aucun calcul de commande ni régime de taxes n’est inventé.
- Les portions annoncées pour le petit rond et les deux slabs diffèrent entre la page Boulangerie et le formulaire officiel. Le tableau suit Boulangerie et signale l’écart; le formulaire conserve ses choix d’origine. Faire valider ces chiffres avant lancement.
- Livraison dans un **rayon de 5 km**, pas dans tout Gatineau : livraison gratuite après achats en magasin de plus de 50 $; commande préparée et livrée à 6 $ au-dessus de 50 $, 8 $ en dessous. Préparation gratuite des cueillettes de plus de 50 $. Le cas exactement 50 $, les frais des petites cueillettes et les créneaux ne sont pas précisés : confirmation téléphonique.
- Les heures affichées sur la page Nous joindre sont de 8 h à 22 h tous les jours; les heures des jours fériés peuvent varier. Aucun faux témoignage n’est ajouté. Un lien vers les avis Google est proposé sur l’accueil.
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

## Courriel professionnel — configuration à confirmer

Le site affiche `info@marchelaflamme.com`, selon la demande du propriétaire. La réception des messages et la configuration de la boîte doivent être confirmées avant le lancement.

Pour un futur lancement, le propriétaire de `marchelaflamme.com` peut choisir :

- Une redirection de `info@marchelaflamme.com` vers une boîte existante : réception au même endroit, mais une réponse depuis cette boîte n'utilise pas automatiquement l'adresse professionnelle.
- Une véritable boîte chez un fournisseur de courriel professionnel : réception et envoi sous l'adresse du domaine, dans Outlook, webmail ou une application mobile. Un abonnement est généralement nécessaire.

Vérifiez le domaine (le nom existant contient bien `marche`, avec un `e`), les accès DNS et les enregistrements de messagerie actuels avant toute modification MX/SPF/DKIM/DMARC. Le sous-domaine de démonstration `marchelaflamme.jopism.com` ne donne aucun contrôle sur le domaine du marché. Aucun paramètre de messagerie n'a été modifié.

## Fichiers

- `index.html` — contenu et structure de la page.
- `styles.css` — mise en page responsive et styles de marque.
- `app.js` — navigation mobile et année du pied de page; aucune collecte de commandes.
- `service-traiteur.html`, `boulangerie.html#gateaux`, `demande-services.html`, `services.js` — pages de démonstration des services et formulaire conditionnel sans envoi.
- `fiche-preparation.html`, `fiche-preparation.css`, `fiche-preparation.js` — saisie manuelle et impression d'une fiche de démonstration, sans backend.
- `tally-picking-slip.formula.txt` — copie de récupération de la formule native de la fiche Google Sheets connectée; aucune réponse client.
- `assets/marche-laflamme-logo.webp`, `assets/marche-laflamme-equipe.jpg` — logo fourni et photo recadrée de l'équipe dans le bandeau d'accueil. `assets/marche-laflamme-banner.webp` est conservée, mais n'est plus utilisée.
- `assets/circulaire-a-venir.svg` — ancienne illustration d'attente, conservée mais non affichée; la circulaire datée est chargée depuis le site officiel.
- `assets/storefront.webp` — ancienne image de façade, conservée mais non utilisée sur la page.
