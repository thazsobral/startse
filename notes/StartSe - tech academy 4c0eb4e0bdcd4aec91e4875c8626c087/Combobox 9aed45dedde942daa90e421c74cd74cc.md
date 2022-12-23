# Combobox

- O que é Caixa de seleção?
    
    Utilizado para oferecer uma lista de escolhas para o usuário. Normalmente utilizado há muitas opções para ser apresentado. Sintaxe:
    
    ```html
    <select name="opcao" id="opcoes">
     <option value="1">Primeiro item</option>
     <option value="2" selected>Segundo item</option>
     <option value="3">Terceiro item</option>
    </select>
    ```
    
- O que é Caixa de seleção com grupos?
    
    Permite criar grupos de opções. O elemento utilizado é o `<optgroup>`. Sintaxe
    
    ```html
    <optgroup label="Grupo A">
     <option value="1">Primeiro item</option>
     <option value="2">Segundo item</option>
     <option value="3">Terceiro item</option>
     <option value="4" disabled>Quarto item</option>
    </optgroup>
    ```
    
- Quais as Opções de Caixa de seleção?
    
    O atributo `multiple` permite que múltiplas opções possam ser selecionadas. O atributo `size` permite exibir um número maior de opções ao mesmo tempo