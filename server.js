const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for serving static files like CSS, images, etc.
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// About route
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

// Services route
app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/services.html');
});

// Contact route
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Sign-up route (just redirects to third-party sign-up page)
app.get('/signup', (req, res) => {
    res.redirect('https://externalwebsite.com/signup'); // Redirect to external sign-up page
});

// Placeholder for other routes (you can add any additional ones you need)
app.get('/other-route', (req, res) => {
    res.send('This is another page or feature you may want to add.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});