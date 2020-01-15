const http = require('http'); 

// ↓こいつらの変数名いつも迷う
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const parsedUrl = url.parse(req.url)
    console.log(parsedUrl)
    const parsedQuery = querystring.parse(parsedUrl.query)
    console.log(parsedQuery)

    res.write('hello!!!')
    res.end()
});
server.listen(4000);
console.log('Listening port 4000...')