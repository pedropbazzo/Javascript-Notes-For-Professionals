/*
    ** Funções com um número desconhecido de Argumentos (funções variadas) **

    Para criar uma função que aceita um número indeterminado de argumentos, existem dois métodos, dependendo de
    seu ambiente.
    Versão ≤ 5
    Sempre que uma função é chamada, ela tem um Array-like objeto de argumentos em seu escopo, contendo todos os argumentos
    passado para a função. A indexação ou iteração sobre isso dará acesso aos argumentos, por exemplo

*/

function logSomeThings() {
    for (var i = 0; i < arguments.length; ++i) {
        console.log(arguments[i]);
    }
}
logSomeThings('hello', 'world');
// logs "hello"
// logs "world"


/*
    Observe que você pode converter argumentos em um Array real, se necessário; veja: Convertendo Objetos Tipo Array em Arrays
    
    A partir do ES6, a função pode ser declarada com seu último parâmetro usando o operador de repouso ( ... ). Isso cria um Array
    que mantém os argumentos daquele ponto em diante

*/
   
function personLogsSomeThings(person, ...msg) {
    msg.forEach(arg => {
        console.log(person, 'says', arg);
    });
}
personLogsSomeThings('John', 'hello', 'world');
// logs "John says hello"
// logs "John says world"


// As funções também podem ser chamadas de maneira semelhante, a sintaxe spread
const logArguments = (...args) => console.log(args)
const list = [1, 2, 3]
logArguments('a', 'b', 'c', ...list)
// output: Array [ "a", "b", "c", 1, 2, 3 ]

   