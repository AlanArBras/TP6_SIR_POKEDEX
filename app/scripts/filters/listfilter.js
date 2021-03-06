'use strict';

/**
* @ngdoc filter
* @name pokedexApp.filter:listFilter
* @function
* @description
* # listFilter
* Filter in the pokedexApp.
*/
angular.module('pokedexApp')
.filter('listFilter', function () {
    return function(array, expression){
        expression = (expression === undefined) ? "" : expression;
        return (array === undefined) ? null : _.filter(array, function(elem){
            return (elem.name.toLowerCase().indexOf(expression.toLowerCase()) === 0);
        });
    };
});
