const express = require('express');
const app = express();


var data = [1, 2, 3, 4];

app.get('/', function(req, res){
    res.send('Working');
});

app.get('/data', function(req, res){
    res.send(data);
});

app.post('/data/:number', function(req, res){
    console.log(typeof req.params.number);
    data.push(parseInt(req.params.number));
    console.log(typeof req.params.number);
    res.send(data);
});





app.listen(3000);