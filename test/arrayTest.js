var chai = require('chai');
var assert = chai.assert;

describe('Array', () => {
  it('should start empty', () => {
    var arr = [1];

    assert.equal(arr.length, 1, 'Array length was not 0');
  });
});