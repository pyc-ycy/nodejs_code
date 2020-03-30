var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>hello world,Welcome to visit this website</h1>');
    res.end('<p>hello world</p>')
}).listen(3000);  //事件监听窗口
console.log("Hello World! This is my second contact with node_js! ");