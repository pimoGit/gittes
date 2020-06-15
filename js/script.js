// Inserisci due parole, quale è la piu lunga?

// dichiarazione variabili varie
var parolaPiuLunga;

// l'utente inserisce 2 parole di input
var stringa1 = prompt("inserisci la prima parola");
var stringa2 = prompt("inserisci la seconda parola");

console.log(stringa1, stringa2);

var lunghezzaStringa1 = stringa1.length;
var lunghezzaStringa2 = stringa2.length;

console.log(stringa1 + "è lunga: " + lunghezzaStringa1, stringa2 + "è lunga: " + lunghezzaStringa2);



// verifico quale delle 2 è più lunga
  // se è più lunga la prima comunico la cosa
if ( lunghezzaStringa1 > lunghezzaStringa2) {
  parolaPiuLunga = "la parola più lunga è la parola 1";
  // se è più lunga la seconda comunico la cosa
} else if (lunghezzaStringa2 > lunghezzaStringa1){
  parolaPiuLunga = "la parola più lunga è la parola 2";
  // se le parole sono lunghe uguali lo comunico
} else {
  parolaPiuLunga = "le parole sono lunghe uguali";
}

document.getElementById('title').innerHTML = parolaPiuLunga;
