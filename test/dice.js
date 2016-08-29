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
  })

  describe('roll', () => {
    it('should be a function', () => {
      assert.isFunction(roll)
    })
  })
})