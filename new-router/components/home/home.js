(function() {
  'use strict';

  angular
    .module('app.home', [])
    .controller('HomeController', HomeController);

  function HomeController () {
    this.name = 'Friend';
  }
}());
