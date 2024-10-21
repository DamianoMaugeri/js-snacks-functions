/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.
const firstLetter = (array) => {
    
    const result = []

    for (let i=0; i<array.length; i++){
        let word = array[i]
        result.push(word[0])
    }

    return result
}



// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]