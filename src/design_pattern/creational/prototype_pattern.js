/*
    ** Padrão de protótipo **

    O padrão de protótipo se concentra na criação de um objeto que pode ser usado como um projeto para outros objetos por meio
    herança prototípica. Esse padrão é inerentemente fácil de trabalhar em JavaScript por causa do suporte nativo para
    herança prototípica em JS, o que significa que não precisamos perder tempo ou esforço imitando essa topologia.

*/

// Criação de métodos no protótipo
function Welcome(name) {
    this.name = name;
}
Welcome.prototype.sayHello = function() {
    return 'Hello, ' + this.name + '!';
}

var welcome = new Welcome('John');
welcome.sayHello();
// => Hello, John!
   

/*
    ** Herança prototípica **

    Herdar de um 'objeto pai' é relativamente fácil por meio do seguinte padrão
*/
ChildObject.prototype = Object.create(ParentObject.prototype);
ChildObject.prototype.constructor = ChildObject;

/*
    Onde ParentObject é o objeto do qual você deseja herdar as funções prototipadas e ChildObject é o novo
    Objeto que você deseja colocar.
    Se o objeto pai tiver valores, ele inicializa em seu construtor, você precisa chamar o construtor pai quando
    inicializando a criança.
    Você faz isso usando o seguinte padrão no construtor ChildObject.
*/
function ChildObject(value) {
    ParentObject.call(this, value);
}
//  Um exemplo completo onde o acima é implementado

function RoomService(name, order) {
    // this.name será definido e disponibilizado no escopo desta função
    Welcome.call(this, name);
    this.order = order;
}
   
// Herdar métodos 'sayHello ()' do protótipo 'Bem-vindo'
RoomService.prototype = Object.create(Welcome.prototype);

// Por padrão, o objeto de protótipo tem a propriedade 'construtor'.
// Mas à medida que criamos um novo objeto sem esta propriedade - temos que configurá-lo manualmente,
// caso contrário, a propriedade 'constructor' apontará para a classe 'Welcome'
RoomService.prototype.constructor = RoomService;
RoomService.prototype.announceDelivery = function() {
    return 'Your ' + this.order + ' has arrived!';
}
RoomService.prototype.deliverOrder = function() {
    return this.sayHello() + ' ' + this.announceDelivery();
}

var delivery = new RoomService('John', 'pizza');
delivery.sayHello();
// => Hello, John!,
delivery.announceDelivery();
// Your pizza has arrived!
delivery.deliverOrder();
// => Hello, John! Your pizza has arrived!




/*
    ** Padrão Singleton **

    O padrão Singleton é um padrão de design que restringe a instanciação de uma classe a um objeto. Após o primeiro objeto
    é criado, ele retornará a referência ao mesmo sempre que for chamado para um objeto.
*/

var Singleton = (function () {
    // instância armazena uma referência ao Singleton
    var instance;

    function createInstance() {
        // variáveis e métodos privados
        var _privateVariable = 'I am a private variable';
        function _privateMethod() {
            console.log('I am a private method');
        }

        return {
            // métodos e variáveis públicos
            publicMethod: function() {
                console.log('I am a public method');
            },
            publicVariable: 'I am a public variable'
        };
    }

    return {
        // Obtenha a instância Singleton se ela existir
        // ou crie um se não
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Uso:

// não há instância existente de Singleton, então ele criará uma
var instance1 = Singleton.getInstance();
// existe uma instância de Singleton, então ele retornará a referência a este
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

   