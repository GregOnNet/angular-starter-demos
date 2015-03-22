(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserController', Controller);

    function Controller () {
      this.me = {
        name:'Gregor',
        surname:'Woiwode' };

      this.cups = [{
        drunken : new Date(),
        rating  : 2,
        mods    : ['milk', 'sugar']
      },
      {
        drunken : new Date(),
        rating  : 4,
        mods    : ['milk']
      }];
    }
})();
