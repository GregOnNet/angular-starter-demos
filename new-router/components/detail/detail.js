(function() {
  'use strict';

  angular
    .module('app.detail', ['ngNewRouter'])
    .controller('DetailController', DetailController);

  DetailController.$inject = ['$routeParams'];

  function DetailController ($routeParams) {
    this.id = $routeParams.id;
  }
}());
