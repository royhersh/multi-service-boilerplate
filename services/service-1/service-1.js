const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Service 1');
});

module.exports = app;