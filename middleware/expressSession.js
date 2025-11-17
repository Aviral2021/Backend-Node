const express = require("express");
const session = require("express-session");
const app = express();

app.use(session({
  secret: "mySecretKey",       // used to sign the session ID cookie
  resave: false,               // don’t save session again if not modified
  saveUninitialized: false,    // don’t create session until something stored
}));

app.get("/", (req, res) => {
  req.session.username = "Aviral"; // store data
   console.log(req.session);  // 👈 log full session object
  res.send("Session created!");
});

app.get("/get", (req, res) => {
  res.send(req.session.username);  // access session data
});

app.listen(3100, () => console.log("Server started"));
