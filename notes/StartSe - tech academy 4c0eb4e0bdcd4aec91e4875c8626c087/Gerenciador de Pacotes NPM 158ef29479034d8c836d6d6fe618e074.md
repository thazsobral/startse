# Gerenciador de Pacotes NPM

- O que é Node Package Manager (NPM)?
    
    Utilitário de linha de comando para gerenciar as dependências / pacotes do Node.
    
    [npm](https://www.npmjs.com/)
    
- Como instalar o NPM?
    1. Necessário instalar o node.js, visto que, eles são empacotados juntos.
    2. Para verificar a versão.
        
        ```bash
        npm --version
        ou
        npm -v
        ```
        
    3. Atualizar a versão do NPM
        
        ```bash
        npm install -g npm
        ```
        
- Como Utilizar pacotes NPM no projeto Node?
    
    O projeto deve conter um arquivo chamado de package.json
    
    ```json
    {
      "name": "my-package",
      "version": "1.0.0",
      "description": "demonstrativo de package.json",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node ."
      },
      "keywords": [
        "callback",
        "js"
      ],
      "author": "me",
      "license": "ISC"
    }
    ```