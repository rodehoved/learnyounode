var http = require('http');

var completed = 0;
var urls = [];
for(var i = 2; i < process.argv.length; i++){
    urls.push(process.argv[i]);
}
var todo = urls.length;
//console.log(urls);

texts = ['','',''];
for(var i=0; i<todo; i++){
    getHttp(urls[i], i);
}

function getHttp(url, count){
    http.get(urls[count], function(res){
        res.setEncoding('utf8');
        var str = "";
        res.on('data', function(data){
            str += data;
        })
        res.on('end', function(data){
            texts[count] = str;
            completed++;
            if(completed == todo){
                texts.forEach(function(text){
                    console.log(text);
                })
            }
        })

        res.on('error', console.error);
    })
    
}