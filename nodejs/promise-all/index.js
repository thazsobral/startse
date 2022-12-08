import fetch from "node-fetch";

async function main() {
    console.log("hello brother");
    const user1 = "thazsobral";
    const user2 = "rprrafa";
    const api = "https://api.github.com";

    // essas podem ser executadas em paralelo
    const response1 = fetch(`${api}/users/${user1}`); 
    const response2 = fetch(`${api}/users/${user2}`); 
    // aqui ja é necessário esperaar as duas promises terminarem para ter as respostas
    // obs.: isso garante que não tenha perca de desempenho
    const promises = await Promise.all([response1, response2]); 
    const githubUser1 = await promises[0].json(); // converte a primeira em json
    const githubUser2 = await promises[1].json(); // converte a segunda em json
    console.log(githubUser1.id);
    console.log(githubUser2.id);
}

main();