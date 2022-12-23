# Sistemas Operacionais

- O que é sistema operacional?
    
    É o software que fornece uma interface entre o hardware do computador e você, o usuário do computador. O sistema operacional normalmente é organizado como uma coleção de programas de computador que:
    
    - Inicializam o hardware.
    - Fornecem rotinas básicas para controle dos dispositivos (entrada, saída e armazenamento).
    - Gerenciam o escalonamento e a interação entre outros programas.
    - Mantém a integridade das informações armazenadas.
    
    Existem diferentes tipos de sistemas operacionais, especializados em determinadas arquiteturas de hardware ou tipo de utilização (corporativo, pessoal, industrial, etc.)
    
- Quais são as partes que compõem um sistema operacional?
    - Kernel (núcleo)
    - Gerenciador de processos
    - Escalonador (scheduler)
    - Gerenciador de arquivos
    - Interface
- O que é Kernel?
    
    É o coração de um S.O., é onde ficam suas funções executivas, isto é, todas instruções de como comunicar com o hardware e como gerenciá-lo. É a parte mais valorosa de um S.O., é o elo do hardware com o software. 
    
    Seu principal objetivo é gerenciar o computador e permitir que os aplicativos sejam executados e façam uso dos recursos que a máquina tem. O núcleo também tem que garantir, por exemplo, que a memória RAM seja usada em seu potencial sem risco para o computador.
    
- O que Gerenciador de processos?
    
    Controla o uso que os programas fazem do computador, estabelecendo políticas para que essa utilização seja a mais justa possível.
    
- O que é Escalonador?
    
    Escalonamento de processos é o ato de realizar o chaveamento dos processos ativos, de  acordo com regras bem estabelecidas, de forma que todos os processos tenham chance de utilizar a CPU.
    
    O escalonador é a parte do SO encarregada de decidir entre os processos prontos, qual será
    colocado em execução. Existem várias formas de escalonamento, cada uma seguem diferentes critérios de justiça (cada processo obter sua parte justa do tempo da CPU), eficiência (garantir ocupação de 100% do tempo da CPU), minimizar o tempo de resposta a
    comandos de usuários interativos, maximizar o número de serviços processados por hora, etc
    
- O que é Gerenciador de arquivos?
    
    É a função que organiza, edita e predispõe as regras para o armazenamento de acordo com o sistema de arquivos.
    
- O que é Interface?
    
    É a parte pensada para o input do usuário.
    
    Podemos vê-la de várias formas: Um terminal para comandos como o MS-DOS, uma interface gráfica como o Windows ou MacOS, uma tela com textos e interação via botões como os aparelhos de mp3, etc. Em interfaces gráficas podemos também ter
    várias formas de input.
    
    A interface de um sistema operacional pode nos ser apresentada de diferentes formas, uma delas é conhecida como prompt de comando ou terminal. Um prompt de comando é na verdade uma janela através da qual o usuário dispara comandos que acionam ações do sistema operacional. Este tipo de interface é normalmente utilizado por usuários avançados,
    uma vez que oferece um nível mais elevado de complexidade para sua utilização.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled.png)
    
    Outra forma que a interface do sistema operacional nos é apresentada é por meio de uma área de trabalho com ícones e janelas gráficas. Essa certamente é a forma em que estamos mais acostumados a ter contato com o sistema operacional. Ícones são pequenas imagens utilizadas para simbolizar ações ou programas. Sua ação está normalmente associada ao uso do mouse, que ao clicar sobre o ícone dispararia alguma ação.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%201.png)
    
    As janelas são um recurso gráfico muito importante da interface de um sistema operacional moderno. Uma janela é uma área geralmente retangular composta por uma barra de título com alguns botões de controle que atuam sobre a própria janela. Os botões de controle podem minimizar a janela (ocultando-a temporariamente), maximizá-la (fazendo com que a mesma ocupe todo o tamanho da área de trabalho) ou restaurá-la (de forma que retorne ao seu tamanho original). As janelas são normalmente delimitadas por bordas, que se clicadas e movimentadas, permitem que a mesma seja redimensionada. Para mover uma janela utiliza-se clicar sobre sua barra de título arrastando-a até sua nova posição.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%202.png)
    
- Quais são os tipos de sistemas operacionais?
    - Desktop
    - Server
    - Mobile
    - Embutido (Embedded)
- O que é SO Desktop?
    
    São os tipos que vemos em computadores de mesa e/ou laptops. São os primeiros a ser desenvolvidos, e os mais notáveis são o Windows, MacOS e as milhares de distribuições
    Linux.
    
    São pensados para funções do dia a dia e ambiente de trabalho, como cálculos matemáticos, navegação na Web, edição de texto, vídeo ou áudio, execução de músicas e vídeos, etc.
    
    São feitos geralmente para a arquitetura CISC (Complex Instruction Set Computer) de processadores, com exceção do novo MacOS, que transicionou para o modelo ARM (RISC -Reduced Instruction Set Computer).
    
- O que é SO Server?
    
    São S.Os focados em estabilidade, gestão de uma grande quantidade de arquivos e armazenamento e segurança, são utilizados para estar do lado do servidor.
    
    Neste mundo server-side, a grande maioria das máquinas usa alguma distro Linux derivada de
    Red Hat, como o próprio Red Hat, mantido pela Oracle, ou o Fedora, por exemplo. 
    
    Há também o Windows Server, também bastante utilizado pela familiaridade do público em geral com o sistema. É um Windows sem firulas e focados nas funções necessárias para um Servidor.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%203.png)
    
- O que é SO Mobile?
    
    São S.Os dedicados à aparelhos mobile, como smartphones e tablets. Caracterizam-se por otimizar na arquitetura ARM de processadores e por serem desenhados para a experiência ótima por telas de toque.
    
    O mercado global é dominado pelo sistema Android, que é Linux (open source), e suas variações, mas tem um número expressivo do sistema iOS.
    
    E um que vale mencionar, é o descontinuado Windows Phone. Foi a tentativa da Microsoft de entrar no mundo dos S.Os Mobile que não vingou.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%204.png)
    
- O que é SO Embutido?
    
    São pensados para hardwares com pouca capacidade de processamento e têm uma função muito específica, como por exemplo, o S.O. dos primeiros celulares com  multimídia,calculadoras, tocadores de MP3, relógios inteligentes, caixas eletrônicos,  copiadoras, etc.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%205.png)
    
- Mas quais são as principais funções de um sistema operacional?
    
    Há basicamente três funções que todo o sistema operacional precisa nos oferecer:
    
    - gerenciamento de processos (ou
    programas);
    - gerenciamento de arquivos, e;
    - gerenciamento de memória.
- O que é Gerenciamento de Processos?
    
    A primeira função consiste em permitir a execução de outros softwares, gerenciar o seu ciclo de vida e o compartilhamento de recursos pelos mesmos. Isso significa que é função do sistema operacional controlar o uso que os demais programas fazem do computador,  estabelecendo políticas para que essa utilização seja a mais justa possível.
    
    Imagine um cenário onde um usuário está acessando uma página para fazer uma pesquisa,
    ouvindo música e conversando com um amigo pela internet. Neste caso, temos pelo menos três aplicações utilizando o hardware quase que simultaneamente. O gerenciamento de processos do sistema operacional é responsável por permitir que cada aplicação utilize os
    recursos de hardware, especialmente o processador, um pouco de cada vez, de forma transparente, ou seja, sem que o usuário perceba este compartilhamento. 
    
    Os sistemas operacionais geralmente nos oferecem opções para visualizar e monitorar o
    conjunto de tarefas que estão sendo executadas.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%206.png)
    
- O que é Gerenciamento de Arquivos?
    
    A segunda função do sistema operacional é o gerenciamento de arquivos. Essa sem dúvida é a funcionalidade que, enquanto usuário, mais teremos contato. Um arquivo é um conjunto de dados que podem ser reconhecidos por uma aplicação.
    
    As informações armazenadas por um computador em um dispositivo de armazenamento (SSD, HD, pen drive, DVD, etc.) estão contidas em arquivos. Os arquivos possuem atributos, como por exemplo, um nome, uma data e hora de alteração, tamanho e tipo. Alguns caracteres não são permitidos para compor o nome de arquivos.
    
    O tipo de um arquivo identifica para o sistema operacional o conteúdo do mesmo.
    
    Normalmente o tipo de um arquivo é identificado por meio de uma extensão (uma pequena sigla disposta após o nome do arquivo e separada por um ‘.’ – ponto). 
    
    Quando descarregamos as fotos e vídeos de nosso smartphone para o computador, cada foto
    e vídeo é um arquivo. Quando escrevemos um trabalho escolar ou um relatório profissional estamos produzindo arquivos. Quando escutamos música em formato digital estamos acessando, para cada música, um arquivo.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%207.png)
    
    Os sistemas operacionais nos oferecem gerenciadores de arquivos, ou seja, aplicações que permitem organizar da maneira mais adequada os arquivos existentes nos dispositivos de armazenamento.
    
    Neste sentido, é importante que conheçamos o conceito de diretório ou pasta. Uma pasta (também conhecida por diretório) é uma estrutura utilizada para agrupar e organizar arquivos. Seria o mesmo que fazer a seguinte analogia com um escritório: pastas são gavetas ou envelopes e arquivos são os documentos contidos nas gavetas ou envelopes. Nunca vamos encontrar um arquivo com uma pasta dentro, ou seja, as pastas guardam arquivos, mas o contrário não.
    
- O que é Sistema de Arquivos?
    
    O sistema de arquivos de um sistema operacional geralmente inicia-se a partir de um diretório raiz e a parte dele para organizar os subdiretórios. No caso do Windows, o diretório raiz de um dispositivo de armazenamento é conhecido por unidade e é representado por uma letra seguida pelo sinal de dois pontos “:”. Por convenção, um disco rígido (HD ou SSD) é  normalmente a unidade “C:”, já um pen drive, por se tratar de um dispositivo removível, poderá se utilizar de qualquer letra. Para os antigos drives de disquete o Windows reserva as letras  A:” e “B:”.
    
    Partindo-se da letra da unidade e o conjunto de subdiretórios hierarquicamente inferiores
    conseguimos chegar até o local onde o arquivo está armazenado.
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%208.png)
    
- Quais operações posso fazer com arquivos em um sistema operacional?
    - criar uma cópia
    - mover
    - excluir
    - restaurar
    - compactar
    - criar um atalho
    - localizar
    - renomear.
- O que é Gerenciamento de Memória?
    
    O sistema operacional aloca e gerencia um espaço da memória principal para cada aplicativo poder utilizá-la. Da mesma forma, ele também protege tais áreas de forma que aplicativos não “invadam” o espaço de memória uns dos outros. Na medida em que um aplicativo necessita de mais memória, ele solicita ao sistema operacional que irá verificar a disponibilidade e lhe permitir o acesso.
    
    Um recurso muito importante e útil dessa função é a área de transferência. A área de transferência se constitui como uma região de memória gerenciada pelo sistema operacional na qual os aplicativos podem livremente “copiar” dados. Os dados da área de transferência podem ser descarregados no próprio aplicativo ou em outro (uma vez que a área de transferência é um recurso compartilhado).
    
- Quais as funções da área de transferência?
    
    As três principais funções da área de transferência são justamente: 
    
    - Copiar
    - Colar
    - Recortar
    
    ![Untitled](Sistemas%20Operacionais%208e2cf757a759414e8e4f152d8412c95c/Untitled%209.png)