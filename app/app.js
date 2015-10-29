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
.controller('MemberPostControl', function($scope, $http){
  var data = {
    name: =$scope.name,//$scope.name,
    hasKeys: $scope.keys,//$scope.keys,
    active: $scope.active //$scope.active,
  }
    
	$http.post('https://shoptracker-api.azurewebsites.net/members', data).then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		alert(resp);
	})
})
.controller('MemberDeleteControl', function($scope, $http){
  $scope.id;
  $http.delete('https://shoptracker-api.azurewebsites.net/members/' + $scope.id).then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    alert(err);
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