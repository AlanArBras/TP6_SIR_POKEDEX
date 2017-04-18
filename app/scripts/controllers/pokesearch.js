/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc : true
*/

'use strict';

/**
* @ngdoc function
* @name pokedexApp.controller:PokeSearchCtrl
* @description
* # PokeSearchCtrl
* Controller of the pokedexApp
*/
angular.module('pokedexApp')
.controller('PokeSearchCtrl',function($scope, $log, $location, PokeFactory, PokeDataService) {
    $scope.pokemon = PokeDataService.pokemon;
    $scope.pokemonList = PokeDataService.pokemonList;
    $scope.loading = true;
    var next = true;
    PokeFactory.pokemons.get().$promise
    .then(function(elem) {
        $scope.loading = false;
        $scope.pokemonList = elem.results;
    })
    .catch(function(error){
        $scope.loading = false;
        $log.warn(error);
    })
    ;
    $scope.changePlaceholder = function(){
        $('.ui-select-search').attr('placeholder', 'Filter by name');
    };

    $scope.redirect = function(el){
        var id = el.url.split('/');
        $location.path("/pokemon/" + id[id.length - 2]);
    };
});
