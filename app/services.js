angular.module('shopTracker')
  .service('shopService', ['$http', function ($http) {
    var url = 'shoptracker-api.azurewebsites.net';
    
    this.getMembers = function () {
      return $http.get(url + '/members');
    };
    
    this.getMember = function(id) {
      return $http.get(url + '/members' + id);
    };
    
    this.insertMember = function(member) {
      return $http.post(url + '/members', member);
    };
    
    this.updateMember = function(member) {
      return $http.put(url + '/members' + member.id, member);
    };
    
    this.deleteMember = function(id) {
      return $http.delete(url + '/members' + id);
    };
    
  }]);