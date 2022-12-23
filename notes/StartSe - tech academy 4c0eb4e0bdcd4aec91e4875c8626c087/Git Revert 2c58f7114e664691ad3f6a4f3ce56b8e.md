# Git Revert

- Como desfazer um commit mantendo o histórico?
    
    ```bash
    git revert id_commit
    ```
    
    <aside>
    💡 É utilizado para casos onde foi realizado um commit errado (geralmente na branch principal), de forma que é desfeito o commit e não venha a impactar o restante da equipe.
    
    </aside>
    
    <aside>
    💡 Quando utilizado, ele gera um commit sinalizando o revert no commit (desfazendo a alteração
    
    </aside>