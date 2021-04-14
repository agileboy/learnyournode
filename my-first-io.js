'use strict'
const fs = require('fs')

var readBuffer = fs.readFileSync(process.argv[2])

var str = readBuffer.toString()

var splitTheArray = str.split('\n')

console.log(splitTheArray.length-1)
