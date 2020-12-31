/*
    ** Módulos **

    Definindo um módulo
    No ECMAScript 6, ao usar a sintaxe do módulo ( import / export ), cada arquivo se torna seu próprio módulo com um
    namespace. As funções e variáveis de nível superior não poluem o namespace global. Para expor funções, classes,
    e variáveis para outros módulos importar, você pode usar a palavra-chave export .
*/

// Não exportado
function somethingPrivate() {
    console.log('TOP SECRET')
}
export const PI = 3.14;

export function doSomething() {
    console.log('Hello from a module!')
}

function doSomethingElse(){
    console.log("Something else")
}

export {doSomethingElse}

export class MyClass {
    test() {}
}


/*
    Nota: Os arquivos JavaScript ES5 carregados por meio de tags <script> permanecerão os mesmos quando não forem usados a importação / exportação .
    Apenas os valores explicitamente exportados estarão disponíveis fora do módulo. Tudo o mais pode ser
    considerado privado ou inacessível.
    Importar este módulo renderia (assumindo que o bloco de código anterior está em my-module.js ):
*/

import * as myModule from './my-module.js';
myModule.PI;                    // 3.14
myModule.doSomething();         // 'Hello from a module!'
myModule.doSomethingElse();     // 'Something else'
new myModule.MyClass();         // an instance of MyClass
myModule.somethingPrivate();    // This would fail since somethingPrivate was not exported


/*
    Exportações padrão
    Além das importações nomeadas, você pode fornecer uma exportação padrão.
*/
export const PI = 3.14;
export default function area(radius) {
 return PI * radius * radius;
}

// Você pode usar uma sintaxe simplificada para importar a exportação padrão.
import circleArea from './circle';
console.log(circleArea(4));

/*  Observe que uma exportação padrão é implicitamente equivalente a uma exportação nomeada com o nome padrão e o importado
    binding(circleArea acima) é simplesmente um alias. O módulo anterior pode ser escrito como
*/
import { default as circleArea } from './circle';
console.log(circleArea(4));


// Você só pode ter uma exportação padrão por módulo. O nome da exportação padrão pode ser omitido.

// exportação nomeada: deve ter um nome
export const PI = 3.14;

// exportação padrão: o nome não é necessário
export default function (radius) {
    return PI * radius * radius;
}
   


/*
    ** Importando membros nomeados de outro módulo **

    Dado que o módulo da seção Definindo um Módulo existe no teste de arquivo . js , você pode importar disso
    módulo e usar seus membros exportados:
*/

import {doSomething, MyClass, PI} from './test'

doSomething()

const mine = new MyClass()
mine.test()

console.log(PI)


/*
    ** importando um módulo inteiro **

    Além de importar membros nomeados de um módulo ou exportação padrão de um módulo, você também pode importar todos
    membros em uma ligação de namespace.
*/

import * as test from './test'

test.doSomething()

/*
    Todos os membros exportados agora estão disponíveis na variável de teste . Membros não exportados não estão disponíveis, assim como
    eles não estão disponíveis com importações de membros nomeados.
    
    Nota: O caminho para o módulo './test' é resolvido pelo carregador e não é coberto pela especificação ECMAScript
        pode ser uma string para qualquer recurso (um caminho - relativo ou absoluto - em um sistema de arquivos, uma URL para um recurso de rede,
        ou qualquer outro identificador de string).
*/



/*
    ** Importando membros nomeados com aliases **

    Às vezes você pode encontrar membros com nomes de membros realmente longos, como
    thisIsWayTooLongOfAName () . Neste caso, você pode importar o membro e dar a ele um nome mais curto para usar em seu
    módulo atual:
*/

import {thisIsWayTooLongOfAName as shortName} from 'module'

shortName()

// Você pode importar vários nomes longos de membros como este:
import {thisIsWayTooLongOfAName as shortName, thisIsAnotherLongNameThatShouldNotBeUsed as otherName} from 'module'

shortName()
console.log(otherName)
    
// E, finalmente, você pode misturar aliases de importação com a importação de membro normal:
import {thisIsWayTooLongOfAName as shortName, PI} from 'module'

shortName()
console.log(PI)


/*
    ** Importando com efeitos colaterais ** 

    Às vezes, você tem um módulo que deseja apenas importar para que seu código de nível superior seja executado. Isso é útil para polyfills,
    outros globais ou configuração que é executada apenas uma vez quando seu módulo é importado.
    Dado um arquivo denominado teste.js :
*/


// Você pode usá-lo assim:
console.log('Initializing...')

// Este exemplo imprimirá Inicializando ... no console.
import './test'
