(function() {
  "use strict";

  angular
    .module('flux.app')
    .controller('createJob', createJob);

  createJob.$inject = ['job'];

  function createJob(job) {

    var vm = this;

    vm.createJob = createJob;

    function createJob() {

      console.log(job.getDraft(), 'was created succesfully!');
    }
  }
}());
