# metatags

- O que é o elemento head?
    
    O elemento `<head>` é um container de metadados filho do elemento `<html>`
    Meta dados podem envolver:
    
    - Título da página
    - Conjunto de caracteres
    - Estilos (CSS)
    - Scripts (JavaScript)
    - E outros meta dados
    
    ![Untitled](metatags%206bf3682876354fc091b8e64becb8f9ca/Untitled.png)
    
- O que é a tag title?
    
    O elemento `<title>` define o título do documento e é muito importante para a otimização dos mecanismos de busca (SEO).
    
    O título da página é usado pelos algoritmos de SEO para ordenar as páginas no resultado
    
    O elemento `<title>`:
    
    - Define o título da página na barra do navegador
    - Fornece um título para a página que será adicionada no favoritos
    - Apresenta o título da página nos mecanismos de busca
    
    ```html
    <title>Como montar um avião com garrafa PET</title>
    ```
    
- O que é a tag style?
    
    O elemento `<style>` é usado para definir estilo para uma página HTML.
    
    ![Untitled](metatags%206bf3682876354fc091b8e64becb8f9ca/Untitled%201.png)
    
- O que é a tag link?
    
    O elemento `<link>` define o relacionamento entre o document atual e um recurso externo.
    Comumente usado para ligar o documento a folhas de estilo (CSS).
    
    ![Untitled](metatags%206bf3682876354fc091b8e64becb8f9ca/Untitled%202.png)
    
- O que é a tag script?
    
    O elemento `<script>` define o código JavaScript no documento.
    
    ![Untitled](metatags%206bf3682876354fc091b8e64becb8f9ca/Untitled%203.png)
    
- O que é a tag base?
    
    O elemento `<base>` especifica uma URL padrão e um alvo padrão para todos os links da página.
    
    ![Untitled](metatags%206bf3682876354fc091b8e64becb8f9ca/Untitled%204.png)
    
- O que é a tag meta?
    
    O elemento `<meta>` descreve metadados dentro de um documento HTML.
    
    ![Untitled](metatags%206bf3682876354fc091b8e64becb8f9ca/Untitled%205.png)
    
    Este é quem descreve para os robos do Google qual a categoria da sua página, quem é o autor, qual a linguagem e etc.
    
    Dessa forma, a tag meta deve conter os atributos name (nome da chave buscada pelos robos) e content (conteúdo da chave buscada pelos robos).
    
    ```html
    <meta name="description" content="Free web tutorials"> <!--descreve a página-->
    <meta name="keywords" content="HTML, CSS, JavaScript"> <!--palavras que ligam o conteúdo da página-->
    <meta name="author" content="John Bosman"> <!--Nome do author da página-->
    <meta name="robots" content="..."> <!--define as ações que devem ser executadas pelos robos de busca-->
    ```
    
- O que é social meta tag?
    
    As meta tags podem auxiliar na descrição de compartilhamentos de conteúdos em redes sociais como Twitter, Facebook, Pinterest, etc.
    
    ![Untitled](metatags%206bf3682876354fc091b8e64becb8f9ca/Untitled%206.png)
    
    Meta tags primarias são metas genéricas, ou seja, independente da rede social essas definições são utilizadas
    
    ```html
    <!-- Primary Meta Tags -->
    <title>Meta Tags — Preview, Edit and Generate</title>
    <meta name="title" content="Meta Tags — Preview, Edit and Generate">
    <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
    ```
    
    Metas customizadas de acordo com a rede social.
    
    ```html
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://metatags.io/">
    <meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
    <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
    <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
    ```
    
    ```html
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://metatags.io/">
    <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
    <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
    <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
    ```
    
- Pra que serve a chamada window.onload?
    
    window.onload diz para o navegador executar uma função assim que a página carregar.
    
    ```jsx
    window.onload = function() {
    	alert("Olá");
    }
    ```