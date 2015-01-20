(function() {
  "use strict";

  angular
    .module('flux.app')
    .store('job', job);

  function job() {

    return {

      job : { },
      handlers : {
        'job.saveDraft' : 'saveDraft'
      },
      saveDraft : saveDraft,
      exports : {
        getDraft : getDraft
      }
    };

    function saveDraft(job) {

      this.job = job;
    }

    function getDraft() {
      
      return this.job
    }
  }
}());
