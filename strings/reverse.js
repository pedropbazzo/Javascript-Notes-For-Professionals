//A maneira mais "popular" de reverter uma string em JavaScript é o seguinte fragmento de código, que é bastante comum:

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const reverseString = (str) => {
    return [...String(str)].reverse().join('');
}
// simplificado

const reverseStringSimple = str => [...(''+str)].reverse().join('')
