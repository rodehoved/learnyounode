var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var text = buffer.toString();
var splitText = text.split('\n');
console.log(splitText.length-1);
