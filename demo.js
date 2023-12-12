// Import necessary modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to TalentSprint Node.js Demo!');
});

// Define a route for the about page
app.get('/about', (req, res) => {
    res.send('changes for branch2');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
