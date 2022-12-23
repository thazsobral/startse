# Caixa de texto e botoes

- O que é uma caixa de texto?
    
    Utilizado para um texto longo.
    Exemplo
    
    ```html
    <textarea id="texto" name="texto" rows="10" cols="60">
    	Era uma vez...
    </textarea>
    ```
    
- O que é Datalist?
    
    Utilizado para permitir uma entrada de texto a partir de uma lista de valores.
    Sintaxe:
    
    ```html
    <input type="text" list="sabores" id="isabores" name="sabores">
    <datalist id="sabores">
     <option value="Chocolate">
     <option value="Coco">
     <option value="Menta">
     <option value="Morango">
     <option value="Baunilha">
    </datalist>
    ```
    
- O que são botões?
    
    Utilizado para criar um botão
    
    Sintaxe:
    
    ```html
    <button type="button">Adicionar</button>
    ```
    
    Tipos:
    
    - `submit` - Envia os dados do formulário
    - `reset` - Volta os dados na configuração original
    - `button` - Botão para uso geral
- Como funciona os Botões com input?
    
    Utilizado para criar um botão.
    
    Sintaxe:
    
    ```html
    <input type="button" value="Adicionar">
    <input type="submit" value="Enviar">
    <input type="reset" value="Limpar formulário">
    ```