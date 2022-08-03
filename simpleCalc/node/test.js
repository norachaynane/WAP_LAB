const express = require("express")
const app = express()


app.use((req,res,next)=>{
    res.status(200).json({"FIRST":"I DID IT"})
    res.end()
});


module.exports = app;