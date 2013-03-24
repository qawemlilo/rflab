var fs = require('fs'), Cache;


Cache = function (files, dir) {
    var self = this; 
    
    self.cache = Object.create({});
   
    files.forEach(function (file) {
        var data = fs.readFileSync(dir + '/' + file + '.html', 'utf8');
        self.cache[file] = data;
    });
};




Cache.prototype.renderPage = function (page) {
    return this.cache['header']  + this.cache[page] + this.cache['footer'];   
};




module.exports = Cache;
