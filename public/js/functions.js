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

// console.log(processDataToCounts(dataPreCleaned, 'eye-color'));
// console.log(processDataToPercentages(dataPreCleaned, 'eye-color'));

module.exports = {
    processDataToCounts: processDataToCounts,
    processDataToPercentages: processDataToPercentages,
};