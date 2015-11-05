
angular.module('shopTracker', [])
//Device Controllers
.controller('chDeviceControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/checkin-devices').then(function(resp){
    $scope.chdevice=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
})

//Subgroup controllers
.controller('SubgroupControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/subgroups').then(function(resp){
    $scope.subgroups=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
})
.controller('MemberSubgroupControl', function($scope, $http){
  $scope.user = {};
  $http.get('https://shoptracker-api.azurewebsites.net/members/'+ $scope.user.id + '/subgroups')
  .then(function(resp){
    $scope.memberSubgroups=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
})
//Member Controllers
.controller('MemberControl', function($scope, $http){
	$http.get('https://shoptracker-api.azurewebsites.net/members').then(function(resp){
		$scope.members=resp.data;
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
.controller('MemberUpdateControl', function($scope, $http){
  $scope.user = {};
  $scope.SendPut= function() {
  $http({
    method : 'PUT',
    url : 'https://shoptracker-api.azurewebsites.net/members/' + $scope.user.id,
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