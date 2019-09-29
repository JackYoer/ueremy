var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config/database');

// Connect to Database
// { useNewUrlParser: true, useUnified Topology: true } because
// the current URL string and Server Discovery and Monitoring engine are deprecated
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

// On Connection
mongoose.connection.on('connected', () => {
    console.log(`Connected to database ${config.database}`);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err}`);
});

var app = express();

var users = require('./routes/users');
var locations = require('./routes/locations');

// Port Number
var port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

app.use('/locations', locations);

// Index Route
app.get('/', (req,res) => {
    res.send('Hello World!')
});

// Start Server
app.listen(port, () => {
    console.log(`Server listening to: ${port}`)
});