'use strict';

angular
 .module('customers', [
   'customer.factory',
   'customer.service'
 ])
 .controller('customersController', CustomersController);

function CustomersController($scope, customerFactory, customerService) {

  $scope.customers = customerService.getAll();

}
