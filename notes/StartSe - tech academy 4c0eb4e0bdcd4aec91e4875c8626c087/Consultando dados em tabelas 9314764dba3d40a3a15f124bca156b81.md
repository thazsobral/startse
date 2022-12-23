# Consultando dados em tabelas

- Como utilizar o SELECT?
    
    Retorna informações contidas nas tabelas, de acordo com as condições e projeções selecionadas.
    
    ```sql
    SELECT 
    	<lista de colunas> → projeção 
    FROM 
    	<tabela(s)>
    WHERE
    	<condições>
    ```
    
- Quais os OPERADORES CONDICIONAIS?
    
    Utilizado para identificar a(s) tupla(s) que serão retornadas nas operações de consulta, atualização e remoção de dados;
    
    Alguns operadores:
    
    - `=`, `<>`, `>`, `>=`, `<`, `<=`→ Ex: idade = 20, valor >= 0, data_final < ‘2022-12-31’
    - `AND`, `OR`, `NOT` → Ex: NOT(idade = 20) AND data_final < ‘2022-12-31’
    - `IN`, `NOT IN` → Ex: ano IN (2021, 2022), versão NOT IN (‘1.0’, ‘2.0’)
    - `BETWEEN` → Ex: data_venda BETWEEN ‘2022-01-01’ and ‘2022-12-31’
    - `IS NULL` → Ex: data_nascimento IS NULL
    - `LIKE` → Compara sequência de caracteres dentro de uma string;
        - `%` é utilizado para representar qualquer valor antes e/ou após a sequência;
        - Exemplo → atributo LIKE ‘%string%’