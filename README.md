# pokedex
TP6 de SIR, portant sur les technologies suivantes: <br />
- Yeoman et son générateur de projet angularjs
- AngularJS
- Bower
- npm (NodeJS)

## Installation et lancement

1) Cloner le projet.
2) Importer les dépendences et construire le projet:  <br />
   > `` cd path-to-workspace/tpangular`` <br />
   > `` npm install `` <br />
   > `` bower install ``  <br />
3) Lancer le serveur web Grunt: <br />
   > `` grunt serve ``  <br />
   
#### Header

Le controller HeaderCtrl sert à suivre l'onglet courant dans la barre de navigation en se basant sur l'url courante. Dans le TP7, une autre version de ce suivi sera mise en oeuvre et prendra en compte le clic de l'utilisateur.

#### Recherche d'un pokémon

L'onglet Search redirige vers une page de recherche d'un pokémon parmi une liste filtrée par nom.

Utlisation de [angular-ui-selec](https://github.com/angular-ui/ui-select) pour intégrer le champ de filtre à la liste déroulante.
La liste de noms est récupérée via l'api de **pokeapi.co**.
Pour cela, on utilise un service, la factory PokeFactory.  
Elle donne un accès:
- A des informations de base de tous les pokémons ou d'un seul pokémon à partir de son id.
- A des informations plus précises sur un pokémon à partir de son id (nom dans plusieurs langues...).  

La réponse contient plus de 800 pokémons, un filtre permet alors de limiter le nombre de pokemons à afficher dans la liste déroulante, après avoir appliqué le filtre de recherche sur les valeurs des champs.

#### Sprites
Enfin une directive a été créée afin de charger différents sprites (images) de pokémon, car ils proviennent d'une api différente (img.pokemondb.net). Lorsque l'api ne propose pas de sprite animé pour un pokémon, la directive pokeimage permet de charger un sprite non animé.

#### Logo de chargement
Utilsation des balises `ng-show` `ng-hide` pour afficher un logo de chargement pendant la récupération des informations depuis l'api.
