/* 
    ** Javascript Notes for professional **

    O método filter() aceita uma função de teste e retorna um novo array contendo apenas os elementos do original
    array que passa no teste fornecido.
*/

let number = [5, 32, 43, 4];

let odd = number.filter( n => {
    return n % 2 !== 0;
});

let odd = number.filter( n => n % 2 !== 0);

let odd = number.filter(n => n % 2);

// => [5, 43]


// Retornar um valor a partir de um array de objetos
let people = [{
    id: 1,
    name: "John",
    age: 28
   }, {
    id: 2,
    name: "Jane",
    age: 31
   }, {
    id: 3,
    name: "Peter",
    age: 55
   }];

let young = people.filter(person => {
    return person.age < 35;
});
  

// Encontrar um valor especifico na string 
young = people.filter(obj => {
    var flag = false;
    Object.values(obj).forEach(val => {
        if((''+val).toLowerCase().indexOf('j') > -1) {
            flag = true;
            return;
        }
    });
    if(flag) return obj;
})

// (''+val) == String(val)