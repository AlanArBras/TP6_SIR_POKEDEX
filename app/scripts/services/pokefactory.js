/* jshint
laxcomma:true
, laxbreak:true
*/

'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.PokeFactory
 * @description
 * # PokeFactory
 * Factory in the pokedexApp.
 */
angular.module('pokedexApp')
  .factory('PokeFactory', function($resource) {
      var baseurl = "http://pokeapi.co/";
      return {
          pokemons  : $resource(baseurl + 'api/v2/pokemon/?limit=2000')
          , pokemon  : $resource(baseurl + 'api/v2/pokemon/:id/')
          , pokemonsOther  : $resource(baseurl + 'api/v2/pokemon-species/:id/')
          , request : function(url){
              return $resource(url);
          }
      };
  });
