# Resolvendo Conflitos na Pratica

- Como resolver conflitos do git?
    - Merge: uxa as alterações da branch deseja para a branch atual
        
        ```bash
        git merge nome_branch
        ```
        
        <aside>
        💡 mais utilizado para branchs principais, assim é possivel mesclar uma outra branch na principal.
        
        </aside>
        
    - Rebase: puxa as alterações da branch deseja para a branch atual (também)
        
        ```bash
        git rebase nome_branch # puxa as alterações da branch
        # se houver conflitos é resolvido agora
        git add nome_arquivo # adiciona as alterações
        git rebase --continue # continua o merge
        ```
        
        <aside>
        💡 muito utilizada para branchs que não estão atualizadas, pode ser uma branch de nova funcionalidade.
        
        </aside>
        
- Como voltar para a branch principal?
    
    ```bash
    git checkout -
    ```