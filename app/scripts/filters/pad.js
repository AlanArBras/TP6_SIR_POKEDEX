'use strict';

/**
* @ngdoc filter
* @name pokedexApp.filter:pad
* @function
* @description
* # pad
* Filter in the pokedexApp.
*/
angular.module('pokedexApp')
.filter('pad', function () {
    return function pad(str, max) {
        if (str === undefined){
            return null;
        }
        else {
            max = (max === undefined) ? 3 : max;
            str = str.toString();
            return str.length < max ? pad("0" + str, max) : str;
            }
    };
});
