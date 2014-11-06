var http = require('http');
var fs = require('fs');


console.log("starting")

http.createServer(function (req, res) {
    
    if (req.url === "/text.txt") {
            fs.readFile('text.txt', 'utf8', function (err, content) {
                if (err) {
                    res.statusCode = 500;
                    res.end = ("Server Error");
                
                } else {
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    console.log(content);
                    res.write("Такст : ");
                    res.end(content);
                }
            });
    }

    if (req.url === "/index.html") {
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

    if (req.url === "/image.png") {
           fs.readFile('Dinka.png', function (err, content) {
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

    if (req.url === '/') {
          
          res.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});
          res.end("Hello World its meeeee");

      }

      console.log("Received request: " + req.url);

}).listen(3000, function () {console.log("listening on port 3000")});