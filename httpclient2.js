var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
    res.setEncoding('utf8');
    var str = "";
    res.on('data', function(data){
        str += data;
    })
    res.on('end', function(data){
        console.log(str.length);
        console.log(str);
    })
    res.on('error', console.error);
})