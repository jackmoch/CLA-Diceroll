'use strict';

module.exports = function(args) {
  var module = {}

  module.count = args[0]
  module.sides = args[1]

  return module
}