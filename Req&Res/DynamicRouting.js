const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send("Something about main page");
});

app.get('/profile/:username', function(req, res){
    res.send("Something about harsh page");
})














const PORT = 3100;
app.listen(PORT, () => {
   console.log(`Server running on the port: ${PORT}`)
});