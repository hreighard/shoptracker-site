
var shopControllers=angular.module('shopControllers', []);

shopTracker.controller('ShopLogController', ['$scope', 'Members',
  function($scope, Members) {
    $scope.members = Members.query();
  }]);
   /* 
    $scope.getMembers = function(){
      shopFactory.getMembers()()
        .success(function (members){
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
      shopFactory.updateMember(member).success(function () {
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
      shopFactory.insertMember(member)
        .success(function () {
          $scope.status='Inserted member';
          $scope.members.push(member);
        })
        .error(function (error){
          $scope.status ='Failed to insert member: ' + error.message;
        });
    };
    $scope.getMembers();*/
//}]);