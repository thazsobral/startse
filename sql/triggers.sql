DELIMITER $
    -- criar uma trigger chamada aluno_curso_bi que executa antes de inserir
    CREATE TRIGGER aluno_curso_bi BEFORE INSERT
    -- na tabela aluno_curso
    ON aluno_curso
    -- que para cada linha
    FOR EACH ROW
    BEGIN
        -- se o valor do novo ra for maior que 0 faça
        IF NEW.ra > 0 THEN
            -- envie um sinal de erro com a mensagem de que Novas matriculas estao bloqueadas
            SIGNAL SQLSTATE "4500" MESSAGE_TEXT = "Novas matriculas estao bloqueadas";
        END IF;
    ENDS
DELIMITER;

DELIMITER $
    CREATE TRIGGER aluno_ai AFTER INSERT
    ON aluno
    FOR EACH ROW
    BEGIN
        IF NEW.ra IS NOT NULL THEN
            INSERT INTO aluno_curso(ra, codigo_curso, data_matricula)
                VALUES(NEW.ra, 1, "2022-01-01");
        END IF;
    ENDS$
DELIMITER;