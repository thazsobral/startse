-- Active: 1670798182279@@127.0.0.1@3306@startse
SELECT * 
FROM
    aluno
WHERE
    nome LIKE "%silva%";
SELECT * 
FROM
    aluno
WHERE
    data_nascimento BETWEEN "2000-01-01" AND "2000-12-01";
SELECT * 
FROM
    aluno
WHERE
    data_nascimento IN("2001-01-01", "2000-01-01");
SELECT *
FROM
    professor p, disciplina d
WHERE
    d.cpf_professor = p.cpf;
SELECT *
FROM
    disciplina d
JOIN
    professor p ON d.cpf_professor = p.cpf;
SELECT *
FROM
    professor p
INNER JOIN 
    disciplina d ON d.cpf_professor = p.cpf;
SELECT 
    MAX(ad.nota),
    MIN(ad.nota),
    AVG(ad.nota),
    SUM(ad.nota)
FROM
    aluno_disciplina ad
WHERE
    ad.codigo_disciplina = 10;
SELECT DISTINCT
    ad.codigo_disciplina,
    ad.ano
FROM
    aluno_disciplina ad;