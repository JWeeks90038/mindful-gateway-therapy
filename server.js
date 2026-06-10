const path = require('path');
const compression = require('compression');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

// Middleware for serving static files like CSS, images, videos, and scripts.
app.use(express.static(__dirname, {
    etag: true,
    lastModified: true,
    maxAge: '7d',
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
            return;
        }

        if (/\.(css|js|png|jpg|jpeg|gif|webp|svg|mp4|woff|woff2)$/i.test(filePath)) {
            res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
        }
    }
}));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// About route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Services route
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

// Contact route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Sign-up route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/terms-of-use', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms-of-use.html'));
});

app.get('/disclaimer', (req, res) => {
    res.sendFile(path.join(__dirname, 'disclaimer.html'));
});

// FAQ and blog hub routes
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq', 'index.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog', 'index.html'));
});

// Placeholder for other routes (you can add any additional ones you need)
app.get('/other-route', (req, res) => {
    res.send('This is another page or feature you may want to add.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});