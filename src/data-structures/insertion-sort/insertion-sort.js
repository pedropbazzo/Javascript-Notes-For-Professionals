/*
    ** Insertion Sort

*/

const insertionSort = (list) => {
    n = list.length
    list.forEach((_, idx) => {
        key = list[idx]
        j = idx - 1
        while (j >= 0 && list[j] > key) {
            list[j+1] = list[j]
            j--
        }
        list[j+1] = key
    });
    return list 
}

insertionSort([1, 3, 2, 5])

module.exports = insertionSort;