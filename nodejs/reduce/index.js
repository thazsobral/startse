import { getPeople } from "./swapi.js";

async function main() {
    const swPeople = await getPeople();
    const mediaHeight = swPeople.reduce((total, person) => {
        total += Number(person.height);
        return total;
    }, 0);

    console.log(`A media de altura dos personagens é ${mediaHeight} cm.`);
}

main();