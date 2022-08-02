const express = require('express');
const path = require("path");
const app = express();
app.listen(8080, ()=>{
    console.log('Server is running on port 8080')
})

app.all('/' , (req, res, next)=>{
    res.sendFile(path.join(__dirname, '', 'SimpleAdder.html'));
})

app.get("/add.js",(req,res,next)=>{
    const operation = req.query.op
    let result = 0;
    switch (operation) {
        case "+":
            result = parseFloat(req.query.first) + parseFloat(req.query.second)
            break
        case "-":
            result = parseFloat(req.query.first) - parseFloat(req.query.second)
            break
        case "/":
            result = parseFloat(req.query.first) / parseFloat(req.query.second)
            break
        case "*":
            result = parseFloat(req.query.first) * parseFloat(req.query.second)
            break
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"/>
                <title>Calculator Web Site</title>
            </head>
            <body>
                <p>The result is: ${String(result)}</p>
            </body>
        </html> `);
    return res.end();
})
