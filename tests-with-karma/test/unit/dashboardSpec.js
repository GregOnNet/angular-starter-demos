describe('A spec suite', function(){

  it('contains a passing spec', function() {

    expect(true).toBe(true);
  });

  it('contains another passing spec', function() {

    expect(false).not.toBe(true);
  });

  it('contains passing specs', function() {

    var value = 10,
        same_value = value;

    expect(value).toBe(same_value);
    expect(value).not.toBe(null);
  });
});
