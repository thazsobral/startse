# Compiladores

- O que é compilador?
    
    Compilador é um software essencial para programadores.
    
    Ele transforma o código fonte de uma linguagem de programação em um código executável para máquinas reais ou virtuais.
    
    ![Untitled](Compiladores%208f15b2bf376041deb84790bcd7e1864c/Untitled.png)
    
- Mas o que ocorre no processo de compilação do código fonte?
    
    A linguagem de alto nível é trauzida para uma linguagem de baixo nível, que na maioria dos casos é o Assembly.
    
    ![Untitled](Compiladores%208f15b2bf376041deb84790bcd7e1864c/Untitled%201.png)
    
    Consequentemente precisávamos de um caminho para gerar a linguagem de máquina.
    
    <aside>
    💡 Criar sistema de alto nível utilizando linguagens de baixo nível é inviável.
    
    </aside>
    
    Logo temos a ascensão das linguagens de alto nível para nos ajudar na criação de sistemas.
    
    <aside>
    💡 Linguagens de alto nível são mais próximas da comunicação humana.
    
    </aside>
    
    O compilador analisa linguagens de programação de alto nível e transforma em código de máquina.
    
    Isso é feito através de duas fases:
    
    1. fase de análise (front-end do compilador)
    2. fase de síntese (back-end do compilador)
        
        ![Untitled](Compiladores%208f15b2bf376041deb84790bcd7e1864c/Untitled%202.png)
        
- O que ocorre na fase de análise?
    
    <aside>
    💡 Divide o código fonte e cria uma representação intermediária do mesmo.
    
    </aside>
    
    Nela ocorre 3 análises:
    
    1. léxica: analisar caracter por caracter do código fonte e identificar as palavras (é uma palavra reservada? é um operador? etc.)
    2. sintática: verifica a estrutura do código fonte de acordo com a analise léxica (se abriu o parentese no lugar certo, ele foi fechado? etc.)
    3. semântica: verifica o resultado no código fonte (essa variável está sendo utilizada corretamente? esse operador está retornando o resultado correto? esse parametro está passando o valor correto? qual o resultado dessa expressão?)
    
    <aside>
    💡 Passando essa fase é gerada o código intermediária e sendo passado para a fase de síntese.
    
    </aside>
    
- O que ocorre na fase de síntese?
    
    Composta por módulos de geração e otimização de código de máquina a partir da geração intermediária. Ou seja, está fase realiza:
    
    - otimização do código
    - e gera de fato o código de baixo nível para a máquina poder entender
    - e finalmente executar o código