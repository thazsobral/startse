# Encapsulamento - Atributos e Metodos Privados

- O que é Encapsulamento?
    
    Os métodos de uma classe **permitem isolar ou esconder os atributos de um objeto** para que eles sejam **acessados somente através dos métodos**
    
    - dessa forma **os dados e o comportamento de um objeto estão encapsulados em uma mesma entidade**: o objeto
    
    O encapsulamento é uma forma de esconder ou ocultar os dados de uma classe
    
    - permite **proteger o acesso aos atributos** (propriedades) de um objeto
    - ao invés de acessar um atributo diretamente, por exemplo, é **necessário utilizar um método para atribuir ou recuperar algum dado**
- Como trabalhar com encapsulamento?
    
    Uma forma de encapsular os dados de uma classe é declarar os atributos dessa
    classe como privados e utilizar métodos para acessá-los.
    
    E **JavaScript**, **utilizamos # no início do identificador de um atributo para declará-lo
    como privado**.
    
    Os atributos titulo e numPag da classe Livro só podem ser acessados fora da classe através
    do método getDados().
    
    ![Untitled](Encapsulamento%20-%20Atributos%20e%20Metodos%20Privados%20a147ed05b8484ad7a465f4697956b9f6/Untitled.png)
    
    Também é possível esconder ou ocultar métodos de uma classe tornando o método privado.
    
    - basta **utilizar # no início do identificador de um método para declará-lo como privado**
    - dessa forma, o **método privado será acessível apenas dentro da própria classe**
    - não poderá ser chamado através de um objeto que foi instanciado a partir da classe que contém o método privado
    
    ![o método privado validaValor só pode ser acessado dentro da classe Produto (nem as sublcassses nem os objetos instanciados a partir da classe Produto terão acesso a esse
    método)](Encapsulamento%20-%20Atributos%20e%20Metodos%20Privados%20a147ed05b8484ad7a465f4697956b9f6/Untitled%201.png)
    
    o método privado validaValor só pode ser acessado dentro da classe Produto (nem as sublcassses nem os objetos instanciados a partir da classe Produto terão acesso a esse
    método)