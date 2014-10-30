var fs = require('fs');

var data = fs.readFileSync('objects.json', 'utf8');



var obj = JSON.parse(data);

console.log(obj.synsets['hammer_in.v.01']);

console.log(obj.synsets['revolutionize.v.03'].lemmas);
