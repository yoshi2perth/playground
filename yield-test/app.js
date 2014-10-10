var http = require('http');

// use callback
/*
var req_typical = function(url) {
    var get = http.get(url, function(res){
        console.log(res);
    });
};

req_typical('http://www.yahoo.co.jp');
*/

// use yield
var res, gen;

var yield_callback = function() {
    res = arguments;
    gen.next();
};

var req_yield = function* (url) {
    yield http.get(url, yield_callback);

    console.log(res);
    return;
};

gen = req_yield('http://www.yahoo.co.jp');
gen.next();


