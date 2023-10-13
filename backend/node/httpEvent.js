const http = require('http')

//OLD METHOD
// const server = http.createServer((req,res) => {
//     res.end('Welcome')
// })

// USING EVENT EMITTER API
const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)