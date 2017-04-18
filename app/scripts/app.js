'use strict';

/**
 * @ngdoc overview
 * @name pokedexApp
 * @description
 * # pokedexApp
 *
 * Main module of the application.
 */
angular
    .module('pokedexApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.select'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'PokeSearchCtrl',
                controllerAs: 'search'
            })
            .when('/pokemon/:id', {
                templateUrl: 'views/pokemon.html',
                controller: 'PokeInfosCtrl',
                controllerAs: 'pokemon'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
