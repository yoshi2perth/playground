var myco = require('./myco.js');
var fs = require('fs');

myco(function* (){
    var files = yield myco.wrap(fs.readdir)('.');
    console.log("files = "+files);
    return;
});
