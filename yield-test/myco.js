var gen;

exports = module.exports = myco;
function myco(func) {
    gen = func();
    gen.next();
};

exports.wrap = function(func) {
    return function(args){
        func(args, function(err, files){
            gen.next(files);
        });
        return;
    };
};
