'use strict'
const http = require('http')  
const fs = require('fs')  
const { URL } = require('url')

const port = process.argv[2]

function handleSimpleParse(req, res, url){
    let dateString = url.searchParams.get('iso')
    let date = new Date(dateString)

    let respdata = {  
       "hour": date.getHours(),  
       "minute": date.getMinutes(),  
       "second": date.getSeconds()  
    }

    res.writeHead(200, { 'Content-Type': 'application/json' }) 
    res.end(JSON.stringify(respdata))
}

function handleUnixTime(req, res, url){
    let dateString = url.searchParams.get('iso')
    let date = new Date(dateString)
    let respdata = {
      unixtime : date.getTime() 
    }

    res.writeHead(200, { 'Content-Type': 'application/json' }) 
    res.end(JSON.stringify(respdata))
}

const server = http.createServer(function (req, res) {  
  let url = new URL(req.url, `http://${req.headers.host}`)

  if (url.pathname == "/api/parsetime"){
    return handleSimpleParse(req, res, url)
  }else if (url.pathname == "/api/unixtime"){
    return handleUnixTime(req, res, url)
  }else{
    return resp.end("Not supported")
  }
  
})  

server.listen(port)
