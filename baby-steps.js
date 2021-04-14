'use strict'

var args = process.argv.slice(2)
var sum = 0

function add(value, index, array) {
  sum = sum + (+value);
}

args.forEach(add)

console.log(sum)
