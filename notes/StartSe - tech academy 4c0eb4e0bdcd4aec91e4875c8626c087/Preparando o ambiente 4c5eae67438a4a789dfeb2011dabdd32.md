# Preparando o ambiente

- Onde baixar o MySQL?
    
    [MySQL :: Download MySQL Installer](https://dev.mysql.com/downloads/windows/installer/8.0.html)
    
- Como preparar um ambiente para o SQL?
    1. Atualizar repositório de pacotes Linux
        
        ```bash
        sudo apt-get update
        ```
        
    2. Instalar servidor MySQL
        
        ```bash
        sudo apt-get install mysql-server
        ```
        
    3. Realizar o download MySQL Workbench (IDE), de acordo com a versão do SO.
        
        [MySQL :: Download MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
        
    4. Instalar MySQL Workbench
        
        ```bash
        sudo apt install ./nome_arquivo.deb
        ```
        
    5. Definir senha usuário root
        
        ```bash
        sudo mysql -u root -p
        ```
        
        ```sql
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY
        'senha_root';
        ```
        
    6. Acessar MySQL Workbench com a senha definida anteriormente