// Declare app level module which depends on views, and components
angular.module('shopTracker', [])
.controller('MemberControl', function($scope, $http){
	$http.get('https://shoptracker-api.azurewebsites.net/members').then(function(resp){
		$scope.members=resp.data;
	}, function(err){
		console.error('ERR', err);
	})
})
.controller('chDeviceControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/checkin-devices').then(function(resp){
    $scope.chdevice=resp.data;
  }, function(err){
    console.err('ERR', err);
  })
})

.controller('SubgroupControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/subgroups').then(function(resp){
    $scope.subgroups=resp.data;
  }, function(err){
    console.err('ERR', err);
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