# Linguagem de Definicao de Dados

- Como funciona SQL?
    
    Dois conjuntos de comandos principais
    
    - Linguagem de Definição de Dados
        - **Data Definition Language** (DDL);
        - Conjunto de comandos para **definição e gerenciamento do esquema** do BD.
    - Linguagem de Manipulação de Dados
        - **Data Manipulation Language** (DML);
        - **Consulta, inserção, atualização e remoção** relacionados **às instâncias** do BD.
- Quais os principais comandos de Linguagem de Definição de Dados?
    
    Principais comandos:
    
    - `CREATE`: utilizado para **criar objetos**, como por exemplo **um** **banco de dados** **e/ou** **uma tabela**;
    - `ALTER`: usado para **modificar** e **renomear elementos de uma tabela** em um BD existente;
    - `DROP`: usado para **remover um banco de dados inteiro** **ou uma tabela** de banco de dados;
    - `TRUNCATE`: utilizado para **remover todos os registros de uma tabela** de banco de dados.
- Como Criar um novo banco de dados?
    
    ```sql
    CREATE DATABASE my_database;
    ```
    
- Como Criar uma nova tabela?
    
    ```sql
    CREATE TABLE my_table (
    	atributo1 tipo <restrições do atributo 1> ,
    	atributo2 tipo <restrições do atributo 2> ,
    	...
    	atributoN tipo <restrições do atributo N> ,
    	<restrições da tabela>
    );
    ```
    
- Quais os tipos de Linguagem de Definição de Dados?
    
    [MySQL :: MySQL 8.0 Reference Manual :: 11 Data Types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)
    
    - **Tipos de texto**
        - `CHAR(<size>)`: tamanho fixo. Tamanho máximo de 256 caracteres;
        - `VARCHAR(<size>)`: tamanho variável de 65353 byes;
        - `TINYTEXT(<size>)`: tamanho máximo de 255 caracteres;
        - `TExT(<size>)`: tamanho máximo de 65,535 carateres;
        - `MEDIUMTEXT(<size>)`: tamanho máximo de 16,777,215 carateres;
        - `LONGTEXT(<size>)`: tamanho máximo de 4GB ou 4,294,967,295 carateres;
    - **Tipos de Dados numéricos**
        - `TINYINT`: valor inteiro muito pequeno. Aceita um intervalo de -128 a 127. Assinado com valores no intervalo de 0 a 255.
        - `SMALLINT`: valor inteiro pequeno. Aceita um intervalo de -32768 a 32767. Assinado com valores no intervalo de 0 a 65535.
        - `MEDIUMNT`: valor inteiro médio. Aceita um intervalo de -8388608 a 8388607. Assinado com valores no intervalo de 0 a 16777215.
        - `INT`: valor inteiro padrão. Aceita um intervalo de -2147483648 a 2147483647. Assinado com valores no intervalo de 0 a 4294967295.
        - `INTEGER`: o mesmo que `INT`
        - `BIGINT`: valor inteiro grande. Aceita um intervalo de -9223372036854775808 a 9223372036854775807. Assinado com valores no intervalo de 0 a 18446744073709551615.
        - `FLOAT`: número de ponto flutuante de precisão única. 32 bits (7 digitos)
        - `DOUBLE`: número de ponto flutuante de precisão única. 64 bits (15 a 16 digitos)
        - `DECIMAL(m, d)`: número de ponto fixo, onde m é o total de digitos e d é o numreo de digitos após as casas decimais. 128 bit (28-29 digitos significativos).
    - **Tipos de data**
        - `DATE`: apresenta como YYYY-MM-DD;
        - `DATETIME`: apresenta como YYYY-MM-DD HH:MM:SS
        - `TIMESTAMP`: apresenta como YYYY-MM-DD HH:MM:SS
        - `TIME`: apresenta como HH:MM:SS
        - `YEAR[(2|4)]`: apresenta com o padrão de 4 digitos
    - **Tipos de blob**
        - `TINYBLOB`: tamanho máximo de 255 bytes.
        - `BLOB`: tamanho máximo de 65,535 bytes.
        - `MEDIUMBLOB`: tamanho máximo de 16,777,215 bytes.
        - `LONGTEXT`: tamanho máximo de 4GB ou 4,294,967,295 caracteres.
    
    Exemplo de uso
    
    ```sql
    CREATE TABLE my_table (
    	atributo1 tipo <restrições do atributo 1> ,
    	atributo2 tipo <restrições do atributo 2> ,
    	...
    	atributoN tipo <restrições do atributo N> ,
    	<restrições da tabela>
    )
    ```
    
- Quais as restrições de atributos?
    - `UNIQUE`
    - `NOT NULL`
    - `AUTO_INCREMENT`
    - `DEFAULT <valor>`
    - `CHECK (<condição>)`
- Quais as restrições de tabelas?
    - `PRIMARY KEY (<atributos>)`
    - `CHECK (<condição>)`
    - `UNIQUE (<atributos>)`
    
    ```sql
    FOREIGN KEY (atributoFK) REFERENCES tabela_origem(atributoPK)
    	[ ON DELETE | ON UPDATE ] [ RESTRICT | CASCADE | SET NULL | SET DEFAULT ]
    ```