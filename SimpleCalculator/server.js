const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/css", express.static(__dirname + "/css"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/SimpleAdder.html");
});

app.get("/back", (req, res) => {
  res.redirect("/");
});

app.post("/calculate", (req, res, next) => {
  let result = 0.0;
  const first = parseInt(req.body.first);
  const second = parseInt(req.body.second);
  const operation = req.body.operation;

  if (operation === "add") result = first + second;
  if (operation === "subtract") result = first - second;
  if (operation === "multiply") result = first * second;
  
  if (operation === "divide") result = first / second;

  res.status(200).send(`<!DOCTYPE html>
  <html lang="en">
    <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
        <link rel="stylesheet" href="/css/style.css" />
   </head>
   <body>
     <p>The ${operation} is: <span>${String(
    new Intl.NumberFormat().format(result)
  )}</span></p>
     <p><a href="/back">Another calculation</a></p>
   </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`Web Server started on port ${port}`);
});
