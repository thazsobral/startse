# Promises

- Qual o problema em utilizar callbacks?
    - **Callback hell**: onde o código fica muito complexo de entender e dar manutenção.
        
        ![Untitled](Promises%20b3f3bcc4748c4d4f8a0af02c424332ff/Untitled.png)
        
    - **Paralelismo**: onde o código também pode ficar complexo de entender e dar manunteção.
        
        ![Untitled](Promises%20b3f3bcc4748c4d4f8a0af02c424332ff/Untitled%201.png)
        
        Além da duplicidade de código para o funcionamento correto
        
        ![Untitled](Promises%20b3f3bcc4748c4d4f8a0af02c424332ff/Untitled%202.png)
        
- O que é Promises?
    
    É um objeto para trabalhar com a assincronismo em javascript.
    
- Por que utilizar Promises?
    
    A questão é mais a organização do código do que de fato a funcionalidade.
    
- Qual o Ciclo de Vida das Promises?
    - **Pending**: estado inicial
    - **Fulfilled**: executou com sucesso
    - **Rejected**: a operação falhou
    
    ![Untitled](Promises%20b3f3bcc4748c4d4f8a0af02c424332ff/Untitled%203.png)
    
- Por que utilizar then e catch?
    
    O `then()` é usado para executar a função quando der sucesso.
    
    Se algum problema ocorrer é executado o `catch()`.
    
    Ambas as funções retornam promisses para possibilitar tratar os estados e executar outros código se necessário.
    
- Como criar uma promisse?
    
    Para criar uma Promise, utilize:
    
    ```jsx
    function hello(number) {
        const myPromise = new Promise(function(resolve, reject) { // criando a promise
            setTimeout(function() { // iniciando a função assincrona
                console.log("hello brothers");
                if(number == 1) {
                    reject(); // para disparar o resultado de reject
                } else {
                    resolve(); // para disparar o resultado de resolve
                }
            }, 0);
        });
        return myPromise; // retorna o resultado da promise;
    };
    
    function myCallback() {
        console.log("called me?");
    };
    
    function myFunctionToReject() {
        console.log("My Exception!!")
    };
    
    hello(1)
    	.then(myCallback) // caso o resoltado seja do resolve
    	.catch(myFunctionToReject); // caso o resoltado seja do reject
    ```
    
    Podemos utilizar o promisify para converter callback em Promise:
    
    ```jsx
    import fs from 'fs';
    import { promisify } from 'util';
    const readFilePromise = promisify(fs.readFile);
    ```