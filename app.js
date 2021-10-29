const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
const dataPreCleaned = require('./data/data.json');
const { processDataToCounts, processDataToPercentages, setColorsToHex } = require('./public/js/functions');

app.use(express.static('./public/'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const percentagePerColor = processDataToPercentages(dataPreCleaned, 'eye-color');
    const colorsToHex = setColorsToHex(dataPreCleaned, 'eye-color');
    res.render('home', {
        colors: percentagePerColor,
        hexColors: colorsToHex,
        title: 'Kleuren v/d ogen',
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
