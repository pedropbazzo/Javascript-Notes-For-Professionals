/*
    ** Funções Nomeadas **
    
    As funções podem ser nomeadas ou não (funções anônimas):
*/

var namedSum = function sum (a, b) { // nomeada
    return a + b;
}
var anonSum = function (a, b) { // anonima
    return a + b;
}

namedSum(1, 3);
anonSum(1, 3);


// Mas seus nomes são privados para seu próprio escopo:
var sumTwoNumbers = function sum (a, b) {
    return a + b;
}
sum(1, 3);

// Uncaught ReferenceError: soma não definida



/*  As funções nomeadas diferem das funções anônimas em vários cenários:

    * Quando você estiver depurando, o nome da função aparecerá no erro / rastreamento de pilha
    * Funções nomeadas são içadas, enquanto funções anônimas não são
    * Funções nomeadas e funções anônimas se comportam de maneira diferente ao lidar com recursão
    * Dependendo da versão do ECMAScript, funções nomeadas e anônimas podem tratar a propriedade do nome da função
      diferentemente
*/

/*
    Ao usar uma função anônima, a função só pode ser chamada após a linha de declaração, enquanto um
    função pode ser chamada antes da declaração.
*/

foo();
var foo = function () { // using an anonymous function
 console.log('bar');
}
//Uncaught TypeError: foo is not a function

foo();
function foo () { // using a named function
 console.log('bar');
}
//bar

