 (function() {
   'use strict';

   angular
     .module('interpolate', [])
     .controller('interpolationController', interpolationController);

   interpolationController.$inject = ['$log', '$interpolate'];

   function interpolationController($log, $interpolate) {

     var expression = $interpolate('Hello {{ name | uppercase }}!');
     var result     = expression({ name: 'Alexander' });

     $log.info(result);

   }
 }());
