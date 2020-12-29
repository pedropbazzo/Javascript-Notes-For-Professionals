/*
    ** Classes ** 

    A parte fundamental da maioria das classes é seu construtor, que configura o estado inicial de cada instância e lida com qualquer
    parâmetros que foram passados ao chamar new .
    É definido em um bloco de classe como se você estivesse definindo um método chamado construtor , embora seja realmente tratado
    como um caso especial.

*/

class MyClass {
    constructor(option) {
        console.log(`Creating instance using ${option} option.`);

        this.option = option;
    }
}

const foo = new MyClass('speedy');