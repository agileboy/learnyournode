'use strict'
const net = require('net')  

function preFillZerosRecursive(value, numberOfDigits){
   if (value.length == numberOfDigits || numberOfDigits == 0) return value
   return preFillZeros("0"+value, numberOfDigits)
}

function preFillZerosInterative(value, numberOfDigits){
  let diff = numberOfDigits - value.toString().length
  if (diff <= 0) {
    return value
  }
   // for (let i = 0;  i < diff; i++){
   //   value = "0" + value
   // }
   //return value

  return "0".repeat(diff)+value
}

const server = net.createServer(function (socket) {  
  let date = new Date()
  let data = `${date.getFullYear()}-\
${preFillZerosInterative(date.getMonth()+1,2)}-\
${preFillZerosInterative(date.getDate(),2)} \
${preFillZerosInterative(date.getHours(),2)}\
:${preFillZerosInterative(date.getMinutes(),2)}\n`
  socket.end(data)
})  
server.listen(process.argv[2])
