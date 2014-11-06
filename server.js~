

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    fs.readFile('index.html', function (err, content) {
        if (err) {
            res.statusCode = 500;
            res.end = ("Server error");
        } else {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(content);  
        }
    });


}).listen(3000);










