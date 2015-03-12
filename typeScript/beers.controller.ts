/// <reference path='./typings/angularjs/angular.d.ts'/>

module app.beers {
  'use stric';

  interface IBeersScope {
    Beers:Beer[];
    newBeer: Beer;
    showBeer: Boolean;

    getBeers(): ng.IPromise<Beer[]>;
    addBeer(newBeer:Beer): ng.IPromise<Beer>;
    showBeerForm(showBeer:Boolean): void;
  }

  class Beer {
    id: string;
    name: string;
    colour: string;
    hasTried: boolean;
  }

  class BeersController implements IBeersScope {
    Beers:Beer[];
    newBeer: Beer;
    showBeer: Boolean;
    hello: string;

    static $inject = ['$http'];
    constructor(private $http:ng.IHttpService) {
      this.getBeers();
      this.showBeer = false;

      this.hello = `My template {hey}`;
    }

    getBeers() : ng.IPromise<Beer[]> {
      return this.$http
                 .get('api/beers')
                 .then((response: ng.IHttpPromiseCallbackArg<Beer[]>): Beer[] => {
                   this.Beers = <Beer[]>response.data;
                   return this.Beers;
                 });
    }

    addBeer(newBeer:Beer) : ng.IPromise<Beer> { throw new Error('Not implemented') }

    showBeerForm() : void {}
  }

  angular
    .module('app')
    .controller('app.Beers.BeersController', BeersController);
}
