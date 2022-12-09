import { getPeople } from "./swapi.js";

async function main() {
    const swPeople = await getPeople();
    const swPeopleName = swPeople
                            .filter(person => {
                                return person.gender === "male"
                            })
                            .map(data => {
                                return {
                                    name: data.name,
                                    height: data.height,
                                    gender: data.gender
                                };
                            })

    console.log(swPeopleName);
}

main();