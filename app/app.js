
angular.module('shopTracker', [])
//Device Controllers
.controller('chDeviceControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/checkin-devices')
  .then(function(resp){
    $scope.chdevice=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
})
.controller('chDevicePostControl', function($scope, $http){
  $scope.device = {}; //name, description and location
  $scope.SendChDevicePost = function() {
  $http.post({
    method : 'POST',
    url : 'https://shoptracker-api.azurewebsites.net/checkin-devices',
    data : $scope.device
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('chDeviceUpdateControl', function($scope, $http){
  $scope.device = {};//name, description or location
  $scope.SendChDevicePut= function() {
  $http({
    method : 'PUT',
    url : 'https://shoptracker-api.azurewebsites.net/checkin-devices' + $scope.device.id,
    data : $scope.device
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('chDeviceDeleteControl', function($scope, $http){
  $scope.device ={};
  $scope.SendChDeviceDel=function(){
  $http.delete('https://shoptracker-api.azurewebsites.net/members/' + $scope.device.id)
  .then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
})
//Subgroup controllers
.controller('SubgroupControl', function($scope, $http){
  $http.get('https://shoptracker-api.azurewebsites.net/subgroups')
  .then(function(resp){
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
.controller('MemberSubgroupPost', function($scope, $http){
  $scope.user = {};
  $scope.SendSubgroupPost= function() {
  $http({
    method : 'POST',
    url : 'https://shoptracker-api.azurewebsites.net/members/'+ $scope.user.id +'/subgroups',
    data : $scope.user
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})

//Member Controllers
.controller('MemberControl', function($scope, $http){
	$http.get('https://shoptracker-api.azurewebsites.net/members')
  .then(function(resp){
		$scope.members=resp.data;
	}, function(err){
		console.log('ERR', err);
	})
})
.controller('MemberPostControl', function($scope, $http){
  $scope.user = {};
  $scope.SendMemberPost= function() {
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
  $scope.SendMemberPut= function() {
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
  $scope.user={};
  $scope.SendDel=function(){
  $http.delete('https://shoptracker-api.azurewebsites.net/members/' + $scope.user.id)
  .then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
})
//Member Visits
//Checkin Controller
.controller('MemberCheckinControl', function($scope, $http){
  $scope.user = {};
  $scope.device ={};
  $scope.SendCheckin= function() {
  $http({
    method : 'POST',
    url : 'https://shoptracker-api.azurewebsites.net/checkin-devices/' +$scope.device.id + '/checkin/' + $scope.user.id,
    data : $scope.user
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
//Checkout Controller
.controller('MemberCheckoutControl', function($scope, $http){
  $scope.user = {};
  $scope.device ={};
  $scope.SendCheckout= function() {
  $http({
    method : 'POST',
    url : 'https://shoptracker-api.azurewebsites.net/checkin-devices/' +$scope.device.id + '/checkout/' + $scope.user.id,
    data : $scope.user
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})