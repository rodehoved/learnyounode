var url = process.argv[2];
//console.log(url);

var http = require('http');
http.get(url, function(res){
    res.setEncoding('utf8');
//    console.log("Got response: " + res.statusCode);
    res.on("data", function(data){
        console.log(data);
    }).on("end", function(data){
       return; 
    });
}).on('error', function(e){
    console.log("Got error: " + e.message);
});

//var http = require('http');
//var options = {
//  host: process.argv[2],
//  path: '/'
////  path: '/danmark/dansker-vinder-15-millioner-i-lotto-naeste-uge-kan-du-vinde-en-halv-milliard'
//};
//
//var req = http.get(options, function(res) {
//  var bodyChunks = [];
//  res.on('data', function(chunk) {
//    bodyChunks.push(chunk);
//  }).on('end', function() {
//    var body = Buffer.concat(bodyChunks);
//    console.log('BODY: ' + body);
//  })
//});
//
//req.on('error', function(e) {
//  console.log('ERROR: ' + e.message);
//});
