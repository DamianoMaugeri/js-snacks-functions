/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const lcWord = word.toLocaleLowerCase()


// Dichiara la funzione qui.
const numberOfVocal = (string) => {
    let vocal=0
    for (let i=0; i<string.length; i++){
        if((string[i]==='a') || (string[i]==='e') || (string[i]==='i') || (string[i]==='o') || (string[i]==='u')  /* || (string[i]==='y')  ?? */ ){
            vocal += 1
        }
    }
    return vocal

}


// Invoca la funzione qui e stampa il risultato in console
console.log(numberOfVocal(lcWord))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)