// Crea un array contenente 3 nomi.
// Chiedi un numero da 0 a 2 all’utente e stampa l’elemento
// dell’array corrispondente.

var mioArray = ["Mario","Francesca","Lorella"];
var miaStringa = "Hello";

var numArray = [1,"strainga",5,true,miaStringa];

var indice = parseInt(prompt("inserisci un numero da 0 a 2"));


// prova varia di aggiunta, ritorno lunghezza
console.log(mioArray);
console.log("lunghezza iniziale", mioArray.length);

var lunghezzaArr = mioArray.push("Gianfranco");

console.log("Il valore ritornato dal push è: ", lunghezzaArr);

console.log("lunghezza successiva al push", mioArray.length);

console.log(mioArray);

mioArray[mioArray.length] = "Simone";

console.log("lunghezza successiva a inserimento manuale", mioArray.length);

console.log(mioArray);

mioArray[0] = "nomneCambiato";

console.log("lunghezza successiva a inserimento manuale", mioArray.length);

console.log(mioArray);





var itemTrovato = mioArray[indice];

document.getElementById('mio_id').innerHTML = itemTrovato;
