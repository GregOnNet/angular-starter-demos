(function() {
  'use strict';

  angular
    .module('app', [])
    .controller('WatchController', WatchController);

  WatchController.$inject = ['$scope'];

  function WatchController($scope) {
    var watcher = this;

    watcher.status        = 'Bitte wählen Sie ein Rechenzentrum und das Netzwek aus.';
    watcher.rechenzentren = ['Stuttgart', 'Ismaning'];
    watcher.netzwerke     = ['Intranet', 'Internet'];

    var neededParameters = [
      function() { return watcher.rechenzentrum; },
      function() { return watcher.netzwerk; },
    ];

    $scope.$watchGroup(neededParameters, loadSoftwarePackages);

    function loadSoftwarePackages(newValues, oldValues, scope) {

      var canLoadPackages = newValues.every(isDefined);

      if(canLoadPackages)
        watcher.status = 'Die Softwarepakete werden geladen...';
    }

    function isDefined(value) {
      return (value);
    }
  }
}());
