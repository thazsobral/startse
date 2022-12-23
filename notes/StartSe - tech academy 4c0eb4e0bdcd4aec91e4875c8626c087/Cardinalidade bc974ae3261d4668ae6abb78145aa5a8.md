# Cardinalidade

- O que é Cardinalidade?
    
    Demonstra o **número** (mínimo e máximo) **de entidades ao qual outra entidade pode estar relacionada**;
    
    DER: →`([min], [max]);`
    
    Exemplo:
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled.png)
    
- O que é Cardinalidade Mínima?
    
    **Número mínimo de ocorrências na qual uma entidade está relacionada a uma ocorrência de outra entidade**. Isso especifica se participação das ocorrências das entidades no relacionamento é opcional ou obrigatória;
    
    - Cardinalidade mínima 0 é denominada associação opcional;
    - Cardinalidade mínima 1 é denominada associação obrigatória;
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%201.png)
    
- O que é Cardinalidade Máxima?
    
    **Especifica a quantidade máxima de ocorrências de entidades que podem estar associadas a uma ocorrência da outra entidade** (1 ou N);
    
    - Cardinalidade 1 representa, no máximo, uma única ocorrência entre as entidades;
    - Cardinalidade máxima “muitos” é representada por N;
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%202.png)
    
- Quais as combinações de cardinalidade?
    - Um-para-um (**oneToOne**);
    - Um-para-muitos (**oneToMany**);
    - Muitos-para-um (**ManyToOne**);
    - Muitos-para-muitos (**manyToMany**).
- O que é Cardinalidade Um-para-um?
    - Uma entidade A está associada no máximo a uma entidade B;
    - Uma entidade B está associada no máximo a uma entidade A.
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%203.png)
    
    Exemplo:
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%204.png)
    
- O que é Cardinalidade Um-para-muitos?
    - Uma entidade A está associada a qualquer número de entidades B;
    - Uma entidade B pode estar associada, no máximo, a uma entidade de A.
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%205.png)
    
    Exemplo:
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%206.png)
    
- O que é Cardinalidade Muitos-para-um?
    - Uma entidade A está associada, no máximo, a uma entidade B;
    - Uma entidade B, no entanto, pode estar associada a qualquer número de entidades A.
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%207.png)
    
    Exemplo:
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%208.png)
    
- O que é Cardinalidade Muitos-para-muitos?
    - Uma entidade A está associada a qualquer número de entidades de B;
    - Uma entidade B está associada a qualquer número de entidades de A.
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%209.png)
    
    Exemplo:
    
    ![Untitled](Cardinalidade%20bc974ae3261d4668ae6abb78145aa5a8/Untitled%2010.png)