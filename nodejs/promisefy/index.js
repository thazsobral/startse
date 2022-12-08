import fs from "fs";
import { promisify } from "util";

const myReadFile = promisify(fs.readFile); // transforma função construida para callback em promise

myReadFile("./studies.json")
    .then((data) => {
        console.log(JSON.parse(data));
        return;
    })
    .catch((error) => {
        console.error(error);
        return "meu erro";
    });