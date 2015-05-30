angular
  .module('app.core')
  .directive('trLinkActive', directive);

function directive($location) {

  return {
    restrict: 'A',
    link: function(scope, elem, attr) {

      var link = angular.element(elem);
      var linkPath = attr.href.substr(1);

      scope.$on('$routeChangeSuccess', function() {

        if ($location.path() === linkPath)
          link.parent().addClass('active');
        else
          link.parent().removeClass('active');

      });

    }
  }
}
