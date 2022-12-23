# Modelo relacional

- O que é Modelo Relacional?
    
    Criado por **Edgar F. Codd** nos **anos 70**.
    
    É um **Conjunto de dados que possui entidades, relações** (Tabelas) **e** **Atributos** (Colunas ou campos), aplicando **operações fundamentadas na teoria de conjuntos e álgebra** como, Projeção, produto cartesiano, seleção, junção, união e subtração;
    
- Quais as Características do banco de dados relacional?
    - **Dados organizados**
        - Tabelas, colunas, relacionamento, chaves, etc...
    - **Integridade**
        - Restrições para dados e relacionamentos;
        - Ex: integridade referencial e integridade de domínio.
    - **Manipulação**
        - Linguagens formais (álgebra e cálculo relacional) e SQL.
- Como é feito a organização no modelo relacional?
    
    **Segmentado** em cinco conceitos
    
    - **Domínio;**
    - **Atributo;**
    - **Tupla;**
    - **Relação;**
    - **Chave.**
- Como é definido o domínio no modelo relacional?
    
    Domínio é um **Conjunto de valores atômicos** permitidos para um dado;
    
    Os dominios podem ser dos Tipos (formatos) string, inteiro, data, etc...
    
    Exemplos:
    
    - Domínio de CPF → **string** com exatamente **11 caracteres**;
    - Domínio Número da matrícula → **inteiro** **maior que 0**;
    - Domínio Data de Nascimento → **data** **menor ou igual a data atual**.
- Como é definido o Atributo no modelo relacional?
    
    É um Item de dado do BD, ou seja, é o **Cabeçalho de cada coluna**;
    
    - Atributo: `nome + domínio`
    
    Exemplo
    
    - CPF: **char(11)**
    - matrícula: **integer**
    - data_nascimento: **date**
    
    ![Untitled](Modelo%20relacional%20c5e0d04d2dd249028df9b571a1752a01/Untitled.png)
    
- O que é uma Tupla no modelo relacional?
    
    Conjunto de pares (**chave** (atributo)**, valor**). Isso Define uma ocorrência de um fato do mundo real ou de um relacionamento entre fatos.
    
    Exemplo:
    
    ```
    Aluno: { (nome, ‘Maria’), (CPF, 64730931092), (matrícula, 1234), (data_nascimento, ‘1992-07-10’) }
    ```
    
    ![Untitled](Modelo%20relacional%20c5e0d04d2dd249028df9b571a1752a01/Untitled%201.png)
    
- Como é uma Relação no modelo relacional?
    
    **Composto por um cabeçalho e um corpo**.
    
    - **Cabeçalho**
        - **Número fixo de atributos** (grau da relação);
        - Atributos **não-ambíguos**
    - **Corpo**
        - **Número variável de tuplas** (cardinalidade da relação);
        - **Ordem não é relevante**
    
    ![Untitled](Modelo%20relacional%20c5e0d04d2dd249028df9b571a1752a01/Untitled%202.png)
    
- O que é uma Chave no modelo relacional?
    
    Existem duas categorias de chaves.
    
    - **Superchave**: **conjunto de atributos** que **identifique unicamente uma tupla** em uma relação. Exemplos:
        - SC (Aluno) = {RA, Nome}
        - SC (Aluno) = {RA}
        - SC (Aluno) = {CPF}
        - SC (Aluno) = {CPF, Nome, Endereço}
    - **Chave: superchave com atributos mínimos** que **identifiquem uma tupla** em uma relação.
- Quais os tipos de chave?
    - **Chave simples**:Tupla pode ser **identificada unicamente por meio de um atributo** chave;
        - Exemplos: ID, CPF, RG, etc...
    - **Chave Composta**: **Identificação** única de uma tupla com **dois ou mais atributos**;
        - Exemplos
            - Cidade → {Nome, Estado}
            - Voo → {Número, Data}
    - **Chave Candidata**: possibilidade de existir **mais de uma chave para a mesma relação**
        - Exemplos
            - C (Aluno) = {CPF}
            - C (Aluno) = {RA}
    - **Chave PRIMÁRIA** (PK): **escolhida entre** as **chaves candidatas**
        - Atributo é representado por sublinhado
        - Exemplo
            
            ![Untitled](Modelo%20relacional%20c5e0d04d2dd249028df9b571a1752a01/Untitled%203.png)
            
    - **Chave Estrangeira** (FK)
        - **Atributo**(s) **de** uma relação **R1** que consistem **uma equivalência de valor com a PK** de uma relação **R2**;
        - **Devem possuir o mesmo domínio** (restrição de integridade).
        
        ![Untitled](Modelo%20relacional%20c5e0d04d2dd249028df9b571a1752a01/Untitled%204.png)
        
- Como é feito o esquema de relação?
    
    Expressão da forma **R** (A1, A2, ..., An)
    
    - **R**: **nome** da **relação**;
    - **Ai**: **nome** do **atributo**;
    - **n**: **grau** da **relação**.
    
    Exemplo
    
    ![Untitled](Modelo%20relacional%20c5e0d04d2dd249028df9b571a1752a01/Untitled%205.png)