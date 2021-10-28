const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
const dataPreCleaned = require('./data/data.json');
const functions = require('./public/js/functions');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
