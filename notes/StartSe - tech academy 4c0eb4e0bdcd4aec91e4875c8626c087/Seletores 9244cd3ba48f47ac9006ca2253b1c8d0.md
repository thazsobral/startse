# Seletores

- Pra que serve o seletor?
    - São utilizados para selecionar os elementos
    - Seletor de elemento se aplica para a um tipo específico de elemento
    - Identificadores são utilizados para distinguir um elemento
    - Classes são utilizados para distinguir um grupo de elementos
- Pra que serve o ID?
    - Todo elemento deve possuir um valor único na página
    - São únicos em uma página HTML
        
        ```css
        <div id="conteudo"></div>
        ```
        
    - Os seletores de ID são precedidos pelo símbolo #
        
        ```css
        #conteudo { … }
        ```
        
- Pra que ser a Classe?
    - Agrupa os elementos de acordo com alguma característica
    - A mesma classe pode ser aplicada em diferentes elementos HTML
        
        ```css
        <div class="importante"></div>
        ```
        
    - Os seletores de classe são precedidos pelo símbolo.
        
        ```css
        .importante { … }
        ```
        
- O que é um Seletor universal?
    - Utilizado para selecionar todos os nós
    - As regras serão aplicados a todos os elementos
        
        ```css
        * { … }
        ```
        
- Como escrever regras em partes?
    - É possível definir a mesma regra para diferentes seletores
    - Basta separar os seletores por vírgula
        
        ```css
        h1, #principal, .importante { … }
        ```
        
    - Geralmente os seletores são depois especializados
- Como especializar os seletores?
    - É possível combinar os seletores de elemento com os seletores de ID e classe
    - Faz com que o seletor se torne mais específico
    - Basta utilizar o nome do elemento antes do símbolo # ou .
        
        ```css
        h1#principal { … }
        p.importante { … }
        ```
        
- O que é um seletor de descendente e de filho?
    - O combinador seleciona os nós que são descendentes ou filhos diretos de outros elementos
    - Para descendência basta utilizar um espaço entre os seletores
        
        ```css
        #principal .importante { … }
        
        p span { … }
        ```
        
    - Para filho direto basta utilizar um símbolo de maior > entre os seletores
        
        ```css
        #principal > .importante { … }
        p > span { … }
        ```
        
- O que são comentários?
    - Permite realizar anotações no código sem que elas sejam interpretadas
    - Os comentários são realizados dentro de blocos
        
        ```css
        /* Qualquer texto escrito aqui será ignorado */
        ```
        
- O que é Seletor de atributo?
    - Permite realizar a seleção a partir do valor ou da presença dos atributos
    - Apresenta as seguintes variações:
        - Possui um atributo
        - Possui exatamente um determinado valor para o atributo
        - Contém uma palavra específica no atributo
        - Começa com uma sequência específica
        - Termina com uma sequência específica
        
        ```css
        /*Para elementos <a> que possuem o atributo title*/
        a[title] {
        	color: purple;
        }
        
        /*Para elementos <a> que possuem o atributo href igual a https://google.com */
        a[href="https://google.com"] {
        	color: green;
        }
        
        /*Para elementos <a> que possuem o atributo href que contém example*/
        a[href*="example"] {
        	font-size: 2em;
        }
        ```
        
- Pra que combinar seletores?
    
    Os seletores de atributos também podem ser combinados com os demais elementos.
    
- O que é pseudo-classe?
    - Utilizado para definir um estado específico de um elemento. Exemplos:
        - Quando o cursor do mouse está sobre o elemento
        - Quando um link já foi visitado
        - Quando um elemento recebe o foco da ação
        
        ```css
        seletor:pseudo-class {
         …
        }
        ```
        
- Como são as pseudo-classes para link?
    - Link não visitado
        
        ```css
        a:link { … }
        ```
        
    - Link visitador
        
        ```css
        a:visited { … }
        ```
        
    - Mouse sobre o link (também funciona com outros elementos)
        
        ```css
        a:hover { … }
        ```
        
    - Link selecionado
        
        ```css
        a:active
        ```
        
- Como são as pseudo-classes para formulário?
    - Quando um elemento está com foco
        
        ```css
        input:focus
        ```
        
    - Quando um elemento é selecionado
        
        ```css
        input:checked
        ```
        
    - Quando um elemento é obrigatório
        
        ```css
        input:required
        ```
        
- Quais outras pseudo-classes?
    - Primeiro filho de um elemento
        
        ```css
        :first-child
        ```
        
    - Último filho de um elemento
        
        ```css
        :last-child
        ```
        
    - Único filho
        
        ```css
        :only-child
        ```
        
    - Quando um elemento está desabilitado
        
        ```css
        :disabled
        ```
        
    - Elementos sem filhos
        
        ```css
        :empty
        ```
        
- O que são pseudo-elementos?
    
    Utilizado para formatar partes de um elemento. Exemplos:
    
    ```css
    seletor::pseudo-elemento {
     …
    }
    ```
    
    - Primeira letra
        
        ```css
        /*Permite alterar a aparência da primeira letra*/
        p::first-letter { … }
        ```
        
    - Primeira linha do texto
        
        ```css
        /*Permite alterar a aparência da primeira letra*/
        div:first-line { … }
        ```
        
    - O marcador de uma lista
        
        ```css
        /*Permite alterar o marcador de uma lista*/
        ul::marker { … }
        ```
        
    - A seleção do usuário
        
        ```css
        /*Permite alterar o texto selecionado pelo usuário*/
        div::selection { … }
        ```
        
- O que é especificidade?
    - um elemento pode possuir regras distintas e contraditórias
    - O navegador considera o seletor mais específico
    - Para isso ele usa uma pontuação de especificidade
    
    [CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)
    
- O que é Hierarquia de especificidade?
    1. Estilo de linha
        
        ```css
        <h1 style="color: pink;">
        ```
        
    2. IDs
        
        ```css
        #navbar
        ```
        
    3. Classes, pseudo-classes e atributos
        
        ```css
        .test, :hover, [href]
        ```
        
    4. Elementos e pseudo-elementos
        
        ```css
        h1
        ```
        
- Como calcular a especificidade?
    
    A partir do valor 0
    
    - **Estilo de linha**: 1000
    - **IDs**: 100
    - **Classe/pseudo-classe/atributo**: 10
    - **Elemento**: 1
    
    O valor mais alto será aplicado
    
    Se o valor for igual a última regra definida será aplicada. 
    
    Alguns exemplos são:
    
    ![Untitled](Seletores%209244cd3ba48f47ac9006ca2253b1c8d0/Untitled.png)
    
- Como burlar as regras da especificidade?
    
    É possível dizer ao navegador para não considerar a especificidade
    
    - Utilize `!important` nestes casos
        
        ```css
        p { color: blue !important; }
        ```
        
    - Use apenas em casos muito específicos
    - Evite sempre que possível, reescrevendo as regras e seletores
- Como fazer um scroll suave com css?
    
    ```css
    html {
        scroll-behavior: smooth;
    }
    ```