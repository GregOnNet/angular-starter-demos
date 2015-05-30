angular
  .module('customer.factory', [])
  .factory('customerFactory', customerFactory);

function customerFactory() {

  return {
    getAll : getAllCustomers
  };

  function getAllCustomers() {
    return [{
        'vorname'  : 'Igor',
        'nachname' : 'Minar'
    }, {
        'vorname'  : 'Dan',
        'nachname' : 'Whalin'
    }, {
        'vorname'  : 'Rob',
        'nachname' : 'Eisenberg'
    }];
  }

}
