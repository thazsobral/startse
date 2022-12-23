# Linguagens de Alto e Baixo Nivel

- O que é linguagem de alto nível?
    
    Sintaxe é voltada para o entendimento humano.
    
    - [Java](https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html)
    - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript)
    - [PHP](https://www.php.net/manual/pt_BR/intro-whatis.php)
    - [Python](https://www.python.org/)
    - [C Sharp](https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/)
    
    Exemplo de código de “Hello World” em alto nível (Python)
    
    ```python
    print('Hello World')
    ```
    
- O que é linguagem de baixo nível?
    
    Abstraem conceitos voltados para a máquina e sintetizam comandos.
    
    - [Assembly](https://www.tutorialspoint.com/assembly_programming/index.htm)
    
    Exemplo de código de “Hello World” em baixo nível (Assembly)
    
    ```
    section .text
     global _start 
    _start: 
     mov edx, len 
     mov ecx, msg 
     mov ebx, 1 
     mov eax, 4 
     int 0x80 
     mov eax, 1 
     int 0x80 
    section .data
    msg db 'Hello, world!',0xa
    len equ $ - msg
    
    --> "Hello World"
    ```
    
- Quais os prós e contras das linguagens de baixo e alto nível?
    
    
    | Baixo Nível |  | Alto Nível  |  |
    | --- | --- | --- | --- |
    | Prós | Contras | Prós | Contras |
    | Maior
    aproveitamento da arquitetura do processador | Maior tempo  para dominar a linguagem | Fácil de aprender | Pode ter o desempenho prejudicado |
    | Temos uma execução mais rápida | Necessário conhecer bem o hardware | Produtividade | Pode utilizar mais memória |
    | - | Portabilidade prejudicada | Fácil entendimento | - |
    | - | - | Fácil manutenção | - |
    
- Como a linguagem de programação se torna um programa de computador?
    
    Linguagem de baixo nível é “traduzida” pelo assembler, que converte o código Assembly em um conjunto de instruções na linguagem de máquina.
    
    Linguagem de alto nível passa pelo processo de compilação.
    
    ![Untitled](Linguagens%20de%20Alto%20e%20Baixo%20Nivel%20d2504d4a8c82464ba31da0afc276f49b/Untitled.png)
    
- O que é Linguagem Interpretada?
    
    Se o código é executado à medida que vai sendo traduzido, como em JavaScript, por exemplo, num processo de tradução de trechos seguidos de sua execução imediata, então diz-se que o programa foi interpretado e que o mecanismo utilizado para a tradução é um interpretador.
    
- O que é Linguagem Compilada?
    
    Se o método utilizado traduz todo o código, para só depois executar o software, então diz-se que o software foi compilado e que o mecanismo utilizado para a tradução é um compilador.
    
- Qual a MELHOR linguagem de programação?
    
    Qualquer linguagem de alto nível que você aprender será suficiente para sua jornada inicial.