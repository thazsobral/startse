# Pilha dos elementos

- O que é Pilha de elementos?
    
    Diferentes elementos em CSS podem ocupar o mesmo espaço (x, y). Por padrão os elementos serão empilhados em um eixo z. O último elemento declarado será o elemento visível.
    
    ![Untitled](Pilha%20dos%20elementos%207d431960d2d7444da8b7745913574e4c/Untitled.png)
    
- Como alterando a ordem dos elementos no eixo z?
    
    A propriedade z-index permite definir qual a ordem de visualização dos elementos. Funciona apenas para elementos posicionais (absoluto, relativo, fixo e sticky). Quanto maior o valor mais a frente ele estará. Exemplo:
    
    ```css
    p { z-index: -1; }
    ```
    
- O que é Overflow?
    
    É possível controlar o comportamento dos elementos de blocos quando o conteúdo é maior do que os limites do elemento. Isso é realizado a partir da propriedade overflow. Os valores possíveis para esta propriedade são:
    
    - `visible`
    - `hidden`
    - `scroll`
    - `auto`