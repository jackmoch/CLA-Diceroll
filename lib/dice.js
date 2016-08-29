'use strict';

const {
  randomInt
} = require('./math')

let toDiceNotation = function(obj) {
  return `${obj.count}d${obj.sides}`
}

let roll = function(string) {
  let [count, sides] = string.split('d')
  let total = 0
  for (let i = 0; i < count; i++) {
    total += randomInt(1, sides)
  }
  return total
}

module.exports = {
  roll, toDiceNotation
}