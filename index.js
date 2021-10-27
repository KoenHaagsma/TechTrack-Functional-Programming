const dataPreCleaned = require('./data/data.json');
const data = require('./data/tech-track-dataset.json');

const eyecolor = [];
const windDirections = [];

// Get specific data
dataPreCleaned.forEach((e) => {
    eyecolor.push(e['eye-color']);
    windDirections.push(e['favourite-wind-direction']);
});

// Cleaning data (Removing Dash, Spaces and Capitalizing)
// function cleaningData(data) {
//     const cleanedArray = [];
//     data.forEach((e) => {
//         let string = removeDashAndSpaces(e);
//         string = firstLetterToUppercase(string);
//         cleanedArray.push(string);
//     });
//     return cleanedArray;
// }

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

// Count duplicate items
function howManyPerCategorie(data) {
    const counts = {};
    data.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
}

function calculatingPercentages(object) {
    // Calculating total value
    let total = 0;
    total += Object.values(object).reduce((a, b) => a + b);
    // Calculating percentage of total
}

console.log(cleaningData(eyecolor));
console.log(cleaningData(windDirections));
console.log(howManyPerCategorie(cleaningData(eyecolor)));
console.log(howManyPerCategorie(cleaningData(windDirections)));
console.log(calculatingPercentages(howManyPerCategorie(cleaningData(eyecolor))));
console.log(calculatingPercentages(howManyPerCategorie(cleaningData(windDirections))));
