# Triggers

- O que são triggers?
    
    Basicamente, **é um processo que funciona como gatilho para executar algumas ações automaticamente sempre que uma mudança ocorre no banco de dados**. Ou seja, é principalmente uma função voltada para a automação: sempre que uma ação ocorre, o trigger executa outra ação como resposta imediata.
    
    ```sql
    DELIMITER $
        CREATE TRIGGER aluno_ai AFTER INSERT
        ON aluno
        FOR EACH ROW
        BEGIN
            IF NEW.ra IS NOT NULL THEN
                INSERT INTO aluno_curso(ra, codigo_curso, data_matricula)
                    VALUES(NEW.ra, 1, "2022-01-01");
        END$
    DELIMITER;
    ```