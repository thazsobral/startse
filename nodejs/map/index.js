import { getPeople } from "./sw-service.js";

async function main() {
    const swPeople = await getPeople();
    const swPeopleName = swPeople.map(person => {
        const { name, height, gender } = person;
        return { name, height, gender }
    })

    console.log(swPeopleName);
}

main();