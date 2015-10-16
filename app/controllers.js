
var shopControllers=angular.module('shopControllers', []);

shopTracker.controller('shopLog',function($scope, $http) {
    $scope.members;
    $scope.status;
    $http.get("http://shoptracker-api.azurewebsites.net")
    .success(function(response) {
      $scope.members = response; 
    });
    //getMembers();
    
    /*function getMembers(){
       shopService.getMembers().success(function (members){
         $scope.members=members;
       })
       .error(function (error) {
         $scope.status='Unable to load member data: ' + error.message;
       });
    }
    
    $scope.updateMember = function (id){
      var member;
      for (var i = 0; i<$scope.members.length; i++){
        var currMem = $scope.members[i];
        if (currMem.id == id) {
          member=currMem;
          break;
        }
      }
      shopService.updateMember(member).success(function () {
        $scope.status = 'Updated member.';
      })
      .error(function (error) {
        $scope.status='Unable to update member
       ' + error.message;
      });
    };
    
    $scope.insertMember =function (){
      var member = {
        id: 2,
        hasKeys: 0,
        name: 'Harrison Reighard'
        active: 0
      };
      shopService.insertMember(member)
        .success(function () {
          $scope.status='Inserted member';
          $scope.members.push(member);
        })
        .error(function (error){
          $scope.status ='Failed to insert member: ' + error.message;
        });
    };*/
}]);