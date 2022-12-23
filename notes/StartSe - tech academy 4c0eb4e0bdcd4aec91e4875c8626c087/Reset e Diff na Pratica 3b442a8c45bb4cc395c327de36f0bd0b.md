# Reset e Diff na Pratica

- Como podemos voltar em estados anteriores ou resetar os nossos erros?
    
    Para voltar o arquivo para antes da edição utilizamos o comando
    
    ```bash
    git checkout nome_arquivo
    ```
    
- Como ver as modificações que um arquivo sofreu?
    
    Para ver as modificações em um arquivo utilizamos o comando
    
    ```bash
    git diff nome_arquivo
    ```
    
- Como voltar arquivos staged?
    
    Para voltar arquivos staged utilizamos o comando
    
    ```bash
    git reset HEAD nome_arquivo
    ```
    
- Como voltar para um commit?
    
    Para voltar para um commit específico
    
    ```bash
    git reset --soft id_commit_anterior
    git reset --mixed id_commit_anterior
    git reset --hard id_commit_anterior
    ```
    
    - `git reset --soft id_commit_anterior`: volta para o commit, mas mantém as alterações em staged
    - `git reset --mixed id_commit_anterior`: volta para o commit, mas mantém as alterações em modified
    - `git reset --hard id_commit_anterior`: simplismente volta para o commit e desconsidera qualquer outra modificação.