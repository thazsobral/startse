# Instalação do Git

- Como instalar o Git?
    - **No Windows**
        1. Acessar [https://git-scm.com/downloads](https://git-scm.com/downloads) e clicar em “Download for Windows”
        2. Selecionar a versão 32 ou 64 bits, de acordo com a arquitetura do SO respectivo
        3. Na tela inicial do instalador, clicar em “Next”
        4. Selecionar o diretório de instalação e clicar em “Next”
        5. Selecionar componentes desejados e clicar em “Next”
            
            ![Untitled](Instalac%CC%A7a%CC%83o%20do%20Git%20b9a1b7c6e8024b9e827e1ce33b44288b/Untitled.png)
            
        6. Selecionar diretório para atalhos e clicar em “Next”
        7. Selecionar editor padrão e clicar em “Next”
        8. Selecionar opção padrão para nomenclatura de branches iniciais e clicar em “Next”
        9. Selecionar tipo de utilização do Git e clicar em “Next”
        10. Definir aplicação para gerenciamento SSH e clicar em “Next”
        11. Definir biblioteca para gerenciamento SSL e clicar em “Next”
        12. Selecionar configuração padrão para arquivos de texto e clicar em “Next”
        13. Definir emulador para o Git Bash e clicar em “Next”
        14. Definir comportamento padrão do “git pull” e clicar em “Next”
        15. Definir gerenciador de credenciais e clicar em “Next”
        16. Definir opções extras e clicar em “Next”
        17. Definir configurações experimentais e clicar em “Next”
        18. Aguardar instalação
        19. Finalizar instalador
- Como usar o Git?
    - **no Windows**
        1. Ao recarregar a aplicação VS Code, será apresentada a opção “Git Bash”.
            
            ![Untitled](Instalac%CC%A7a%CC%83o%20do%20Git%20b9a1b7c6e8024b9e827e1ce33b44288b/Untitled%201.png)
            
        2. Selecionar “Git Bash”
        3. Configure o ambiente com os seguintes comandos
            
            ```bash
            git config –global user.name "<nome>" #configura nome
            git config –global user.email "<email>" #configura email
            git config --global init.defaultBranch main #configura banch principal
            ```
            
        4. verifique as configurações
            
            ```bash
            git config --list
            ```