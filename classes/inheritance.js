/*
    A herança funciona exatamente como em outras linguagens orientadas a objetos: os métodos definidos na superclasse são
    acessível na subclasse de extensão.
    Se a subclasse declara seu próprio construtor, ela deve invocar o construtor principal via super () antes de poder
    acessar isso.

*/

class SuperClass {
    constructor() {
        this.logger = console.log;
    }

    log() {
        this.logger(`Hello ${this.name}`);
    }
}

class subClass extends SuperClass {
    constructor() {
        super();
        this.name = 'subclass';
    }
}

subClass.log(); // logs: 'Hello subclass'