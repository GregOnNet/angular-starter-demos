(function() {
  'use strict';

  angular
    .module('app')
    .filter('join', join);

  function join () {

    return function(array, separator) {
      if(!array)
        return '';

      return array.join(separator)
    }
  }
}());
