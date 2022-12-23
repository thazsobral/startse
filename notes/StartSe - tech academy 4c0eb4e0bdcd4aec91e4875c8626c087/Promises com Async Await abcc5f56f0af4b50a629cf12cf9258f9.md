# Promises com Async / Await

- O que é async/await?
    
    Possibilita trabalhar com código assíncrono em um estilo similar ao código síncrono
    
- Como utilizar o async/await?
    
    ```jsx
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
    ```