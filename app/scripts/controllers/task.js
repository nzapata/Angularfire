/**
 * Created by nathanielz on 5/14/2015.
 */
'use strict';
angular.module('firebaseApp')
  .controller('TaskController', ["$scope",    '$firebase',   'FURL','$location','$routeParams', function ($scope,$firebase, FURL,$location,$routeParams) {

//Conecting to Firebase: FURL Is the constant in the App Js with URL
// fbTask create a task and return an array

    var ref = new Firebase(FURL);
    var fbTasks = $firebase(ref.child('task')).$asArray();


    //To make a get to fire Base
    $scope.tasks = fbTasks;

 //Getting task Id from the rourter
    var taskId = $routeParams.taskId;


    if(taskId) {
      $scope.selectedTask = getTask(taskId);
    }

    function getTask(taskId) {
      return $firebase(ref.child('task').child(taskId)).$asObject();
    };

    //This is to post the task  Firebase
    $scope.postTask = function(task) {
      $scope.tasks.$add(task);
      $location.path('/browser');
    };

    //Update

    $scope.updateTask = function(task) {
      $scope.selectedTask.$save(task);
      $location.path('/browser');
    };


  }]);
