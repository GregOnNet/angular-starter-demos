(function() {
  'use strict';

  angular
      .module('foo')
      .directive('fooDirective', fooDirective);

  function fooDirective() {
      var directive = {
          restrict: 'E',
          templateUrl: 'foo.html',
          controller: 'Controller',
          controllerAs: 'vm',
          bindToController: true
      };

      return directive;
  }

  Controller.$inject = [];

  function Controller() {
      var vm = this;
  }
})();
