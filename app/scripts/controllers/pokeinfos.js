/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

/**
* @ngdoc function
* @name pokedexApp.controller:PokeInfosCtrl
* @description
* # PokeInfosCtrl
* Controller of the pokedexApp
*/
angular.module('pokedexApp')
.controller('PokeInfosCtrl', function($scope, $log, $routeParams, PokeFactory, PokeEvol){
    $scope.loading = true;
    var id = $routeParams.id;
    $scope.src = function(name){
        return "http://img.pokemondb.net/sprites/black-white/anim/normal/" + name + ".gif";
    };
    PokeFactory.pokemon.get({id : id}).$promise
    .then(function(elem) {
        PokeFactory.pokemonsOther.get({id: id}).$promise
        .then(function(rest){
            if (rest.evolution_chain !== undefined){
                PokeFactory.request(rest.evolution_chain.url).get().$promise
                .then(function(evol){
                    $scope.loading = false;
                    var evolChain = [];
                    PokeEvol(evol.chain, evolChain);
                    $scope.pokeInfo = {
                        main :elem
                        , rest : rest
                        , evolChain : evolChain
                    };
                })
                .catch(function(error){
                    $scope.loading = false;
                    $log.warn(error);
                })
                ;
            }
            else {
                $scope.loading = false;
                $scope.pokeInfo = {
                    main :elem
                    , rest : rest
                };
            }
        })
        .catch(function(error){
            $scope.loading = false;
            $log.warn(error);
        })
        ;
    })
    .catch(function(error){
        $scope.loading = false;
        $log.warn(error);
    })
    ;
});
