'use strict';

describe('When no mods are allowed/passed', function() {
  var filter,
      mods = [],
      cups =
      [{
        drunken : new Date(),
        rating  : 3,
        mods    : ['milk', 'sugar']
      }, {
        drunken : new Date(),
        rating  : 3,
        mods    : ['milk']
      }];

  beforeEach(function() {
    module('cups.api');
    module('cups');
  });

  beforeEach(inject(function($filter){
    filter = $filter;
  }));

  it('should return no cups', function(){

    var result = filter('filterByMods')(cups, mods);
    expect(result.length).toEqual(0);
  });
});
