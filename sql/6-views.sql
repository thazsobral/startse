CREATE VIEW alunos_silva as
SELECT *
FROM
    aluno
WHERE
    nome LIKE "%Silva";