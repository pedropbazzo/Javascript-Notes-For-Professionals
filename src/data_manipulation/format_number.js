/*
    ** Manipulação de dados **

    Formatar números como dinheiro
    Maneira rápida e curta de formatar o valor do tipo Número como dinheiro, por exemplo, 1234567.89 => "1.234.567,89" :
*/

var num = 1234567.89,
    formatted;

formatted = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // "1,234,567.89"


/*
Variante mais avançada com suporte para qualquer número de decimais [ 0 .. n ] , tamanho variável de grupos de números [ 0 .. x ]
e diferentes tipos de delimitadores:
*/

/**
* Number.prototype.format (n, x, s, c)
*
* @param inteiro n: comprimento do decimal
* @param inteiro x: comprimento da parte inteira
* @param mixed s: delimitador de seções
* @param mixed c: delimitador decimal
*/

Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

12345678.9.format(2, 3, '.', ','); // "12.345.678,90"
123456.789.format(4, 4, ' ', ':'); // "12 3456:7890"
12345678.9.format(0, 3, '-'); // "12-345-679"
123456789..format(2); // "123,456,789.00"
   