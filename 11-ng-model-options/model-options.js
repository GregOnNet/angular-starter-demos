angular
  .module('modelOptionsDemo', [])
  .controller('optionsController', OptionsController);

function OptionsController() {
  var vm = this;

  vm.greeting = 'Hey!';

  // Binding to a function
  vm.fullname = getSetFullname;

  vm.greetingOptions = {
    updateOn : 'blur default', // default mouseover
    debounce : {
      default : 1000,
      blur    : 0
    }
  };

  vm.fullnameOptions = {
    getterSetter: true,
    allowInvalid: true
  };

  function getSetFullname(value) {

    if(angular.isDefined(value))
      vm.fullname = value;

    return 'Gregor Jan Woiwode';

  }
}
