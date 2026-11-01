const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// GET / - Home route
app.get('/', (req, res) => {
    res.status(200).send('Hi Shiva Teja sir, Welcome to the BDF Lab Server');
});

// GET /about - Student details
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Pratik Jadhav',
        section: 'S-10'
    });
});

// GET /time - Current date and time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start Express server
app.listen(PORT, '0.0.0.0', () => {
    console.log('Express server running on port ' + PORT);
});
