# Programacao Orientada a Objetos (POO)

- O que é POO?
    
    Um estilo ou **modo de programar utilizando objetos**. Ou seja, um estilo ou modo de programar utilizando uma estrutura baseada em módulos ou funções.
    
- Como é aplicado o POO?
    
    ![Código de programação em JavaScript estruturado em módulos ou funções.](Programacao%20Orientada%20a%20Objetos%20(POO)%20cb6ef0a817a14be1b4f194d3c1ce0943/Untitled.png)
    
    Código de programação em JavaScript estruturado em módulos ou funções.
    
    ![Códigos de programação em JavaScript utilizando classes (Produto e Livro) e objetos (criados a partir dessas classes) prod e liv](Programacao%20Orientada%20a%20Objetos%20(POO)%20cb6ef0a817a14be1b4f194d3c1ce0943/Untitled%201.png)
    
    Códigos de programação em JavaScript utilizando classes (Produto e Livro) e objetos (criados a partir dessas classes) prod e liv
    
- Qual a diferença entre Programação Estruturada e Programação Orientada a Objetos?
    
    
    | Programação Estruturada (PE) | Programação Orientada a Objetos (POO) |
    | --- | --- |
    | Código dividido em módulos ou funções | Código baseado no conceito de objetos |
    | Menos reusabilidade de código do que POO | Mais reusabilidade de código do que PE |
    | Menor facilidade de modificar o código do que POO | Maior facilidade de modificar o código do que PE |
- O que é classe?
    
    Os **objetos** são **definidos através um modelo** ou template **chamado classe**.
    
    As classes **possuem características comuns a objetos** do mesmo tipo:
    
    - pessoa, carro, produto, etc
    
    As classes **possuem comportamentos comuns a objetos** do mesmo tipo:
    
    - mover, parar, atualizar, comunicar, etc
- Como funciona a classe?
    
    As **características** das classes são **chamadas de atributos**.
    
    Os **comportamentos** das classes **são definidos** **pelos métodos**. Os **métodos são funções** declaradas dentro de uma classe.
    
    Os **métodos permitem isolar** ou esconder os **atributos** de um objeto para que eles sejam acessados somente através dos métodos. Assim os dados e os **métodos** de uma classe ficam **encapsulados** dentro de uma mesma entidade: o objeto.
    
    A partir da declaração de uma classe é possível criar múltiplos objetos, **cada objeto representa uma instância de uma classe**, por exemplo:
    
    A criação de um objeto é chamada de instanciação.
    
    - Para uma classe estudante, podemos criar múltiplos objetos do tipo estudante. Cada objeto representa um estudante em particular com seus próprios dados ou atributos (nome, endereço, telefone, etc)
    
    A **modularização** de um código **através de classes**, **permite reuso de código**, uma vez que:
    
    - Pode-se utilizar métodos de objetos de diferentes classes para produzir algum resultado sem precisar reescrevê-los.
- O que é modularização?
    
    A **modularização** de um código através **de classes**, **permite** uma **facilidade para modificar o código**, uma vez que:
    
    - **pode-se alterar parte do código** de uma classe **sem precisar alterar o código de outras** classes
    - **pode-se alterar a declaração de atributos** **e métodos privados** (incluir, renomear, etc)
    - **pode-se alterar o código de métodos públicos**