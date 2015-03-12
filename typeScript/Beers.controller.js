var app;
(function (app) {
    var beers;
    (function (beers) {
        'use stric';
        var Beer = (function () {
            function Beer() {
            }
            return Beer;
        })();
        var BeersController = (function () {
            function BeersController($http) {
                this.$http = $http;
                this.getBeers();
                this.showBeer = false;
                this.hello = "My template {hey}";
            }
            BeersController.prototype.getBeers = function () {
                var _this = this;
                return this.$http.get('api/beers').then(function (response) {
                    _this.Beers = response.data;
                    return _this.Beers;
                });
            };
            BeersController.prototype.addBeer = function (newBeer) {
                throw new Error('Not implemented');
            };
            BeersController.prototype.showBeerForm = function () {
            };
            BeersController.$inject = ['$http'];
            return BeersController;
        })();
        angular.module('app').controller('app.Beers.BeersController', BeersController);
    })(beers = app.beers || (app.beers = {}));
})(app || (app = {}));
