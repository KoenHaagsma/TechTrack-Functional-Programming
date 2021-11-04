import { fetchData } from './fetch.js';

// Need to use the limit in the URL, for the first generation
const firstGenerationPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

// Get stats for all characters
function characterDetails(url) {
    const newArray = [];
    return fetchData(url) // First fetch to get all data, pokemon name + url to details
        .then(async (data) => {
            const keys = Object.keys(data.results);
            for (const item of keys) {
                await fetchData(data.results[item].url).then((el) => {
                    // Fetching details per pokemon
                    const single = {
                        name: el.name,
                        height: el.height / 10, // In meters
                        weight: el.weight / 10, // in KG
                    };
                    newArray.push(single);
                });
            }
            return newArray; // Returning array after all fetches in the for loop are done.
        })
        .catch((err) => console.log(err));
}

function getSingleCharacterSecondWay(array, characterName) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (characterName === `${array[i].name}`) {
            // Search for the Pokemon name the user has filled in and pulling all data from that specific pokemon
            result.push(array[i]);
        }
    }
    return result;
}

console.log(await characterDetails(firstGenerationPokeURL));
console.log(getSingleCharacterSecondWay(await characterDetails(firstGenerationPokeURL), 'pikachu'));
