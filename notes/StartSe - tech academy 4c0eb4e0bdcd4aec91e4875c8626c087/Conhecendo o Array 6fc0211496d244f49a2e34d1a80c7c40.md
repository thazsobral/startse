# Conhecendo o Array

- O que é map()?
    
    Executa uma função em todos os itens de um array e retorna um novo array após a manipulação.
    
    ```jsx
    async function main() {
        const swPeople = await getPeople(); // função para chamada de api
        const swPeopleName = swPeople.map(person => {
            const { name, height, gender } = person;
            return { name, height, gender }
        })
    
        console.log(swPeopleName);
    }
    
    main();
    ```
    
- O que é filter()?
    
    Aplica uma condição em todos os itens do array e aqueles que se enquadrarem na condição serão retornados e adicionados ao novo array de saída
    
    ```jsx
    async function main() {
        const swPeople = [
    		  { name: 'Luke Skywalker', height: '172', gender: 'male' },
    		  { name: 'C-3PO', height: '167', gender: 'n/a' },
    		  { name: 'R2-D2', height: '96', gender: 'n/a' },
    		  { name: 'Darth Vader', height: '202', gender: 'male' },
    		  { name: 'Leia Organa', height: '150', gender: 'female' },
    		  { name: 'Owen Lars', height: '178', gender: 'male' },
    		  { name: 'Beru Whitesun lars', height: '165', gender: 'female' },
    		  { name: 'R5-D4', height: '97', gender: 'n/a' },
    		  { name: 'Biggs Darklighter', height: '183', gender: 'male' },
    		  { name: 'Obi-Wan Kenobi', height: '182', gender: 'male' }
    		];
    
        const swPeopleName = swPeople
                                .filter(person => {
                                    return person.gender === "male"
                                })
                                .map(data => {
                                    return {
                                        name: data.name,
                                        height: data.height,
                                        gender: data.gender
                                    };
                                })
    
        console.log(swPeopleName);
    /** [
    		  { name: 'Luke Skywalker', height: '172', gender: 'male' },
    		  { name: 'Darth Vader', height: '202', gender: 'male' },
    		  { name: 'Owen Lars', height: '178', gender: 'male' },
    		  { name: 'Biggs Darklighter', height: '183', gender: 'male' },
    		  { name: 'Obi-Wan Kenobi', height: '182', gender: 'male' }
    		];
    */
    }
    
    main();
    ```
    
- O que é reduce()?
    
    Reduz todos os valores de um array em um único resultado com base na função informada. Utilizado para realizar uma somatória ou mesclar vários arrays em um único.
    
    ```jsx
    function main() {
        const swPeople = [
    		  { name: 'Luke Skywalker', height: '172', gender: 'male' },
    		  { name: 'C-3PO', height: '167', gender: 'n/a' },
    		  { name: 'R2-D2', height: '96', gender: 'n/a' },
    		  { name: 'Darth Vader', height: '202', gender: 'male' },
    		  { name: 'Leia Organa', height: '150', gender: 'female' },
    		  { name: 'Owen Lars', height: '178', gender: 'male' },
    		  { name: 'Beru Whitesun lars', height: '165', gender: 'female' },
    		  { name: 'R5-D4', height: '97', gender: 'n/a' },
    		  { name: 'Biggs Darklighter', height: '183', gender: 'male' },
    		  { name: 'Obi-Wan Kenobi', height: '182', gender: 'male' }
    		];
    
        const mediaHeight = swPeople.reduce((total, person) => {
            total += Number(person.height);
            return total;
        }, 0);
    
        console.log(`A media de altura dos personagens é ${mediaHeight} cm.`); // A media de altura dos personagens é 1592 cm.
    
    }
    
    main();
    ```