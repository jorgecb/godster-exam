'use strict';

// Declare app level module which depends on filters, and services
angular.module('godster', ['godster.filters', 'godster.services', 'godster.directives', 'godster.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {templateUrl: 'partials/Home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/artist-list', {templateUrl: 'partials/artist-list.html', controller: 'ArtistListCtrl'});
        $routeProvider.when('/artist-detail/:id', {templateUrl: 'partials/artist-detail.html', controller: 'ArtistDetailCtrl'});
        $routeProvider.when('/artist-creation', {templateUrl: 'partials/artist-creation.html', controller: 'ArtistCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/Home'});
    }]);
