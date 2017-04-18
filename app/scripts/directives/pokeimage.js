'use strict';

/**
* @ngdoc directive
* @name pokesirApp.directive:PokeImage
* @description
* # PokeImage
*/
angular.module('pokesirApp')
.directive('pokeimage', function ($log) {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            element.bind('load', function() {
            });
            element.bind('error', function(){
                var url = "http://img.pokemondb.net/sprites/x-y/pixel/" + this.id + ".png";
                if (this.src !== url){
                    this.src = url;
                }
            });
        }
    };
});