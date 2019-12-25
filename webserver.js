const http = require('http'); 
const server = http.createServer((req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req.url)
    res.write('hello!!!')
    res.end()
});
server.listen(4000);
console.log('Listening port 4000...')