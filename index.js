const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();


// Enable CORS
server.use(cors());

// Middleware to parse JSON bodies
server.use(express.json());

// Handle POST requests to /demo
server.post('/demo', (req, res) => {
    const { fullName, email, password } = req.body;
    console.log(`Received data: Full Name: ${fullName}, Email: ${email}, Password: ${password}`);

    // Respond with a detailed message
    res.status(200).json({
        message: 'Data received successfully',
        data: {
            fullName,
            email
        }
    });
});

// Handle GET requests to /demo
server.get('/demo', (req, res) => {
    res.send('hello world 123');
});

// Start the server
server.listen(5500, () => {
    console.log('Server started on http://localhost:5500');
});
