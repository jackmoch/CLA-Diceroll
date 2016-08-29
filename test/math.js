const {
  assert
} = require('chai')
const {
  randomInt
} = require('../lib/math')

describe('math', () => {
  describe('randomInt', () => {
    it('should be a function', () => {
      assert.isFunction(randomInt)
    });
  });
});