const http = require('http')


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write('Hello')
    res.end()
})
server.listen(4000)
console.log("The server is listening...")
