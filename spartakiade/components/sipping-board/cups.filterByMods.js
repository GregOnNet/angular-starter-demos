(function() {
  'use strict';

  angular
    .module('cups')
    .filter('filterByMods', filterByMods);

  function filterByMods() {

    return function(cups, mods) {
      var out = [];

      angular.forEach(cups, function(cup) {
        if(cup && cup.mods && cup.mods.some(hasRequestedMods))
          out.push(cup);
      });

      return out;

      function hasRequestedMods(element, index, array) {
        return mods.indexOf(element) > -1;
      }
    };
  }
}());
