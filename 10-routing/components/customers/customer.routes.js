angular
  .module('customers')
  .config(routes);

routes.$inject = ['$routeProvider'];

function routes($routeProvider) {

    $routeProvider
      .when( '/customers', {

        templateUrl: 'components/customers/customers.html',
        controller: 'customersController',
        controllerAs: 'vm'

      });
      
}
