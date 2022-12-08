import { getPeople, getSW } from "./sw-service.js";

async function main() {
    const results = [];

    const swPeople = await getPeople();

    for (const person of swPeople) {
        results.push({
            name: person.name,
            films: person.films
        });
    }

    for (let index = 0; index < results.length; index++) {
        let arrayTemp = []
        for (const film of results[index].films) {
            let temp = await getSW(film);
            arrayTemp.push(temp.title);
        }
        results[index].films = arrayTemp;
    }

    console.log(results);
}

main();