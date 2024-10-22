/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'jAvascript';

//const lcWord = word.toLocaleLowerCase()


// Dichiara la funzione qui.
const numberOfVocal = (string) => {
    let vocal=0
    for (let i=0; i<string.length; i++){
        if((string[i].toLocaleLowerCase() ==='a') || (string[i].toLocaleLowerCase() ==='e') || (string[i].toLocaleLowerCase() ==='i') || (string[i].toLocaleLowerCase() ==='o') || (string[i].toLocaleLowerCase() ==='u')  /* || (string[i].toLocaleLowerCase()==='y')  ?? */ ){
            vocal ++
        }
    }
    return vocal

}

const numberOfVocali = (string) => {
    let vocal=0
    for (let i=0; i<string.length; i++){
        let vowels = ['a','e','i','o','u']
        if(vowels.includes(string[i].toLocaleLowerCase())){
            vocal++
        }
    }
    return vocal

}



// Invoca la funzione qui e stampa il risultato in console
console.log(numberOfVocal(word))
console.log(numberOfVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)