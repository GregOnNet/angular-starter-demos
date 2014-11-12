(function() {
  "use strict";

  angular
    .module('app')
    .factory('sturaMembers', sturaMembers);

  function sturaMembers() {
    return {
      getAll : getAll
    }

    function getAll() {
      return [
        {
          "name" : "Ferdinand Malcher",
          "role" : "Vorsitzender"
        },
        {
          "name" : "Danny Koppenhagen",
          "role" : "Referatsleiter Betreuung"
        },
        {
          "name" : "Thomas Körner",
          "role" : "Sportreferent"
        },
        {
          "name" : "Arjuna Wolfsteller",
          "role" : "Sportreferent"
        },
        {
          "name" : "Marcel Krüger",
          "role" : "Referat Betreuung"
        },
        {
          "name" : "Tom Gutbier",
          "role" : "Referat Betreuung"
        },
        {
          "name" : "Martin Lütticke",
          "role" : "Referat Betreuung"
        },
        {
          "name" : "Gregor Woiwode",
          "role" : "Referat Betreuung"
        },
        {
          "name" : "René Müller",
          "role" : "Referat Hochschulpolitik"
        },
        {
          "name" : "Robert Weise",
          "role" : "Referat Hochschulpolitik"
        },
        {
          "name" : "Carl-Theodor Geilhufe",
          "role" : "Referat Hochschulpolitik"
        },
        {
          "name" : "Steven England",
          "role" : "Referat Hochschulpolitik"
        },
        {
          "name" : "Philip Dockhorn",
          "role" : "Referat Technik"
        },
        {
          "name" : "Mario Hoffmann",
          "role" : "Referat Technik"
        },
        {
          "name" : "Sven Rocho",
          "role" : "Referat Technik"
        },
        {
          "name" : "Alexander Scholz",
          "role" : "Referatsleiter Finanzen"
        },
        {
          "name" : "Sebastian Stoll",
          "role" : "Referat Finanzen"
        },
      ];
    }
  }

}());
