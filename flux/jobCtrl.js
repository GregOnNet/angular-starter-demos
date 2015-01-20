(function() {
  "use strict";

  angular
    .module('flux.app')
    .controller('jobCtrl', jobCtrl);

  jobCtrl.$inject = ['flux', 'job'];

  function jobCtrl(flux, job) {

    var vm = this;

    vm.specification = {};
    vm.saveDraft = saveDraft;
    vm.logJob = logJob;

    function saveDraft() {

      flux.dispatch('job.saveDraft', vm.specification);
    }

    function logJob() {
      console.log(job.getDraft());
    }
  }
}());
