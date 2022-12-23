# Git Merge e Rebase

- Pra que serve o merge e o rebase?
    
    Utilizamos o merge e rebase para unir branches
    
- Qual a diferença entre merge e rebase?
    - **Merge:** serve para unir o ultimo estado de uma branch com a branch principal.
        
        <aside>
        💡 mais utilizada na branch main ou develop (dependendo do flow do projeto)
        
        </aside>
        
        ```bash
        git merge branch_name
        ```
        
        ![Untitled](Git%20Merge%20e%20Rebase%2006ac1b088dd94bfda7ec0732595da816/Untitled.png)
        
    - **Rebase:** serve para ordenar de forma cronologica os commits
        
        <aside>
        💡 não é uma boa pratica aplicar na branch principal, geralmente é feito numa branch de funcionalidade ou se preferir numa branch secundaria que proteje a main (como a develop)
        
        </aside>
        
        ```bash
        git rebase branch_name
        ```
        
        ![Untitled](Git%20Merge%20e%20Rebase%2006ac1b088dd94bfda7ec0732595da816/Untitled%201.png)
        
        ![Untitled](Git%20Merge%20e%20Rebase%2006ac1b088dd94bfda7ec0732595da816/Untitled%202.png)