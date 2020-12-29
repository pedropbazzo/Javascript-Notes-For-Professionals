/*
    ** Strategy ** 

    Um padrão strategy pode ser usado em JavaScript em muitos casos para substituir uma instrução switch. É especialmente útil
    quando o número de condições é dinâmico ou muito grande. Permite que o código de cada condição seja independente
    e testável separadamente.
    O objeto de strategy é um objeto simples com várias funções, representando cada condição separada. Exemplo:

*/

const AnimalSays = {
    dog() {
        return 'woof';
    },
    cat() {
        return 'meow';
    },
    lion() {
        return 'roar';
    },

    default() {
        return 'moo';
    }

};

function makeAnimalSpeak(animal) {
    const speak = AnimalSays[animal] || AnimalSays.default;
    console.log(animal + ' says ' + speak());
}

makeAnimalSpeak('dog') // => 'dog says woof'
makeAnimalSpeak('cat') // => 'cat says meow'
makeAnimalSpeak('lion') // => 'lion says roar'
makeAnimalSpeak('snake') // => 'snake says moo'
