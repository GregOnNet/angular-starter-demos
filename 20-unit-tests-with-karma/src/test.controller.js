angular
  .module('testModule')
  .controller('testController', TestController);

function TestController() {

  var vm = this;

  vm.list = [];

  vm.add = add;

  function add(entry) {

    vm.list.push(entry)

  }

}
