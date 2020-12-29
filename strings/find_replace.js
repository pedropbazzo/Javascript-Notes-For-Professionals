/*
    Encontrar e substituir strings
*/

let string = 'Hello, World!';

// indexOf(searchString) e lastIndexOf(searchString)
/*
    indexOf () retornará o índice da primeira ocorrência de searchString na string. Se searchString não for encontrado,
    então -1 é retornado
*/
string.indexOf('o'); // 4
string.lastIndexOf('foo'); // -1

// includes(searchString, start)
/*
    inclui () devolverá um booleano que informa se searchString existe na cadeia, a partir do índice de início
    (o padrão é 0). Isso é melhor do que indexOf () se você simplesmente precisar testar a existência de uma substring.
*/
string.includes('Hello'); // true
string.includes('foo'); // false

// replace(regexp | subsctring, replacement | replacementFunction)
/*
    replace () retornará uma string que tem todas as ocorrências de substrings correspondentes aoRegExp regexp ou string
    substring com uma substituição de string ou o valor retornado de replaceFunction .
    Observe que isso não modifica a string no local, mas retorna a string com substituições.
*/

let string2 = string.replace('Hello', 'Bye'); // Bye, World
    string2 = string.replace(/W. {3}d/g, 'Universe'); // Hello, Universe

let string3 = 'heLlo, woRLD!';
string3 = string3.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
});

console.log(string3) // 'Hello, World!' 