var http = require('http');
const server = http.createServer((req,res) =>{
    res.writeHead(200,{contenttype : text/js});
    res.write("hello Rajan !");
    res.end();
}).listen(3000);