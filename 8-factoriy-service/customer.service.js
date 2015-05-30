angular
  .module('customer.service', [])
  .service('customerService', CustomerService);

function CustomerService() {

  this.getAll = function() {
    return [{
        'vorname'  : 'Igor',
        'nachname' : 'Minar 2'
    }, {
        'vorname'  : 'Dan',
        'nachname' : 'Whalin 2'
    }, {
        'vorname'  : 'Rob',
        'nachname' : 'Eisenberg 2'
    }];
  };

}
