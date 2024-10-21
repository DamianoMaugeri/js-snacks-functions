/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

let saluto ='Buongiorno'

let now = new Date()

if (now.getHours() > 17){
    saluto = 'Buonasera'
}else if( now.getHours() > 13){
    saluto = 'Buon pomeriggio'
}



// Dichiara la funzione qui.

const saluta = (saluto ,string) => saluto +' '+ string


// Invoca la funzione qui e stampa il risultato in console
console.log(saluta(saluto , name))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.