/* jshint
laxcomma:true
, laxbreak:true
, node:true
*/

'use strict';

/**
* @ngdoc function
* @name pokedexApp.controller:HeaderCtrl
* @description
* # HeaderCtrl
* Controller of the pokedexApp
*/
angular.module('pokedexApp')
.controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
