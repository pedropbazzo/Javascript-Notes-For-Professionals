/*
        ** Bubble Sort **
*/

function bubbleSort(list){ 
    let n = list.length
    for(let j = 0; j < n-1; j++){
        for(let i = 0; i < n-1; i++){
            if(list[i] > list[i+1]) {
                let aux = list[i+1]
                list[i+1] = list[i]
                list[i] = aux
            }
        }
    }
    return list
}

bubbleSort([5, 10, 2, 7, 4, 20, 0])
// output: [0, 2, 4, 5, 7, 10, 20]


function _bubbleSort(list){
    let swapped = false
    
    do {
        swapped = false
        
        list.forEach((item, idx) => {

            if(item > list[idx+1]){
                const aux = item
                list[idx] = list[idx+1]
                list[idx+1] = aux

                swapped = true
            }
        })
    } while(swapped)

    return list
}

_bubbleSort([5, 10, 2, 7, 4, 20, 0])
// output: [0, 2, 4, 5, 7, 10, 20]

module.exports = bubbleSort;