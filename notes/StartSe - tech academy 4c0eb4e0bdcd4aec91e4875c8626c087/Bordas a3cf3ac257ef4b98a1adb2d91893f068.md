# Bordas

- Como definir bordas?
    
    A borda é definida por 3 características:
    
    - Estilo
    - Tamanho
    - Cor
    
    Para definir a mesma borda em todos os lados use:
    
    ```css
    border: tamanho estilo cor;
    ```
    
- Como definir o estilo da borda?
    
    A propriedade border-style define o estilo da borda. Os valores aceitos são:
    
    - `dotted`
    - `dashed`
    - `solid`
    - `double`
    - `groove`
    - `ridge`
    - `inset`
    - `outset`
    - `none`
    - `hidden`
    
    ![Untitled](Bordas%20a3cf3ac257ef4b98a1adb2d91893f068/Untitled.png)
    
    Exemplo:
    
    ```css
    p { border-style: double; }
    ```
    
    Para definir múltiplos estilos:
    
    ```css
    border-style: topo direita base esquerda
    border-style: topo direita-esquerda base
    border-style: topo-base direita-esquerda
    ```
    
    ```css
    p {
     border-top-style: dotted;
     border-right-style: solid;
     border-bottom-style: dotted;
     border-left-style: solid;
    }
    ```
    
- Como definir tamanho para a borda?
    
    A propriedade border-width define o tamanho da borda.
    
    - O valor da propriedade é definido em alguma unidade de medida. Exemplo:
        
        ```css
        p { border-width: 5px; }
        ```
        
    - Para definir múltiplos tamanhos:
        
        ```css
        border-width: topo direita base esquerda
        border-width: topo direita-esquerda base
        border-width: topo-base direita-esquerda
        ```
        
    
    ```css
    p {
     border-top-width: 1px;
     border-right-width: 0.2em;
     border-bottom-width: 2px;
     border-left-width: 4px;
    }
    ```
    
- Como definir a cor da borda?
    
    A propriedade border-color define a cor da borda
    
    - Existem diferentes maneiras de definir uma cor (vamos usar o nome). Exemplo:
        
        ```css
        p { border-color: red; }
        ```
        
    - Para definir múltiplas cores:
        
        ```css
        border-color: topo direita base esquerda
        border-color: topo direita-esquerda base
        border-color: topo-base direita-esquerda
        ```
        
    
    ```css
    p {
     border-top-color: black;
     border-right-color: green;
     border-bottom-color: blue;
     border-left-color: red;
    }
    ```
    
- Quais os tipos de bordas que podem ser defnidas?
    
    É possível definir as 3 propriedades para cada uma das bordas
    
    - `border-left`
    - `border-right`
    - `border-top`
    - `border-bottom`