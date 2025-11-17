const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("heyy ")
});


//--> 1. Normal Try-Catch (Inside a Route)

app.get('/divide', function(req, res){

    try {

        let result = 10/ 0; // example operation
        
        res.send(`Result is ${result}`);
    }
    catch(err){
          res.status(500).send('Something went wrong');
    }
});




//---> 2. Custom Error Middleware (Global Handler)

// app.use(function(err, req, res, next){
//    console.error(err.stack); // log error
//    res.status(500).send('Internal server error');
// });




//--> 3. Throwing / Forwarding Errors
//    app.get('/test', function(req, res, next){
//     const error = new Error('Something broke');
//     next(error); // send it to the error handling middleware
//    });

   
 
//    // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error('Error:', err.message);
//   res.status(500).send('Something went wrong!');
// });

app.listen(4000);