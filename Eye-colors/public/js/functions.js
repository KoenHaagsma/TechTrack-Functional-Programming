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
// Used the color translation from the package, so the translation are nog 100% valid
function translator(string) {
    switch (string) {
        case 'Bruin':
            return (string = 'chocolate 4');
            break;
        case 'Donkerbruin':
            return (string = 'burntsienna');
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
        //
        counts[x] = (counts[x] || 0) + 1; // For each count of color add new one or add + 1
    });
    return counts;
}

function calculatingPercentages(object) {
    let result = {};
    // Calculating total value
    const total = Object.values(object).reduce((a, b) => a + b, 0);
    // Calculating percentage of total per key value
    for (const [key, value] of Object.entries(object)) {
        result[key] = (result[key] || 0) + Math.round((value / total) * 100);
    }
    return result;
}

function processDataToCounts(data, keyName) {
    let specificData = getSpecificData(data, keyName);
    specificData = cleaningData(specificData);
    return howManyPerCategorie(specificData);
}

function processDataToPercentages(data, keyName) {
    let specificData = getSpecificData(data, keyName);
    specificData = cleaningData(specificData);
    specificData = howManyPerCategorie(specificData);
    return calculatingPercentages(specificData);
}

function keyToHex(data) {
    const onlyKeys = Object.keys(data)
        .map((el) => translator(el))
        .map((el) => toHex(el));
    return onlyKeys;
}

module.exports = {
    processDataToCounts,
    processDataToPercentages,
    setColorsToHex,
    translator,
    keyToHex,
};
