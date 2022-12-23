# Atribuicao de um Objeto em JavaScript

- Como é o Armazenamento de Tipos Primitivos em Memória?
    
    As **variáveis que são declaradas** ou criadas **ao longo do código**, devem ser **armazenadas nos espaços da memória principal do computador durante a execução** do script pelo navegador, por exemplo:
    
    - Para fins didáticos, o exemplo abaixo simplifica como os valores de duas variáveis do tipo number são armazenados na memória principal
        
        ![Untitled](Atribuicao%20de%20um%20Objeto%20em%20JavaScript%20a7b90f76c4bd4c2dbb8c8351d5290b5b/Untitled.png)
        
- Como é a Atribuição de um Tipo Primitivo em JavaScript?
    
    A atribuição de um tipo de dado primitivo (number, string, boolean, por exemplo) ocorre como exemplo anterior
    
    - o que explica o resultado apresentado no exemplo abaixo
        
        ![o valor da variável a foi atribuído à variável b, porém ao incrementar o valor da variável b, não alterou o valor da variável a.](Atribuicao%20de%20um%20Objeto%20em%20JavaScript%20a7b90f76c4bd4c2dbb8c8351d5290b5b/Untitled%201.png)
        
        o valor da variável a foi atribuído à variável b, porém ao incrementar o valor da variável b, não alterou o valor da variável a.
        
        No exemplo anterior, vamos supor hipoteticamente para fins didáticos que:
        
        - let a = 10 (criou a variável a e armazenou o valor 10 no espaço de memória 679
        - let b = a (criou a variável b e armazenou o valor 10 no espaço de memória 680
        - b += 5 (o valor do espaço de memória com endereço 680 ÿoi incrementado em 5)
        
        ![Untitled](Atribuicao%20de%20um%20Objeto%20em%20JavaScript%20a7b90f76c4bd4c2dbb8c8351d5290b5b/Untitled%202.png)
        
        Diferente dos tipos primitivos, os objetos instanciados armazenam uma referência (um endereço) para uma outra região da memória principal do computador onde os dados do objeto estão armazenados.
        
        ![Untitled](Atribuicao%20de%20um%20Objeto%20em%20JavaScript%20a7b90f76c4bd4c2dbb8c8351d5290b5b/Untitled%203.png)
        
        Ao invés de criar uma cópia dos valores a atribuição passa a referência do objeto (endereço de memória)
        
        - isso faz com que a variável que recebe a atribuição e o objeto que foi atribuído se tornem um mesmo objeto apenas com nomes diferentes
        
        ![Untitled](Atribuicao%20de%20um%20Objeto%20em%20JavaScript%20a7b90f76c4bd4c2dbb8c8351d5290b5b/Untitled%204.png)
        
        No exemplo anterior, vamos supor de forma simplificada que a referência do objeto prod foi armazenada conforme o exemplo abaixo:
        
        ![Untitled](Atribuicao%20de%20um%20Objeto%20em%20JavaScript%20a7b90f76c4bd4c2dbb8c8351d5290b5b/Untitled%205.png)
        
        A atribuição:
        
        ```jsx
        const novoprod = prod;
        ```
        
        faz com que ambos objetos possuam a mesma referência
        
        ![Untitled](Atribuicao%20de%20um%20Objeto%20em%20JavaScript%20a7b90f76c4bd4c2dbb8c8351d5290b5b/Untitled%206.png)