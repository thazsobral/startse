# Composicao

- O que é Composição?
    
    Além da herança, **uma classe pode ser composta ou possuir objetos de outras classes
    através da composição**. Assim como a herança, a **composição** também **permite reuso de código de uma outra classe**.
    
    No mundo real, existem elementos complexos compostos de elementos mais simples:
    
    - um avião é composto de (ou possui): turbinas, assentos, iluminação, etc
    
    Em POO, uma classe pode ser composta (possuir) um ou mais objetos de outras
    classes
    
- Como utilizar a composição?
    
    ![Untitled](Composicao%2011eaa54595ba4149a77c60ffe697d5ba/Untitled.png)
    
    A classe Loja é composta ou possui objetos da classe Produto
    
    ![como Livro é uma subclasse da superclasse Produto seus objetos também foram adicionados ao objeto minhaLoja e seus dados foram exibidos através do método getDados utilizando o conceito de polimorfismo](Composicao%2011eaa54595ba4149a77c60ffe697d5ba/Untitled%201.png)
    
    como Livro é uma subclasse da superclasse Produto seus objetos também foram adicionados ao objeto minhaLoja e seus dados foram exibidos através do método getDados utilizando o conceito de polimorfismo
    
    Objetos de outras classes podem ser instanciados dentro de uma classe de interesse, permitindo o acesso aos métodos disponibilizados por este objeto (reuso de código).
    
    No exemplo abaixo, a classe CupomDesconto é responsável por estabelecer os valores
    de cupons de desconto para clientes de acordo com o nível de gastos.
    
    ![A classe Cliente possui um cupom de desconto que através a instanciação do objeto cupom no construtor da classe a partir da classe CupomDesconto.](Composicao%2011eaa54595ba4149a77c60ffe697d5ba/Untitled%202.png)
    
    A classe Cliente possui um cupom de desconto que através a instanciação do objeto cupom no construtor da classe a partir da classe CupomDesconto.
    
    ![uso do método getDesconto da classe CupomDesconto dentro da classe Cliente.](Composicao%2011eaa54595ba4149a77c60ffe697d5ba/Untitled%203.png)
    
    uso do método getDesconto da classe CupomDesconto dentro da classe Cliente.
    
    Após instanciar o objeto c1 a partir da classe Cliente, é possível estabelecer valores gastos e verificar seus benefícios.
    
    ![Untitled](Composicao%2011eaa54595ba4149a77c60ffe697d5ba/Untitled%204.png)
    
    Como houve um acúmulo de gastos no valor igual a 1000, o método getBeneficios retornou o cupom de desconto de acordo com os critérios da classe CupomDesconto.
    
    Dessa forma, os critérios e o valor dos descontos podem ser alterados sempre que necessário na classe CupomDesconto sem alterar o funcionamento do método getBeneficios da classe cliente.
    
    ![Untitled](Composicao%2011eaa54595ba4149a77c60ffe697d5ba/Untitled%205.png)