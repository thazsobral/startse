# Modelo Entidade-Relacionamento

- O que é Modelo Entidade-Relacionamento?
    
    **Criado** por **Peter Chen** em **1976**.
    
    Modelo Entidade-Relacionamento (MER) é, “Um **modelo conceitual** para **descrever objetos** (entidades) **pertencentes a um domínio de negócios**, com seus respectivos atributos e como eles relacionam entre si”, ou Abstração da estrutura do BD.
    
    **Representado** de forma gráfica das informações por meio do **Diagrama Entidade**-Relacionamento (DER).
    
- O que é Entidades?
    
    “Coisas” do mundo real que possuem existência independente:
    
    - **Entidades físicas**: realmente tangíveis e visíveis no mundo real. Ex: pessoa, carro, produto, etc...
    - **Entidades lógicas**: existência conceitual, geralmente decorrente da interação entre entidades físicas. Ex: compra, venda, transação, etc...
    
    DER → representada por retângulo:
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled.png)
    
- O que é Relacionamento?
    
    **Relação existente entre entidades** do mundo real. Isso é possibilita entender como uma entidade se comporta em relação às demais;
    
    DER → representado por losango:
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%201.png)
    
- O que é Atributos?
    
    Valores que representam as **propriedades das entidades** e dos relacionamentos no mundo real:
    
    - Atributos de entidades;
    - Atributos de relacionamento.
    
    DER → representado por elipses:
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%202.png)
    
- Qual a classificação de atributos?
    
    **Classificação → Descritivos, Nominativos, Referenciais**
    
    - **Descritivos**: representam **características intrínsecas**. Ex: data, cor, gênero;
    - **Nominativos**: além de serem também descritivos, estes têm a função de definir e **identificar um objeto**. Ex: RA, código, sigla;
    - **Referenciais**: representa o **vínculo com a entidade** que está relacionada. Ex: venda com o ID do cliente que está relacionado.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%203.png)
    
- Qual a diferença entre atributos simples e composto?
    
    **Tipos de atributos → Simples vs Composto**
    
    - **Simples**: atributo atômico; **não divisível**;
    - **Composto**: **pode ser dividido** em subatributos.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%204.png)
    
- Qual a diferença entre atributos monovalorados e multivalorados?
    
    **Tipos de atributos → Monovalorado vs Multivalorado**
    
    - **Monovalorado**: assume **apenas um valor** para uma entidade ou relacionamento;
    - **Multivalorado**: pode **assumir mais de um valor**.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%205.png)
    
- Qual a diferença entre atributos armazenado e derivado?
    - **Armazenado**: atributo **próprio da entidade**;
    - **Derivado** (calculado): valor **pode ser obtido por meio de outros atributos**.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%206.png)
    
- O que são atributos chave?
    
    **Tipos de atributos → Chave**
    
    - **Restrição de unicidade**: **entidades devem** conter **ao menos um atributo cujo valor identifique unicamente** o respectivo registro (instância);
    - **Principal** (mas não único) **meio para consultar registros** de uma entidade;
    
    DER → representado por atributo sublinhado.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%207.png)
    
- Qual a diferença entre Atributos de Entidade e Atributos de Relacionamento?
    
    Exemplo: informação se o aluno foi aprovado em uma determinada disciplina.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%208.png)
    
- Quais são os Papéis no Relacionamento?
    - **Cada entidade** no modelo relacional **possui um PAPEL**;
    - Indicação **no DER é opcional**, porém pode facilitar o entendimento/interpretação;
    - A Sugestão é **evidenciar papéis nos casos em que houver ambiguidade** na interpretação.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%209.png)
    
- O que é Auto relacionamento?
    
    Quando uma **mesma entidade possui mais de um papel em um mesmo relacionamento**.
    
    ![Untitled](Modelo%20Entidade-Relacionamento%20dce4ba64edb644389559b542b8fc274f/Untitled%2010.png)