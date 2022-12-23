# Agregacao, ordenacao e distincao

- Quais as FUNÇÕES DE AGREGAÇÃO?
    
    média de valor dos atributos da colunaProcessa conjunto de valores de uma coluna, resultando em um único valor agregado;
    
    Exemplo de funções:
    
    - `COUNT (coluna)` → retorna à **quantidade de registros da coluna** selecionada
    - `MAX (coluna)` → retorna o **valor máximo do atributo da coluna** selecionada
    - `MIN (coluna)` → retorna o **valor mínimo do atributo da coluna** selecionada
    - `SUM (coluna)` → retorna a **soma dos atributos da coluna** selecionada
    - `AVG (coluna)` → retorna a **média de valor dos atributos da coluna** selecionada
    
    Exemplos de consulta:
    
    ```sql
    SELECT 
    	MAX(nota), 
    	MIN(nota)
    FROM 
    	turma t
    WHERE
    	t.id = 1
    ```
    
    ```sql
    SELECT 
    	COUNT(*)
    FROM 
    	alunos a
    INNER JOIN
    	turma t ON a.ra = t.ra
    WHERE
    	t.id = 1
    ```
    
- O que é ORDENAÇÃO?
    
    Estabelece a **ordem das tuplas resultantes** de acordo com a lógica utilizada;
    
    - `ORDER BY coluna [ ASC | DESC ]`
        - `ASC`
            - Ordena tuplas de acordo com a **ordem crescente** do atributo selecionado;
            - **Valor default** (quando não especificado na query).
        - `DESC`
            - Ordena tuplas de acordo com a **ordem decrescente** do atributo selecionado
    
    Exemplo de consulta com ordenação:
    
    ```sql
    SELECT *
    FROM 
    	alunos a
    INNER JOIN
    	turma t ON a.ra = t.ra
    WHERE
    	t.id = 1
    ORDER BY
    	a.nome
    ```
    
- O que é DISTINÇÃO?
    
    Seleciona apenas tuplas **que possuem valores diferentes** entre as respectivas colunas;
    
    - `DISTINCT`
        
        ```sql
        SELECT DISTINCT
        	coluna1, coluna2, ..., colunaN
        FROM 
        	<tabela(s)>
        WHERE
        	<condições>
        ```
        
    
    Exemplo de consulta com distinção:
    
    ```sql
    SELECT DISTINCT
    	a.ra,
    	a.nome
    FROM 
    	alunos a
    INNER JOIN
    	turma t ON a.ra = t.ra
    WHERE
    	t.id = 1
    ```