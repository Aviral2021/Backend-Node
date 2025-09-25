const express = require('express');

const app = express();


app.use(function(req, res, next){
    console.log("hey hello")
     next();
});
app.use(function(req, res, next){
    console.log("hey hello 2nd middleware")
     next();
});

app.get("/", function(req, res){
    res.send("Something about main page");
});

app.get("about", function(req, res){
    res.send("something about about page");
});

app.listen(4500);