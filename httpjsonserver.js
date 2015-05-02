var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'application/json'});
    request = url.parse(req.url, true);
    if(request.pathname == '/api/parsetime'){
        var dato = new Date(Date.parse(request.query.iso));
        var tid = {'hour': dato.getHours(), 'minute': dato.getMinutes(), 'second': dato.getSeconds()};
        res.end(JSON.stringify(tid));
    }else if(request.pathname == '/api/unixtime'){
        res.end(JSON.stringify({'unixtime': Date.parse(request.query.iso)}));
    }
})
server.listen(process.argv[2]);