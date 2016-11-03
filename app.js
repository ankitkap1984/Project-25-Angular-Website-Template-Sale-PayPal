'use strict';

// Declare app level module which depends on views, and components
angular.module('webStore', [
  'ngRoute',
  'webStore.view1',
  'webStore.view2',
  'webStore.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
