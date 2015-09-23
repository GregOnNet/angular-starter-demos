describe('Compiling notification-directive', function(){
  var element;
  var note;
  var scope;

  beforeEach(module('testModule'));
  beforeEach(inject(function($rootScope, $compile) {

    element = angular.element('<div notification message="note"></div>');
    note    = 'Message should be displayed in directive';
    scope   = $rootScope;

    $compile(element)(scope);
    scope.$apply();
  }));

  it('it should display the note message', function() {

    scope.$apply(function(){ scope.note = note; });
    console.log(element.html());
    expect(element.html()).toContain(note);
  });
});
