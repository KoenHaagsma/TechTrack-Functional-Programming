// const data = require('./tech-track-dataset.json');

const fs = require('fs');
const data = fs.readFileSync('./tech-track-dataset.json', 'utf-8');
const parsedData = JSON.parse(data);
console.log(parsedData);
