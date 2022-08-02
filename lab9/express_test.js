const express = require("express")
const app = express();

app.listen(3000,()=>{
    console.log("you are running on port 3000")
})

app.use((req, res, next) => {
    console.log('This is always run');
    next();
});
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
});
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});