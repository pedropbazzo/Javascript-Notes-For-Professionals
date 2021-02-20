/*
    Vinculando `this` e argumentos
    
    Quando você faz uma referência a um método (uma propriedade que é uma função) em JavaScript, geralmente não lembra
    o objeto ao qual foi originalmente anexado. Se o método precisar se referir a esse objeto como this, ele não será capaz, e
    chamá-lo provavelmente causará um travamento.
    Você pode usar o método .bind() em uma função para criar um wrapper que inclui o valor this e de qualquer número
    de argumentos principais.
*/

var monitor = {
    threshold: 5,
    check: function(value) {
        if (value > this.threshold) {
            this.display("Value is too high!");
        }
    },
    display(message) {
        alert(message);
    }
};

monitor.check(7); // O valor de `this` está implícito na sintaxe de chamada do método.

var badCheck = monitor.check;
badCheck(15);  // O valor de `this` é objeto window e this.threshold é indefinido, então valor > this.threshold é falso

var check = monitor.check.bind(monitor);
check(15); // Este valor de `this` foi explicitamente vinculado, a função funciona.

var check8 = monitor.check.bind(monitor, 8);
check8(); // Também limitamos o argumento a `8` aqui. Não pode ser especificado novamente.


// Operador Bind
// O operador de ligação de dois pontos duplos pode ser usado como uma sintaxe abreviada para o conceito explicado acima:

var log = console.log.bind(console); // long version
const log = ::console.log; // short version

foo.bar.call(foo); // long version
foo::bar(); // short version

foo.bar.call(foo, arg1, arg2, arg3); // long version
foo::bar(arg1, arg2, arg3); // short version

foo.bar.apply(foo, args); // long version
foo::bar(...args); // short version


// Vinculando funções do console a variáveis
var log = console.log.bind( console );
// Uso:
log( 'um' , '2' , 3 , [ 4 ], { 5 : 5 });

/* Resultado:
um 2 3 [ 4 ] Objeto { 5 : 5 }

Por que você faria isso?
Um caso de uso pode ser quando você tem um logger personalizado e deseja decidir em tempo de execução qual usar.
*/
var logger = require('appLogger');
var log = logToServer ? logger.log : console.log.bind(console);
