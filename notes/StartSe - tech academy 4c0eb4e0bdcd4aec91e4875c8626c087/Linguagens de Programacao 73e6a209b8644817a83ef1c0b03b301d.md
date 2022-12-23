# Linguagens de Programacao

- O que é linguagem de programação?
    
    Linguagem de Programação é um conjunto de comandos, instruções e regras utilizadas para criar um programa de computador
    
    <aside>
    💡 A linguagem de programação possui regras léxicas, regras de sintaxe e de semântica
    
    </aside>
    
- O que é análise léxica?
    
    Léxico refere-se ao conjunto de palavras pertencentes a determinada linguagem.
    
    ```
    Se (<expressão>) instrução
    ```
    
    Por exemplo,
    
    ```
    algoritmo "Saudação"
    
    leia periodo # A palavra leia existe na gramática da linguagem?
    se (periodo = "manhã") então
     escreva("Bom dia!")
    senão
     se (periodo = "tarde") então
    escreva("Boa tarde!")
     senão
     escreva("Boa noite!")
     fim_se
    fim_se
    fim_algoritmo
    ```
    
    <aside>
    💡 **Léxico**: Responsável por reconhecer as palavras reservadas, constantes, identificadores e outras palavras que pertencem a linguagem de programação.
    
    </aside>
    
- O que é análise sintática?
    
    Sintático refere-se ao conjunto de regras que determinam as diferentes possibilidades de associação das palavras.
    
    ```
    Se (<expressão>) instrução
    ```
    
    Por exemplo,
    
    ```
    algoritmo "Saudação"
    
    leia periodo
    se (periodo = "manhã") então # A sequência de símbolos está correta?
     escreva("Bom dia!")
    senão
     se (periodo = "tarde") então
    escreva("Boa tarde!")
     senão
     escreva("Boa noite!")
     fim_se
    fim_se
    fim_algoritmo
    ```
    
    <aside>
    💡 **Sintático**: Responsável por analisar a estrutura do código fonte sem considerar seu significado na linguagem de programação.
    
    </aside>
    
- O que é análise semântica?
    
    Semântica refere-se ao significado das expressões.
    
    ```
    Se (<expressão>) instrução
    ```
    
    Por exemplo,
    
    ```
    algoritmo "Saudação"
    
    leia periodo
    se (professor = "Gabriel") então # Professor não foi definido previamente?
     escreva("Bom dia, boa tarde, boa noite!")
    senão
     se (periodo = "tarde") então
    escreva("Boa tarde!")
     senão
     escreva("Boa noite!")
     fim_se
    fim_se
    fim_algoritmo
    ```
    
    <aside>
    💡 **Semântico**: Responsável por enfatizar a interpretação do código fonte, de modo a prever o resultado da execução do programa.
    
    </aside>