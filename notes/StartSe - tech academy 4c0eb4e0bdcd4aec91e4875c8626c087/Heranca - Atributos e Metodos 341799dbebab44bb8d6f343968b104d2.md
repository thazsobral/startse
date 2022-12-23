# Heranca - Atributos e Metodos

- Como é a Herança do construtor?
    
    A **herança do construtor** permite a **utilização do construtor de uma superclasse dentro de uma subclasse** (herança do construtor). Uma forma simples de fazer isso é **utilizando a palavra reservada super**, dentro do construtor da subclasse.
    
- Como é utilizada a Palavra reservada super?
    
    A **palavra reservada super** pode ser **utilizada dentro do construtor da subclasse para chamar o método construtor da superclasse**. Neste caso, deve vir antes da palavra reservada this.
    
    ![Untitled](Heranca%20-%20Atributos%20e%20Metodos%20341799dbebab44bb8d6f343968b104d2/Untitled.png)
    
    A **palavra reservada super** também **permite acessar os métodos e atributos de uma
    superclasse dentro de uma subclasse**
    
    ![Untitled](Heranca%20-%20Atributos%20e%20Metodos%20341799dbebab44bb8d6f343968b104d2/Untitled%201.png)
    
- Como é a Herança de atributos?
    
    Uma **subclasse tem acesso aos atributos públicos de uma superclasse** (herança de atributos). Posteriormente será explicado um tipo de atributo da superclasse, chamado atributo privado, que a subclasse não tem acesso
    
    ![o atributo tipo foi declarado na superclasse Produto, porém por herança ele pode ser acessado pela subclasse Livro](Heranca%20-%20Atributos%20e%20Metodos%20341799dbebab44bb8d6f343968b104d2/Untitled%202.png)
    
    o atributo tipo foi declarado na superclasse Produto, porém por herança ele pode ser acessado pela subclasse Livro
    
- Como é a Herança de métodos?
    
    Uma **subclasse tem acesso aos métodos públicos de uma superclasse** (herança de métodos). Posteriormente será explicado um tipo de método da superclasse, chamado método privado, que a subclasse não tem acesso.
    
    ![o método getDados foi declarado na superclasse Produto, porém por herança ele pode ser acessado pela subclasse Livro](Heranca%20-%20Atributos%20e%20Metodos%20341799dbebab44bb8d6f343968b104d2/Untitled%203.png)
    
    o método getDados foi declarado na superclasse Produto, porém por herança ele pode ser acessado pela subclasse Livro