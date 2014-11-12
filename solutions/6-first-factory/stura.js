(function() {
  'use strict';

  angular
    .module('app')
    .controller('stura', stura);

  stura.$inject = ['sturaMembers'];

  function stura(sturaMembers) {

    this.members = sturaMembers.getAll();

  }

}());
