# Formatacao de listas

- O que são listas?
    
    Usando CSS é possível definir o estilo da lista e customizar a apresentação das mesmas. Em HTML há 2 tipos principais de listas
    
    - Ordenadas: `<ol>`
    - Não ordenadas: `<ul>`
    
    A definição do estilo da lista é definida pela propriedade `list-style-type`
    
- Quais os estilos de listas?
    
    **Não ordenada**
    
    - `disc`
    - `circle`
    - `none`
    - `square`
    
    **Ordenada**
    
    - `decimal-leading-zero` (01, 02, 03, etc.)
    - `lower-alpha` (a, b, c, d, e, etc.)
    - `lower-latin` (a, b, c, d, e, etc.)
    - `lower-roman` (i, ii, iii, iv, v, etc.)
    - `upper-alpha` (A, B, C, D, E, etc.)
    - `upper-latin` (A, B, C, D, E, etc.)
    - `upper-roman` (I, II, III, IV, V, etc.)
- Como utilizar imagem como marcadores?
    
    É possível definir uma imagem como marcador utilizando a propriedade `list-style-image`. Exemplo
    
    ```css
    ul { list-style-image: url('imagem.gif'); }
    ```
    
- Como trabalhar com posição de lista?
    
    ```css
    ul { list-style-position: outside; }
    ```
    
    ![Untitled](Formatacao%20de%20listas%204801ecbfb5cc46d8b7fde080452b8cf2/Untitled.png)
    
    ```css
    l { list-style-position: inside; }
    ```
    
    ![Untitled](Formatacao%20de%20listas%204801ecbfb5cc46d8b7fde080452b8cf2/Untitled%201.png)