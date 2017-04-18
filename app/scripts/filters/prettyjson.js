'use strict';

/**
* @ngdoc filter
* @name pokedexApp.filter:prettyJSON
* @function
* @description
* # prettyJSON
* Filter in the pokedexApp.
*/
angular.module('pokedexApp')
.filter('prettyJSON', function () {
    return function(json) {
        return JSON ? JSON.stringify(json, null, 4) : 'your browser doesnt support JSON so cant pretty print';
    };
});
