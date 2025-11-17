const express = require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash');


app.use(expressSession({
   resave:false,
   saveUninitialized: false,
   secret: "anything you like"
}));

app.use(flash());

app.get('/', function(req, res, next){
   req.flash("error", "invalid credentials");
   res.redirect("/error");
});
 

app.get('/error', function(req, res){
   let message = req.flash('error');

   res.send(message);
});

app.listen(4200);


