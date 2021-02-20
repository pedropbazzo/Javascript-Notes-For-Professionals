/*
    ** Javascript Notes for professional **

    Um array pode ser desestruturado ao ser atribuído a uma nova variável.
*/

const triangle = [3, 4, 5];

const [length, height, hypotenuse] = triangle;

// pular elementos do array
const [a,,c] = triangle;
// => 3, 5

// Rest operator

const [x,y, ...xs] = [2, 3, 4, 5];
// => 2, 3, [4, 5]

// desestruturando argumentos
function area([length, height]) {
    return (length * height) / 2;
} 

area(triangle);
// => 6


/*
    Removendo elementos duplicados

    Do ES5.1 em diante, você pode usar o método nativo Array . protótipo . filtro para percorrer uma matriz e sair
    apenas entradas que passam por uma determinada função de retorno de chamada.
    No exemplo a seguir, nosso retorno de chamada verifica se o valor fornecido ocorre no array. Em caso afirmativo, é uma duplicata e
    não ser copiado para a matriz resultante.
*/

let uniqueArray = ['a', 1, 'a', 2, '1', 1].filter((value, index, self) => {
    return self.indexOf(value) === index;
   }); 
// =. ['a', 1, 2, '1']
 
/*  Também é possivel usar o mew Set
    Este objeto permite que você armazene valores únicos de qualquer
    tipo, sejam valores primitivos ou referências a objetos:

*/
uniqueArray = [ ... new Set([ 'a' , 1 , 'a' , 2 , '1' , 1 ])];


