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