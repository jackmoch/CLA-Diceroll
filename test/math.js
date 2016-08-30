'use strict';

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
    })
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {
        assert.oneOf(randomInt(1, 5), [1, 2, 3, 4, 5])
      }
    })
  })
})