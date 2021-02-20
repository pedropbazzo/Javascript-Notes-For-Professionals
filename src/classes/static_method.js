/*
    Métodos estáticos
    Métodos estáticos e propriedades são definidos na própria classe / construtor , não em objetos de instância. Estes são especificados
    em uma definição de classe usando a palavra-chave static .
*/

class MyClass {
    static myStaticMethod() {
        return 'Hello';
    }
    static get myStaticProperty() {
        return 'Goodbye';
    }
}
console.log(MyClass.myStaticMethod()); // logs: "Hello"
console.log(MyClass.myStaticProperty); // logs: "Goodbye"


// Podemos ver que as propriedades estáticas não são definidas nas instâncias do objeto:
const myClassInstance = new MyClass();
console.log(myClassInstance.myStaticProperty); // logs: undefined

// No entanto, eles são definidos em subclasses:
class MySubClass extends MyClass {};
console.log(MySubClass.myStaticMethod()); // logs: "Hello"
console.log(MySubClass.myStaticProperty); // logs: "Goodbye"