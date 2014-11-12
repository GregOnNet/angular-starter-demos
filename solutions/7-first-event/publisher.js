(function() {
  "use strict";

  angular
    .module('app')
    .controller('publisher', publisher);

  publisher.$inject = ['$rootScope']

  function publisher($rootScope) {
    this.raiseEvent = raiseEvent;

    function raiseEvent(){
      $rootScope.$emit('raisedEvent');
    }
  }
}());
