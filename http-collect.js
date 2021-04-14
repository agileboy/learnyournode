'use strict'
const http = require('http')
const url = process.argv[2]

http.get(url, function(response){
  let adata = ""
  response.setEncoding('utf8');

  response.on('data', (data) =>{
    adata += data
  }).
  on('end', ()=>{
    console.log(adata.length)
    console.log(adata)
  }).
  on('error', console.error)
})
