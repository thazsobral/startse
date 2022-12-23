# Entendendo o CSS

- O que é CSS?
    
    Cascading Style Sheets (Folha de Estilo em Cascatas) descreve como os elementos HTML devem ser apresentados e define a apresentação (layout e estilo) de uma página.
    
    <aside>
    💡 O CSS é uma folha de estilo (stylesheet) que nos permite estilizar um documento HTML.
    
    </aside>
    
- Podemos adicionar estilo pelo próprio HTML?
    
    Sim, podemos. Mas usar o CSS nos traz muitas vantagens!
    
    Vantagens de usar CSS:
    
    1. Separa conteúdo (HTML) e formato (CSS);
    2. Facilita manutenção;
    3. Permite reutilização;
    4. Nos permite trabalhar com responsividade!
    
    [Same Page Different Stylesheets](https://eastmanjian.github.io/HTML_CSS_Demo/css_basic_demo.html)
    
- Como funciona o CSS?
    
    O CSS tem dois mecanismos:
    
    - Seletor: Define quais os elementos serão afetados
        
        ```css
        seletor {
        	propriedade1: valor1;
        	propriedade2: valor2;
        }
        ```
        
    - Regra: Define como os elementos serão afetados
        - Propriedade: Define a característica que será modificada
        - Valor: Define como a característica será modificada
        
        ```css
        a {
        	color: blue;
        	font-size: 15px;
        }
        ```
        
- Onde práticar?
    
    Há dois site muito legais para praticarmos e entendermos melhor CSS:
    
    [100 Days CSS Challenge](https://100dayscss.com/)
    
    [CSSBattle](https://cssbattle.dev/)
    
- Qual é a sintaxe do CSS?
    
    O CSS apenas funciona se ele estiver escrito na sua forma correta.
    
    Como vimos, o CSS tem uma forma de cascata, mas o que significa isso?
    
    ```css
    selector {
    	prop1: value1;
    	prop2: value2;
    }
    ```
    
    Seletor de elemento: é o que dá a referência para a estilização, o que faz o CSS entender qual elemento precisa
    receber as propriedades especificadas.
    
    - Para iniciar um seletor, coloque o nome do elemento, classe ou ID;
    - Abra e feche chaves à frente para que esse elemento receba regras;
    - Todos os elementos com o respectivo nome serão modificados.
    
    Regras: são as características do elemento que queremos estilizar. Atribuímos a eles valores.
    
    - Cor do texto
        
        ```css
        color: purple;
        ```
        
    - Sublinhado
        
        ```css
        text-decoration: underline;
        ```
        
    - Cor do fundo
        
        ```css
        background-color: yellow;
        ```
        
    - Borda
        
        ```css
        border: 1px solid black;
        ```
        
- Como saber todas propriedades que existem?
    
    DOCUMENTAÇÃO!
    
    [Referência de CSS - CSS | MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference)
    
- Como aplicar o CSS?
    
    Há três formas:
    
    - Diretamente no HTML;
    - Diretamente no elemento no HTML;
    - Usando e linkando um arquivo
    externo tipo .css.