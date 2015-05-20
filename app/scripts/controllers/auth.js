/**
 * Created by nathanielz on 5/18/2015.
 */
'use strict';
angular.module('firebaseApp')
  .controller('AuthController',['$scope', '$location','firebase', 'Auth', function($scope, $location, Auth,firebase) {


      if(Auth.signedIn()) {
        $location.path('/');
      }

      $scope.register = function(user) {
        Auth.register(user)
          .then(function() {
            console.log("Register Succefully");
            $location.path('/');
          }, function(err) {
            errMessage(err);
          });
      };

      $scope.login = function(user) {
        Auth.login(user)
          .then(function() {
       consoel.log( "Logged in successfully");
            $location.path('/');
          }, function(err) {
            errMessage(err);
          });
      };

      $scope.changePassword = function(user) {
        Auth.changePassword(user)
          .then(function() {

            // Reset form
            $scope.email = '';
            $scope.oldPass = '';
            $scope.newPass = '';

            toaster.pop('success', "Password changed successfully");
          }, function(err) {
            errMessage(err);
          });
      };

    /*  function errMessage(err) {

        var msg = "Unknown Error...";

        if(err && err.code) {
          switch (err.code) {
            case "EMAIL_TAKEN":
              msg = "This email has been taken"; break;
            case "INVALID_EMAIL":
              msg = "Invalid email"; break;
            case "NETWORK_ERROR":
              msg = "Network error"; break;
            case "INVALID_PASSWORD":
              msg = "Invalid password"; break;
            case "INVALID_USER":
              msg = "Invalid user"; break;
          }
        }

        toaster.pop('error', msg);
      };*/



}]);
