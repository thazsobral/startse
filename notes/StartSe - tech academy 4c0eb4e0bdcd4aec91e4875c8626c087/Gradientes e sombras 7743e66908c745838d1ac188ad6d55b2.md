# Gradientes e sombras

- Quais os tipos de gradientes?
    
    São transições entre 2 ou mais cores. Tipos:
    
    - Linear
    - Radial
    - Cônico
- Como trabalhar com Gradiente linear?
    
    Sintaxe:
    
    ```css
    background-image: linear-gradient(direção, cor1, cor2, …, corN)
    ```
    
    Direção
    
    ```css
    to left / to right / to bottom / to top
    
    to bottom right / to top left
    ```
    
- Como trabalhar com Gradiente radial?
    
    Sintaxe:
    
    ```css
    background-image: radial-gradient(shape size, cor1, cor2, …, corN)
    ```
    
    Shape
    
    ```css
    circle / ellipse
    ```
    
    Size
    
    ```css
    closest-side / closest-corner / farthest-side / farthest-corner
    ```
    
- Como trabalhar com Gradiente cônico?
    
    Sintaxe:
    
    ```css
    background-image: conic-gradient(cor1, cor2, …, corN)
    ```
    
- Como trabalhar com Sombras?
    
    Textos
    
    `text-shadow`
    
    Caixas
    
    `box-shadow`
    
- Como trabalhar com Sombras em textos?
    
    Sintaxe
    
    ```css
    text-shadow: horizontal vertical blur cor;
    ```
    
    Exemplos
    
    ```css
    text-shadow: 2px 2px red;
    
    text-shadow: 2px 2px 5px red;
    
    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF
    ```
    
- Como trabalhar com Sombras em caixas?
    
    Sintaxe
    
    ```css
    box-shadow: horizontal vertical blur tamanho cor;
    ```
    
    Exemplos:
    
    ```css
    box-shadow: 10px 10px lightblue;
    
    box-shadow: 10px 10px 5px lightblue;
    
    box-shadow: 10px 10px 5px 12px lightblue;
    ```