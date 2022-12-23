# Introducao a API REST

- O que é API?
    
    Application Programming Interface (API), é um conjunto de especificações de possíveis interações para que sistemas ou aplicativos diferentes se comuniquem.
    
    Esta é uma das principais formas de comunicação entre sistemas.
    
    ![Untitled](Introducao%20a%20API%20REST%2061b9c70ab75b4777bfe9867660ac9c07/Untitled.png)
    
- O que é REST?
    
    REST (Representational State Transfer), cREST é conhecida como RESTFulriado por Roy Fielding, é **conceito arquitetural para
    criação de APIs**.
    
    **Uma API** que aplica o conjunto de padrões **REST é conhecida como RESTFul**.
    
- Quais os métodos de requisição HTTP?
    
    ![Untitled](Introducao%20a%20API%20REST%2061b9c70ab75b4777bfe9867660ac9c07/Untitled%201.png)
    
- Quais os códigos HTTP?
    - 2XX: **Confirmação**
        - a. 200 (OK): A **solicitação** foi tratada e **concluída com êxito**.
        - b. 201 (Criado): indica a **criação bem sucedida** de um recurso.
    - 3XX: **Redirecionamento**
        - a. 301 **Movido Permanentemente**
    - 4XX (Solicitação inválida): representa um **erro do lado do cliente**, porque a solicitação foi malformada ou faltam parâmetros de solicitação.
        - 401 (Não autorizado): você tentou acessar um **recurso** para o qual **não tem permissão**.
        - b. 404 (Não encontrado): o **recurso** solicitado **não existe**.
    - 5XX (Erro interno do servidor): Sempre que o **servidor levanta uma exceção** durante a
    execução da solicitação.
- Quais os parâmetros de requisição?
    - **Header Params**: enviados **no cabeçalho da requisição**
    - **Query Params**: enviados **pela URL com chave e valor**
    - **Route Params**: enviados **pela rota**
    - **Body Params**: enviados **no** **corpo da requisição**
- Quais as Boas Práticas API Rest?
    
    **Considerando recursos para a entidade usuários**, temos:
    
    - **Obter lista de usuários** `GET /users` (status 200)
    - **Obter detalhes de um usuário** `GET /users/{id}` (status 200)
    - **Obter detalhes de um usuário** `POST /users` (status 201)
    - **Remover um usuário** `DELETE /users/{id}` (status 204)
    - **Atualizar um usuário** `PUT /users/{id}` (status 200)
    - **Atualizar** **apenas alguns dados do usuário** `PATCH /users/{id}` (status 200)

[API REST: Princípios e boas práticas para serviços RESTful - SmarTI](https://smarti.blog.br/api-rest-principios-boas-praticas-para-arquiteturas-restful/)