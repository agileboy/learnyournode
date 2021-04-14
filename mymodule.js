const fs = require('fs')

module.exports = myFunction

function myFunction(dirName, extention, callback){
  const filteredArray = []
  const suffix = "."+extention

  fs.readdir(dirName, 'utf8', filterFilesDirCallback)

  function filterFilesDirCallback(error, list) {
    if (error) {
     return callback(error)
    }

    list.forEach(filterName)
    return callback(null, filteredArray)
  }

  function filterName(value){
    if (value.endsWith(suffix)) {
      filteredArray.push(value)
    }
  }
}
