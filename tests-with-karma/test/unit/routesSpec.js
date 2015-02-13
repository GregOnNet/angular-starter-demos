describe('Routes test', function() {

  beforeEach(module('myApp'));

  var location,
      route,
      rootScope;

  beforeEach(
    inject(
      function(_$location_, _$route_, _$rootScope_) {

        location = _$location_;
        route = _$route_;
        rootScope = _$rootScope_;
      }
  ));

  describe('index route', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('home/home.html')
                    .respond(200, 'dashboard HTML');
    }));

    it('should load the index page when "/" is requested', function() {

      location.path('/');
      rootScope.$digest();

      expect(route.current.controller)
        .toBe('home');
    });

    it('should redirect to "/" when an invalid route is requested', function() {

      location.path('/defenetely/no/a/valid/_route');
      rootScope.$digest();

      expect(route.current.controller)
        .toBe('home');
    })
  });
})
