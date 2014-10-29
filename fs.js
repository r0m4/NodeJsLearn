var fs = require('fs');

var text = fs.readFileSync('Bear.txt', "utf8");

console.log(text);