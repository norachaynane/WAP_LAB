const dt = require('./myModule');

const  http = require("http")
http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("The date and time are currently: " + dt.mydate)


} ).listen(8080)
