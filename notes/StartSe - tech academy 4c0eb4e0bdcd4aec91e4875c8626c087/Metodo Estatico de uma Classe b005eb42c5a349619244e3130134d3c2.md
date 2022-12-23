# Metodo Estatico de uma Classe

- O que é Método Estático?
    
    Um **método estático** é um **método que pertence somente à classe que o declarou**. Este **não pode ser acessado pelos objetos instanciados a partir da classe** que contém o método estático
    
- Como declara um método estático?
    
    **Para declarar um método estático**, em JavaScript, podemos **utilizar a palavra reservada static antes do nome do método**.
    
    Exemplo de uma classe com um método estático para conversão de segundos em minutos.
    
    ![Untitled](Metodo%20Estatico%20de%20uma%20Classe%20b005eb42c5a349619244e3130134d3c2/Untitled.png)
    
    Ao tentar acessar o método estático a partir do objeto musica1 que é uma instância da classe Musica, ocorre um erro indicando que este método não é uma função para este objeto.
    
    ![Untitled](Metodo%20Estatico%20de%20uma%20Classe%20b005eb42c5a349619244e3130134d3c2/Untitled%201.png)
    
    Ao acessar o método estático a partir da classe Musica, a duração da música que
    estava em segundos foi convertida para minutos (190 s = 3:10)
    
    ![Untitled](Metodo%20Estatico%20de%20uma%20Classe%20b005eb42c5a349619244e3130134d3c2/Untitled%202.png)