# Hierarquia

- Como funciona a hierarquia no HTML?
    
    Um documento HTML é uma árvore de elementos aninhados sendo pais, irmãos, filhos, ancestrais e descendentes.
    
    ![Untitled](Hierarquia%20b81c93de376544f2a4e046eb4f6f403d/Untitled.png)
    
    Por exemplo:
    
    - No exemplo abaixo, pode-se ver um parágrafo (`<p>`):
        
        ```html
        <p> 
        	Senhor <strong>Felipe Silva</strong> uma vez disse:<q>”Olá mundo!"</q>. 
        </p>
        ```
        
    - Temos:
    `<p>` - um parágrafo
    `<strong>` - tag para dar mais importância para o termo Felipe Silva
    `<q>` - marca uma citação de Felipe Silva
    - Olhando para hierarquia, temos:
    `<p>` - é pai dos elementos `<strong>` e `<q>`
    `<strong>` e `<q>` - são elementos filhos de `<p>`
    `<strong>` e `<q>` - são elementos irmãos
- Quais as regras da hierarquia?
    
    Assim, podemos analisar o seguinte caso:
    
    - Um elemento filho deve ser fechado antes da tag pai.
        
        O exemplo abaixo é um código inválido, pois a tag `<strong>` foi aberta depois de `<p>`, porém foi fechada depois de `</p>`
        
        ```html
        <p> 
        	Senhor <strong>Felipe Silva uma vez disse:”Olá mundo!"
        </p> </strong>
        ```
        
    - Para corrigir o código acima, o fechamento da tag `<strong>` deve estar antes do fim da tag `<p>`
        
        ```html
        <p> 
        	Senhor <strong>Felipe Silva </strong> uma vez disse:”Olá mundo!"
        </p>
        ```
        
- O que é profundidade de hierarquia?
    
    Elementos filhos podem ter dentro de sí outros elementos filhos, logo é possível criar uma estrutura hierárquia profunda dentro de um documento HTML.
    
    ```html
    <div> 
      <h1>Citações famosas de jogadores</h1>
    
      <p> Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi:<q>"That lad must have been born offside"</q> 
      </p> 
    
      <p> When criticized by John Carew, <strong>Zlatan Ibrahimovic</strong> replied: <q>"What Carew does with a football, I can do with an orange"</q> 
      </p>
     
      <p> <strong> Joe said: </strong> where do you go? </p>
      </p>
    </div>
    ```
    
    No código do slide anterior:
    
    - `<div>` - é um descendente de outro elemento pai
    - `<div>` - é pai de `<h1>` e 3 `<p>`
    - `<h1>` e 3 `<p>` são irmãos
    - Cada `<p>` é pai de seus respectivos `<strong>` e `<q>`
    - Cada `<h1>`, `<p>`, `<strong>` e `<p>` são descentes de `<div>`
        
        ![Untitled](Hierarquia%20b81c93de376544f2a4e046eb4f6f403d/Untitled%201.png)
        
- O que é DOM?
    
    DOM é o objeto que estrutura a página HTML, ou seja, ele é baseado na hierarquia.
    
    O DOM pode ser visualizado através do *elements* do *devtools.* O DOM permite ser acessado através de JavaScript, o que possibilita fazer alterações em tempo de execução.
    
    <aside>
    💡 O DOM só existe por conta do JavaScript.
    
    </aside>
    
- Quais os eventos do DOM?
    
    [Event reference | MDN](https://developer.mozilla.org/pt-BR/docs/Web/Events)