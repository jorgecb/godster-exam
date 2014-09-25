'use strict';



var services = angular.module('godster.services', ['ngResource']);

services.factory('HomeFactory', function ($resource) {
    return $resource('/godster/web/Home', {}, {
        query: { method: 'GET', params: {}, isArray: false }
    })
});

services.factory('ArtistsFactory', function ($resource) {
    return $resource('http://54.200.77.121/artist', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('ArtistFactory', function ($resource) {
    return $resource('http://54.200.77.121/artist/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
