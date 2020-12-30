/*
    Um objeto Promise representa uma operação que produziu ou eventualmente produzirá um valor. As promessas fornecem um
    maneira robusta de envolver o resultado (possivelmente pendente) do trabalho assíncrono, mitigando o problema de aninhamento profundo
    callbacks (conhecidos como " callback hell").


    Estados e fluxo de controle
    Uma promessa pode estar em um dos três estados:

    pending - a operação subjacente ainda não foi concluída e a promessa está com cumprimento pendente.
    
    fulfilled - A operação foi concluída e a promessa foi cumprida com um valor. Isso é análogo a retornar um
                valor de uma função síncrona.
    
    reject - ocorreu um erro durante a operação e a promessa foi rejeitada com um motivo. Isto é
             análogo a lançar um erro em uma função síncrona.
             Uma promessa é considerada estabelecida (ou resolvida) quando é cumprida ou rejeitada. Uma vez que uma promessa é cumprida,
             torna-se imutável e seu estado não pode mudar. Os métodos then and catch de uma promessa podem ser usados para anexar
             retornos de chamada que são executados quando ele é resolvido. Esses retornos de chamada são invocados com o valor de cumprimento e o motivo da rejeição,
             respectivamente.

    Uma promessa é considerada estabelecida (ou resolvida) quando é cumprida ou rejeitada. Uma vez que uma promessa é cumprida,
    torna-se imutável e seu estado não pode mudar. Os métodos then and catch de uma promessa podem ser usados para anexar
    retornos de chamada que são executados quando ele é resolvido. Esses retornos de chamada são invocados com o valor de cumprimento e o motivo da rejeição,
    respectivamente.

*/

const promise = new Promise((resolve, reject) => {
// Execute algum trabalho (possivelmente assíncrono)

// ...
    if ( '/ * Trabalho foi concluído com sucesso e produziu "valor" * /') {
        resolve(value);
    } else {
        // Algo deu errado por causa do "motivo"
        // O motivo é tradicionalmente um objeto Error, embora
        // isso não é obrigatório ou obrigatório.

        let reason = new Error(message);
        reject(reason);
        // Lançar um erro também rejeita a promessa.
        throw reason;
    }
});

// The then and catch methods can be used to attach fulfillment and rejection callbacks:

promise.then(value => {
// Trabalho concluído com sucesso,
// promessa foi cumprida com "valor"
}).catch(reason => {
 // Algo deu errado,
// a promessa foi rejeitada com "motivo"
});

/*
    Nota: promessa de chamada .then( ... ) e promessa .catch( ... ) na mesma promessa pode resultar em um não capturado
    exceção na promessa se ocorrer um erro, seja durante a execução da promessa ou dentro de um dos retornos de chamada, de modo que o
    a maneira preferida seria anexar o próximo ouvinte à promessa retornada pelo anterior then / catch .
    Alternativamente, ambos os retornos de chamada pode ser ligado em uma única chamada para então:
    promessa. então ( onFulfilled , onRejected );
*/


/* Encadeamento de promessas

   O método then de uma promessa retorna uma nova promessa.
*/
const promise = new Promise(resolve => setTimeout(resolve, 5000));
promise
 // 5 segundos depois
 .then(() => 2)
 // retornar um valor de um retorno de chamada causará
// a nova promessa de resolver com este valor
 .then(value => { /* value === 2 */ });


/*  
    Esperando por várias promessas simultâneas
    o método Promise.all()  estático aceita um iterável (por exemplo, um Array ) de promessas e retorna uma nova promessa, que
    resolve quando todas as promessas no iterável foram resolvidas ou rejeita se pelo menos uma das promessas no iterável
    rejeitaram.
*/

// espere "milis" ms, então resolva com "valor"
function resolve(value, milliseconds) {
    return new Promise(resolve => setTimeout(() => resolve(value), milliseconds));
}
// espere "milis" ms, depois rejeite com "razão"
function reject(reason, milliseconds) {
    return new Promise((_, reject) => setTimeout(() => reject(reason), milliseconds));
}

Promise.all([
    resolve(1, 5000),
    resolve(2, 6000),
    resolve(3, 7000)
]).then(values => console.log(values)); // produz "[1, 2, 3]" após 7 segundos.

Promise.all([
    resolve(1, 5000),
    reject('Error!', 6000),
    resolve(2, 7000)
]).then(values => console.log(values)) // não produz nada
.catch(reason => console.log(reason)); // produz "Error!" após 6 segundos
