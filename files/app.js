var fs = require('fs');

// synchronous reading and writing
var readme = fs.readFileSync('./readme.txt', 'utf8');
console.log(readme);
console.log('Printing after file has been read');

// fs.writeFileSync('./writeme.txt', readme);
console.log('Priting after file has been written');


// asynchronous reading and writing
fs.readFile('./readme.txt', 'utf8', function(err, data){
    fs.writeFile('./writeme.txt', data, (err) => {
        if(err){
            console.log('writing failed ' + err); // you can test this by changing the permissions of the file
        }else{
            console.log('File writing successful');
        }
        
    });
});

console.log('Printing before reading and writing is complete');