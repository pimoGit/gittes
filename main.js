// Inserisci due parole, quale è la piu lunga?

var msg;
// chiedo all'utente di inserire prima parola
var parola1 = prompt("inserisci una parola");

// chiedo all'utente di inserire seconda parola
var parola2 = prompt("inserisci un'altra parola");

console.log(parola1.length);

//confronto la lunghezza delle stringhe

if(parola1.length > parola2.length){
  msg = "la parola 1 è più lunga";
} else if (parola2.length > parola1.length) {
  msg = "la parola 2 è più lunga";
} else {
  msg = "le parola sono lunghe uguali";
}

document.getElementById('mio_id').innerHTML = msg;

// output per dire qual'è la più lunga
