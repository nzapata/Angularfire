/**
 * Created by nathanielz on 5/18/2015.
 */
'use strict';
angular.module('firebaseApp')
  .controller('NavController',['$scope', '$location', 'Auth','firebaseAuth' ,function($scope, $location, Auth) {

    $scope.currentUser = Auth.user;
    $scope.signedIn = Auth.signedIn;

    $scope.logout = function() {
      Auth.logout();
      toaster.pop('success', "Logged out successfully");
      $location.path("/");
    };

  }]);
