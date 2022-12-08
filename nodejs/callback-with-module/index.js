import fs from "fs";

let studies = fs.readFile("../common/studies.json", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(JSON.parse(data));
});