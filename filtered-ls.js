'use strict'
const fs = require('fs')

const path = process.argv[2]
const suffix = "."+process.argv[3]

function filterName(value){
  if (value.endsWith(suffix)) {
    console.log(value)
  }
}

function filterFilesDirCallback(error, list) {
  if (error) {
   return console.log(error)
  }
  list.forEach(filterName)
}

fs.readdir(path, 'utf8', filterFilesDirCallback)
