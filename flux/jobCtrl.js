(function() {
  "use strict";

  angular
    .module('flux.app')
    .controller('jobCtrl', jobCtrl);

  jobCtrl.$inject = ['flux', 'job'];

  function jobCtrl(flux, job) {

    var vm = this;

    vm.specification = {};
    vm.create = create;
    vm.logJob = logJob;

    function create() {

      flux.dispatch('job.create', vm.specification);
    }

    function logJob() {
      console.log(job.getDraft());
    }
  }
}());
