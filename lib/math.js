'use strict';

let randomInt = function(min = 1, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  randomInt
}