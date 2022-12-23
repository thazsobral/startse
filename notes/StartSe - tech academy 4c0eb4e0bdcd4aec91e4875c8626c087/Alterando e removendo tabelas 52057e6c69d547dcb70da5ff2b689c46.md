# Alterando e removendo tabelas

- Como utilizar o ALTER TABLE?
    
    Utilizado para alterar/adicionar atributos em uma determinada tabela;
    
    ```sql
    ALTER TABLE my_table <ação>;
    ```
    
    Exemplo ações:
    
    - `ADD atributo tipo <restrições do atributo>`
    - `DROP atributo [CASCADE | RESTRICT]`
    - `ALTER atributo SET DEFAULT <valor>`
    - `ALTER atributo DROP DEFAULT`
- Como utilizar o DROP TABLE?
    
    Utilizado para excluir uma tabela do BD;
    
    Uma tabela não pode ser removida se outra entidade depender dela:
    
    - Analogia: árvore genealógica;
    - Objetivo: garantir consistência relacional.
    
    ```sql
    DROP TABLE my_table;
    ```