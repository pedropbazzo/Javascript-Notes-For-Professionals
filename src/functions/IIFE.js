/*
    ** Expressões de Função Invocadas Imediatamente **

    Às vezes, você não quer ter sua função acessível / armazenada como uma variável. Você pode criar um imediatamente
    Expressão de função invocada (IIFE para breve). Estas são essencialmente funções anônimas autoexecutáveis . Eles têm
    acesso ao escopo circundante, mas a própria função e quaisquer variáveis internas estarão inacessíveis de fora.
    Uma coisa importante a se notar sobre o IIFE é que mesmo se você nomear sua função, o IIFE não é içado como padrão
    as funções são e não podem ser chamadas pelo nome da função com que foram declaradas.

*/

(function() {
    alert(`I've run - but can't be run again because I'm immediately invoked at runtime,
    leaving behind only the result I generate`);
}());
   

/* Esta é outra maneira de escrever IIFE. Observe que o parêntese de fechamento antes do ponto-e-vírgula foi movido e colocado
logo após a chave de fechamento: */
(function() {
    alert("This is IIFE too.");
})();
   
//Você pode facilmente passar parâmetros para um IIFE:
(function(message) {
    alert(message);
}("Hello World!"));
   
// Além disso, você pode retornar valores para o escopo circundante:
var example = (function() {
    return 42;
   }());
console.log(example); // => 42

/*
    Se necessário, é possível nomear um IIFE. Embora seja visto com menos frequência, esse padrão tem várias vantagens, como
    fornecer uma referência que pode ser usada para uma recursão e pode tornar a depuração mais simples, pois o nome é incluído
    na pilha de chamadas.
*/
(function namedIIFE() {
    throw error; // We can now see the error thrown in 'namedIIFE()'
}());
   

/*
    Embora envolver uma função entre parênteses seja a maneira mais comum de denotar para o analisador JavaScript esperar um
    expressão, em locais onde uma expressão já é esperada, a notação pode ser mais concisa:
*/
var a = function() { return 42 }();
console.log(a) // => 42

// Versão arrow function imediatamente invocada:
(() => console.log("Hello!"))(); // => Hello!
