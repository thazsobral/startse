# Entendendo o HTML

- O que é HTML?
    
    HTML (Hypertext Markup Language), é uma linguagem de marcação de hipertexto (não é uma linguagem de programação).
    
    As marcações são definidas através de tags e uma tag descreve um conteúdo na página
    
    ```html
    <p> <-- abertura de tag
    	Essa tag demarca um parágrafo. <-- conteúdo
    </p> <-- fechamento de tag
    ```
    
    Um documento HTML contém tags HTML e textos (conteúdo).
    
    Documentos HTML também são conhecidos como páginas web.
    
    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    	</head>
    		<body>
    			<h1>
    				O que é HTML?
    			</h1>
    			<p>
    				HTML é uma linguagem de marção de texto utilizando estruturas para estruturar conteúdo de páginas web.
    			</p>
    		</body>
    </html>
    ```
    
- O que fazem os navegadores?
    
    Eles interpretam/renderizam o código HTML em um formato visível.
    
- O que é um documento HTML?
    
    É um arquivo de texto que utiliza uma sintaxe própria, podendo este ser desenvolvido em qualquer editor de texto.
    
    ![Untitled](Entendendo%20o%20HTML%209419d0e4695041fab10bd64dab623c2a/Untitled.png)
    
- Como é a estrutura básica de um documento HTML?
    
    ```html
    <!DOCTYPE html> <!-- tipo do documento -->
    <html> <!-- tag raíz de um documento HTML -->
    	<head>
    		<!-- cabeçalho do documento, onde é implementado funções do documento e não fica visível no browser -->
    	</head>
    		<body>
    			<!-- corpo da poágina, onde é implementado os elementos da página que ficam visíveis no browser -->
    		</body>
    </html>
    ```
    
- Como salvar um arquivo HTML?
    
    Com a extensão *.html*. Isso permite que o SO identifique que o documento deve ser aberto como uma página web, onde geralmente é aberto em um browser