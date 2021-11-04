import fetch, { FetchError } from 'node-fetch';

// https://www.javascripttutorial.net/javascript-fetch-api/
async function fetchData(url) {
    try {
        // Try catch to handle fetch errors
        let res = await fetch(url);
        return await res.json(); // returning JSON parsed data to get processed in app.js
    } catch (error) {
        console.log(error);
    }
}

export { fetchData };
