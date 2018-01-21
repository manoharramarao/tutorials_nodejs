var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + "/readme.txt", 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// Reading from file and writing to a file using pipe
myReadStream.pipe(myWriteStream);
