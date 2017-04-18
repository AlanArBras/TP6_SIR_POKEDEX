/* jshint
laxcomma:true
, laxbreak:true
, unused : false
*/

'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.PokeDataService
 * @description
 * # PokeDataService
 * Service in the pokedexApp.
 */
angular.module('pokedexApp')
  .service('PokeDataService', function () {
    return {
        pokemonList : null
        , pokemon : {}
        , pokeInfo : {}
    };
  });
