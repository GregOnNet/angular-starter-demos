describe('When a directive references a template via url', function(){
  var element;
  var note;
  var scope;
  
  beforeEach(module('testModule'));
  beforeEach(module('templates'));

  beforeEach(inject(function($rootScope, $compile) {

    element = angular.element('<div templated-notification message="note"></div>');
    note    = 'Message should be displayed in directive';
    scope   = $rootScope;

    $compile(element)(scope);
    scope.$apply();
  }));

  it('it should display the note message', function() {

    scope.$apply(function(){ scope.note = note; });
    expect(element.html()).toContain(note);
  });
});
