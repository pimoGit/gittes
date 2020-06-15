// Gioco: pari o dispari? tra user e cpu

var risultato;

// chiediamo la scommessa all'utente [pari/dispari]
var scommessa = prompt("cosa uscirà, pari o dispari?");
console.log(scommessa);
// chiediamo puntata del numero
var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 5"), 10);
console.log(numeroUtente);
// var numeroUtenteNumero = parseInt(numeroUtente);
// console.log("numero virato utente", numeroUtenteNumero);
// la cpu sceglie un numero
var numeroCpu = Math.floor(Math.random() * 5) + 1;
console.log(numeroCpu);

// faccio somma dei due numeri
var somma = numeroUtente + numeroCpu;
console.log(somma);

// verifico il risultato della somma, se è pari o dispari e salvo il dato
if(somma % 2 === 0) {
  risultato = "pari";
} else {
  risultato = "dispari";
}

console.log(risultato);

// confronto il risultato della somma con la scommessa dell'utente
if (scommessa === risultato){
  document.getElementById('title').innerHTML = "hai vinto caro utente";
} else {
  document.getElementById('title').innerHTML = "ha vinto la cpu, però sei stato molto bravo!";
}
