(function() {
  "use strict";

  angular
    .module('flux.app')
    .controller('describeJob', describeJob);

  describeJob.$inject = ['flux', 'job'];

  function describeJob(flux, job) {

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
