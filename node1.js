var http = require('http');
http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'text/js'});
    res.end("hello Rajan !");
}).listen(3000);