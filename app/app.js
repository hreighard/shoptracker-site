// Declare app level module which depends on views, and components
angular.module('shopTracker', [])
.controller('MemberControl', function($scope, $http){
	$http.get('https://shoptracker-api.azurewebsites.net/members').then(function(resp){
		$scope.members=resp.data;
	}, function(err){
		console.log('ERR', err);
	})
})
.controller('chDeviceControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/checkin-devices').then(function(resp){
    $scope.chdevice=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
})

.controller('SubgroupControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/subgroups').then(function(resp){
    $scope.subgroups=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
})
.controller('MemberPostControl', function($scope, $http){
  $scope.user = {};
  $scope.SendPost= function() {
  $http({
    method : 'POST',
    url : 'https://shoptracker-api.azurewebsites.net/members',
    data : $scope.user
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('MemberDeleteControl', function($scope, $http){
  $scope.id;
  $scope.SendDel=function(){
  $http.delete('https://shoptracker-api.azurewebsites.net/members/' + $scope.id).then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
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