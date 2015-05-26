(function() {

  angular
    .module('app', [])
    .directive('myDirective', myDirective);


  function myDirective() {
    // DDO = Directive Definition Object
    return {
      template: 'Hello World!'
    };
  }
})();
