# Linguagem de Manipulacao de Dados

- Quais os Principais comandos de manipulação de dados?
    - `INSERT`: utilizado para adicionar tuplas em tabelas;
    - `UPDATE`: usado para atualizar dados contidos nas tabelas;
    - `DELETE`: usado para remover tuplas das tabelas;
    - `SELECT`: utilizado para consultar os dados contidos nas instâncias do BD.
- Como utilizar o INSERT?
    
    Adicionar tupla em tabela
    
    ```sql
    INSERT INTO my_table (atributo1, atributo2, ..., atributoN)
    	VALUES (valorAtributo1, valorAtributo2, ..., valorAtributoN)
    ```
    
    Exemplo
    
    ```sql
    INSERT INTO aluno (ra, nome, data_nascimento)
    	VALUES (1234, ‘José da Silva’, ‘2000-02-01’)
    ```