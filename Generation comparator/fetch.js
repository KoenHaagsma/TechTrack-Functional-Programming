import fetch, { FetchError } from 'node-fetch';
const pokeURL = `https://pokeapi.co/api/v2/pokemon/pikachu/`;

async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const pokemon = await response.json();
    return pokemon;
}

export { fetchData };
