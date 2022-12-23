# Declarando Atributos de uma classe

- O que são Atributos?
    
    Os **atributos** podem ser **declarados diretamente dentro do método constructor utilizando** a palavra reservada **this**
    
    ![Untitled](Declarando%20Atributos%20de%20uma%20classe%209c3a0942a9e2446780e6a88eea4f95e0/Untitled.png)
    
- Como funciona os atributos?
    
    Os **atributos podem ser declarados** **antes do método constructor** e **posteriormente utilizados** dentro da classe com **a palavra this**
    
    - esta forma não é obrigatória, mas fica mais organizada e deixa a lista de atributos da classe mais mais explícita
        
        ![Untitled](Declarando%20Atributos%20de%20uma%20classe%209c3a0942a9e2446780e6a88eea4f95e0/Untitled%201.png)
        
    
    Os **atributos** que são **declarados dentro do escopo** (limites) ou corpo **da classe não podem ser acessados como variáveis globais fora da classe**
    
    - no exemplo abaixo, ocorreu um erro pois a taxaJuros é válida dentro da classe mas não foi definida na linha 12 (fora da classe)
        
        ![Untitled](Declarando%20Atributos%20de%20uma%20classe%209c3a0942a9e2446780e6a88eea4f95e0/Untitled%202.png)