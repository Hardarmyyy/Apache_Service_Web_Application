const path = require('path')
const express = require('express'); // importing the express module inside our node js;
const app = express(); // creating an instance of express and storing it in a variable;

const validateAvailability = require('./Middleware/availability')

// Apply the validateAvailability middleware to all routes

app.use((req, res, next) => {
    console.log(`${req.path} ${req.method}`)
    next()
})

app.use(validateAvailability);

app.get('/', (req, res) => { // the get () takes in two parameters; 1: route, 2: callback functions;
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/service', (req, res) => { // the get () takes in two parameters; 1: route, 2: callback functions;
    res.sendFile(path.join(__dirname, 'pages', 'service.html'));
});

app.get('/contact', (req, res) => { // the get () takes in two parameters; 1: route, 2: callback functions;
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('*', (req, res) => { // the get () takes in two parameters; 1: route, 2: callback functions;
    res.sendFile(path.join(__dirname, 'pages', 'notfound.html'));
});

app.listen(3800, () => {
    console.log('Server listening on port 3800');  
})