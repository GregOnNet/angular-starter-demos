angular
  .module('app', [
    'app.core',

    'customers'
  ])
  .config(configureRoutes);

configureRoutes.$inject = ['$routeProvider'];

function configureRoutes($routeProvider) {

  $routeProvider
    .when( '/', {

      templateUrl: 'components/welcome/welcome.html'

    })

    .when( '/contact', {

      templateUrl: 'components/contact/contact.html'

    })

    .otherwise({
      redirectTo: '/'
    });

}
