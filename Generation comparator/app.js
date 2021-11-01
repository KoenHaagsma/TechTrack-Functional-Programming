import { fetchData } from './fetch.js';

const firstGenerationPokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

function setArray(url) {
    const newArray = [];
    return fetchData(url)
        .then(async (data) => {
            const keys = Object.keys(data.results);
            for (const item of keys) {
                await fetchData(data.results[item].url).then((pokemon) => {
                    const single = {
                        name: pokemon.name,
                        height: pokemon.height,
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

const newArray = await setArray(firstGenerationPokeURL);
console.log(newArray);
