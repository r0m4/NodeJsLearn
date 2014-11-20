var fs = require('fs');
var http = require('http');
var url = require('url');
var name;
var hosts = 
    [
    {
        host: "localhost",
        port: 3000,
        path: '/index'
    }, 
    
    {
        host: "localhost",
        port: 3000,
        path: '/test'
    },
    
    {
        host: "localhost",
        port: 3000,
        path: '/picture'
    }

    ];
    
    
    
    for (var i = 0; i < hosts.length; i++) {
        //console.log(options[i]);
        getUrl(hosts[i]);    
    }

    

    function getUrl (obj) {
        var opt = obj;

        var data = http.get(opt, function(res) {
            console.log("Got response: " + res.statusCode);
            var lastDig = (res.headers['content-type'].indexOf(';'));
            
            if(res.headers['content-type'] === "image/png") {
                name = ".png";

            }
            else if(res.headers['content-type'].slice(0, lastDig) === "text/plain") {
                name = ".txt";

            }
            else if (res.headers['content-type'].slice(0, lastDig) === "text/html") {
                name = ".html";

            } else name = ".bin";


            res.on("data", function(chunk) {
                ;

                fs.writeFile(opt.path.slice(1)+name,""+chunk, function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("The file "+opt.path.slice(1)+" was saved!")
                    }
                });
            });
            
        }).on('error', function(e) {
            console.log("Got error: "+e.message);
        });

        data.on('data', function (chunk3) {
            console.log('data:   '+chunk3)
        })
        data.on('end', function (chunk2) {
                console.log("end:    " +chunk2)
            })

    };
   