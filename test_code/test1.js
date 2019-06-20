var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>hello world</h1>');
    res.end('<p>hello f</p>')
}).listen(3000);  //事件监听窗口
console.log('open 2s');