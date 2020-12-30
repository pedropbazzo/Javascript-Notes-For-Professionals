/*
    ** Funções **

    As funções em JavaScript fornecem código organizado e reutilizável para realizar um conjunto de ações. Funções simplificam a codificação
    processar, evitar lógica redundante e tornar o código mais fácil de seguir. Este tópico descreve a declaração e
    utilização de funções, argumentos, parâmetros, declarações de retorno e escopo em JavaScript.

*/

/*  Escopo

    Quando você define uma função, ele cria um escopo .
    Tudo o que é definido na função não é acessível por código fora da função. Somente código dentro deste escopo
    pode ver as entidades definidas dentro do escopo.
*/

function foo() {
    var a = 'hello';
    console.log(a); // => 'hello'
}
console.log(a); // reference error


//Funções aninhadas são possíveis em JavaScript e as mesmas regras se aplicam.
function foo() {
    var a = 'hello';

    function bar() {
        var b = 'world';

        console.log(a); // => 'hello'
        console.log(b); // => 'world'
    }

    console.log(a); // => 'hello'
    console.log(b); // reference error
}

console.log(a); // reference error
console.log(b); // reference error
   