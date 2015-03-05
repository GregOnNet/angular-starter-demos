(function() {
  'use strict';

  angular
    .module('app')
    .controller('customer', customer);

  customer.$inject = [];

  function customer() {
    var vm = this;

    vm.name = '';
  }
})();
