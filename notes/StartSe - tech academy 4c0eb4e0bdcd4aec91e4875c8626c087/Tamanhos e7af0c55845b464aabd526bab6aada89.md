# Tamanhos

- O que é altura e largura?
    - Os elementos de blocos podem ter sua altura e largura definidos
    - Use as propriedades height e width
    - Os valores para estas propriedades podem ser:
        - auto - o navegador define qual será o tamanho
        - tamanho - px, %, …
        - initial - Define o tamanho padrão
        - inherit - Define o mesmo dos pais
    
    Exemplo:
    
    ```css
    div { width: 70%; height: 50px; }
    ```
    
- O que é altura e largura máxima?
    - Define o tamanho máximo de um elemento
    - Este será o tamanho apresentado se a interface for maior do que o tamanho
    - Caso a tela seja menor, o elemento terá um tamanho menor
    
    Exemplo:
    
    ```css
    div { max-width: 100px; max-height: 50px; }
    ```
    
- O que é altura e largura mínima?
    - Define o tamanho mínimo de um elemento
    - Se o conteúdo é menor do que o tamanho mínimo então o tamanho será aplicado, caso contrário não se notará o efeito desta propriedade
    
    Exemplo:
    
    ```css
    div { min-width: 100px; min-height: 50px; }
    ```