angular
  .module('sanitizeDemo', [
    'ngSanitize'
  ])
  .controller('sanitizeController', SanitizeController);

function SanitizeController() {
  var vm = this;

  vm.htmlMarkup = '';
}
