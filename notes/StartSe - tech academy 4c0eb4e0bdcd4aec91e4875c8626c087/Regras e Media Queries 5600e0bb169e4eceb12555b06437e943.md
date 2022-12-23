# Regras e Media Queries

- O que são regras?
    
    Uma regra é uma declaração iniciado com o caractere @ e termina com um `;`
    
    Algumas regras são:
    
    - `@charset`
    - `@import`
    - `@media`
- O que é charset?
    
    Especifica a codificação de caracteres utilizada na folha de estilo. Este precisa ser declarada no início do arquivo
    
    Sintaxe
    
    ```css
    @charset "charset";
    ```
    
    Principais charset
    
    - UTF-8 (padrão)
    - iso-8859-15 (português)
- O que é import?
    
    Utilizado para importar regras de outros arquivos CSS. Este precisa ser declarado no início do arquivo (depois de `@charset`)
    
    Sintaxe:
    
    ```css
    @import url("outro-arquivo.css");
    ```
    
- O que é Media Queries?
    
    É utilizado para restringir o escopo das folhas de estilo. Com isso regras podem ser aplicadas para diferentes dispositivos como, 
    
    - Celular
    - Tablets
    - Monitor
    
    Por exemplo:
    
    - Inclusão de arquivos
        
        ```css
        <link rel="stylesheet" media="(max-width: 800px)" href="teste.css">
        ```
        
    - Dentro do HTML
        
        ```css
        <style>
        @media (max-width: 600px) {
         …
        }
        </style>
        ```
        
- Quais restrições podem ser aplicadas em Media Query?
    - altura e largura da janela
    - altura e largura do dispositivo
    - orientação (retrato e paisagem para dispositivos móveis)
    - resolução
    
    ```css
    @media not|only mediatype and (mediafeature and|or|not mediafeature) 
    {
     Código CSS
    }
    ```
    
    **Mediatype**: `all` | `print` | `screen` | `speech`
    
    **Media features:** (`max`/`min`) `height`, `width`, `resolution`
    
    **orientation**: `landscape` ou `portrait`
    
    [CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.php)