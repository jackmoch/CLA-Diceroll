const {
  assert
} = require('chai')
const parseArgs = require('../lib/parse-args.js')

describe('parseArgs', () => {
  it('should be a function', () => {
    assert.isFunction(parseArgs)
  })
})