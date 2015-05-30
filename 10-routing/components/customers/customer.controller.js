angular
 .module('customers')
 .controller('customersController', CustomersController);

CustomersController.$inject = ['customerFactory'];

function CustomersController(customerFactory) {

  this.customers = customerFactory.getAll();

}
