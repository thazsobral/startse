# Logica de Programacao e Algoritmos

- O que é Torre de Hanói?
    
    Esta é uma Torre de Hanói.
    
    O objetivo é transferir os três anéis da haste A para C, usando B se necessário. A regras são:
    
    - deve-se mover um único anel por vez;
    - um anel de diâmetro maior nunca pode repousar sobre um de diâmetro menor.
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled.png)
    
- Como resolver a torre de Hanói?
    
    Algoritmo para resolver o problema das Torres de Hanoi.
    Início
    
    Mover um anel da haste A para a haste C
    
    Mover um anel da haste A para a haste B
    
    Mover um anel da haste C para a haste B
    
    Mover um anel da haste A para a haste C
    
    Mover um anel da haste B para a haste A
    
    Mover um anel da haste B para a haste C
    
    Mover um anel da haste A para a haste C
    
    Fim
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%201.png)
    
- Como resolver mais rápido a torre de hanói?
    
    Algoritmo geral para resolver o problema das Torres de Hanoi. 
    
    Início
    
    Repita:
    
    Mova o menor anel de sua haste atual para a próxima no sentido anti-horário;
    
    Execute o único movimento possível com um anel que não seja o menor de todos.
    
    Até que todos os discos tenham sido transferidos para a outra haste.
    
    Fim
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%202.png)
    
- O que é Algoritmo?
    - Mat. Processo de cálculo, ou de resolução de um grupo de problemas semelhantes, em que se estipulam, com generalidade e sem restrições, regras formais para a obtenção do resultado, ou solução do problema.
    - Inform. Conjunto de regras e operações bem definidas e ordenadas destinadas à solução de um problema, ou de uma classe de problemas, em um número finito de etapas
- Como formalizar um algoritmo?
    
    É importante que se siga alguma convenção na hora de escrever algoritmos, para que haja uma descrição formalizada e todas pessoas envolvidas possa compreendê-lo da mesma forma.
    
    Uma convenção tem definida um conjunto de regras de sintaxe para a escrita do algoritmo e também regras semânticas, que são as regras que permitem interpretar um algoritmo.
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%203.png)
    
    ```python
    Início
    	Ler (A, B)
    	Se A>=B Então
    		Exibir (A)
    	Senão
    		Exibir (B)
    	Fim Se
    Fim
    ```
    
    Na formalização de um algoritmo temos bem definidas as palavras ou símbolos que utilizaremos. No caso de sua representação textual teremos palavras reservadas, como: `Enquanto` - `Faça`, `Repita` - `Até`, `Se` - `Então`, `Ler( )`, `Exibir( )`, `Espere`, `Início`, `Fim`
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%204.png)
    
- Qual o papel da lógica na programação?
    
    <aside>
    💡 Lógica é uma área da Matemática cujo objetivo é investigar a investigar a veracidade de suas proposições.
    
    </aside>
    
    1. Se estiver chovendo, levarei meu guarda-chuva
    2. Está chovendo
    
    Ou
    
    1. Se estiver chovendo, levarei meu guarda-chuva
    2. Está chovendo
    3. Então, levarei meu guarda-chuva
    
    Ou
    
    1. Se estiver chovendo, levarei meu
    guarda-chuva
    2. Eu peguei meu guarda-chuva.
    3. ?
    
    Ou
    
    1. Se estiver chovendo, levarei meu guarda-chuva
    2. Eu peguei meu guarda-chuva.
    3. Então é plausível que esteja chovendo.
    
    <aside>
    💡 Não posso afirmar com precisão que está chovendo só porque peguei meu guarda-chuva!
    
    </aside>
    
    Há uma diferença de natureza entre esses argumentos. Enquanto em um eu posso dizer necessariamente o que se segue, o outro eu tenho alguma pista mas não posso dizer com precisão o que se segue.
    
    Chamamos esses argumentos em que a conclusão se segue necessariamente de argumentos dedutivos, eles são deduções.
    
    Chamamos esses outros tipos de argumentos em que a conclusão não se segue necessariamente de argumentos indutivos, eles são induções.
    
    No contexto da computação só vamos nos ocupar de deduções!
    
- Qual é o papel da lógica de programação?
    
    <aside>
    💡 Conduzir o raciocínio para desenvolver as soluções.
    
    </aside>
    
    Raciocinar consiste em manipular a informação disponível e extrair consequências disso, obtendo uma informação nova.
    
    Como descobrir uma moeda falsa em um grupo de cinco moedas fazendo uso de uma balança analítica (sabe-se que a moeda falsa é mais leve que as outras) com o menor número de pesagens possível?
    
    E como seria com nove moedas?
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%205.png)
    
    Com cinco moedas:
    
    ```python
    Início
    
    	Pese duas moedas de cada lado;
    
    	Se os lados tiverem pesos diferentes, Então
    
    		Pegue as moedas com menor peso e pese uma moeda de cada lado
    
    		Exibir resultado - A mais leve é a falsa.
    
    	Senão a moeda falsa é a restante.
    
    		Exibir resultado
    
    	Fim Se
    
    Fim
    ```
    
    Você tem 3 galões – A, B e C. O galão A possui 8 litros de capacidade e está completamente cheio de água. O galão B possui 5 litros de capacidade e está vazio. O galão C possui 3 litros de capacidade e também está vazio. Sem jogar água fora, você conseguiria fazer com que, no fim,
    restassem exatamente 4 litros de água no galão A e exatamente 4 litros de água no galão B?
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%206.png)
    
    ```python
    Início
    	Encha o galão B com a água do galão A. 
    	Encha o galão C com o galão B. 
    	Coloque o conteúdo do galão C no galão A. (Agora você tem 6 litros no galão  A, e 2 litros no galão B)
    	Despeje os 2 litros que estão no galão B no galão C. 
    	Encha o galão B com o conteúdo do galão A. Agora, devem restar 1 litro no galão A, 5 litros no galão B e 2 litros no galão C.
    	Complete o galão C com água do galão B. 
    	Despeje o conteúdo do galão C no galão A.
    Fim
    ```
    
- O que são constantes e variáveis?
    
    Variáveis e constantes são os elementos básicos que um programa manipula. Uma variável é um espaço reservado na memória do computador para armazenar um tipo de dado determinado. Variáveis devem receber nomes para poderem ser referenciadas e modificadas quando necessário. Constantes não necessariamente recebem nomes, mas podem ser nomeadas. Um programa deve conter declarações que especificam de que tipo são as variáveis que ele utilizará e às vezes um valor inicial. As expressões combinam variáveis e constantes para calcular novos valores.
    
    - Variável é a representação simbólica dos elementos de um certo conjunto. Cada variável
    corresponde a uma posição de memória, cujo conteúdo pode se alterado ao longo do tempo durante a execução de um programa. Embora uma variável possa assumir diferentes valores, ela só pode armazenar um valor a cada instante
        
        ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%207.png)
        
    - Constante é um determinado valor fixo que não se modifica ao longo do tempo, durante a execução de um programa. Conforme o seu tipo, a constante é classificada como sendo numérica, lógica e literal.
        
        ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%208.png)
        
- O que são tipos de dados?
    
    As variáveis e as constantes podem ser basicamente de quatro tipos: numéricas, caracteres, alfanuméricas ou lógicas.
    
    - **Numéricas**: Específicas para armazenamento de números, que posteriormente poderão ser utilizados para cálculos. Podem ser ainda classificadas como Inteiras ou Reais. As variáveis do tipo inteiro são para armazenamento de números inteiros e as Reais são para o armazenamento de números que possuam casas decimais. (int, float, double, long)
    - **Caracteres**: Específicas para armazenamento de caracteres que não contenham números (literais). (char)
    - **Alfanuméricas**: Específicas para dados que contenham letras e/ou números. Pode em determinados momentos conter somente dados numéricos ou somente literais. Se usado somente para armazenamento de números, não poderá ser utilizada para operações matemáticas. (string)
    - **Lógicas**: Armazenam somente dados lógicos que podem ser Verdadeiro ou Falso. (bool)
    
    Podemos definir o tipo de uma variável antes de declarar seu nome como o exemplo em Dart em cima.
    
    E há linguagens como python que inferem o tipo atribuído a variável, automaticamente atribuindo um tipo. Em algoritmos ou em código em pseudo-linguagens, também devemos definir o tipo de dado de nossa variável ou constante.
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%209.png)
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2010.png)
    
    Outra coisa importante a se observar é que o símbolo de igual ali nos exemplos não está na sua função usual de denotar igualdade, mas sim do que chamamos de atribuição. Ele está indicando que aquela variável está recebendo aquele valor!
    
    Nos nossos algoritmos e programas em papel, utilizaremos uma seta para a esquerda para indicar atribuição. Exemplo: 
    
    ```python
    text <- “This is a string 123”
    ```
    
- O que são pseudo-linguagens?
    
    ```
    Início
    	Ler (n)
    	S <- 0
    	i <- 1
    	Enquanto i <= n Faça
    		Ler(x)
    		S <- S + x
    		i <- i + 1
    	Fim Enquanto
    	Exibir(‘Soma: ’, S)
    Fim
    ```
    
    ```python
    n = int(input("Digite n: "))
    s = 0
    i = 1
    while (i <= n):
    	x = int(input("Digite x: "))
    	s = s + x
    	i = i + 1
    print("Soma:", s)
    ```
    
    Este seria o output deste programa:
    
    ```
    Digite: 3
    Digite: 3
    Digite: 4
    Digite: 5
    Soma: 12
    ```
    
- O que são operadores?
    
    Os operadores são meios pelo qual incrementamos, decrementamos, comparamos e avaliamos dados dentro do computador.
    
    Temos três tipos de operadores:
    • Operadores Aritméticos
    • Operadores Relacionais
    • Operadores Lógicos
    
- O que são Operadores Aritméticos?
    
    Os operadores aritméticos são os utilizados para obter resultados numéricos. 
    
    Além da adição, subtração, multiplicação e divisão, podem utilizar também o operador para exponenciação.
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2011.png)
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2012.png)
    
- O que são Operadores Relacionais?
    
    Os operadores relacionais são utilizados para comparar String de caracteres e números. Os valores a serem comparados podem ser caracteres ou variáveis.
    
    Estes operadores sempre retornam valores lógicos (verdadeiro ou falso / True ou False).
    
    Para estabelecer prioridades no que diz respeito a qual operação executar primeiro, utilize os parênteses.
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2013.png)
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2014.png)
    
- O que são Operadores Lógicos?
    
    Os operadores lógicos servem para combinar resultados de expressões, retornando se o resultado final é verdadeiro ou falso.
    
    E / AND: Uma expressão AND (E) é verdadeira se todas as condições forem verdadeiras
    
    OR/OU: Uma expressão OR (OU) é verdadeira se pelo menos uma condição for verdadeira
    
    NOT/NÃO: Uma expressão NOT (NÃO) inverte o valor da expressão ou condição, se verdadeira inverte para falsa e vice-versa
    
    ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2015.png)
    
- O que são comandos de decisão?
    
    Os comandos de decisão ou desvio fazem parte das técnicas de programação que conduzem a estruturas de programas que não são totalmente sequenciais.
    
    Com as instruções de SALTO ou DESVIO pode-se fazer com que o programa proceda de uma ou outra maneira, de acordo com as decisões lógicas tomadas em função dos dados ou resultados anteriores. As principais estruturas de decisão são:
    
    “Se Então”, “Se Então Senão” e “Caso Selecione”.
    
    - SE - ENTÃO
        - A estrutura de decisão “SE/IF” normalmente vem acompanhada de um comando, ou seja, se determinada condição for satisfeita pelo comando SE/IF então execute determinado
        comando. Imagine um algoritmo que determinado aluno somente estará aprovado se sua média for maior ou igual a 5.0, veja no exemplo de algoritmo como ficaria.
        
        ```
        SE MEDIA >= 5.0 ENTÃO ALUNO APROVADO
        ```
        
        ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2016.png)
        
    - SE - ENTÃO - SENÃO
        - A estrutura de decisão “SE/ENTÃO/SENÃO”, funciona exatamente como a estrutura “SE”, com apenas uma diferença, em “SE” somente podemos executar comandos caso a condição
        seja verdadeira, diferente de “SE/SENÃO” pois sempre um comando será executado independente da condição, ou seja, caso a condição seja “verdadeira” o comando da condição será executado, caso contrário o comando da condição “falsa” será executado.
        
        ```
        SE MEDIA >= 5.0 ENTÃO
        	ALUNO APROVADO
        SENÃO
        	ALUNO REPROVADO
        ```
        
        ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2017.png)
        
    - CASO - SELECIONE
        - A estrutura de decisão CASO/SELECIONE é utilizada para testar, na condição, uma única expressão, que produz um resultado, ou, então, o valor de uma variável, em que está armazenado um determinado conteúdo. Compara-se, então, o resultado obtido no teste
        com os valores fornecidos em cada cláusula “Caso”.
        
        ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2018.png)
        
        ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2019.png)
        
- O que são comandos de repetição?
    
    Utilizamos os comandos de repetição quando desejamos que um determinado conjunto de instruções ou comandos sejam executados um número definido ou indefinido de vezes, ou enquanto um determinado estado de coisas prevalecer ou até que seja alcançado. Veremos alguns modelos de comandos de repetição:
    
    - Enquanto …, processar (While … Loop);
    - Até que …, processar ... (Do Until ... Loop);
    - Processar …, Enquanto x (Do ... Loop While);
    - Processar ..., Até que x (Do ... Loop Until)
    - Para ... Até ... Seguinte (For ... To ... Next)
    - Enquanto x, Processar (While ... Loop)
        - Neste caso, o bloco de operações será executado enquanto a condição x for verdadeira.
        O teste da condição será sempre realizado antes de qualquer operação. Enquanto a condição for verdadeira o processo se repete. Podemos utilizar essa estrutura para trabalharmos com contadores.
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2020.png)
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2021.png)
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2022.png)
            
    - Até que x, processar ... (Do Until ... Loop)
        - Neste caso, o bloco de operações será executado até que a condição seja satisfeita, ou seja, somente executará os comandos enquanto a condição for falsa
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2023.png)
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2024.png)
            
    - Processar ..., Enquanto x (Do ... Loop While)
        - Neste caso primeiro são executados os comandos, e somente depois é realizado o teste da condição. Se a condição for verdadeira, os comandos são executados novamente, caso seja falso é encerrado o comando DO
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2025.png)
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2026.png)
            
    - Processar ..., Até que x (Do ... Loop Until)
        - Neste caso, executa-se primeiro o bloco de operações e somente depois é realizado o teste de condição. Se a condição for verdadeira, o fluxo do programa continua normalmente. Caso contrário é processado novamente os comandos antes do teste da condição.
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2027.png)
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2028.png)
            
    - Para [elementos], processar (For…)
        - No comando Para haverá uma repetição por elemento definido. Pode ser uma lista, um conjunto de caracteres, um intervalo, etc. O comando faz um loop por item verifica se todos itens foram varridos e encerra.
            
            ![Untitled](Logica%20de%20Programacao%20e%20Algoritmos%20fedde94afe574623936af6e504a62cd3/Untitled%2029.png)