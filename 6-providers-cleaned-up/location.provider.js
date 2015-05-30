angular
 .module('app')
 .provider('location', locationProvider);
 
function locationProvider() {
  this.current = 'defaultPosition';

  this.setLocation = function(location) {
    this.current = location;
  };

  this.$get = ['$log', function($log) {
    return new LocationService($log, this.current);
  }];
}

function LocationService($log, position) {
  this.position = position;

  this.printPosition = function() {

      $log.info(position);
  };
}
