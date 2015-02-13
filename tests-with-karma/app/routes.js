(function() {
  "use strict";

  angular
    .module('myApp')
    .config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'home'})
      .when('/login', {
        templateUrl: 'security/login.html',
        controller: 'login'})
      .otherwise({ redirectTo: '/' });
  }
}());
