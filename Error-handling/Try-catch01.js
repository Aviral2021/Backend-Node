const express = require('express');
const app = express();

// Route for divison
app.get('/divide', function(req, res){
  try {
    let result = 10 / 0; // It gives Infinity

    // Check if the result is finite(means divison by zero)
    if(!isFinite(result)){
      
        //Manually throw an error is not finite
        throw new Error("Divison by zero is not allowed");
    }
    
    // IF no error, send result
    res.send(`Result is ${result}`);
  }

  catch(err){
    res.status(500);
    // Catch any error thrown inside try block
    res.send(`Something went wrong: ${err.message}`);
    
  }
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});

// 🧠 Quick Notes:
// 1️⃣ try → runs code that might throw an error

// 2️⃣ catch(err) → handles any error from try

// 3️⃣ throw → manually trigger an error

// 4️⃣ new Error('msg') → create custom error message
       //Error is a built-in JavaScript class used to create error objects.
      // new Error("message") creates an error object with the message you pass


// 5️⃣ if (!isFinite(result)) → checks if result is not a valid number (Infinity or NaN). isfinite is built in function javascript

// 6️⃣ res.send() → send normal success response

// 7️⃣ res.status(500).send() → send error response (500 = internal server error)

// 8️⃣ app.listen(3000) → start Express server on port 3000
