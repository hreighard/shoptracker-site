'use strict';

angular.module('shopTracker.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'shopLogController'
  });
}])

.controller('View1Ctrl', [function() {

}]);