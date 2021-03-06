'use strict'

process.title = 'Dice Roll'

const {
  argv: [, , ...args]
} = process
const {
  count = 1, sides = 6
} = require('./parse-args')(args)
const {
  roll, toDiceNotation
} = require('./dice')
const dice = toDiceNotation({
  count, sides
})
const total = roll(dice)

console.log(total)