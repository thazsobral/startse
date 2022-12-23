# Atualizando e excluindo dados em tabelas

- O que é UPDATE?
    
    Atualizar dados das tabelas
    
    ```sql
    UPDATE my_table SET
    	atributo1 = <novo valor>, 
    	atributo2 = <novo valor>, 
    	...
    WHERE
    	<condições>
    ```
    
    Exemplo
    
    ```sql
    UPDATE aluno SET
    	nome = ‘José da Silva’
    WHERE
    	ra = 1234 AND
    	nome LIKE ‘José Silva’
    ```
    
- O que é DELETE?
    
    Remover tupla(s) de tabelas
    
    ```sql
    DELETE FROM my_table
    WHERE
    	<condições>
    ```
    
    <aside>
    ⚠️ Cuidado com o UPDATE e DELETE sem WHERE !!
    
    </aside>
    
    Remover tupla(s) de tabelas
    
    ```sql
    DELETE FROM aluno
    WHERE
    	ra = 1234 AND
    	data_nascimento = ‘2000-05-20’
    ```