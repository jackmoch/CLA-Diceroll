'use strict';

const {
  randomInt
} = require('./math')

module.exports.toDiceNotation = ({
  count, sides
}) => (`${count}d${sides}`)

module.exports.roll = function(string) {
  const [count, sides] = string.split('d').map(num => +num)
  return Array(count)
    .fill()
    .map(() => randomInt(1, sides))
    .reduce((p, c) => p + c)
    // let total = 0
    // for (let i = 0; i < count; i++) {
    //   total += randomInt(1, sides)
    // }
    // return total
}