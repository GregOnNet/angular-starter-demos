angular
  .module('testModule')
  .directive('templatedNotification', notification);

notification.$inject = ['$timeout'];

function notification($timeout) {
  return {
    restrict: 'A',
    scope: {
      message: '='
    },
    templateUrl: 'src/test.directive.template.html',
    replace: true,
    link: function(scope, ele, attrs) {
      scope.$watch('message', function(n, o) {
        if (n)
          $timeout(function() {
            ele.addClass('ng-hide');
          }, 2000);
      });
    }
  };
}
