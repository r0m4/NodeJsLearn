var fs = require('fs');
var http = require('http');
var url = require('url');
var name;
var options = {
    host: "localhost",
    port: 3000,
    path: '/'
};

var data = http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
    
    if(options.path === "/picture") {
        name = ".png"; 
    }
    if (options.path === "/test") {
        name = ".txt";
    } else name = ".html";

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

