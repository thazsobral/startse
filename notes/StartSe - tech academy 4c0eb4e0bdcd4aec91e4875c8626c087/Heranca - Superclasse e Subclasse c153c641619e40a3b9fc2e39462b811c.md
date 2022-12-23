# Heranca - Superclasse e Subclasse

- O que é herança?
    
    Em POO, a **herança é um termo utilizado para indicar que uma classe derivada de uma classe base** tem acesso aos atributos e métodos da classe base.
    
- O que é Superclasse e Subclasse?
    
    Uma **classe base que pode passar por herança o acesso a atributos e métodos para uma classe derivada** é chamada de superclasse. Uma classe derivada de uma superclasse é chamada de subclasse.
    
    Utilizando o conceito de herança, uma subclasse é do mesmo tipo que uma superclasse, porém com mais especificações do que a superclasse. Exemplo:
    
    - Superclasse: Fruta
    - Subclasses: Laranja, Abacate, Ameixa, etc
- Como é a Declaração de uma Superclasse?
    
    Ocorre como já foi apresentado anteriormente. No exemplo abaixo, temos a declaração de uma classe base ou superclasse chamada Produto.
    
    ![Untitled](Heranca%20-%20Superclasse%20e%20Subclasse%20c153c641619e40a3b9fc2e39462b811c/Untitled.png)
    
- Como é a Declarando uma Subclasse?
    
    Para declarar uma subclasse, a superclasse deve ter sido previamente declarada e utiliza-se:
    
    - a palavra reservada extends entre o nome da subclasse o nome da superclasse
    - a palavra reservada super dentro do construtor da subclasse para chamar o construtor da superclasse
    
    ![Untitled](Heranca%20-%20Superclasse%20e%20Subclasse%20c153c641619e40a3b9fc2e39462b811c/Untitled%201.png)
    
    ![Untitled](Heranca%20-%20Superclasse%20e%20Subclasse%20c153c641619e40a3b9fc2e39462b811c/Untitled%202.png)
    
    No exemplo anterior, os objetos criados a partir da subclasse Livro podem acessar o atributo tipo e o método getDados da superclasse, pois, de modo geral, uma subclasse recebe por herança os atributos e métodos da superclasse