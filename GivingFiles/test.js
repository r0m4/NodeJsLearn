var fs = require('fs');
fs.writeFile("test.bbb", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});