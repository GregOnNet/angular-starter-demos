angular
 .module('app', [])
 .config(configureLocation)
 .provider('location', locationProvider)
 .controller('locationController', LocationController);

function configureLocation(locationProvider) {
  locationProvider.setLocation('Leipzig');
}

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

function LocationController($scope, location) {

  $scope.position = location.position;

  location.printPosition();

}
