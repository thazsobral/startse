# Ciclo de Vida dos Arquivos, Commits e Branches

- Qual o ciclo de vida dos arquivos no projeto?
    
    **O Git possui 4 ciclos de vida para os arquivos**
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled.png)
    
- O que é untracked?
    
    untracked o git ainda não conhece a existência do arquivo em nenhuma versão
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled%201.png)
    
- O que é staged?
    
    staged ficam os arquivos que estão prontos para serem inseridos na nova versão
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled%202.png)
    
- O que é unmodified?
    
    unmodified ficam os arquivos que não sofreram nenhuma alteração em relação à última versão
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled%203.png)
    
- O que é modified?
    
    modified ficam os arquivos que sofreram alteração em relação à última versão
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled%204.png)
    
- Quais os comandos básicos?
    - Para consultar o status dos arquivos utilizamos o comando
        
        ```bash
        git status
        ```
        
    - Para alterar consultar commits utilizamos o comando
        
        ```bash
        git log
        ```
        
    - Para avisar o git que queremos gerar um novo estado com os arquivos em staged
        
        ```bash
        git commit -m "comente sua alteração"
        ```
        
    - criam uma linha alternativa no tempo para trabalharmos em paralelo
        
        ```bash
        git branch nome_branch
        ```
        
        <aside>
        💡 por boas práticas é utilizado o nome das branchs em inglês e seguindo a seguinte sintaxe: `<tipo-branch>/<funcao>`. Por exemplo `feature/form-user`
        
        </aside>
        
    - Para alterar de branch utilizamos o comando
        
        ```bash
        git checkout nome_branch
        ```
        
    - Para unir duas branches utilizamos o comando
        
        ```bash
        git merge nome_branch
        ```
        
- O que é commit?
    
    O commit é utilizado para avisar o git que queremos gerar um novo estado com os arquivos em staged
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled%205.png)
    
- O que é branch?
    
    Branches criam uma linha alternativa no tempo para trabalharmos em paralelo
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled%206.png)
    
    Branches permitem trabalharmos de forma independente e colaborativa
    
    ![Untitled](Ciclo%20de%20Vida%20dos%20Arquivos,%20Commits%20e%20Branches%2030b07547a7754dbf97056ef363d428eb/Untitled%207.png)