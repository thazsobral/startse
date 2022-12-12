-- criando a tabela aluno
-- Active: 1670798182279@@127.0.0.1@3306@startse
CREATE TABLE aluno (
    ra INT NOT NULL,
    nome VARCHAR (100) NOT NULL,
    data_nascimento DATE NOT NULL,

    PRIMARY KEY(ra)
);

CREATE TABLE disciplina (
    codigo INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    qtde_creditos INT DEFAULT 0,

    PRIMARY KEY(codigo)
);

CREATE TABLE aluno_disciplina (
    ra_aluno INTEGER,
    codigo_disciplina INTEGER,
    ano YEAR(4) CHECK(ano > 2000),
    semestre INT CHECK(semestre IN(1,2)),
    nota DECIMAL(4,2) DEFAULT 0,

    PRIMARY KEY(ra_aluno, codigo_disciplina, ano, semestre),
    Foreign KEY (ra_aluno) REFERENCES aluno(ra),
    Foreign KEY (codigo_disciplina) REFERENCES disciplina(codigo)
);

CREATE TABLE professor (
    cpf CHAR(11),
    nome VARCHAR(100) NOT NULL,

    PRIMARY KEY(cpf)
);

ALTER TABLE disciplina ADD cpf_professor CHAR(11);
ALTER TABLE disciplina ADD Foreign KEY (cpf_professor) REFERENCES professor(cpf);
ALTER TABLE aluno_disciplina MODIFY ano YEAR CHECK(ano > 2000);