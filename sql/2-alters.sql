ALTER TABLE disciplina ADD cpf_professor CHAR(11);
ALTER TABLE disciplina ADD Foreign KEY (cpf_professor) REFERENCES professor(cpf);
ALTER TABLE aluno_disciplina MODIFY ano YEAR CHECK(ano > 2000);