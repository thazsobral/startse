# Tamanho da caixa

- O que é model box?
    
    ![Untitled](Tamanho%20da%20caixa%20bfbb99e5f25c4937b097ce392d506a9c/Untitled.png)
    
- Como é definido o tamanho da caixa?
    
    Por padrão o tamanho de um elemento é calculado por:
    
    ```css
    Largura = width + padding + border
    Altura = height + padding + border
    ```
    
    Ao definir uma altura ou largura o elemento terá um valor maior do que o valor definido. No entanto, existe uma propriedade chamada de `box-sizing` que pode corrigir este comportamento.
    
- O que é Box-sizing?
    
    Os valores que a propriedade aceita são:
    
    - `content-box` - comportamento padrão
    - `border-box` - Inclui o espaçamento interno e a borda como parte do tamanho
    
    Exemplo:
    
    ```css
    p { box-sizing: border-box; }
    ```
    
    ```css
    * { box-sizing: border-box; }
    ```