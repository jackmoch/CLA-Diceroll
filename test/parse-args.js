const {
  assert
} = require('chai')
const parseArgs = require('../lib/parse-args.js')

describe('parseArgs', () => {
  it('should be a function', () => {
    assert.isFunction(parseArgs)
  })
  it('should handle no argument', () => {
    const args = []
    const expected = {
      count: 1,
      sides: 6
    }
    assert.deepEqual(parseArgs(args), expected)
  })
  it('should handle one argument', () => {
    const args = [20]
    const expected = {
      count: 1,
      sides: 20
    }
    assert.deepEqual(parseArgs(args), expected)
  })
  it('should handle two arguments', () => {
    const args = [2, 7]
    const expected = {
      count: 2,
      sides: 7
    }
    assert.deepEqual(parseArgs(args), expected)
  })
})