import fs from "fs";

function getStudies() {
    let studies = new Promise((resolve, reject) => {
        return fs.readFile("../common/studies.json", function (err, data) {
            if(err) {
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });

    return studies;
}
getStudies()
    .then((data) => {
        let studies = data.studies;
        // uso do for para percorrer um array. Obs.: deve informar o número de repetições
        // for(let i = 0; i < studies.length - 1; i++) {
        //     console.log(`\nAs chaves de ${studies[i].name} são:`)
        //     // uso do for in: para percorrer as chaves das propriedades de um objeto
        //     for (const key in studies[i]) {
        //         console.log(key);
        //     }
        // }
        // uso do for of: é uma maineira mais simples de fazer o for padrão
        for (const study of studies) {
            console.log(study);
        }
    })
    .catch((err) => {
        console.error(err);
    });