# Modo Estrito no JavaScript

- O que é Modo Estrito (Strict Mode)?
    
    Por padrão, a **linguagem JavaScript não exige a declaração de variáveis**. Isso **pode gerar erros** e confusões **que dificultam tanto a escrita como a revisão do código**. **Para evitar** este tipo de problema pode-se definir que a linguagem JavaScprit seja **executada em modo estrito** (strict mode).
    
- Como usar o Strict Mode?
    
    Para **utilizar o modo estrito** em todo o script pode-se **incluir a seguinte string no começo** do script:
    
    ```jsx
    'use strict';
    ```
    
    ou
    
    ```jsx
    "use strict;"
    ```
    
    Se inserir a string acima dentro de uma função, **o modo estrito estará habilitado apenas dentro do escopo da função**.
    
    O código abaixo não apresenta erros
    
    - `nata1` e `nata2` são interpretadas como outras variáveis ao invés de erros de digitação de `nota1` e `nota2`
    - `nata1` e `nata2` são interpretadas normalmente, apesar de não terem sido declaradas anteriormente com let
    
    ![Untitled](Modo%20Estrito%20no%20JavaScript%200e171f2b4d8249bfabb797f1d99ae18f/Untitled.png)
    
    O código ao lado apresenta o seguinte erro no console do navegador:
    
    ![Untitled](Modo%20Estrito%20no%20JavaScript%200e171f2b4d8249bfabb797f1d99ae18f/Untitled%201.png)
    
    - (`nata1` não foi definida na linha 6 do arquivo `index.js`)
    
    Neste caso, ficaria fácil perceber se ocorreu um erro de digitação ou se faltou declarar uma variável chamada `nata1`
    
    ![Untitled](Modo%20Estrito%20no%20JavaScript%200e171f2b4d8249bfabb797f1d99ae18f/Untitled%202.png)