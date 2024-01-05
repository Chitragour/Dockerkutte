var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', (req, res)=>{res.send("Welcome to the world of Flowers ");});
app.listen(5555);
console.log("App is Listening on Port 5555");