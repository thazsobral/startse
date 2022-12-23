# Caixas de selecao

- O que é Grupo de elementos?
    
    Para reunir um grupo de elementos agrupados utilizamos o elemento. O título do grupo é definido pelo elemento. Exemplo:
    
    ```html
    <fieldset>
     <legend>Grupo de elementos</legend>
     …
    </fieldset>
    ```
    
- O que é Caixa de seleção múltiplas?
    
    Utilizado para permitir que o usuário selecione múltiplas opções.
    
    Exemplo:
    
    ```html
    <input type="checkbox" id="item1" name="item1" value="1">
    <label for="item1">Axé</label>
    ```
    
    O atributo `checked` seleciona uma caixa.
    
- O que é Caixa de seleção única?
    
    Utilizado para permitir que o usuário selecione uma única opção. Sintaxe:
    
    ```html
    <input type="radio" name="opcao" value="1" id="op1"> 
    <label for ="op1">Opção 1</label>
    <input type="radio" name="opcao" value="2" id="op2">
    <label for ="op2">Opção 2</label>
    <input type="radio" name="opcao" value="3" id="op3">
    <label for ="op3">Opção 3</label>
    ```
    
    É necessário utilizar o mesmo nome para formar um grupo de opções. O atributo `checked` seleciona uma caixa.