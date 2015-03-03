describe('angularjs homepage', function () {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});

describe('Deviding by zero', function() {
  it('should return NaN', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys(1);
    element(by.cssContainingText('option', '/')).click();
    element(by.model('second')).sendKeys(0);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
      toEqual('Infinity');
  });
});
