'use strict';

// Declare app level module which depends on views, and components
var shopTracker = angular.module('shopTracker', [
  'shopControllers', 
  'shopServices', 
  'ngRoute',
  'ngResource'
]);
  /*
shopTracker.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'shopController',
    templateUrl: '/app/views/view1.html'
  })
  .otherwise({ redirectTo: '/'});
  
}]);

*/