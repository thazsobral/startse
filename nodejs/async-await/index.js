import fetch from "node-fetch";

async function main() {
    console.log("hello brother");
    const user = "thazsobral";
    const api = "https://api.github.com";

    const response = await fetch(`${api}/users/${user}`);
    const githubUser = await response.json();
    console.log(githubUser.login)
}

main();