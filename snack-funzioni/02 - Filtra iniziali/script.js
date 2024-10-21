/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const startwith = (array , a) => {
    const result = []
    for (let i=0; i<array.length; i++){
        let word = array[i]
        if (word[0]===a) {
            result.push(word)
        }
        
    }
    return result
}



// Invoca la funzione qui e stampa il risultato in console
console.log(startwith(names, 'A'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]