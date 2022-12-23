# Agrupamento

- O que é AGRUPAMENTO?
    
    **Unifica tuplas com valores idênticos**, de acordo com a(s) coluna(s) selecionada(s)/agrupada(s);
    
    - `GROUP BY coluna1, coluna2, ..., colunaN`
        - `[HAVING] <condição>`
            - **Cláusula** é **opcional**;
            - **Aplica condições** (filtro) às tuplas já agrupadas.
    
    Exemplo de consulta com agrupamento:
    
    ```sql
    SELECT
    	a.ra,
    	a.nome,
    	MIN(av.nota),
    	MAX(av.nota)
    FROM 
    	alunos a
    INNER JOIN
    	avaliacoes av ON a.ra = av.ra
    WHERE
    	av.id_turma = 1
    GROUP BY
    	a.ra, a.nome
    HAVING
    	AVG(t.nota) >= 6.0
    ```