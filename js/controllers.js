	'use strict';

/* Controllers */

var app = angular.module('godster.controllers', []);


app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('HomeCtrl', ['$scope', 'HomeFactory', function ($scope, HomeFactory) {
    $scope.bla = 'bla from controller';
    HomeFactory.get({}, function (HomeFactory) {
        $scope.firstname = HomeFactory.firstName;
    })
}]);

app.controller('ArtistListCtrl', ['$scope', 'ArtistsFactory', 'ArtistFactory', '$location',
    function ($scope, ArtistsFactory, ArtistFactory, $location) {

        // callback for ng-click 'editArtist':
        $scope.editArtist = function (artistId) {
            $location.path('/artist-detail/' + artistId);
        };

        // callback for ng-click 'deleteArtist':
        $scope.deleteArtist = function (artistId) {
            ArtistFactory.delete({ id: artistId });
            $scope.artists = ArtistsFactory.query();
        };

        // callback for ng-click 'createArtist':
        $scope.createNewArtist = function () {
            $location.path('/artist-creation');
        };

        $scope.artists = ArtistsFactory.query();
    }]);

app.controller('ArtistDetailCtrl', ['$scope', '$routeParams', 'ArtistFactory', '$location',
    function ($scope, $routeParams, ArtistFactory, $location) {

        // callback for ng-click 'updateArtist':
        $scope.updateArtist = function () {
            ArtistFactory.update($scope.artist);
            $location.path('/artist-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/artist-list');
        };

        $scope.artist = ArtistFactory.show({id: $routeParams.id});
    }]);

app.controller('ArtistCreationCtrl', ['$scope', 'ArtistsFactory', '$location',
    function ($scope, ArtistsFactory, $location) {

        // callback for ng-click 'createNewArtist':
        $scope.createNewArtist = function () {
            ArtistsFactory.create($scope.artist);
            $location.path('/artist-list');
        }
    }]);
