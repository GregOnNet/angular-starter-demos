(function() {
  'use strict';

  angular
    .module('app')
    .controller('stura', stura);

  function stura() {

    this.members = [
      "Ferdinand Malcher",
      "Danny Koppenhagen",
      "Alexander Scholz",
      "Thomas Körner",
      "Arjuna Wolfsteller",
      "Philip Dockhorn"];
  }

}());
