// Declare app level module which depends on views, and components
angular.module('shopTracker', [])
.controller('MainControl', function($scope, $http){
	$http.get('https://shoptracker-api.azurewebsites.net/members').then(function(resp){
		$scope.members=resp.data;
	}, function(err){
		console.error('ERR', err);
	})
})
  /*'shopControllers', 
  'shopServices', 
  'ngRoute',
  'ngResource'*/

  /*
shopTracker.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'shopController',
    templateUrl: '/app/views/view1.html'
  })
  .otherwise({ redirectTo: '/'});
  
}]);

*/