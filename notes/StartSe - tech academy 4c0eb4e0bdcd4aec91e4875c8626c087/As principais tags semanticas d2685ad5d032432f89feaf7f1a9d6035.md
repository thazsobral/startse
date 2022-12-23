# As principais tags semanticas

- O que é header?
    
    A tag `<header>` representa um grupo de suporte introdutório ou navegacional. Pode conter alguns elementos de cabeçalho, mas também outros elementos como um logo, seções de
    cabeçalho, formulário de pesquisa, e outros. 
    
    Importante mencionar que ela **não se limita a uma vez por página**, podendo ser usada em diferentes contextos,
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled.png)
    
- O que é nav?
    
    O elemento `<nav>` representa uma **seção de uma página que aponta para outras páginas ou para outras áreas da mesma página**, ou seja, uma **seção com links de navegação**.
    
    Também **não se limita a um uso por página**.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%201.png)
    
- O que é details?
    
    O elemento `<details>` é usado como uma ferramenta de onde o usuário irá obter **informações adicionais ao interagir**.
    
    Mas para funcionar corretamente ela depende da tag `<summary>`
    
- O que é summary?
    
    O elemento `<summary>` é utilizado como um sumário ou legenda para o conteúdo de um elemento `<details>`. 
    
    É utilizada sempre em conjunto com a tag `<details>`.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%202.png)
    
- O que é datalist?
    
    O elemento `<datalist>` contém um conjunto de elementos `<option>` que **representam as opções possíveis para o valor do input**.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%203.png)
    
- O que é progress?
    
    O elemento `<progress>` é usado para visualizar o progresso de uma tarefa. Tipicamente, é exibido como uma barra de progresso, mas pode ser customizado.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%204.png)
    
- O que é main?
    
    O elemento `<main>` define o conteúdo principal dentro do `<body>` em seu documento ou aplicação. **Entende-se como conteúdo principal aquele relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação.** O mesmo deverá ser único na página, ou seja, **dentro do elemento** `<main>` **não deverão ser incluídas seções** da página que sejam comuns a todo o site ou aplicação, tais como mecanismos de navegação, informações de copyright, logotipo e campos de busca (a não ser, é claro, caso a função principal do documento seja fazer algum tipo de busca).
    
    `<main>` não pode ser filho dos elementos `<article>`, `<aside>`, `<footer>`, `<header>`, ou `<nav>`.
    
    **Não pode existir mais de um elemento main** no mesmo documento.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%205.png)
    
- O que é article?
    
    O elemento `<article>` representa uma **composição independente em um documento**, página, aplicação, ou site, ou que é destinado a ser distribuído de **forma independente ou reutilizável**. Este **poderia ser o post de um fórum**, um **artigo de revista ou jornal**, um **post de um blog**, um **comentário enviado por um usuário**, um **gadget ou widget interativos**, ou qualquer outra forma de conteúdo independente.
    
    Quando um elemento `<article>` **está aninhado, o elemento interior representa um artigo relacionado com o elemento exterior**.
    **Informações sobre o autor** de um elemento `<article>` podem ser **fornecidas através do
    elemento `<address>`**, mas ele **não se aplica aos elementos** `<article>` **aninhados**.
    A **data e hora de publicação** de um elemento `<article>` pode ser **descrita usando o atributo
    pubdate de um elemento `<time>`**.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%206.png)
    
- O que é aside?
    
    O elemento `<aside>` representa uma seção de uma página que consiste em conteúdo que é
    tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo. Essas **seções** são, **muitas vezes, representadas como barras laterais**. Elas muitas vezes contêm explicações laterais, como a definição de um glossário; conteúdo vagamente relacionado, como avisos; a biografia do autor; ou, em aplicações web, informações de perfil ou links de blogs relacionados.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%207.png)
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%208.png)
    
- O que é footer?
    
    O elemento `<footer>` representa um **rodapé para o seu conteúdo de seção** mais próximo, ou seja, seu parente mais próximo `<article>`, `<aside>`, `<nav>`, `<section>`, `<blockquote>`, `<body>`, `<details>`, `<fieldset>`, `<figure>`, `<td>`.
    
    Normalmente um rodapé contém informações sobre o autor da seção de dados, direitos autorais ou links para documentos relacionados.
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%209.png)
    
- O que é section?
    
    O elemento `<section>` representa uma **seção genérica** contida em um documento HTML, **geralmente com um título**, quando **não existe um elemento semântico mais específico** para
    representá-lo.
    
    Por exemplo, um menu de navegação deve estar dentro um elemento `<nav>,` mas uma lista de resultados de pesquisa ou a exibição de um mapa e seus controles não possuem elementos específicos, e podem ser colocados dentro de uma `<section>`.
    
    - Cada `<section>` **deve ser identificada**, geralmente **incluindo um cabeçalho** (elemento `<h1>` - `<h6>`) como um filho do elemento `<section>`.
    - Se faz sentido distribuir separadamente o conteúdo de um elemento `<section>`, use um elemento em seu lugar.
    - **Não use o elemento `<section>` como um container genérico**; para isso que a `<nav>` serve, especialmente quando a seção é apenas com propósito de estilização. Uma regra de ouro é, "**usar quando uma seção deve aparecer logicamente na estrutura de um documento**".
    
    Por exemplo, observe o bloco de código ao lado:
    
    ![Untitled](As%20principais%20tags%20semanticas%20d2685ad5d032432f89feaf7f1a9d6035/Untitled%2010.png)