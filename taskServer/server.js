var http = require('http');
var fs = require('fs');

console.log("starting");

http.createServer(function (req, res) {
    
    if (req.url === "/test") {
        fs.readFile('text.txt', 'utf8', function (err, content) {
            if (err) {
                res.statusCode = 500;
                res.end = ("Server Error");
                
            } else {
                res.setHeader("Content-Type", "text/plain; charset=utf-8");
                console.log(content);
                res.write("Текст : ");
                res.end(content);
            }
        });
    }

    if (req.url === "/index") {
        fs.readFile('index.html', 'utf8', function (err, content) {
            if (err) {
                res.statusCode = 500;
                res.end = ("Server Error");
                
            } else {
                res.setHeader("Content-Type", "text/html; charset=utf-8");
                console.log(content);
                res.end(content);
            }
        });
    }

    if (req.url === "/picture") {
        fs.readFile('Dinka.png', function (err, content) {
            if (err) {
                res.statusCode = 500;
                res.end = ("Server Error");
                
            } else {
                res.setHeader("Content-Type", "image/png");
                console.log(content);
                res.end(content);
            }
        }); 

    } 

    if (req.url === '/') {          
        res.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});
        res.end("Hello World its meeeee");

    }

    console.log("Received request: " + req.url);

}).listen(3000, function () {console.log("listening on port 3000")});