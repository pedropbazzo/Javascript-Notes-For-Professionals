/*
                ** Selection Sort **

    A ordenação por seleção é um algoritmo de comparação.

    A ideia por trás da classificação por seleção é que você percorre o array de entrada
    linearmente, selecionando o primeiro elemento menor e, em seguida, troque-o para a 
    primeira posição. Em seguida, você faz um loop pela matriz novamente usando uma varredura 
    linear e obtém o segundo menor elemento, troca-o para a segunda posição e assim por diante 
    até que sua matriz esteja completamente classificada.

    >> Executado em tempo O (n²).
    
    Vejamos o código:

*/
function selectionSort(list) {
    let n = list.length
    for(let j = 0; j < n-1; j++) {
        let min_index = j
        for(let i = j; i < n; i++) {
            if(list[i] < list[min_index]) 
                min_index = i
        }
        if(list[j] > list[min_index]){
            let aux = list[j]
            list[j] = list[min_index]
            list[min_index] = aux
        }
    }
    return list;
}

selectionSort([1, 3, 2, 5])
// output: [1, 2, 3, 5]

function _selectionSort(list) {
    let swapped = false,
        i = 0,
        n = list.length

    do {
        swapped = false
        let min = i

        for(let j = i+1; j < n; j++) {
            if(list[j] < list[min]) 
                min = j
                swapped = true

        }

        if(min != i) {
            let aux = list[i]
            list[i] = list[min]
            list[min] = aux
        }

        i++
        
    } while (swapped)

    return list
}

_selectionSort([1, 3, 2, 5])