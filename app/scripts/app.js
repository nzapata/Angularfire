'use strict';

/**
 * @ngdoc overview
 * @name firebaseApp
 * @description
 * # firebaseApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',



  ])
  .constant('FURL', 'https://testing212.firebaseio.com/')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })


      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'TaskController'

      })

      .when('/browser', {
        templateUrl: 'views/browser.html',
        controller:'TaskController'

      })

      .when('/edit/:taskId', {
        templateUrl: 'views/edit.html',
        controller: 'TaskController'
      })


      .when('nav', {
        templateUrl: 'views/nav.html',
        controller:'NavController'

      })



      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      }
    )

  .when('/changepass', {
    templateUrl: 'views/changepass.html',

  })





  .otherwise({
        redirectTo: '/'
      });
  });
