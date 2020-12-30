/*
    ** Currying **

    Currying é a transformação de uma função de n aridade ou argumentos em uma sequência de n funções levando apenas uma
    argumento.
*/

/*
    Casos de uso: quando os valores de alguns argumentos estão disponíveis antes de outros, você pode usar currying para decompor um
    função em uma série de funções que completam o trabalho em etapas, conforme cada valor chega. Isso pode ser útil:
    Quando o valor de um argumento quase nunca muda (por exemplo, um fator de conversão), mas você precisa manter
    a flexibilidade de definir esse valor (em vez de codificá-lo como uma constante).
    Quando o resultado de uma função curried é útil antes que as outras funções curry sejam executadas.
    Para validar a chegada das funções em uma seqüência específica.


    Por exemplo, o volume de um prisma retangular pode ser explicado por uma função de três fatores: comprimento ( l ), largura ( w ),
    e altura ( h ):

*/

var prism = function(l, w, h) {
    return l * w * h;
}

// Uma versão curry desta função seria semelhante a:
function prism(l) {
    return function(w) {
        return function(h) {
            return l * w * h;
        }
    }
}
// ECMAScript 6+ syntax:

var prism = l => w => h => l * w * h;
   