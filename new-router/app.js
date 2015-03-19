(function() {
  'use strict';

  angular
    .module('app', [
      'ngNewRouter',
      'app.home',
      'app.detail'])
    .controller('AppController', AppController);

  AppController.$inject = ['$router'];

  function AppController($router) {
    $router.config([
      { path: '/',           component: 'home' },
      { path: '/detail/:id', component: 'detail' }
    ]);
  }
}());
