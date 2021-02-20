const bubbleSort = require('./bubble-sort');

test('Should return a ordered list', () => {
    let unordered = [1, 3, 2, 5]
    let ordered = [1, 2, 3, 5]
    expect(bubbleSort(unordered)).toEqual(ordered)
})