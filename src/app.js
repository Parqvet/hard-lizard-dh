const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + 'views'));
app.set('views engine', 'ejs');

// middlewares
app.use(morgan('dev'));

// routes


// 404 handler
app.use((req, res) => {
    res.status(404).send('404 not found');
})

module.exports = app;