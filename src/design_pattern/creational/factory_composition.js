/*
    ** Padrões de Design Criativo **

    Os padrões de design são uma boa maneira de manter seu código legível e SECO. DRY significa não se repita .
    Abaixo, você pode encontrar mais exemplos sobre os padrões de projeto mais importantes.

*/

/*
    ** Fábrica com Composição **
    'Preferir composição em vez de herança' é um princípio de programação importante e popular, usado para atribuir comportamentos a
    objetos, em oposição a herdar muitos comportamentos frequentemente desnecessários.

*/

// Fábricas de comportamento
var speaker = function (state) {
    var noise = state.noise || 'grunt';

    return {
        speak: function () {
            console.log(state.name + ' says ' + noise);
        }
    };
};

var mover = function (state) {
    return {
        moveSlowly: function () {
            console.log(state.name + ' is moving slowly');
        },
        moveQuickly: function () {
            console.log(state.name + ' is moving quickly');
        }
    };
};

// Fábricas de objetos
var person = function (name, age) {
    var state = {
        name: name,
        age: age,
        noise: 'Hello'
    };

    return Object.assign( // Mesclar nossos objetos de 'comportamento'
        {},
        speaker(state),
        mover(state)
    );
};

var rabbit = function (name, colour) {
    var state = {
        name: name,
        colour: colour
    };

    return Object.assign(
        {},
        mover(state)
    );
};

// Uso
var fred = person('Fred', 42);
fred.speak(); // saída: Fred says Hello
fred.moveSlowly(); // saída: Fred is moving slowly
var snowy = rabbit('Snowy', 'white');
snowy.moveSlowly(); // saída: Snowy is moving slowly
snowy.moveQuickly(); // saída: Snowy is moving quickly
snowy.speak(); // ERROR: snowy.speak is not a function
