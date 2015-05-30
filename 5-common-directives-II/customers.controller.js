angular
  .module('customers', [])
  .controller('customersController', CustomersController);

function CustomersController($scope) {

  $scope.customers = [{
    'firstName' : 'John',
    'lastName'  : 'Doe'
  }, {
    'firstName' : 'Dan',
    'lastName'  : 'Whalin',
  }, {
    'firstName' : 'Igor',
    'lastName'  : 'Minar',
  }, {
    'firstName' : 'Brian',
    'lastName'  : 'Ford',
  }, {
    'firstName' : 'Rob',
    'lastName'  : 'Eisenberg',
  }];

}
