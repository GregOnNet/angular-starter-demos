angular
 .module('app', [])
 .config(configureLocation);


 function configureLocation(locationProvider) {

   locationProvider.setLocation('Leipzig');

 }
