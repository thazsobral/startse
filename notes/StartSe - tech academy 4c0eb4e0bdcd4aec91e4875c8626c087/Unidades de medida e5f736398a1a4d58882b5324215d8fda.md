# Unidades de medida

- O que são medidas no CSS?
    - CSS utiliza de diferentes unidades de medidas para expressar um tamanho
    - Há diversas propriedades que o valor é um “tamanho”
    - O valor destas propriedades são expressos em um unidade
        - Ex: 15px, 20cm, 2em
    - O número é seguido da unidade sem espaço
    - O valor 0 não precisa de unidade
    - Algumas propriedades permitem medidas negativas
    - Há 2 tipos de unidades: absolutas e relativas
    
    |  | recomendado | uso ocasional | não recomendado |
    | --- | --- | --- | --- |
    | tela | em, px, % | ex | pt, mm, cm, in, pc |
    | impresso | em, cm, mm, in, pt, pc, % | px, ex |  |
    
    [CSS: em, px, pt, cm, in...](https://www.w3.org/Style/Examples/007/units.pt_BR.html)
    
- O que são medidas absolutas?
    
    Estas servem para material impresso.
    
    | Unidade | Descrição |
    | --- | --- |
    | cm | centimetros |
    | mm | milimetros |
    | in | polegadas(1in = 96px = 2.54cm) |
    | px* | pixels (1px = 1/96th of 1in) |
    | pt | pontos (1pt = 1/72 of 1in) |
- O que são medidas relativas?
    
    Estas servem para tela.
    
    | Unidade | Descição |
    | --- | --- |
    | px | pixel é relativo ao pixel na tela |
    | em | relativo ao tamanho da fonte do elemento  |
    | rem | relativo ao tamanho da fonte do elemento raíz |
    | % | porcentagem é relativo ao elemento pai |