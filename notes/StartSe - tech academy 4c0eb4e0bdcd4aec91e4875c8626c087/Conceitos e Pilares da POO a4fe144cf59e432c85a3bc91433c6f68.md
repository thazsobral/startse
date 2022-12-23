# Conceitos e Pilares da POO

- Quais os conceitos de classe em POO?
    
    A **classe funciona como um template** ou modelo **que define os atributos e os métodos** de cada objeto, como por exemplo:
    
    - Uma classe livro pode definir as características e os métodos de um livro
    - a partir dessa definição, vários objetos do tipo livro podem ser criados (instanciados)
    - cada objeto representa um livro em particular
- Quais os conceitos de objeto em POO?
    
    Um **objeto é uma abstração de elementos do mundo real que possuem características próprias** como por exemplo:
    
    - pessoa (nome, cpf, endereço, telefone, etc)
    - filme (título, elenco, ano, idioma, etc)
    - carro (marca, modelo, ano, potência, etc)
    
    Em POO **cada objeto possui**:
    
    - **atributos** (características como nome, modelo, título, código, etc)
    - **métodos** (funções que são associadas aos objetos - determinam o comportamento do objeto)
    
    ![Untitled](Conceitos%20e%20Pilares%20da%20POO%20a4fe144cf59e432c85a3bc91433c6f68/Untitled.png)
    
- O que é Instância de uma Classe?
    
    Como **vários objetos podem ser criados a partir de uma classe**, dizemo que:
    
    - **cada objeto é uma instância de uma classe**
    - o **ato de criar um objeto é conhecido como instanciar** **um objeto**
- Quais os Pilares da POO em JavaScript?
    - **Encapsulamento**
    - **Herança**
    - **Polimorfismo**
- O que é Encapsulamento?
    
    O **encapsulamento é uma forma de esconder** ou ocultar os **dados de uma classe**:
    
    - permite **proteger o acesso aos atributos** (propriedades) de um objeto
    - **ao invés de acessar um atributo diretamente**, por exemplo, é **necessário utilizar um método para atribuir ou recuperar algum dado**
- O que é Herança?
    
    É uma **forma de aproveitar atributos e métodos de uma classe em outra classe** derivada
    
    - neste caso, uma **classe recebe por herança atributos e métodos de uma outra classe**
    - a **classe que passa a herança para uma outra classe é chamada de superclasse**
    - a **classe que recebe a herança é chamada de subclasse**
    
    ![Untitled](Conceitos%20e%20Pilares%20da%20POO%20a4fe144cf59e432c85a3bc91433c6f68/Untitled%201.png)
    
- O que é superclasse e subclasses?
    
    A **superclasse reúne os atributos** e **métodos comuns a todas as subclasses**.
    
    As **subclasses reúnem os atributos** e **métodos específicos para cada contexto**
    
- O que é Polimorfismo?
    
    Poliformismo é, **quando uma subclasse e uma superclasse possuem métodos com o mesmo nome**, porém com códigos que **produzem resultados diferentes**.