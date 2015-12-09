//url variables
var memberurl = 'https://shoptracker-api.azurewebsites.net/members/';
var chDurl = 'https://shoptracker-api.azurewebsites.net/checkin-devices/';
var supgroupurl = 'https://shoptracker-api.azurewebsites.net/subgroups/';

//module declarations
angular.module('shopTracker', [])

//Device Controllers
.controller('chDeviceControl', function($scope, $http){
  $http({
    method : 'GET',
    url : chDurl
  })
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
    url : chDurl,
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
    url : chDurl + $scope.device.id,
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
  $http({
    method : 'DELETE',
    url : memberurl + $scope.device.id
  })
  .then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
})

//Subgroup controllers
.controller('SubgroupControl', function($scope, $http){
  //$scope.GetSupgroups = function(){
  $http({
    method: 'GET',
    url : supgroupurl
  })
  .then(function(resp){
    $scope.subgroups=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
 // }
})
.controller('SubgroupPostControl', function($scope, $http){
  $scope.subgroup = {};
  $scope.SendSubgroupPost= function() {
  $http({
    method : 'POST',
    url : subgroupurl,
    data : $scope.subgroup
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('SubgroupUpdateControl', function($scope, $http){
  $scope.subgroup = {};
  $scope.UpdateSubgroup= function() {
  $http({
    method : 'PUT',
    url : subgroupurl + $scope.subgroup.id,
    data : $scope.subgroup.name
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('SubgroupDeleteControl', function($scope, $http){
  $scope.subgroup={};
  $scope.SendSubgroupDel=function(){
  $http({
    method : 'DELETE',
    url : subgroupurl + $scope.subgroup.id
  })
  .then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
})

//Member subgroup Utilities
.controller('MemberSubgroupControl', function($scope, $http){
  $scope.user = {};
  $http({
    method : 'GET',
    url : memberurl + $scope.user.id + '/subgroups'
  })
  .then(function(resp){
    $scope.memberSubgroups=resp.data;
  }, function(err){
    console.log('ERR', err);
  })
})
.controller('MemberSubgroupPost', function($scope, $http){
  $scope.user = {};
  $scope.subgroup = {};
  $scope.SendMSubgroupPost= function() {
  $http({
    method : 'POST',
    url : memberurl + $scope.user.id +'/subgroups',
    data : $scope.subgroup
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('MemberSubgroupUpdateControl', function($scope, $http){
  $scope.user = {};
  $scope.subgroup = {};
  $scope.UpdateMSubgroup= function() {
  $http({
    method : 'PUT',
    url : memberurl + $scope.user.id + '/subgroups/' + $scope.subgroup.id,
    data : $scope.subgroup
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('MSubgroupDeleteControl', function($scope, $http){
  $scope.user = {};
  $scope.subgroup = {};
  $scope.SendMSubgroupDel=function(){
  $http({
    method : 'DELETE',
    url : memberurl + $scope.user.id + '/subgroups/' + $scope.subgroup.id
  })
  .then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
})

//Member Controllers
.controller('MemberControl', function($scope, $http){
	$http({
    method : 'GET',
    url : memberurl
  })
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
    url : memberurl,
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
  $scope.UpdateMember= function() {
  $http({
    method : 'PUT',
    url : memberurl + $scope.user.id,
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
  $scope.SendMemberDel=function(){
  $http({
    method : 'DELETE',
    url : memberurl + $scope.user.id
  })
  .then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
})

//Member Device Controllers
.controller('MDeviceControl', function($scope, $http){
	$scope.user ={};
  $scope.ReqMemberDevices = function(){
  $http({
    method : 'GET',
    url : memberurl + $scope.user.id + '/devices'
  })
  .then(function(resp){
		$scope.members=resp.data;
	}, function(err){
		console.log('ERR', err);
	})
  }
})
.controller('MDevicePostControl', function($scope, $http){
  $scope.user = {};
  $scope.device = {};
  $scope.SendMDevicePost= function() {
  $http({
    method : 'POST',
    url : memberurl + $scope.user.id + '/devices',
    data : $scope.device
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('MDeviceUpdateControl', function($scope, $http){
  $scope.user = {};
  $scope.device = {};
  $scope.UpdateMDevice= function() {
  $http({
    method : 'PUT',
    url : memberurl + $scope.user.id + '/devices/' + $scope.device.id,
    data : $scope.device
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})
.controller('MDeviceDeleteControl', function($scope, $http){
  $scope.user = {};
  $scope.device = {};
  $scope.SendMDeviceDel=function(){
  $http({
    method : 'DELETE',
    url : memberurl + $scope.user.id + '/devices/' + $scope.device.id
  })
  .then(function(resp){
    $scope.delResponse=resp.data;
  }, function(err){
    console.log(err);
  })
  }
})

//Member Visits

//Checkin Controller, updates the checkin device array with the member 
//and time of checkin 
.controller('MemberCheckinControl', function($scope, $http){
  $scope.user = {};
  $scope.device ={};
  $scope.SendCheckin= function() {
  $http({
    method : 'POST',
    url : chDurl + $scope.device.id + '/checkin/' + $scope.user.id,
    data : $scope.user
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})

//Checkout Controller, updates the checkin device array with the member and
//time of checkout, require both user and device to be set before execution
.controller('MemberCheckoutControl', function($scope, $http){
  $scope.user = {};
  $scope.device ={};
  $scope.SendCheckout= function() {
  $http({
    method : 'POST',
    url : chDurl + $scope.device.id + '/checkout/' + $scope.user.id,
    data : $scope.user
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})

//Utility Functions

//returns whether or not the shop is open based on whether a member whose
//hasKeys property is true is checked in at the specified device
//Depreciated use API function
.controller('ShopStatusControl', function($scope, $http){
  $scope.device ={};
  //$scope.IsShopOpen= function() {
  $http({
    method : 'GET',
    url : cdDurl + $scope.device.id + '/isopen'
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
 // }
})

//returns a list of all members that are checked in at the specified checkin device
.controller('AttendanceControl', function($scope, $http){
  $scope.device ={};
  $scope.getAttendance = function(){
  $http({
    method : 'GET',
    url : chDurl + $scope.device.id + '/whoisthere'
  })
  .then(function(resp){
		$scope.postResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})

.controller('TimecardControl', function($scope, $http){
  $scope.user ={};
  $scope.getTimecard = function(){
  $http({
    method : 'GET',
    url : memberurl + $scope.user.id + '/timecard'
  })
  .then(function(resp){
		$scope.TimecardResponse=resp.data;
	}, function(resp){
		console.log(resp);
	})
  }
})