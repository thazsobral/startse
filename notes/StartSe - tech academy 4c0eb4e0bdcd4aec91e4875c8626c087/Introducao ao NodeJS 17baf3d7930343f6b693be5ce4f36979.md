# Introducao ao NodeJS

- O que é um Desenvolvedores NodeJS?
    
    São desenvolvedores Javascript, pois NodeJS não é uma linguagem de programação
    
- NodeJS não depende do browser?
    
    Este é **utilizado para criação de páginas dinâmicas**, **conexão com banco de dados**, **acesso ao sistema operacional**, **criação de CLIs** (utilitários de linha de comando) etc
    
- O que é NodeJS?
    
    É uma plataforma voltada para o desenvolvimento de aplicações utilizando javascript.
    
    Criado por Ryan Dahl (2009), possibilitou **rodarmos o javascript independente do browser**. Logo podemos trabalhar com front-end e back-end utilizando uma linguagem
    
- Quais Empresas que Trabalham com NodeJS?
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled.png)
    
- Quais os benefícios NodeJS?
    - Ter um time de engenharia focado em uma linguagem utilizada para front-end e back-end
    - Aplicações leves e escaláveis. Veja um exemplo de resultado com NodeJS no PayPal:
        - O aplicativo foi desenvolvido quase duas vezes mais rápido com menos pessoas
        - Com 33% menos linhas de código e 40% menos arquivos (em comparação com o aplicativo anterior baseado em Java).
        - Dobrou o número de requests atendidas por segundo e ao mesmo tempo diminuiu o tempo médio de resposta em 35%.
- Por que o NodeJS utiliza JavaScript?
    
    Possui uma **arquitetura não bloqueante de thread única** (single thread), **baseada em eventos**.
    
- Como é a Arquitetura do Javascript?
    - **Call Stack**: Responsável por **empilhar as chamadas de funções**
    - **Callback Queue**: Responsável por **empilhar os callbacks** (funções enviadas como parâmetro para **funções assíncronas**)
    - **Event Loop**: Responsável por **checar continuamente se algum evento assíncrono foi disparado** para posteriormente executar o callback.
- O que é uma arquitetura single-thread não bloqueante?
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%201.png)
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%202.png)
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%203.png)
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%204.png)
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%205.png)
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%206.png)
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%207.png)
    
    ![Untitled](Introducao%20ao%20NodeJS%2017baf3d7930343f6b693be5ce4f36979/Untitled%208.png)
    
- NodeJS resolve todos os problemas?
    
    **Não** é a solução para todos os problemas.
    
    - **Ideal para aplicações com um grande volume de i/o**, tais como chats, streaming, servidores web e comunicação de rede.
    - **Não é recomendado por aplicações que utilizam alto uso do CPU**, como por exemplo, manipulação de vídeos e imagens