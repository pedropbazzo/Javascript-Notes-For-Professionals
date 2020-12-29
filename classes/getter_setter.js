/*
    ** Getters e Setters **

    Getters e setters permitem que você defina um comportamento personalizado para ler e escrever uma determinada propriedade em sua classe. Para
    o usuário, eles aparecem da mesma forma que qualquer propriedade típica. No entanto, internamente, uma função personalizada que você fornece é usada

    para determinar o valor quando a propriedade é acessada (o getter) e para realizar as alterações necessárias quando o
    propriedade é atribuída (o setter).
    Em uma definição de classe , um getter é escrito como um método sem argumento prefixado pela palavra-chave get. Um setter é semelhante,
    exceto que ele aceita um argumento (o novo valor sendo atribuído) e a palavra-chave set é usada em seu lugar.
    Aqui está um exemplo de classe que fornece um getter e um setter para ele. propriedade de nome. Cada vez que for atribuído, nós
    registre o novo nome em um interno .names_array. Cada vez que ele for acessado, retornaremos o nome mais recente.

*/

class MyClass {
    constructor() {
        this.names_ = [];
    }

    set name(value) {
        this.names_.push(value);
    }

    get name() {
        return this.names_[this.names_.length - 1];
    }
}

const myClassInstance = new MyClass();
myClassInstance.name = 'Joe';
myClassInstance.name = 'Bob';

console.log(myClassInstance.name); // logs: "Bob"
console.log(myClassInstance.names_); // logs: ["Joe", "Bob"]
