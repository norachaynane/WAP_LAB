const http = require('http')
const url = require('url');

http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'})
    var par = ur.parse(req.url,true).query;
    var text = par.year +" " + par.month

    res.end(text)
}).listen(808)