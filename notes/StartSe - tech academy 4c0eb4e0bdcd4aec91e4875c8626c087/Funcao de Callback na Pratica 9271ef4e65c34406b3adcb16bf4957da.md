# Funcao de Callback na Pratica

- O que é callback?
    
    É uma função executada após o processamento de outra função, ou seja, em diversos casos podemos ter situações de execuções assincronas no javascript, o que pode causar resultados invesperdos.
    
    ```jsx
    function hello(callback) {
        setTimeout(function() {
            console.log("hello brothers");
        }, 0);
    }
    
    function myCallback() {
        console.log("called me?");
    }
    
    hello();
    myCallback();
    // > called me?
    // > hello brothers
    ```
    
    Pra essas situações é importante entender e trabalhar com o conceito de callbacks.
    
    ```jsx
    function hello(callback) {
        setTimeout(function() {
            console.log("hello brothers");
    	      callback();
        }, 0);
    }
    
    function myCallback() {
        console.log("called me?");
    }
    
    hello(myCallback);
    // > hello brothers
    // > called me?
    ```