(function() {
  'use strict';

  angular
    .module('cups.api')
    .factory('cupsApi', cupsApi);

  function cupsApi() {

    return {
      getCups : getCups
    };

    function getCups() {
      return [{
        drunken : new Date(),
        rating  : 3,
        mods    : ['milk', 'sugar']
      }, {
        drunken : new Date(),
        rating  : 3,
        mods    : ['milk']
      }];
    }
  }
}());
