# Flexbox

- O que é Flexbox?
    
    Flexible box Layout Module, torna mais simples a criação de layouts sem usar float e posicionamento. Visão geral:
    
    - Flex container
    - Flex Itens
- O que é Flex container?
    
    Para se criar um container utiliza-se a propriedade display
    
    ```css
    .container { display: flex; }
    ```
    
    As propriedades de um container são:
    
    - Direção
    - Quebra
    - Alinhamento
- Como utilizar Flex container (direção)?
    
    Qual direção os elementos serão dispostos. A propriedade utilizada é `flex-direction`:
    
    ```css
    .container { display: flex; flex-direction: column; }
    ```
    
    Os valores possíveis são:
    
    - `column`
    - `column-reverse`
    - `row`
    - `row-reverse`
- Como utilizar Flex container (quebra)?
    
    Define se os elementos deverão quebrar de linha/coluna ou não. A propriedade utilizada é `flex-wrap`:
    
    ```css
    .container { display: flex; flex-wrap: wrap; }
    ```
    
    Os valores possíveis são:
    
    - `wrap`
    - `wrap-reverse`
    - `nowrap`
- Como utilizar Flex container (alinhamento horizontal)?
    
    Define como os elementos deverão ser alinhados horizontalmente. A propriedade utilizada é `justify-content`:
    
    ```css
    .container { display: flex; justify-content: center; }
    ```
    
    Os valores possíveis são:
    
    - `center`
    - `flex-start`
    - `flex-end`
    - `space-around`
    - `space-between`
- Como utilizar Flex container (alinhamento vertical)?
    
    Define como os elementos deverão ser alinhados verticalmente. A propriedade utilizada é `align-items`:
    
    ```css
    .container { display: flex; align-items: center; }
    ```
    
    Os valores possíveis são:
    
    - `center`
    - `flex-start`
    - `flex-end`
    - `stretch`
    - `baseline`