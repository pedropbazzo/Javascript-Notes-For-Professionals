/*
    
    ** Obtendo o tipo de objeto pelo nome do construtor **

    Quando alguém com o operador typeof obtém um objeto de tipo, ele cai na categoria um tanto inútil ...
    Na prática, você pode precisar restringir o tipo de "objeto" que ele realmente é e uma maneira de fazer isso é usar

*/

// Number
Object.prototype.toString.call(42);
// => "[object Number]"

// Bool
Object.prototype.toString.call(true);
// => "[object Boolean]"

// Object
Object.prototype.toString.call(Object()); // or
Object.prototype.toString.call({});
// => "[object Object]"

// Function
Object.prototype.toString.call(function(){});
// => "[object Function]"

// Outros tipos são aceitos, como:
// Date, RegEx, Array, Null, Undefined, Error