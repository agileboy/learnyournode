const mymodule = require('./mymodule.js')

const path = process.argv[2]
const suffix = process.argv[3]

mymodule(path, suffix, function(err, list){
  if (err) {
    return console.log(err)
  }

  list.forEach((value) => {
    console.log(value)
  })
})
