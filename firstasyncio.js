var filename = process.argv[2];
var fs = require('fs');
fs.readFile(filename, file_process);

function file_process(err, data){
    if(err) throw err;
    var text = data.toString();
    var splitText = text.split('\n');
    console.log(splitText.length-1);
}