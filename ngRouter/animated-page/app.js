(function() {
  'use strict';

  angular
    .module('scrollapp', [
      'ngRoute',
      'ngAnimate'
    ])
    .config(routes);

    routes.$inject = ['$routeProvider'];

    function routes($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'start.html'
        })
        .when('/about', {
          templateUrl: 'about.html'
        })
        .when('/contact', {
          templateUrl: 'contact.html'
        });
    }
}());
