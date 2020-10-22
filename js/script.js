// Crea un array contenente 3 nomi.
// Chiedi un numero da 0 a 2 all’utente e stampa l’elemento dell’array corrispondente.

var mioArray = ["nome0", "nome1", "nome2"];

var indice = parseInt(prompt("dammi un indice tra 0 e 2"));

var arrayItem = mioArray[indice];

console.log("array completo: ",mioArray);
console.log("item selezionato: ", arrayItem);

console.log("lunghezza iniziale array: ", mioArray.length);

mioArray.push("nome3");

console.log("array completo dopo 1 push: ", mioArray);

console.log("array completo: ", mioArray.length);
