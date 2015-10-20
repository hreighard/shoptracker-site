'use strict';

/* Services */

var shopServices = angular.module('shopServices', ['ngResource']);

shopServices.factory('Members', ['$resource',
  function($resource){
    return $resource('https://shoptracker-api.azurewebsites.net/members', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

/*angular.module('shopTracker')
  .factory('shopFactory', ['$http', function ($http) {
    var url = 'shoptracker-api.azurewebsites.net';
    
    shopFactory.getMembers = function () {
      return $http.get(url + '/members');
    };
    
    shopFactory.getMember = function(id) {
      return $http.get(url + '/members/' + id);
    };
    
    shopFactory.getMemberDevices = function(id) {
      return $http.get(url + '/members/' + id + '/devices');
    };
    
    shopFactory.getMemberTimecard = function(id) {
      return $http.get(url + '/members/' + id + '/timecard');
    };
    
    shopFactory.insertMember = function(member) {
      return $http.post(url + '/members', member);
    };
    
    shopFactory.updateMember = function(member) {
      return $http.put(url + '/members/' + member.id, member);
    };
    
    shopFactory.deleteMember = function(id) {
      return $http.delete(url + '/members/' + id);
    };
    
  }]);*/