var test_module = require('./test_module');
var http = require('http');
http.createServer(function (req, res) {
    console.log('start --------------------------------');
    console.log('request url : '+req.url);

    if(req.url == '/') {
        console.log('do nothing');
    } else if(req.url == '/do_test_module') {
        console.log(test_module.testMethod());
    } else if(req.url == '/favicon.ico') {
        console.log('do nothing');
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    console.log('end ----------------------------------');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
