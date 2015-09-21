describe('filter test', function(){

  beforeEach(module('testModule'));

  var filter;

  beforeEach(inject(function($filter) {

    filter = $filter;
  }));

  it('should return a concatonated string', function(){
    var guys = ['Matze', 'Gregor'];
    var separator = ' ';

    var result = filter('testFilter')(guys, separator);

    expect(result).toContain(' ');
  });
});
