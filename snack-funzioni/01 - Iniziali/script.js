/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

console.log(primaLettera(names))

// Dichiara la funzione qui.

function primaLettera (array) { 
    const result = []

    for (let i=0; i<array.length; i++){

        result.push(array[i][0])
    }

    return result

}



const firstLetter = (array) => {
    
    const result = []

    for (let i=0; i<array.length; i++){

        result.push(array[i][0])
    }

    return result
}

const primaLetteraUtilizzandoMap = (array) => array.map((element) => element[0])
console.log(primaLetteraUtilizzandoMap(names))

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]