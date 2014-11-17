var fs = require('fs');
var http = require('http');
var url = require('url');
var name;
var options = {
    host: "localhost",
    port: 3000,
    path: '/index'
};

var data = http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
    var lastDig = (res.headers['content-type'].indexOf(';'));
    
    
    if(res.headers['content-type'] === "image/png") {
        name = ".png";

    }
    if(res.headers['content-type'].slice(0, lastDig) === "text/plain") {
        name = ".txt";

    }
    if (res.headers['content-type'].slice(0, lastDig) === "text/html") {
        name = ".html";

    } else name = ".bin";

    res.on("data", function(chunk) {
        
        fs.writeFile(options.path.slice(1)+name,""+chunk, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file "+options.path.slice(1)+" was saved!")
            }
        });
    })
}).on('error', function(e) {
    console.log("Got error: "+e.message);
});

