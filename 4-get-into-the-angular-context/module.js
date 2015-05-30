angular
  .module('contextDemo',[])
  .controller('contextController', ContextController);

function ContextController($scope) {

  $scope.countDown = 100;

  setInterval(function() {

    $scope.$apply(function() {
      $scope.countDown--;
    })
  }, 1000);

}
