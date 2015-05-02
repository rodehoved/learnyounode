function filteredLs(dir, ext, callback){
    var fs = require('fs');
    var path = require('path');
    fs.readdir(dir, function(err, list) {
        if(err) return callback(err);
        var files = [];
        var count = 0;
        list.forEach(function(file) {
            if(path.extname(file) === '.' + ext){
                files[count] = file;
                count++;
            }
        });
        callback(err, files);
    });
}

module.exports = filteredLs;