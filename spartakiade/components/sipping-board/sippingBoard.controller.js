(function() {
  'use strict';

  angular
    .module('cups')
    .controller('UserController', UserController);

  UserController.$inject = ['$scope', 'cupsApi'];
  function UserController($scope, cupsApi) {
    var vm = this;

    vm.newCup = {};
    vm.cups = [];

    vm.allMods = [];
    vm.selectedMods = [];

    vm.add = add;

    $scope.$watchCollection(
      function() { return vm.cups; },
      readMods);

    getCups();

    function getCups(){
      vm.cups = cupsApi.getCups();
    }

    function add(cup) {
      cup.drunken = new Date();
      cup.mods = cup.mods || ['no mods'];

      vm.cups.unshift(cup);
      vm.newCup = {};
    };

    vm.me = {
      name: 'Gregor',
      surname: 'Woiwode'
    };

    function readMods(oldCups, newCups) {
      var cups = newCups || oldCups;

      var mods = [];
      cups.forEach(function(cup) {
        if (cup.mods)
          mods = mods.concat(cup.mods);
      });

      mods.forEach(function(mod) {
        if (vm.allMods.indexOf(mod) === -1)
          vm.allMods.push(mod);
      });

      angular.copy(vm.allMods, vm.selectedMods);
    }
  }
}());
