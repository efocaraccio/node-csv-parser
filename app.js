var fs = require('fs');
 
fs.readFile('./data.txt', 'utf8', function(err, contents) {
    let vector = contents.split('\r\n');
    let i = vector[0];
    let out = [];

    for( let j = 0 ; j< vector.length ; j++ ){
        while( i != vector[j]){
            console.log(i+" "+vector[j]);
            out.push(i); 
            i++;
        }
        i++;
    }

    console.log(out);
});
 
console.log('after calling readFile');