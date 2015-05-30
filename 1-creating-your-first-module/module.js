angular
  .module('moduleA', [])
  .controller('firstController', FirstController);

function FirstController($scope, $interpolate) {

  $scope.name = 'Gregor';

}
