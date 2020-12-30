/*
    ** Protótipos, objetos **

    No JS convencional, não há classe, em vez disso, temos protótipos. Como a classe, o protótipo herda o
    propriedades incluindo os métodos e as variáveis declaradas na classe. Podemos criar a nova instância do
    objeto sempre que for necessário por, Object.create (PrototypeName); (podemos dar o valor para o construtor como
    bem)
*/

// Criação e inicialização do protótipo

var Human = function() {
    this.canWalk = true;
    this.canSpeak = true;
};
Person.prototype.greet = function() {
    if (this.canSpeak) { // verifica se este protótipo tem instância de speak
    this.name = "Steve"
    console.log('Hi, I am ' + this.name);
    } else{
    console.log('Sorry i can not speak');
    }
};

// O protótipo pode ser instanciado assim
obj = Object.create(Person.prototype);
ob.greet();


// Podemos passar o valor para o construtor e tornar o booleano verdadeiro e falso com base no requisito.
// Explicação detalhada

var Human = function() {
    this.canSpeak = true;
};
//  Função de saudação básica que cumprimentará com base na sinalização canSpeak
Human.prototype.greet = function() {
    if (this.canSpeak) {
        console.log('Hi, I am ' + this.name);
    }
};
var Student = function(name, title) {
    Human.call(this); // Instanciando o objeto Humano e obtendo os membros da classe
    this.name = name; // herdando o nome da classe humana
    this.title = title; // obtendo o título da função chamada
};

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function() {
    if (this.canSpeak) {
        console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
};

var Customer = function(name) {
    Human.call(this); // herdando da classe base
    this.name = name;
};
Customer.prototype = Object.create(Human.prototype); // criando o objeto
Customer.prototype.constructor = Customer;

var bill = new Student('Billy', 'Teacher');
var carter = new Customer('Carter');
var andy = new Student('Andy', 'Bill');
var virat = new Customer('Virat');

bill.greet();
// Hi, I am Bob, the Teacher
carter.greet();
// Hi, I am Carter
andy.greet();
// Hi, I am Andy, the Bill
virat.greet();

   