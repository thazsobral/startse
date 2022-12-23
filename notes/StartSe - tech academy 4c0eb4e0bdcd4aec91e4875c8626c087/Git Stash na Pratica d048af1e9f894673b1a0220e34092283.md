# Git Stash na Pratica

- Como armazenar uma alteração de forma temporária?
    
    Armazenar uma alteração temporária
    
    ```bash
    git stash --include-untracked
    ```
    
    <aside>
    💡 esse comando serve para armazenar todas as alterações mesmo não incluidas no versionamento ainda.
    
    </aside>
    
- Como aplicar uma alteração temporária?
    
    Aplicar uma alteração temporária
    
    ```bash
    git stash apply
    ```
    
    <aside>
    💡 Esse comando aplica todos as alterações que tinha guardado no stash
    
    </aside>
    
- Como listar alterações temporárias?
    
    Listar alterações temporárias
    
    ```bash
    git stash list
    ```
    
- Como limpar uma alteração temporária?
    
    Limpar uma alteração temporária
    
    ```bash
    git stash clear
    ```