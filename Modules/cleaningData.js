function getSpecificData(data, keyName) {
    const specificArray = [];
    data.forEach((e) => {
        specificArray.push(e[keyName]);
    });
    return specificArray;
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

async function cleaningData(data, keyName) {
    const specificData = getSpecificData(data, keyName);
    const cleanedArray = specificData.map((el) => removeDashAndSpaces(el));
    return await cleanedArray.map((el) => firstLetterToUppercase(el));
}

module.exports = {
    cleaningData,
};
