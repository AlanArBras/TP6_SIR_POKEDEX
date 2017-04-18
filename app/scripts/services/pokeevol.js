/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

/**
* @ngdoc service
* @name pokedexApp.PokeEvol
* @description
* # PokeEvol
* Service in the pokedexApp.
*/
angular.module('pokedexApp')
.service('PokeEvol', function () {
    return function getChainEvol(listEvol, array){
        var id = listEvol.species.url.split("/");
        array.push({
            id : id[id.length - 2]
            , name : listEvol.species.name
            , level : (listEvol.evolution_details === null) ? null : listEvol.evolution_details.min_level
        });
        if (!_.isEmpty(listEvol.evolves_to)){
            _.forEach(listEvol.evolves_to, function(next){
                getChainEvol(next, array);
            });
        }
    };
});
