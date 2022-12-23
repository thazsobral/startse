# Introdução a Banco de Dados

- Qual a motivação para o SQL?
    
    “Um **banco de dados** (BD) é uma **coleção organizada de informações** - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador.”
    
    ![Untitled](Introduc%CC%A7a%CC%83o%20a%20Banco%20de%20Dados%206051cb83f9b1416db20c05a602c28cff/Untitled.png)
    
    Ou seja, pode ser considerado um banco de dados se os dados estiverem estruturados de forma fixa.
    
    [O que é um banco de dados?](https://www.oracle.com/br/database/what-is-database/)
    
- Qual o Problema que o Banco de dados resolve?
    
    ![Untitled](Introduc%CC%A7a%CC%83o%20a%20Banco%20de%20Dados%206051cb83f9b1416db20c05a602c28cff/Untitled%201.png)
    
    Considerando uma pasta com os arquivos que contém os dados necessários
    
    - **Redundância**: pode-se ter a mesma informação em mais de um arquivo. Ou seja, uma base de arquivos não garante que os arquivos não possuam dados repetidos.
    - **Inconsistência:** pode-se ter a mesma informação mas com dados diferentes. Ou seja, uma base de arquivos não garante que os arquivos não possuam dados diferentes sobre as informações.
    - **Dificuldade no acesso a dados:** pode-se ter dados faltantes em uma determinada base. Ou seja, uma base de arquivos não garante que haja todos os dados que seriam obrigatórios.
    - **Isolamento dos dados:** pode-se ter informações em locais diferentes a pasta o que pode dificultar o acesso a essas informações. Ou seja, uma base de arquivos não garante que todos os dados estão dentro da mesma pasta.
    - **Múltiplos usuários:** pode-se ter informações tentando ser acessada por mais de uma pessoa. Ou seja, uma base de arquivos não garante nativamente que todas as pessoas consigam acessar o mesmo arquivo ao mesmo tempo.
    - **Segurança:** pode-se ter dados acessados por pessoas que não deveriam acessa-los. Ou seja, uma base de arquivos não garante nativamente que os dados sejam acessados apenas por pessoas autorizadas.
    - **Integridade:** pode-se que por algum motivo o arquivo perdeu sua estrutura e não pode ser mais trabalhado. Ou seja, uma base de arquivos não garante nativamente que os arquivos se mantenham integros.
    - **Atomicidade:** pode-se que a informação não seja única na base de dados. Ou seja, uma base de arquivos não garante nativamente que cada informação seja única na base, o que garante que um conjunto de dados formem informações únicas em uma base.
- O que forma a base dados?
    
    ![Untitled](Introduc%CC%A7a%CC%83o%20a%20Banco%20de%20Dados%206051cb83f9b1416db20c05a602c28cff/Untitled%202.png)
    
    - **Esquema**: a estrutura da base de dados,
    - **Instância**: os registros gravados respeitando o esquema.
- O que é um SGDB?
    
    Sistema de Gerenciamento de Bases de Dados (SGBD)
    
    - Interface entre o banco de dados e seus usuários finais ou programas;
    - Permitir recuperação, atualização e gerenciamento das informações;
    - Facilitar a supervisão e o controle de bancos de dados.
    
    ![Untitled](Introduc%CC%A7a%CC%83o%20a%20Banco%20de%20Dados%206051cb83f9b1416db20c05a602c28cff/Untitled%202.png)
    
- Quais as responsabilidades de um SGBD?
    - **Controle de Redundâncias**: Informações armazenadas em um único lugar.
    - **Compartilhamento de dados em um ambiente multiusuário**: Garantir concorrência ao acesso dos dados, sem erro.
    - **Controle de Acesso**: Seleção de permissões por usuário.
    - **Interfaceamento**: Facilidade para recuperação de informação.
    - **Esquematização**: Mecanismos que possibilitem a compreensão do relacionamento entre as tabelas e sua manutenção.
    - **Controle de Integridade**: Aplicações e acessos não podem comprometer integridade dos dados.
    - **Backups**: Facilidade para recuperar falhas de hardware e software.
- Quais as Vantagens de um SGBD?
    - Independência de dados;
    - Consistência de dados;
    - Acesso compartilhado (multiusuário e concorrente) à informação;
    - Segurança;
    - Controle de armazenamento, com estruturas para processamento eficiente de operações;
    - Backup e recuperação de falhas;
    - Múltiplas interfaces com os usuários;
    - Definição e manutenção de restrições de integridade.
- Quais os tipos de banco de dados?
    - Banco de Dados Relacional;
    - Bancos de Dados NoSQL;
    - Bancos de dados orientados a objetos;
    - Bancos de dados distribuídos;
    - Data warehouses;
    - Bancos de dados gráficos;
    - Bancos de dados OLTP;
    - Bancos de dados em nuvem.
    
    <aside>
    💡 “O melhor banco de dados para uma organização específica depende de como a organização pretende usar os dados”
    Fonte: [https://www.oracle.com/br/database/what-is-database/](https://www.oracle.com/br/database/what-is-database/)
    
    </aside>
    
- Qual as características do Banco de Dados Relacional?
    - Conjunto de tabelas com colunas e linhas;
    - Colunas: armazenam um tipo de dados específico (número, caractere, texto, etc...);
    - Linhas: representam as informações (dados) de uma determinada instância do BD;
    - Pontos de dados relacionados entre si;
    - Comumente utilizam linguagem SQL.
    
    ![Untitled](Introduc%CC%A7a%CC%83o%20a%20Banco%20de%20Dados%206051cb83f9b1416db20c05a602c28cff/Untitled%203.png)
    
- O que é SQL?
    - **Structured Query Language** (Linguagem de Consulta Estruturada);
    - **Desenvolvida** pela primeira vez **na IBM** nos anos **1970**;
    - **Usada** por **quase todos** os **bancos de dados relacionais**;
    - **Linguagem declarativa**, ou seja, você especifica o que você precisa;
    - Utilizada para **consultar**, **manipular**, **definir** **dados** e **fornecer controle de acesso**;
    - Embora seja **amplamente utilizada**, não é única entre os SGBDs.
- Quais as Linguagens de um SGBD?
    
    A maioria dos SGBDs usam a linguagem de consulta estruturada (SQL) para escrever e consultar dados.
    
    Fonte: [https://www.oracle.com/br/database/what-is-database](https://www.oracle.com/br/database/what-is-database)
    
- Como é definido o SQL?
    
    ![Untitled](Introduc%CC%A7a%CC%83o%20a%20Banco%20de%20Dados%206051cb83f9b1416db20c05a602c28cff/Untitled%204.png)
    
    A liguagem SQL dividi-se em três grandes categorias:
    
    - **DML:** Data Manipulation Language - trabalha com linhas;
        
        
        | SELECT | Utilizado para extrair dados da base de dados |
        | --- | --- |
        | INSERT | Introduzir novas linhas |
        | UPDATE | Alterar linhas já existentes |
        | DELETE | Apagar linhas já existentes |
    - **DDL:** Data Definition Language - trabalha com objectos (ex: tabelas)
        
        
        | CREATE | Criar objectos da base de dados (tabelas, índices, vistas) |
        | --- | --- |
        | ALTER | Alterar objectos da base de dados (tabelas, índices, vistas) |
        | DROP | Apagar objectos da base de dados (tabelas, índices, vistas) |
    - **DCL:** Data Control Language - trabalha com utilizadores;
        
        
        | GRANT | Conceder acesso à base de dados e aos seus objectos |
        | --- | --- |
        | REVOKE | Retirar acesso à base de dados e aos seus objectos |
- Quais os Desafios dos banco de dados atualmente?
    - Absorção de **aumentos** significativos **no volume de dados**;
    - **Garantia da segurança** de dados;
    - Acompanhar a **demanda**;
    - **Gerenciamento e manutenção** do BD e sua **infraestrutura**;
    - Remoção de limites na **escalabilidade**.