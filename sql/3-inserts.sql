INSERT INTO aluno(ra, nome, data_nascimento)
    VALUES(1234, "José da Silva", "2000-01-01");
INSERT INTO professor(cpf, nome)
    VALUES("01234567890", "Professor Jirafalis");
INSERT INTO disciplina(nome, qtde_creditos, cpf_professor)
    VALUES("Banco de dados", 4, "01234567890");
INSERT INTO aluno_disciplina(ra_aluno, codigo_disciplina, ano, semestre, nota)
    VALUES(1234, 1, 2022, 1, 10);