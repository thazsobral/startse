# Margin e Padding

- O que é margin?
    - Cria espaço entre os elementos (bordas)
    - A propriedade utilizada para definir a margem é margin
        
        ```css
        p { margin: 10px; }
        ```
        
    - Os valores permitidos para margem são:
        - `auto` - utilizado para centralizar um elemento
        - **tamanho** - `px`, `em`, `%`, …
        - `inherit` - Mesmo valor do elemento pai
    - Obs: As margens podem ter valores negativos
- Como definir margin?
    
    Há 4 formas de definir os valores de margin, isso é conhecido como sintaxe sugar.
    
    - A propriedade margem pode receber 4 valores:
        
        ```css
        p { margin: topo direita base esquerda; }
        ```
        
    - A propriedade margem pode receber 3 valores:
        
        ```css
        p { margin: topo direita-esquerda base }
        ```
        
    - A propriedade margem pode receber 2 valores:
        
        ```css
        p { margin: topo-base direita-esquerda }
        ```
        
    - A propriedade margem pode receber 1 valor:
        
        ```css
        p { margin: topo-base-direita-esquerda }
        ```
        
- Como definir apenas um das margens?
    
    É possível definir apenas uma das margens de um objeto
    
    - Topo:
        
        ```css
        margin-top
        ```
        
    - Base:
        
        ```css
        margin-bottom
        ```
        
    - Esquerda:
        
        ```css
        margin-left
        ```
        
    - Direita:
        
        ```css
        margin-right
        ```
        
- O que é junção de margens?
    - Ocorre apenas entre as margens inferior e superior de 2 elementos
    - O tamanho da maior margem é assumida como distância
- O que é padding?
    - Cria espaço entre o conteúdo e a borda do elemento
    - Os valores permitidos para a propriedade padding são:
        - **tamanho** - `px`, `em`, `%`, …
        - `inherit` - Mesmo valor do elemento pai
    - Diferente das margens, o padding não aceita valores negativo
- Como definir padding?
    - A propriedade padding pode receber 4 valores:
        
        ```css
        p { padding: topo direita base esquerda; }
        ```
        
    - A propriedade padding pode receber 3 valores:
        
        ```css
        p { padding: topo direita-esquerda base }
        ```
        
    - A propriedade padding pode receber 2 valores:
        
        ```css
        p { padding: topo-base direita-esquerda }
        ```
        
    - A propriedade padding pode receber 1 valor:
        
        ```css
        p { padding: topo-base-direita-esquerda }
        ```
        
- Como definir apenas um das paddings?
    
    É possível definir apenas uma das distâncias de um objeto
    
    - Topo:
        
        ```css
        padding-top
        ```
        
    - Base:
        
        ```css
        padding-bottom
        ```
        
    - Esquerda:
        
        ```css
        padding-left
        ```
        
    - Direita
        
        ```css
        padding-right
        ```