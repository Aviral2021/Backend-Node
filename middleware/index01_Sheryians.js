const express = require('express');
const expressSession = require('express-session')
const app = express();


//---------- Middleware

// app.use(function(req, res, next){
//     console.log("hey hello")
//      next();
// });
// app.use(function(req, res, next){
//     console.log("hey hello 2nd middleware")
//      next();
// });

// app.get("/", function(req, res){
//     res.send("Something about main page");
// });

// app.get("about", function(req, res){
//     res.send("something about about page");
// });


//-------Expression Session


app.use(expressSession({
   secret: "random stuff",
   resave: false,
   saveUnInitalised: true
}));


app.get(function(req, res, next){
  res.send("hey");
});

app.get("/create", function(req, res){
    req.session.polo = true;
    res.send("done");
});

app.listen(4500);