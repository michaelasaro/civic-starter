// Express server setup
const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

// Serve static files from the project root
app.use(express.static(path.join(__dirname, './')));

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('This page cannot be located.');
});
