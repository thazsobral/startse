# Bordas avancadas

- Como trabalhar com Bordas arredondadas?
    
    A propriedade border-radius permite definir cantos arredondados para as bordas. O valor que a propriedade recebe é um tamanho numérico. É possível definir valores para os diferentes cantos:
    
    ```css
    border-top-left-radius
    border-top-right-radius
    border-bottom-right-radius
    border-bottom-left-radius
    ```
    
- Como trabalhar com Múltiplos valores na definição de bordas?
    - **4 valores**: topo-esquerda topo-direita base-direita base-esquerda
    - **3 valores:** topo-esquerda topo-direita/base-esquerda base-direita
    - **2 valores:** topo-esquerda/base-direita topo-direita/base-esquerda
    - **1 valor:** Para todos os lados
- Como trabalhar com Bordas elípticas?
    
    É possível definir para cada lado de um canto. Exemplo:
    
    ```css
    border-radius: 15px / 50px;
    ```
    
- Como trabalhar com Borda com imagens?
    
    A propriedade `border-image` permite definir uma imagem para a borda. A imagem será segmentada em 9 partes. Exemplo:
    
    [CSS Border Images](https://www.w3schools.com/css/css3_border_images.asp)