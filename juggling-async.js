'use strict'
const http = require('http')
const urls = process.argv.slice(2)
let dataArray = []
let callbackCounter = 0 

function processUrl(url, index){
  http.get(url, function(response){
    let adata = ""
    response.setEncoding('utf8');

    response.on('data', (data) =>{
      adata += data
    }).
    on('end', ()=>{
      dataArray[index] = adata
      callbackCounter++
      if (callbackCounter === urls.length) {
        dataArray.forEach((value) => console.log(value))
      }
    }).
    on('error', console.error)
  })
}

urls.forEach(processUrl)
