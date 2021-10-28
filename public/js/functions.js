const data = require('../../data/data.json');
const toHex = require('colornames');

// Get the specific data you want from the dataset
function getSpecificData(data, keyName) {
    const specificArray = [];
    data.forEach((e) => {
        specificArray.push(e[keyName]);
    });
    return specificArray;
}

// Cleaning data (Removing Dash, Spaces, and Capitalizing)
function cleaningData(data) {
    const cleanedArray = data.map((el) => removeDashAndSpaces(el));
    return cleanedArray.map((el) => firstLetterToUppercase(el));
}

// Removing of dashed and spaces
function removeDashAndSpaces(string) {
    let str = string.replace(/\s+/g, '');
    return str.replace('-', '');
}

// Setting first letter to Uppercase
function firstLetterToUppercase(string) {
    let str = string.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Set colors to their English name
function translateToEnglish(data, keyName) {
    const cleanedData = cleaningData(getSpecificData(data, keyName));
    // Later i could use maybe the Google translate API but it's payed
    return cleanedData.map((el) => translator(el));
}

// Set colors to HEX
function setColorsToHex(data, keyName) {
    const englishNames = translateToEnglish(data, keyName);
    return englishNames.map((el) => toHex(el));
}

// Translator
function translator(string) {
    switch (string) {
        case 'Bruin':
            return (string = 'chocolate 4');
            break;
        case 'Donkerbruin':
            return (string = 'saddlebrown');
            break;
        case 'Blauw':
            return (string = 'royalblue 1');
            break;
        case 'Grijs':
            return (string = 'Coldgrey');
            break;
        case 'Groengrijs':
            return (string = 'Palegreen 4');
            break;
        case 'Groenblauw':
            return (string = 'Turquoiseblue');
            break;
        case 'Groen':
            return (string = 'Green');
            break;
    }
}

// Count duplicate items
function howManyPerCategorie(data) {
    const counts = {};
    data.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
}

function calculatingPercentages(object) {
    let result = {};
    // Calculating total value
    const total = Object.values(object).reduce((a, b) => a + b, 0);
    // Calculating percentage of total per key value
    for (const [key, value] of Object.entries(object)) {
        //const percentage = (value / total) * 100;
        result[key] = (result[key] || 0) + Math.round((value / total) * 100);
    }
    return result;
}

function processDataToCounts(data, key) {
    let specificData = getSpecificData(data, key);
    specificData = cleaningData(specificData);
    specificData = howManyPerCategorie(specificData);
    return specificData;
}

function processDataToPercentages(data, key) {
    let specificData = getSpecificData(data, key);
    specificData = cleaningData(specificData);
    specificData = howManyPerCategorie(specificData);
    specificData = calculatingPercentages(specificData);
    return specificData;
}

module.exports = {
    processDataToCounts: processDataToCounts,
    processDataToPercentages: processDataToPercentages,
    setColorsToHex: setColorsToHex,
};
