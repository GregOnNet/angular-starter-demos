(function() {
  "use strict";

  angular
    .module('flux.app')
    .store('job', job);

  function job() {

    return {

      job : { },
      handlers : {
        'job.create' : 'create'
      },
      create : create,
      exports : {
        getDraft : getDraft
      }
    };

    function create(job) {
      // Prooving that Store context is passed.
      console.log(this);

      this.job = job;
    }

    function getDraft() {
      return this.job
    }
  }
}());
