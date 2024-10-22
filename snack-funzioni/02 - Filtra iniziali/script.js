/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const startwith = (array , a) => {
    const result = []
    for (let i=0; i<array.length; i++){
    
        if (array[i][0]===a) {
            result.push(array[i])
        }
        
    }
    return result
}

const cominciaCon = (array , a) => array.filter((element) => (element[0] === a))
console.log(cominciaCon(names, 'L'))

// Invoca la funzione qui e stampa il risultato in console
console.log(startwith(names, 'A'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]