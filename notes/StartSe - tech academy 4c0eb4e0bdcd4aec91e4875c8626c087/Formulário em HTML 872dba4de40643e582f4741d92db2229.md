# Formulário em HTML

- Pra que serve os Formulários?
    
    São utilizados para receber dados do usuário. Possui diversos elementos de entrada de dados. A Tag principal `<forma>` com os seguintes atributos:
    
    - `action` = URL
    - `method` = (get ou post)
    - `autocomplete` = (on ou off)
    
    Exemplo
    
    ```html
    <form action=”#” method=”post”>
    	…
    </form>
    ```
    
- Como trabalhar com Entrada de texto?
    
    Sintaxe:
    
    ```html
    <input type="text" name="nome" id="nome" placeholder="Nome completo">
    ```
    
    Principais atributos:
    
    - `disabled` - Desabilitado
    - `maxlength` - Tamanho máximo
    - `readonly` - Somente leitura
    - `required` - Obrigatório
    - `size` - Tamanho
    - `value` - Valor
- Como trabalhar com Rótulos?
    
    O elemento `<label>` é utilizado para definir um rótulo para uma entrada de texto. Requer o atributo for cujo valor é o id de algum elemento. Exemplo:
    
    ```html
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" placeholder="Nome completo">
    ```
    
- Quais os Tipos de entrada?
    - Cor
    - Data
    - Email
    - Número
    - Senha
    - Intervalo
    - Busca
    - Hora
    - URL
- Como trabalhar com Cor em entradas?
    
    Utilizado para selecionar uma cor. Sintaxe:
    
    ```html
    <input type="color" id="icor" name="cor" value="#e66465">
    ```
    
- Como trabalhar com data em entradas?
    
    Utilizado para receber uma data. Sintaxe:
    
    ```html
    <input type="date" id="dtini" name="dtinicio" value="2018-07-22" 
    min="2018-01-01" max="2018-12-31">
    ```
    
- Como trabalhar com e-mail em entradas?
    
    Utilizado para receber um e-mail. Sintaxe:
    
    ```html
    <input type="email" id="email" size="30" required>
    ```
    
- Como trabalhar com número em entradas?
    
    Utilizado para receber um valor numérico. Sintaxe:
    
    ```html
    <input type="number" id="idade" name="idade" min="10" max="100" step="5">
    ```
    
- Como trabalhar com senha em entradas?
    
    Utilizado para receber uma senha.
    
    Sintaxe:
    
    ```html
    <input type="password" id="pass" name="password" minlength="8" required>
    ```
    
- Como trabalhar com intervalo em entradas?
    
    Utilizado para selecionar um valor numérico em um intervalo.
    
    Sintaxe:
    
    ```html
    <input type="range" id="volume" name="volume" min="0" max="11" value="7">
    ```
    
- Como trabalhar com busca em entradas?
    
    Utilizado para apresentar uma caixa de busca.
    
    Sintaxe:
    
    ```html
    <input type="search" id="site-search" name="q">
    ```
    
- Como trabalhar com hora em entradas?
    
    Utilizado para selecionar uma hora (tempo).
    
    Sintaxe:
    
    ```html
    <input type="time" id="appt" name="appt" min="09:00" max="23:00" required>
    ```
    
- Como trabalhar com URL em entradas?
    
    Utilizado para receber uma URL.
    
    Sintaxe:
    
    ```html
    <input type="url" id="url" name="url" placeholder="http://www.site.com" size="30">
    ```