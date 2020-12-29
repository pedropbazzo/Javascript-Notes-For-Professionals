// Cortar uma string em um array

let string = 'one, two, three, four, five';
string.split(', '); // ["one", "two", "three", "four", "five"]

// use .join para voltar para string
string.split(', ').join('-'); // "one-two-three-four-five"