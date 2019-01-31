var chai = require('chai');
var assert = chai.assert;

var className = require('../js/className.js');
var addClass = className.addClass

describe('addClass', () => {
  it('should add class to element', () => {
    var element = { className: '' };
    addClass(element, 'test-class');
    assert.equal(element.className, 'test-class')
  });
  it('should not add a class which already exists', () => {
    var element = { className: 'exists' };
    addClass(element, 'exists');
    
    var numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1)
  });
  it('should append new class after existing one', () => {
    var element = { className: 'exists' };

    addClass(element, 'new-classes');
    
    var classes = element.className.split(' ');
    assert.equal(classes[1], 'new-classes')
  });
});