angular
  .module('moduleA', [])
  .controller('firstController', FirstController);

function FirstController($scope, $interpolate) {

  var expression = $interpolate('{{ name | uppercase }}');

  $scope.name = 'Gregor';
  $scope.uppercasedName = expression({ name: $scope.name });

  $scope.name = 'Jan';


  $scope.$watch(function() {

    return $scope.name;

  },
  function(newValue, oldValue) {

    console.log(oldValue, newValue);

    $scope.uppercasedName = expression({ name: newValue });

  });
}
