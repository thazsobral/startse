import fetch from "node-fetch";

const url = "https://swapi.dev/api";

async function getPeople(page=1) {
    const response = await fetch(`${url}/people?page=${page}`);
    const people = await response.json();
    return people.results;
}

async function getSW(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

export { getPeople, getSW };