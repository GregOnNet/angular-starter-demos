describe('When an entry is added to the list', function() {

  beforeEach(angular.mock.module('testModule'));

  var testController;

  beforeEach(angular.mock.inject(
    function($controller) {
      testController = $controller('testController');
    }
  ));

  it('should have a list defined', function() {

    expect(testController.list)
      .toBeDefined();

  });

  it('should have one item in it', function() {

    var entry = { id: 1, text: 'Hey I am the first entry!'};
    testController.add(entry);

    expect(testController.list.length)
      .toEqual(1);

  });

});
