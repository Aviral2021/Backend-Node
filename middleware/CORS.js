const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// Home route

app.get('/', (req, res) => {
   res.send("Heyyy")
    

});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on the Port ${PORT}`)
})
