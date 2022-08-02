const express = require("express")
const  app = express()
/*
app.get("/add",(req,res,next)=>{
    const operation = req.op.value
    var res = 0;
    switch (operation) {
        case "+":
            res = parseFloat(req.first) + parseFloat(req.second)
            break
        case "-":
            res = parseFloat(req.first) - parseFloat(req.second)
            break
        case "/":
            res = parseFloat(req.first) / parseFloat(req.second)
            break
        case "*":
            res = parseFloat(req.first) * parseFloat(req.second)
            break
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"/>
                <title>Calculator Web Site</title>
            </head>
            <body>
                <p>The result is: ${String(res)}</p>
            </body>
        </html> `);
    return res.end();

 })
exports.add = function (req, res, vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"/>
                <title>Calculator Web Site</title>
            </head>
            <body>
                <p>The sum is: ${String(sum)}</p>
            </body>
        </html> `);
    return res.end();
};*/