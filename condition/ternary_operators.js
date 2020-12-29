/*
    ** Condicionais **

    Expressões condicionais, envolvendo palavras-chave como if e else, fornecem aos programas JavaScript a capacidade de
    executa ações diferentes dependendo de uma condição booleana: verdadeiro ou falso. Esta seção cobre o uso de JavaScript
    condicionais, lógica booleana e declarações ternárias.
*/

// ternários

let animal = 'kitty';
let result = (animal === 'kitty') ? 'cute' : 'still nice';


/*
    As condições if ou else podem ter várias operações. Neste caso, o operador retorna o resultado do último
    expressão.
    
    Como a era igual a 0, torna-se 1 e str torna-se 'não é um teste'. A operação que envolveu str foi o
    por último, então b recebe o resultado da operação, que é o valor contido em str , ou seja, 'não é um teste'.
*/
let a = 0;
let str = 'not a';
let b = '';
b = a === 0 ? (a = 1, str += ' test') : (a = 2);


/*
    Os operadores ternários sempre esperam outras condições, caso contrário, você obterá um erro de sintaxe. Como alternativa, você poderia
    retornar um zero, algo semelhante no branch else - isso não importa se você não estiver usando o valor de retorno, mas apenas
    encurtando (ou tentando encurtar) a operação.
*/

a = 1;
a === 1 ? alert('is 1') : 0;


// Os ternários podem ser aninhados para encapsular lógica adicional. Por exemplo
foo ? bar ? 1 : 2 : 3;
// Para ficar claro, isso é avaliado da esquerda para a direita
// e pode ser mais explicitamente expresso como:
foo ? (bar ? 1 : 2) : 3;

// Este é o mesmo que o seguinte if / else
if ( foo ) {
    if ( bar ) {
        1
    } else {
        2
    }
} else {
    3
}


/*
    Estilisticamente, isso deve ser usado apenas com nomes de variáveis curtos, pois os ternários de várias linhas podem diminuir drasticamente
    legibilidade.
    As únicas instruções que não podem ser usadas em ternários são as instruções de controle. Por exemplo, você não pode usar return
    ou romper com os ternários. A seguinte expressão será inválida.
*/


/*
    Para instruções de retorno, o seguinte também seria inválido:

    (animal === 'kitty') ? return 'meow' : return 'woof';
*/

// Para fazer o acima corretamente, você retornaria o ternário da seguinte forma:
return (animal === 'kitty') ? 'meow' : 'woof';
    