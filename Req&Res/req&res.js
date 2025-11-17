const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    console.log("Request Url:", req.url);
    console.log("Requested Method: ", req.method);
    res.send('Hello! This is the response from the server');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on the Port ${PORT}`)
})

