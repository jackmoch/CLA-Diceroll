'use strict';

const {
  assert
} = require('chai')
const {
  toDiceNotation, roll
} = require('../lib/dice')

describe('dice', () => {
  describe('toDiceNotation', () => {
    it('should be a function', () => {
      assert.isFunction(toDiceNotation)
    })
    it('should convert an object with a count and sides property to dice notation', () => {
      const die = {
        count: 2,
        sides: 24
      }
      const expected = '2d24'
      assert.strictEqual(toDiceNotation(die), expected)
    })
  })

  describe('roll', () => {
    it('should be a function', () => {
      assert.isFunction(roll)
    })
    it('should handle multiple rolls', () => {
      const string = '2d40'
      assert.strictEqual(roll(string) % 1, 0)
      assert.isAbove(roll(string), 2)
      assert.isBelow(roll(string), 80)
    })
  })
})