(function() {
  'use strict';

  angular
    .module('app')
    .directive('sturaMember', sturaMember);

  function sturaMember() {
    return {
      restrict : 'E',
      template : '<p><strong>{{ member.name }} </strong><small>{{ member.role }}</small></p>'
    };
  }
}());
