(function() {
  "use strict";

  angular
    .module('flux.app')
    .controller('jobCtrl', jobCtrl);

  jobCtrl.$inject = ['flux', 'job'];

  function jobCtrl(flux, job) {

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
}());
