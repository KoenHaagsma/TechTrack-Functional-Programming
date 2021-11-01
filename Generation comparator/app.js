import { fetchData } from './fetch.js';

// Need to use the limit in the URL, for the first generation
const firstGenerationPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

// Function to
function characterHeight(url) {
    const newArray = [];
    return fetchData(url)
        .then(async (data) => {
            const keys = Object.keys(data.results);
            for (const item of keys) {
                await fetchData(data.results[item].url).then((el) => {
                    const single = {
                        name: el.name,
                        height: el.height,
                    };
                    newArray.push(single);
                });
            }
            return newArray;
        })
        .catch((err) => {
            console.log(err);
        });
}

const newArray = await characterHeight(firstGenerationPokeURL);
console.log(newArray);
