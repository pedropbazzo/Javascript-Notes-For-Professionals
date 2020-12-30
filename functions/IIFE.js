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
   