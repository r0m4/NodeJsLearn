var fs = require('fs');
fs.writeFile("blabla.bbb", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});