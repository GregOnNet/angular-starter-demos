(function() {
  'use strict';

  angular
    .module('cups')
    .controller('UserController', UserController);
  
  UserController.$inject = ['cupsApi'];
  function UserController(cupsApi) {
    var vm = this;

    vm.newCup = {};
    vm.cups = [];

    vm.add = add;

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


  }
}());
