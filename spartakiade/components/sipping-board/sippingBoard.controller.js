(function() {
  'use strict';

  angular
    .module('cups')
    .controller('UserController', UserController);

  function UserController() {
    this.newCup = {};

    this.add = function(cup) {
      cup.drunken = new Date();
      cup.mods = cup.mods || ['no mods'];

      this.cups.unshift(cup);
      this.newCup = {};
    };

    this.me = {
      name: 'Gregor',
      surname: 'Woiwode'
    };

    this.cups = [{
      drunken : new Date(),
      rating  : 3,
      mods    : ['milk', 'sugar']
    }, {
      drunken : new Date(),
      rating  : 3,
      mods    : ['milk']
    }];
  }
}());
