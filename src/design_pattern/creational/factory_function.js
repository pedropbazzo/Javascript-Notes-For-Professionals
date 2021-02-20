/*
    ** Padrões de Design Criativo **

    Os padrões de design são uma boa maneira de manter seu código legível e SECO. DRY significa não se repita .
    Abaixo, você pode encontrar mais exemplos sobre os padrões de projeto mais importantes.

*/

/*
    ** Funções de fábrica **

    Uma função de fábrica é simplesmente uma função que retorna um objeto.
    As funções de fábrica não requerem o uso palavra-chave new, mas ainda podem ser usadas para inicializar um objeto, como um construtor.
    
    Muitas vezes, as funções de fábrica são usadas como wrappers de API, como nos casos de jQuery e moment.js, então os usuários não precisam para usar novo.
    
    A seguir está a forma mais simples de função de fábrica; pegando argumentos e usando-os para criar um novo objeto com o literal do objeto:
*/
function cowFactory(name) {
    return {
        name: name,
        talk: function () {
            console.log('Moo, my name is ' + this.name);
        },
    };
}

var daisy = cowFactory('Daisy');    // cria uma vaca chamada Daisy
daisy.talk();                       //"Moo, my name is Daisy"

/*
    É fácil definir propriedades e métodos privados em uma fábrica, incluindo-os fora do objeto retornado.
    Isso mantém seus detalhes de implementação encapsulados, para que você só possa expor a interface pública para seu objeto.
*/
function cowFactory(name) {
    function formalName() {
        return name + ' the cow';
    }
    return {
        talk: function () {
            console.log('Moo, my name is ' + formalName());
        },
    };
}

var daisy = cowFactory('Daisy');
daisy.talk(); // "Moo, my name is Daisy the cow"
daisy.formalName(); // ERROR: daisy.formalName is not a function
   
/*
    A última linha dará um erro porque a função formalName é fechada dentro da função cowFactory . Isto é um
    fecho.
    
    As fábricas também são uma ótima maneira de aplicar práticas de programação funcional em JavaScript, porque são
    funções.
*/