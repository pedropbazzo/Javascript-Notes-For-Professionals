/* 
    ** Javascript Notes for professional **

    O método sort() classifica os elementos de um array. O método padrão irá classificar o array de acordo com a string
    Pontos de código Unicode. Para classificar uma matriz numericamente, o . método sort() precisa ter um compare passa =>do para
    isto.

        Nota: o . O método sort () é impuro. . sort () irá classificar o array no local , ou seja, em vez de criar um
        cópia classificada do array original, ele reordenará o array original e o retornará.

*/



['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort();
// => [-1, '-4', '2', 34, '4', 'E', 'K', 'W', 'a', 'l', 'o', 'o', 'r', 's', 't', 'v']


// Ordenar em alfabético
['s', 't', 'a', 'c', 'K', 'o', 'v', 'E', 'r', 'f', 'l', 'W', '2', '1'].sort((a, b) => {
    return a.localeCompare(b);
});
// => ['1', '2', 'a', 'c', 'E', 'f', 'K', 'l', 'o', 'r', 's', 't', 'v', 'W']

/*  Observação: a classificação acima gerará um erro se algum item da matriz não for uma string. Se você sabe que a matriz
    pode conter itens que não são strings, use a versão segura abaixo.
*/

[ 's' , 't' , 'a' , 'c' , 'K' , 1 , 'v' , 'E' , 'r' , 'f' , 'l' , 'o' , 'W' ].sort(( a , b ) => {
    return a.toString().localeCompare(b); // ou (''+a).localeCompare(b)
});


// Ordenar pelo tamanho (menor primeiro)

["zebras", "dogs", "elephants", "penguins"].sort((a, b) => {
    return b.length - a.length;
});
// => ["elephants", "penguins", "zebras", "dogs"];

// Ordenar pelo tamanho (maior primeiro) 
["zebras", "dogs", "elephants", "penguins"].sort((a, b) => {
    return a.length - b.length;
});
   
// => ["dogs", "zebras", "penguins", "elephants"];


// Ordenação numérica
let arr = [100, 1000, 10, 10000, 1];

// Ascendente
arr.sort((a, b) => {
    return a - b;
});

// Descendente
arr.sort((a, b) => {
    return a - b;
});


// Ordenação por pares e impares
[10, 21, 4, 15, 7, 99, 0, 12].sort((a, b) => {
    return (a & 1) - (b & 1) || a - b;
});
// => [0, 4, 10, 12, 7, 15, 21, 99]


// Ordenação de datas 
var dates = [
        new Date(2007, 11, 10),
        new Date(2014, 2, 21),
        new Date(2009, 6, 11),
        new Date(2016, 7, 23)
    ];

dates.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

// ou 

dates.sort((a, b) => {
    return b-a;
});

/* => 
    [
    "Tue Aug 23 2016 00:00:00 GMT-0600 (MDT)",
    "Fri Mar 21 2014 00:00:00 GMT-0600 (MDT)",
    "Sat Jul 11 2009 00:00:00 GMT-0600 (MDT)",
    "Mon Dec 10 2007 00:00:00 GMT-0700 (MST)"
    ]
*/

   