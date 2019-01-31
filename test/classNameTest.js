var chai = require('chai');
var assert = chai.assert;

var className

describe('addClass', () => {
  it('should add class to element', () => {
    var element = { className: '' };
    addClass(element, 'test-class');
    assert.equal(element.className, 'test-class')
  });
  it('should not add a class which already exists', () => {
    
  });
});