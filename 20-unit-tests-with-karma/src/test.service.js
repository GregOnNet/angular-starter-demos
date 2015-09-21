angular
  .module('testModule')
  .service('testService', service);

function service() {

  this.getVersion = getVersion;

  function getVersion() {
    return '0.1.0';
  }

}
