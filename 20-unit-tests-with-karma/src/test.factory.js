angular
  .module('testModule')
  .factory('testFactory', testFactory);

function testFactory() {

  return {

    version: '0.0.1'

  };

}
