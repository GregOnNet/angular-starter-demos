(function() {
  'use strict';

  angular
   .module('foo')
   .controller('fooController', fooController);

  function fooController() {
    var vm = this;

    vm.name = 'Gregor der II.';
  }
}());
