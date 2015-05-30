angular
  .module('contextDemo', [])
  .controller('contextController', ContextController);

function ContextController($scope, $interval) {

    $scope.countDown = 100;

    $scope.pause = function() {

      if (angular.isDefined($scope.interval)) {

        $interval.cancel($scope.interval);
        $scope.interval = undefined;

      }

    };

    $scope.start = function() {

      $scope.interval = $interval(function() {

        $scope.countDown--;
        if ($scope.countDown === 0)
          $scope.countDown = 100;

      }, 1000);

    };

    $scope.start();
}
