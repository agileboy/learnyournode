'use strict'
const fs = require('fs')


function countNumberOfNewLines(error, data) {
  if (error) {
   return console.log(error)
  }
  var splitTheArray = data.split('\n')
  console.log(splitTheArray.length-1)
}

fs.readFile(process.argv[2], 'utf8', countNumberOfNewLines)

