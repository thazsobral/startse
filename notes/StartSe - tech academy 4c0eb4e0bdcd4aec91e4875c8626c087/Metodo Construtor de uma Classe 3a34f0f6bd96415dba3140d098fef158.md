# Metodo Construtor de uma Classe

- Como é o Método Construtor de uma Classe em JavaScript?
    
    **Toda classe precisa de um método chamado constructor** (construtor)
    
    - se o **construtor não** for **declarado**, o **JavaScript irá criar um construtor vazio**
    - o **construtor é responsável pela inicialização das propriedades do objeto** quando o objeto é criado (instanciado)
    - ele é **chamado automaticamente quando um objeto é instanciado** (criado)
    
    ![Untitled](Metodo%20Construtor%20de%20uma%20Classe%203a34f0f6bd96415dba3140d098fef158/Untitled.png)
    
- O que significa a palavra reservada this em JavaScript?
    - **this se refere** sempre **ao objeto**
    - neste caso, **this se refere** **ao objeto** que será **criado a partir dessa classe**
        
        ![Untitled](Metodo%20Construtor%20de%20uma%20Classe%203a34f0f6bd96415dba3140d098fef158/Untitled%201.png)
        
    - é **útil para diferenciar entre os parâmetros de um método** **e os atributos** de uma classe
    - neste caso, this se refere a qualquer objeto do tipo Filme
        
        ![Untitled](Metodo%20Construtor%20de%20uma%20Classe%203a34f0f6bd96415dba3140d098fef158/Untitled%202.png)
        
    - é útil para diferenciar entre os parâmetros titulo e ano do método constructor e os atributos da classe Filme