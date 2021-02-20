/* 
    ** Javascript Notes for professional **

    map()
*/

['one', 'two', 'three', 'four'].map((val, idx, arr) => {
    return val.length;
})


['one', 'two', 'three', 'four'].map((val, idx, arr) =>  val.length )


/*
    Neste exemplo, uma função anônima é fornecida para a função map() , e a função map irá chamá-la para cada
    elemento na matriz, fornecendo os seguintes parâmetros, nesta ordem:
       > O próprio elemento
       > O índice do elemento (0, 1 ...)
       > A matriz inteira

*/

['one', 'two', 'three', 'four'].map((val, idx, arr) => {
    console.log(`value: ${val}, index: ${idx}, entire: ${arr}`)
})


// Criar nosso proprio metodo map
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // A partir do array voce chama a função de callback passando cada item, 
  // por fim adiciona o novo valor a um novo array
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }


  
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
