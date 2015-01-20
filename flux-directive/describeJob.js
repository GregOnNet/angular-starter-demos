(function() {
  "use strict";

  angular
    .module('flux.app')
    .directive('describeJob', describeJob);

  function describeJob() {

    return {

      restrict         : 'E',
      templateUrl      : 'describe-job.html',
      controller       : controller,
      controllerAs     : 'job',
      bindToController : true
    }

    describeJob.$inject = ['flux', 'job'];

    function controller(flux, job) {

      var vm = this;

      vm.specification = {};
      vm.logJob = logJob;

      linkToStore();

      function linkToStore() {

        flux.dispatch('job.saveDraft', vm.specification);
      }

      function logJob() {

        console.log(job.getDraft());
      }
    }
  }
}());
