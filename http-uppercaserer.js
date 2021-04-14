'use strict'
const http = require('http')  
const fs = require('fs')  

const port = process.argv[2]

const server = http.createServer(function (req, res) {  
  req.on('data', chunk => {
    res.write(chunk.toString().toUpperCase())
  }).on('end',()=>{
    res.end()
  })
})  
server.listen(port)
