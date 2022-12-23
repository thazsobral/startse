# Comecando no JS

- Como executar o JavaScript?
    
    A forma mais básica é dentro de um documento .html
    
    ```bash
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Introdução ao JS :)</h1>
        <script>
            alert("Olá!")
            document.write("É isso ai !!!!")
        </script>
    </body>
    </html>
    ```
    
- Como criar uma mensagem de alerta?
    
    ```jsx
    alert("Olá!");
    ```
    
- Como escrever dentro de uma página web com JS?
    
    ```jsx
    document.write("É isso ai !!!!");
    ```
    
- Como escrever fora de uma página web com JS?
    
    ```jsx
    <body>
        <h1 id="t1">Introdução JS</h1>
        <script src="alert.js"></script>
    </body>
    ```
    
    ```jsx
    alert("Olá!! Seja bem-vindo!");
    ```
    
- Como chamar funções?
    
    ```jsx
    <body>
        <h1>Introdução a Formulário</h1>
        <form onsubmit="welcome()" id="login-form">
            <input id="name" type="text" placeholder="usuário">
            <input id="password" type="password" placeholder="senha">
            <button type="submit">Entrar</button>
        </form>
    
        <script src="index.js"></script>
    </body>
    ```
    
    ```jsx
    function welcome() {
        const name = document.querySelector("#name").value;
        alert(`Olá ${name}, seja bem-vindo!`);
    
        document.getElementById("login-form").style.display = "none";
    }
    ```
    
- Quais as características do var?
    - `var` pode ser declarado mais de uma vez
    - `var` na compilação se mantém no topo do escopo
    - `var` não respeita escopos
    - `var` pode ter seu valor alterado
- Quais as características do let?
    - `let` respeita o escopo
    - `let` não pode ser declarado mais uma vez
    - `let` pode ter seu valor alterado
- Quais as características do const?
    - `const` respeita o escopo
    - `const` não pode ser declarado mais uma vez
    - `const` não pode ter seu valor alterado
- Qual a diferença entre igual e idêntico?
    
    ```jsx
    == // para verificar se os valores são iguais
    1 == 1 // true
    1 == '1' // true
    1 == 'um' // false
    
    === // para verificar se os valores os tipos são iguais
    1 === 1 // true
    1 === '1' // false
    1 === 'um' // false
    
    ```