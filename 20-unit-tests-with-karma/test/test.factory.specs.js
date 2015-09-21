describe('When an entry is added to the list', function() {

  beforeEach(angular.mock.module('testModule'));

  var testFactory;

  beforeEach(angular.mock.inject(
    function($injector) {
      testFactory = $injector.get('testFactory');
    }
  ));

  it('should have a version specified', function() {

    expect(testFactory.version)
      .toEqual('0.0.1');

  });

});
