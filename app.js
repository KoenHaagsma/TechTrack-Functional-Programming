const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
const dataPreCleaned = require('./data/data.json');
const { processDataToCounts, processDataToPercentages, setColorsToHex } = require('./public/js/functions');

function setTranslateCSSA(data) {
    // Random number for a
    const numArray = [];
    data.forEach((el) => {
        numArray.push(Math.ceil(Math.random() * 18) * (Math.round(Math.random()) ? 1 : -1));
    });
    return numArray;
}

function setTranslateCSSB(data) {
    // Random number for b
    const numArray = [];
    data.forEach((el) => {
        numArray.push(Math.floor(Math.random() * 40) + 1);
    });
    return numArray;
}

app.use(express.static('./public/'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const percentagePerColor = processDataToPercentages(dataPreCleaned, 'eye-color');
    const colorsToHex = setColorsToHex(dataPreCleaned, 'eye-color');
    console.log(percentagePerColor);
    res.render('home', {
        colors: percentagePerColor,
        hexColors: colorsToHex,
        title: 'Kleuren v/d ogen',
        translateA: setTranslateCSSA(colorsToHex),
        translateB: setTranslateCSSB(colorsToHex),
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
