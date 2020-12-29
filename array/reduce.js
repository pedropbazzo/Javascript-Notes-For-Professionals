/* 
    ** Javascript Notes for professional **

    O método reduce() aplica uma função contra um acumulador e cada valor da matriz (da esquerda para a direita) para
    reduza-o a um único valor.
*/

// Somar o valores de um array 
[1, 2, 3, 4].reduce((a, b) => {
    return a + b;
});


// Aceita um segundo parametro que será o valor inicializado no método reduce
[2].reduce((a, b) => {
    return a + b;
}, 1);


// O exemplo abaixo mostra como nivelar uma matriz de objetos em um único objeto
let array = [{
            key: 'one',
            value: 1
        }, {
            key: 'two',
            value: 2
        }, {
            key: 'tree',
            value: 3
        }
    ];

array.reduce((obj, curr) => {
    obj[curr.key] = curr.value;
    return obj;
}, {});

array.reduce((obj, curr) => ({...obj, [curr.key]: curr.value}), {});

/*
    {
        one: 1,
        two: 2,
        tree: 3
    }

*/


// Encontrar o menor valor com reduce
let arr = [4, 2, 1, -10, 9];

arr.reduce((a, b) => {
    return a < b ? a : b;
}, Infinity);

// => -10


/*  Encontre Valores Únicos
    Aqui está um exemplo que usa reduzir para retornar os números exclusivos a uma matriz. Uma matriz vazia é passada como o
    segundo argumento e é referenciado por prev.
*/

arr = [1, 2, 1, 5, 9, 5];

arr.reduce((prev, number) => {
    if(prev.indexOf(number) === -1) {
        prev.push(number);
    }
    return prev;
}, []);

// => [1, 2, 5, 9]

