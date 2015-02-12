(function() {
  'use strict';

  angular
    .module('app')
    .controller('stura', stura);

  stura.$inject = ['$rootScope', 'sturaMembers'];

  function stura($rootScope, sturaMembers) {

    this.members = sturaMembers.getAll();

    $rootScope.$on('raisedEvent', logEvent);

    function logEvent(){
      console.log('%s:Event catched!!!', new Date());
    }
  }

}());
