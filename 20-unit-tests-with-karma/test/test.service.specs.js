describe('When an entry is added to the list', function() {

  beforeEach(angular.mock.module('testModule'));

  var testService;

  beforeEach(angular.mock.inject(
    function($injector) {
      testService = $injector.get('testService');
    }
  ));

  it('should have a version specified', function() {
    expect(testService.getVersion())
      .toBe('0.1.0');
  });
});
