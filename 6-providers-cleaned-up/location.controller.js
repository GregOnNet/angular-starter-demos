angular
  .module('app')
  .controller('locationController', LocationController)

function LocationController($scope, location) {

  $scope.position = location.position;

  location.printPosition();

}
