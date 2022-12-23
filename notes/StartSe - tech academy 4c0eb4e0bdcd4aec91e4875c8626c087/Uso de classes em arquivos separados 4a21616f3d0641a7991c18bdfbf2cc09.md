# Uso de classes em arquivos separados

- Como fazer Uso de classes em arquivos separados?
    
    Uma maneira de organizar melhor o código é separar cada classe em um arquivo externo separado.
    
- O que é export class?
    
    Para que uma classe seja importada em um outro arquivo, primeiro é necessário **exportar a classe declarada utilizando a palavra reserva export**.
    
    ![Untitled](Uso%20de%20classes%20em%20arquivos%20separados%204a21616f3d0641a7991c18bdfbf2cc09/Untitled.png)
    
- O que é type module?
    
    Antes de importar uma classe no arquivo que será chamado dentro do documento html, é necessário **informar ao navegador que serão utilizados arquivos de scripts separados** conhecidos como módulos, através da inclusão de `type=”module”` dentro da tag `<script>`
    
    ![Untitled](Uso%20de%20classes%20em%20arquivos%20separados%204a21616f3d0641a7991c18bdfbf2cc09/Untitled%201.png)
    
- O que é import class?
    
    Para que uma classe seja **importada em um outro arquivo**, é necessário **utilizar a palavra reserva import seguida do nome classe** que foi exportada e o caminho.
    
    ![Untitled](Uso%20de%20classes%20em%20arquivos%20separados%204a21616f3d0641a7991c18bdfbf2cc09/Untitled%202.png)
    
- Quais cuidados para utilizar import, export, type=”module”?
    
    É **provável que navegadores não executem o código JavaScript utilizando módulos** (type=”module”) **se a página html for carregada diretamente de uma pasta local** de um computador para o navegador, por exemplo: file:///C:/Users/index.html.
    
    Por questão de segurança, **o tipo módulo** (type=”module”) **deve ser executado através de um servidor web**, como a extensão **live server do VS Code**, por exemplo, ou qualquer outro servidor web que preferir.