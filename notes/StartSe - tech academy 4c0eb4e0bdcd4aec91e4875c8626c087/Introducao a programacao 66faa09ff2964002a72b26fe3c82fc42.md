# Introducao a programacao

- O que é programar?
    
    <aside>
    💡 É dar instruções para que os computadores façam o que queremos que eles fazem.
    
    </aside>
    
    Programar é dar **instruções** por meio de uma **linguagem de programação** para que o computador execute a **resolução de um problema**.
    
- O que é um algoritmo?
    
    <aside>
    💡 É a forma de organizar um conjunto de passos para resolver um problema.
    
    </aside>
    
- O que linguagem de programação?
    
    <aside>
    💡 É um método padronizado, formado por um conjunto de regras sintáticas e semânticas que podem ser compilado ou interpretado, e transformado em um programa de computador.
    
    </aside>
    
- Quais os níveis de linguagem de programação?
    
    ![Untitled](Introducao%20a%20programacao%2066faa09ff2964002a72b26fe3c82fc42/Untitled.png)
    
- O que é a web?
    
    A web significa um sistema de informações ligadas através de hipermídia (hiperligações em forma de texto, vídeo, som e outras animações digitais) que permitem ao usuário acessar uma infinidade de conteúdos através da internet. Para tal é necessário ligação à internet e um navegador (*browser*) onde são visualizados os conteúdos disponíveis. São exemplos de navegadores: Google Chrome, Safari, Mozilla Firefox, Internet Explorer, Opera, etc.
    
- O que é World Wide Web?
    
    É uma aplicação onde documentos são interligados através links. É através de que, por meio de um navegador e URLs, acessamos os sites e aplicações web.
    
- Quais os componentes básicos da Web?
    
    Clientes e servidores.
    
    ![Untitled](Introducao%20a%20programacao%2066faa09ff2964002a72b26fe3c82fc42/Untitled%201.png)
    
    - **clientes**: são dispositivos que acessam a web por meio de algum software, como por exemplo, um navegador.
    - **servidores**: são computadores que armazenam os arquivos que compõem os sites e disponibilizam esses arquivos/páginas/sites para serem acessados pelos dispositivos clientes. Para isso, o servidor deve estar conectado a Internet, e assim, poderá ser acessado através do seu endereço IP ou nome de domínio.
- Como funciona a comunicação entre cliente e servidor?
    
    A comunicação entre dois ou mais dispositivos na Internet é realizada por
    meio endereços (conhecido como endereço IP) que identificam os dispositivos na rede e portas que fornecem pontos de conexão para aplicações e serviços específicos.
    
    <aside>
    💡 De forma resumida, para que um dispositivo A possa se comunicar com um dispositivo B, o dispositivo A precisa saber o endereço IP de B e saber qual a porta de B está disponível para ele (oferece o serviço que ele espera).
    
    </aside>
    
- O que é endereço?
    
    Quando acessamos um determinado site a partir do nosso computador, informamos
    para o navegador o endereço do site, também conhecido como URL (Uniform Resource Locator). E o navegador se encarrega de descobrir qual o endereço do servidor que armazena o site.
    
    <aside>
    💡 URL é o endereço de um determinado recurso exclusivo na Web. Esse recurso pode ser uma página HTML, um documento CSS, uma imagem, um arquivo PDF, etc.
    
    </aside>
    
- Qual a anatomia de uma URL?
    
    ![Untitled](Introducao%20a%20programacao%2066faa09ff2964002a72b26fe3c82fc42/Untitled%202.png)
    
    - **Protocolo** (obrigatório) - informa ao navegador qual o protocolo de comunicação, pode ser http ou https. Quando não digitamos na barra de endereço o próprio navegador preenche.
    - **Subdomínio** (opcional) - serve como uma extensão do nome de domínio, geralmente utilizado para disponibilizar diferentes sites/sistemas no mesmo domínio.
    - **Domínio** (obrigatório) - é basicamente o nome (identificador) do site. DEVE ser informado pelo usuário na barra de endereços do navegador.
    - **Porta** (opcional) - identifica a porta em que o site está disponível no servidor, quando não é informada o navegador preenche internamente com a porta padrão de acordo com o protocolo utilizado (80 para http e 443 para https).
    - **Recurso/path** (obrigatório) - identifica qual o recurso o navegador vai buscar no servidor, quando não é informado pelo usuário o próprio navegador preenche com uma "/", que  significa página inicial do site.
    - **Query e parâmetros** (opcional) - utilizado para enviar dados no formato de chave e valor pela URL. No exemplo o id é a chave e 12345 é o valor.
    - **Âncora** (opcional) - utilizado para exibir partes específicas da página Web.