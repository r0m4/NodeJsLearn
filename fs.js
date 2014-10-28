var fs = require('fs');

var text = fs.readFileSync('Bear.txt', "utf8", function (err, data) {
    if (err) throw err;
    return data;
});

console.log(text);